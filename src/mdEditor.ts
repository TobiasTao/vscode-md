import * as vscode from 'vscode';
import * as path from 'path';
import { getNonce, showError } from './utils';
import * as fs from 'fs';
import VSPicgo from './picgo';

export class MarkdownEditorProvider implements vscode.CustomTextEditorProvider {
    private static readonly viewType: string = 'myEdit.markdown';

    public static register(context: vscode.ExtensionContext): vscode.Disposable {
        const providerRegistration = vscode.window.registerCustomEditorProvider(
            MarkdownEditorProvider.viewType,
            new MarkdownEditorProvider(context),
            { webviewOptions: { retainContextWhenHidden: true } }
        );
        return providerRegistration;
    }

    constructor(private readonly context: vscode.ExtensionContext) {}

    /**
     * Called when our custom editor is opened.
     */
    public async resolveCustomTextEditor(
        document: vscode.TextDocument,
        webviewPanel: vscode.WebviewPanel,
        _token: vscode.CancellationToken
    ): Promise<void> {
        // Setup initial content for the webview
        webviewPanel.webview.options = {
            enableScripts: true
        };
        webviewPanel.webview.html = this.getHtmlForWebview(webviewPanel.webview);
        const cdn = webviewPanel.webview.asWebviewUri(this.getVditorDist()).toString();

        let picgo: VSPicgo;

        const mdFilepath = document.uri.fsPath;

        let linkBase = webviewPanel.webview
            .asWebviewUri(document.uri)
            .toString(true)
            .replace(/\/[^\/]+?\.\w+$/, '/');

        let linkPrefix = '';

        const extConfig = vscode.workspace.getConfiguration('vscode-md');

        // image dir(fsPath)
        let imgStoreDir: string;
        let docDir = vscode.Uri.joinPath(document.uri, '..').fsPath;
        let imgPathPrefix = '';
        if (extConfig.image.pathType === 'relative') {
            if (extConfig.image.dirPath === '') {
                imgPathPrefix = '.';
                imgStoreDir = docDir;
            } else {
                if (vscode.workspace.workspaceFolders) {
                    imgStoreDir = vscode.Uri.joinPath(
                        vscode.workspace.workspaceFolders[0].uri,
                        '.vscode',
                        extConfig.image.dirPath
                    ).fsPath;
                    imgPathPrefix = path.relative(docDir, imgStoreDir);
                }
            }
        } else if (extConfig.image.pathType === 'absolute') {
            linkPrefix = linkBase.split('///')[0] + '///';
            if (path.isAbsolute(extConfig.image.dirPath)) {
                imgPathPrefix = extConfig.image.dirPath;
                imgStoreDir = imgPathPrefix;
            } else {
                showError(
                    "The value of 'vscode-md.image.dirPath' should be absolute path when 'vscode-md.image.pathType' = absolute"
                );
            }
        } else {
            imgStoreDir = docDir;
            picgo = new VSPicgo(webviewPanel);
        }
        console.log('imgPathPrefix: ' + imgPathPrefix);

        function updateWebview() {
            console.log("extConfig.get('options')");
            console.log(extConfig.get('options'));

            const vditorOptions = Object.assign({}, extConfig.options, {
                value: document.getText(),
                cdn: cdn,
                theme: extConfig.theme.global,
                preview: {
                    markdown: {
                        linkBase: linkBase,
                        linkPrefix,
                        mark: extConfig.options.preview.markdown.mark
                    },
                    math: extConfig.options.preview.math,
                    theme: {
                        current: extConfig.theme.content
                    },
                    hljs: {
                        style: extConfig.theme.code,
                        lineNumber: extConfig.options.preview.hljs.lineNumber
                    },
                    actions: extConfig.options.preview.actions
                }
            });
            console.log('vditorOptions:');
            console.log(vditorOptions);

            webviewPanel.webview.postMessage({
                type: 'all',
                options: vditorOptions,
                imgConfig: extConfig.image,
                imgPathPrefix
            });
        }

        const changeExtConfigSubscription = vscode.workspace.onDidChangeConfiguration((e) => {
            if (
                e.affectsConfiguration('vscode-md.image.pathType') ||
                e.affectsConfiguration('vscode-md.image.dirPath')
            ) {
            }
            if (e.affectsConfiguration('vscode-md.options') || e.affectsConfiguration('vscode-md.theme')) {
            }
            console.log('onDidChangeConfiguration');
        });

        const changeDocumentSubscription = vscode.workspace.onDidChangeTextDocument((e) => {
            if (e.document.uri.toString() === document.uri.toString()) {
            }
            console.log('onDidChangeTextDocument');
        });

        const willSaveSubscription = vscode.workspace.onWillSaveTextDocument((e) => {
            console.log('willSaveSubscription');
        });

        const closeDocumentSubscription = vscode.workspace.onDidCloseTextDocument((e) => {
            console.log('onDidCloseTextDocument');
        });

        const renameFilesSubscription = vscode.workspace.onDidRenameFiles(() => {
            console.log('renameFilesSubscription');

            this.getFilenameList(docDir, webviewPanel);
        });

        const createFilesSubscription = vscode.workspace.onDidCreateFiles(() => {
            this.getFilenameList(docDir, webviewPanel);
        });

        const deleteFilesSubscription = vscode.workspace.onDidDeleteFiles(() => {
            this.getFilenameList(docDir, webviewPanel);
        });

        // Make sure we get rid of the listener when our editor is closed.
        webviewPanel.onDidDispose(() => {
            changeDocumentSubscription.dispose();
            changeExtConfigSubscription.dispose();
            willSaveSubscription.dispose();
            closeDocumentSubscription.dispose();
            renameFilesSubscription.dispose();
            createFilesSubscription.dispose();
            deleteFilesSubscription.dispose();
        });

        //Receive message from the webview.
        webviewPanel.webview.onDidReceiveMessage((e) => {
            switch (e.type) {
                case 'save':
                    this.updateTextDocument(document, e.text);
                    return;
                case 'img':
                    let imgName = e.imgName;
                    const imgData = Buffer.from(e.file, 'binary');
                    let imgStorePath = path.join(imgStoreDir, imgName);
                    console.log('imgStorePath: ' + imgStorePath);
                    fs.writeFile(imgStorePath, imgData, (err) => {
                        if (err) {
                            showError(err.message);
                            throw err;
                        } else {
                            if (extConfig.image.pathType === 'picgo') {
                                // picgo.upload([imgStorePath]).then(() => {
                                //     fs.unlinkSync(imgStorePath);
                                // });
                            } else {
                                webviewPanel.webview.postMessage({
                                    type: 'imgSaved'
                                });
                            }
                        }
                    });
                    return;
            }
        });

        updateWebview();
        this.getFilenameList(docDir, webviewPanel);
    }

