import * as vscode from 'vscode';
import { MarkdownEditorProvider } from './mdEditor';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "vscode-md" is now active!');

    context.subscriptions.push(MarkdownEditorProvider.register(context));
}
