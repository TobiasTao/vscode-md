import path = require('path');
import * as vscode from 'vscode';
import { MarkdownEditorProvider } from './mdEditor';
import getClipboardImage, { showError } from './utils';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "vscode-md" is now active!');

    // const commandHandler = () => {
    //     let defaultName = Date.parse(Date.now().toString()).toString();
    //     let options: vscode.InputBoxOptions = {
    //         prompt: 'You can change the image filename.',
    //         value: '',
    //         placeHolder: `(e.g:${defaultName})`
    //     };
    //     vscode.window.showInputBox(options).then((inputVal) => {
    //         getClipboardImage(inputVal || defaultName).then((a) => {

    //         });
    //     });
    // };

    // context.subscriptions.push(vscode.commands.registerCommand('vscode-md.pasteImage', commandHandler));

    context.subscriptions.push(MarkdownEditorProvider.register(context));
}