    /**
     * Get the static html used for the editor webviews.
     */
    private getHtmlForWebview(webview: vscode.Webview): string {
        // Local path to script and css for the webview

        const scriptUri1 = webview.asWebviewUri(
            vscode.Uri.file(path.join(this.context.extensionPath, 'node_modules', 'vditor', 'dist', 'index.min.js'))
        );

        const scriptUri2 = webview.asWebviewUri(
            vscode.Uri.file(path.join(this.context.extensionPath, 'media', 'main.js'))
        );

        const styleUri1 = webview.asWebviewUri(
            vscode.Uri.file(path.join(this.context.extensionPath, 'node_modules', 'vditor', 'dist', 'index.css'))
        );

        const styleUri2 = webview.asWebviewUri(
            vscode.Uri.file(path.join(this.context.extensionPath, 'media', 'main.css'))
        );

        // Use a nonce to whitelist which scripts can be run
        const nonce = getNonce();

        return /* html */ `
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<link href="${styleUri1}" rel="stylesheet"/>
				<link href="${styleUri2}" rel="stylesheet"/>
			</head>
      <body>
        <div id="loading"></div>
        <div id="vditor"></div>
				<script src="${scriptUri1}"></script>
        <script src="${scriptUri2}"></script>
			</body>
			</html>`;
    }

    private getVditorDist(): vscode.Uri {
        return vscode.Uri.joinPath(this.context.extensionUri, 'node_modules', 'vditor');
    }

    /**
     * Write out the markdown to a given document.
     */
    private updateTextDocument(document: vscode.TextDocument, text: string) {
        const writeData = Buffer.from(text, 'utf8');
        return vscode.workspace.fs.writeFile(document.uri, writeData);
    }

    private getFilenameList(docDir: string, webviewPanel: vscode.WebviewPanel): void {
        vscode.workspace.findFiles('**/**').then((res) => {
            let filenameList: string[] = res.map((uri) => {
                return path.relative(docDir, uri.fsPath).split(path.sep).join('/');
            });
            webviewPanel.webview.postMessage({
                type: 'updateFilenameList',
                filenameList
            });
        });
    }
}
