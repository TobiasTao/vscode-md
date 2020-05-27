// Get a reference to the VS Code webview api.
// We use this API to post messages back to our extension.
(function () {
  // @ts-ignore
  const vscode = acquireVsCodeApi();

  const saveIcon =
    '<svg t="1590139100426" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4845" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M292.571429 877.714286l438.857143 0 0-219.428571-438.857143 0 0 219.428571zm512 0l73.142857 0 0-512q0-8-5.714286-22t-11.428571-19.714286l-160.571429-160.571429q-5.714286-5.714286-19.428571-11.428571t-22.285714-5.714286l0 237.714286q0 22.857143-16 38.857143t-38.857143 16l-329.142857 0q-22.857143 0-38.857143-16t-16-38.857143l0-237.714286-73.142857 0 0 731.428571 73.142857 0 0-237.714286q0-22.857143 16-38.857143t38.857143-16l475.428571 0q22.857143 0 38.857143 16t16 38.857143l0 237.714286zm-219.428571-530.285714l0-182.857143q0-7.428571-5.428571-12.857143t-12.857143-5.428571l-109.714286 0q-7.428571 0-12.857143 5.428571t-5.428571 12.857143l0 182.857143q0 7.428571 5.428571 12.857143t12.857143 5.428571l109.714286 0q7.428571 0 12.857143-5.428571t5.428571-12.857143zm365.714286 18.285714l0 530.285714q0 22.857143-16 38.857143t-38.857143 16l-768 0q-22.857143 0-38.857143-16t-16-38.857143l0-768q0-22.857143 16-38.857143t38.857143-16l530.285714 0q22.857143 0 50.285714 11.428571t43.428571 27.428571l160 160q16 16 27.428571 43.428571t11.428571 50.285714z" p-id="4846"></path></svg>';

  let linkBase = '';
  let editorTheme = {};
  let imgConfig = {};
  let imgPathPrefix = '';

  let vditor;
  let options = {
    mode: 'ir',
    outline: true,
    cache: { enable: false },
    toolbar: [
      'emoji',
      'headings',
      'bold',
      'italic',
      'strike',
      'link',
      '|',
      'list',
      'ordered-list',
      'check',
      'outdent',
      'indent',
      '|',
      'quote',
      'line',
      'code',
      'inline-code',
      'insert-before',
      'insert-after',
      '|',
      'table',
      '|',
      'undo',
      'redo',
      '|',
      'outline',
      'edit-mode',
      {
        name: 'save',
        tipPosition: 'ne',
        tip: 'save',
        className: '',
        icon: saveIcon,
        click: () => {
          saveDoc();
        }
      },
      {
        name: 'more',
        toolbar: ['both', 'export', 'preview', 'format', 'devtools']
      }
    ],
    toolbarConfig: {
      pin: true
    },
    counter: {
      enable: true
    },
    upload: {
      accept: 'image/*',
      handler(files) {
        handleImg(files);
      }
    },
    input(md) {
      const timeout = setTimeout(() => {
        if (md === vditor.getValue()) {
          saveDoc();
        }
        clearTimeout(timeout);
      }, 3000);
    },
    after() {
      vditor.vditor.lute.SetLinkBase(linkBase);
    }
  };
  function initVditor() {
    vditor = new Vditor('vditor', options);
    vditor.setTheme(editorTheme.global, editorTheme.content, editorTheme.code);
  }

  function saveDoc() {
    vscode.postMessage({
      type: 'save',
      text: vditor.getValue()
    });
  }

  let imgName = '';
  let imgPath = '';
  function handleImg(files) {
    createLoading();
    console.log('handleImg');

    // create a new img file form files
    let img = files[0];

    // img file suffix
    let imgSuffix = img.type.slice(6);

    // rename img
    imgName = `${genImgName()}.${imgSuffix}`;

    let pathPrefix;

    if (imgConfig.pathType === 'absolute') {
      pathPrefix = imgConfig.dirPath;
    } else if (imgConfig.pathType === 'relative') {
      pathPrefix = imgPathPrefix;
    }
    imgPath = `${pathPrefix}/${imgName}`;
    console.log(imgPath);

    let reader = new FileReader();
    reader.readAsBinaryString(img);

    reader.onloadend = function () {
      vscode.postMessage({
        type: 'img',
        file: reader.result,
        imgName
      });
    };
  }

  // Handle messages sent from the extension to the webview
  window.addEventListener('message', (event) => {
    const message = event.data; // The markdown data that the extension sent
    console.log('update: ' + message.type);
    switch (message.type) {
      case 'all':
        options = Object.assign(options, message.options);
        linkBase = message.linkBase;
        editorTheme = message.theme;
        imgConfig = message.imgConfig;
        imgPathPrefix = message.imgPathPrefix;
        initVditor();
        return;
      case 'imgSaved':
        console.log('insertValue: image');
        vditor.insertValue(` ![${imgName}](${imgPath})`);
        this.document.getElementById('loading').innerHTML = '';
    }
  });

  function genImgName() {
    var date = new Date(Date.now());
    return date.getTime();
  }

  function createLoading() {
    this.document.getElementById('loading').innerHTML = `
    <div style="opacity: 0.8; background-color: #222; position: fixed; width: 100%; height: 100%; top: 0px; left: 0px; z-index: 1000; display: flex; align-items: center; justify-content: center;">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
      width="72px" height="90px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
        <rect fill="#42a5f5" x="0" y="10" width="4" height="10" fill="#333" opacity="0.2">
          <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <rect fill="#42a5f5" x="8" y="10" width="4" height="10" fill="#333"  opacity="0.2">
          <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <rect fill="#42a5f5" x="16" y="10" width="4" height="10" fill="#333"  opacity="0.2">
          <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
        </rect>
      </svg>
    </div>`;
  }
})();
