module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/extension.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/extension.ts":
/*!**************************!*\
  !*** ./src/extension.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const mdEditor_1 = __webpack_require__(/*! ./mdEditor */ "./src/mdEditor.ts");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "vscode-md" is now active!');
    context.subscriptions.push(mdEditor_1.MarkdownEditorProvider.register(context));
}
exports.activate = activate;


/***/ }),

/***/ "./src/mdEditor.ts":
/*!*************************!*\
  !*** ./src/mdEditor.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownEditorProvider = void 0;
const vscode = __webpack_require__(/*! vscode */ "vscode");
const path = __webpack_require__(/*! path */ "path");
const util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
const fs = __webpack_require__(/*! fs */ "fs");
let MarkdownEditorProvider = /** @class */ (() => {
    class MarkdownEditorProvider {
        constructor(context) {
            this.context = context;
        }
        static register(context) {
            const providerRegistration = vscode.window.registerCustomEditorProvider(MarkdownEditorProvider.viewType, new MarkdownEditorProvider(context), {
                webviewOptions: {
                    retainContextWhenHidden: true
                }
            });
            return providerRegistration;
        }
        /**
         * Called when our custom editor is opened.
         */
        resolveCustomTextEditor(document, webviewPanel, _token) {
            return __awaiter(this, void 0, void 0, function* () {
                // Setup initial content for the webview
                webviewPanel.webview.options = {
                    enableScripts: true
                };
                webviewPanel.webview.html = this.getHtmlForWebview(webviewPanel.webview);
                // const cdn = 'vscode-resource://file//' + this.getVditorDist().path;
                const cdn = webviewPanel.webview.asWebviewUri(this.getVditorDist()).toString();
                // const linkBase = 'vscode-resource://file//' + document.uri.path.replace(/\/[^\/]+?\.\w+$/, '/');
                const linkBase = webviewPanel.webview
                    .asWebviewUri(document.uri)
                    .toString(true)
                    .replace(/\/[^\/]+?\.\w+$/, '/');
                const extConfig = vscode.workspace.getConfiguration('vscode-md');
                let imgPathPrefix = '';
                if (extConfig.image.pathType === 'relative') {
                    if (extConfig.image.dirPath === '') {
                        imgPathPrefix = '.';
                    }
                    else {
                        imgPathPrefix = path.relative(document.uri.fsPath, extConfig.image.dirPath);
                    }
                }
                else if (extConfig.image.pathType === 'absolute') {
                    imgPathPrefix = extConfig.image.dirPath;
                }
                console.log('imgPathPrefix: ' + imgPathPrefix);
                function updateWebview() {
                    webviewPanel.webview.postMessage({
                        type: 'all',
                        options: Object.assign({ value: document.getText(), cdn: cdn }, extConfig.options),
                        linkBase: linkBase,
                        theme: extConfig.theme,
                        imgConfig: extConfig.image,
                        imgPathPrefix
                    });
                }
                const changeExtConfigSubscription = vscode.workspace.onDidChangeConfiguration((e) => {
                    if (e.affectsConfiguration('vscode-md.image.pathType') || e.affectsConfiguration('vscode-md.image.dirPath')) {
                    }
                    if (e.affectsConfiguration('vscode-md.options') || e.affectsConfiguration('vscode-md.theme')) {
                    }
                    console.log('onDidChangeConfiguration');
                });
                // Hook up event handlers so that we can synchronize the webview with the text document.
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
                // Make sure we get rid of the listener when our editor is closed.
                webviewPanel.onDidDispose(() => {
                    changeDocumentSubscription.dispose();
                    changeExtConfigSubscription.dispose();
                    willSaveSubscription.dispose();
                    closeDocumentSubscription.dispose();
                });
                //Receive message from the webview.
                webviewPanel.webview.onDidReceiveMessage((e) => {
                    switch (e.type) {
                        case 'save':
                            this.updateTextDocument(document, e.text);
                            return;
                        case 'img':
                            let imgName = e.imgName;
                            const img = e.file;
                            const imgData = Buffer.from(img, 'binary');
                            let imgFinalPath;
                            // if (extConfig.image.pathType === 'absolute' || extConfig.image.pathType === 'relative') {
                            //   imgFinalPath = `${extConfig.img.dirPath}/${imgName}`;
                            // }
                            if (extConfig.image.dirPath === '') {
                                // imgFinalPath = `${document.uri.fsPath.replace(/\/[^\/]+?\.\w+$/, '')}/${imgName}`;
                                imgFinalPath = path.join(document.uri.fsPath, '..', imgName);
                            }
                            else {
                                // imgFinalPath = `${extConfig.image.dirPath}/${imgName}`;
                                imgFinalPath = path.join(extConfig.image.dirPath, imgName);
                            }
                            console.log('imgFinalPath: ' + imgFinalPath);
                            fs.writeFile(imgFinalPath, imgData, (err) => {
                                if (err) {
                                    throw err;
                                }
                            });
                            return;
                            webviewPanel.webview.postMessage({
                                type: 'imgSaved'
                            });
                            return;
                    }
                });
                updateWebview();
            });
        }
        /**
         * Get the static html used for the editor webviews.
         */
        getHtmlForWebview(webview) {
            // Local path to script and css for the webview
            const scriptUri1 = webview.asWebviewUri(
            // vscode.Uri.file(path.join(this.context.extensionPath, 'media', 'vditor', 'index.min.js'))
            vscode.Uri.file(path.join(this.context.extensionPath, 'node_modules', 'vditor', 'dist', 'index.min.js')));
            const scriptUri2 = webview.asWebviewUri(vscode.Uri.file(path.join(this.context.extensionPath, 'media', 'main.js')));
            const styleUri1 = webview.asWebviewUri(
            // vscode.Uri.file(path.join(this.context.extensionPath, 'media', 'vditor', 'index.css'))
            vscode.Uri.file(path.join(this.context.extensionPath, 'node_modules', 'vditor', 'dist', 'index.css')));
            const styleUri2 = webview.asWebviewUri(vscode.Uri.file(path.join(this.context.extensionPath, 'media', 'main.css')));
            // Use a nonce to whitelist which scripts can be run
            const nonce = util_1.getNonce();
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
        getVditorDist() {
            return vscode.Uri.joinPath(this.context.extensionUri, 'node_modules', 'vditor');
        }
        /**
         * Write out the markdown to a given document.
         */
        updateTextDocument(document, text) {
            return __awaiter(this, void 0, void 0, function* () {
                const writeData = Buffer.from(text, 'utf8');
                yield vscode.workspace.fs.writeFile(document.uri, writeData);
            });
        }
    }
    MarkdownEditorProvider.viewType = 'myEdit.markdown';
    return MarkdownEditorProvider;
})();
exports.MarkdownEditorProvider = MarkdownEditorProvider;


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.genImgName = exports.getNonce = void 0;
function getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
exports.getNonce = getNonce;
function genImgName() {
    var date = new Date(Date.now());
    return date.getTime();
}
exports.genImgName = genImgName;


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "vscode":
/*!*************************!*\
  !*** external "vscode" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vscode");

/***/ })

/******/ });
//# sourceMappingURL=extension.js.map