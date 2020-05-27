## 💡 Introduction

**Meet all needs when writing markdown**

## ✨ Features

- Support three editing modes: WYSIWYG, Instant Rendering and Split View
- Support outline, mathematical formulas, mind maps, charts, flowcharts, Gantt charts, timing charts, staffs, multimedia, voice reading, heading anchors, code highlighting and copying, graphviz rendering
- Multi-language support, built-in Chinese, English, Korean text localization
- Built-in security filtering, export, image lazy loading, task list, at, multi-platform preview, multi-theme switching, copy to WeChat function
- The toolbar contains 30+ items of operations. In addition to support for expansion, the shortcut keys, tip, tip positions, icons, click events, class names, and sub-toolbars can be customized
- Emoji auto-complete, set common emoticons, support emoticon customization
- You can use drag and drop, clipboard and paste to upload, display real-time upload progress, support CORS cross-domain upload
- The markup HTML is automatically converted to Markdown
- Support character counting
- Multi-theme support

## 🔧 Configurations

- `vscode-md.options.mode`: Choose default edit mode
  - `ir`: Instant render mode
  - `wysiwyg`: What-you-see-is-what-you-get mode
  - `sv`: Traditional split view mode
- `vscode-md.options.lang`: Localization
- `vscode-md.options.outline`: Show outline of markdown
- `vscode-md.options.counter.enable`: Whether to use counter
- `vscode-md.image.pathType`: The markdown image path type, relative or absolute
- `vscode-md.image.dirPath`: The directory used to store the pictures, it must be in workspace. The default is the path where Markdown is located
- `vscode-md.theme.global`: Global theme
- `vscode-md.theme.content`: Markdown content theme
- `vscode-md.theme.code`: Code theme, see [Chroma](https://xyproto.github.io/splash/docs/all.html) for more information



## 🗺 Roadmap

- [ ] Impliment Image upload tool via [picgo-core](https://github.com/PicGo/PicGo-Core)

## 📄 License

[MIT](https://opensource.org/licenses/MIT) 

## ❤️ Thanks

[vditor](https://vditor.b3log.org/): An In-browser Markdown editor, support WYSIWYG, Instant Rendering (Typora-like) and Split View modes.
