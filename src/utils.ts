import * as path from 'path';
import { IUploadName, IOutputUrl } from './picgo';
import { window } from 'vscode';
import { IImgInfo } from 'picgo/dist/src/utils/interfaces';

export function formatString(tplString: string, data: IUploadName | IOutputUrl) {
  const keys = Object.keys(data);
  const values = keys.map((k) => data[k]);
  return new Function(keys.join(','), 'return `' + tplString + '`').apply(null, values);
}

const nls = require('../package.nls.json');

function addPeriod(message: string) {
  if (!message.endsWith('.') && !message.endsWith('!')) {
    message = message + '.';
  }
  return message;
}

// export function showWarning(message: string) {
//   message = addPeriod(message);
//   window.showWarningMessage(`${nls['ext.displayName']}: ${message}`);
// }

export function showError(message: string) {
  message = addPeriod(message);
  window.showErrorMessage(`${nls['ext.displayName']}: ${message}`);
}

// export function showInfo(message: string) {
//   message = addPeriod(message);
//   window.showInformationMessage(`${nls['ext.displayName']}: ${message}`);
// }

export function getUploadedName(imgInfo: IImgInfo): string {
  let fullName;
  if (!imgInfo.fileName) {
    fullName = '';
  } else {
    fullName = imgInfo.fileName as string;
  }
  let basename = path.basename(fullName, path.extname(fullName));
  return basename;
}

export function getNonce() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export function genImgName(): number {
  var date = new Date(Date.now());
  return date.getTime();
}
