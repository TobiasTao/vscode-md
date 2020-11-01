import * as path from 'path';
import { IUploadName, IOutputUrl } from './picgo';
import { window } from 'vscode';
import { IClipboardImage, IImgInfo } from 'picgo/dist/src/utils/interfaces';
import { spawn } from 'child_process';
import * as fs from 'fs';
import * as os from 'os';

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

export function showInfo(message: string) {
    message = addPeriod(message);
    window.showInformationMessage(`${nls['ext.displayName']}: ${message}`);
}

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

const getCurrentPlatform = (): string => {
    const platform = process.platform;
    if (platform !== 'win32') {
        return platform;
    } else {
        const currentOS = os.release().split('.')[0];
        if (currentOS === '10') {
            return 'win10';
        } else {
            return 'win32';
        }
    }
};

// Thanks to vs-picgo: https://github.com/Spades-S/vs-picgo/blob/master/src/extension.ts
const getClipboardImage = async (imagePath: string): Promise<IClipboardImage> => {
    return await new Promise<IClipboardImage>((resolve: Function): void => {
        const platform: string = getCurrentPlatform();
        let execution;
        const platformPaths: {
            [index: string]: string;
        } = {
            darwin: './clipboard/mac.applescript',
            win32: './clipboard/windows.ps1',
            win10: './clipboard/windows10.ps1',
            linux: './clipboard/linux.sh'
        };
        const scriptPath = path.join(__dirname, platformPaths[platform]);
        if (platform === 'darwin') {
            execution = spawn('osascript', [scriptPath, imagePath]);
        } else if (platform === 'win32' || platform === 'win10') {
            execution = spawn('powershell', [
                '-noprofile',
                '-noninteractive',
                '-nologo',
                '-sta',
                '-executionpolicy',
                'unrestricted',
                '-file',
                scriptPath,
                imagePath
            ]);
        } else {
            execution = spawn('sh', [scriptPath, imagePath]);
        }

        execution.stdout.on('data', (data: Buffer) => {
            if (platform === 'linux') {
                if (data.toString().trim() === 'no xclip') {
                    showError('Please install xclip before paste image!');
                }
            }
            const imgPath = data.toString().trim();
            let isExistFile = false;
            // in macOS if your copy the file in system, it's basename will not equal to our default basename
            if (path.basename(imgPath) !== path.basename(imagePath)) {
                if (fs.existsSync(imgPath)) {
                    isExistFile = true;
                }
            }
            resolve({
                imgPath,
                isExistFile
            });
        });
    });
};

export default getClipboardImage;
