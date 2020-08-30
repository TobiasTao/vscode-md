import { EventEmitter } from 'events';
import * as fs from 'fs';
import * as vscode from 'vscode';

import PicGo from 'picgo/dist/src/core/PicGo';
import { IImgInfo } from 'picgo/dist/src/utils/interfaces';

import { formatString, showError, getUploadedName } from './utils';

export interface IUploadName {
  date: string;
  dateTime: string;
  fileName: string;
  extName: string;
  mdFileName: string;
  [key: string]: string;
}

export interface IOutputUrl {
  uploadedName: string;
  url: string;
  [key: string]: string;
}

export default class VSPicgo extends EventEmitter {
  private static picgo: PicGo = new PicGo();

  private webviewPanel: vscode.WebviewPanel;

  constructor(webviewPanel: vscode.WebviewPanel) {
    super();
    this.webviewPanel = webviewPanel;
    this.configPicgo();
    this.addFinishListener();
  }

  configPicgo() {
    const picgoConfigPath = vscode.workspace.getConfiguration('vscode-md.picgo').get<string>('configPath');
    if (picgoConfigPath) {
      try {
        VSPicgo.picgo.setConfig(
          JSON.parse(
            fs.readFileSync(picgoConfigPath, {
              encoding: 'utf-8'
            })
          )
        );
      } catch (err) {
        showError('The picgo configuration file could not be found!');
      }
    } else {
      showError('The picgo configuration file could not be found!');
    }
  }

  addFinishListener() {
    VSPicgo.picgo.on('finished', async (ctx: PicGo) => {
      let urlText = '';
      const outputFormatTemplate = '![${uploadedName}](${url})';
      urlText = ctx.output.reduce((acc: string, imgInfo: IImgInfo): string => {
        return `${acc}${formatString(outputFormatTemplate, {
          uploadedName: getUploadedName(imgInfo),
          url: imgInfo.imgUrl
        })}\n`;
      }, '');

      urlText = urlText.trim();
      this.webviewPanel.webview.postMessage({
        type: 'picgo',
        urlText
      });
    });

    VSPicgo.picgo.on('notification', (notice) => {
      showError('Upload image failed: ' + notice);
    });
  }

  async upload(input?: string[]): Promise<string | void | Error> {
    // This is necessary, because user may have changed settings
    this.configPicgo();
    return VSPicgo.picgo.upload(input);
  }
}
