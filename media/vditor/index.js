/*!
 * Vditor v3.2.8 - A markdown editor written in TypeScript.
 *
 * MIT License
 *
 * Copyright (c) 2018-present B3log 开源, b3log.org
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.Vditor = t())
    : (e.Vditor = t())
})(window, function () {
  return (function (e) {
    var t = {}

    function n(r) {
      if (t[r]) return t[r].exports
      var i = (t[r] = {
        i: r,
        l: !1,
        exports: {},
      })
      return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: r,
          })
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module",
          }),
          Object.defineProperty(e, "__esModule", {
            value: !0,
          })
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e
        if (4 & t && "object" == typeof e && e && e.__esModule) return e
        var r = Object.create(null)
        if (
          (n.r(r),
          Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e,
          }),
          2 & t && "string" != typeof e)
        )
          for (var i in e)
            n.d(
              r,
              i,
              function (t) {
                return e[t]
              }.bind(null, i)
            )
        return r
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default
              }
            : function () {
                return e
              }
        return n.d(t, "a", t), t
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (n.p = ""),
      n((n.s = 69))
    )
  })([
    function (e, t, n) {
      "use strict"
      n.d(t, "b", function () {
        return a
      }),
        n.d(t, "a", function () {
          return s
        }),
        n.d(t, "e", function () {
          return l
        }),
        n.d(t, "h", function () {
          return c
        }),
        n.d(t, "c", function () {
          return d
        }),
        n.d(t, "g", function () {
          return u
        }),
        n.d(t, "f", function () {
          return p
        }),
        n.d(t, "d", function () {
          return h
        })
      var r = n(1),
        i = n(2),
        o = n(3),
        a = function (e) {
          var t
          return (
            (getSelection().rangeCount > 0 &&
              ((t = getSelection().getRangeAt(0)),
              e.isEqualNode(t.startContainer) ||
                e.contains(t.startContainer))) ||
              (e.focus(),
              (t = e.ownerDocument.createRange()).setStart(e, 0),
              t.collapse(!0)),
            t
          )
        },
        s = function (e) {
          var t = window.getSelection().getRangeAt(0)
          if (!e.contains(t.startContainer))
            return {
              left: 0,
              top: 0,
            }
          var n,
            r = e.parentElement.getBoundingClientRect()
          if (0 === t.getClientRects().length) {
            if (3 === t.startContainer.nodeType)
              return {
                left: 0,
                top: 0,
              }
            var i = t.startContainer.children
            if (
              (i[t.startOffset] && i[t.startOffset].getClientRects().length > 0
                ? (n = i[t.startOffset].getClientRects()[0])
                : t.startContainer.childNodes.length > 0
                ? (t.selectNode(
                    t.startContainer.childNodes[Math.max(0, t.startOffset - 1)]
                  ),
                  (n = t.getClientRects()[0]),
                  t.collapse(!1))
                : (n = t.startContainer.getClientRects()[0]),
              !n)
            ) {
              for (
                var o = t.startContainer.childNodes[t.startOffset];
                !o.getClientRects ||
                (o.getClientRects && 0 === o.getClientRects().length);

              )
                o = o.parentElement
              n = o.getClientRects()[0]
            }
          } else n = t.getClientRects()[0]
          return {
            left: n.left - r.left,
            top: n.top - r.top,
          }
        },
        l = function (e, t) {
          if (!t) {
            if (0 === getSelection().rangeCount) return !1
            t = getSelection().getRangeAt(0)
          }
          var n = t.commonAncestorContainer
          return e.isEqualNode(n) || e.contains(n)
        },
        c = function (e) {
          var t = window.getSelection()
          t.removeAllRanges(), t.addRange(e)
        },
        d = function (e, t) {
          var n = {
            end: 0,
            start: 0,
          }
          if (!t) {
            if (0 === getSelection().rangeCount) return n
            t = window.getSelection().getRangeAt(0)
          }
          if (l(e, t)) {
            var r = t.cloneRange()
            e.childNodes[0] && e.childNodes[0].childNodes[0]
              ? r.setStart(e.childNodes[0].childNodes[0], 0)
              : r.selectNodeContents(e),
              r.setEnd(t.startContainer, t.startOffset),
              (n.start = r.toString().length),
              (n.end = n.start + t.toString().length)
          }
          return n
        },
        u = function (e, t, n) {
          var r = 0,
            i = 0,
            o = n.childNodes[i],
            a = !1,
            s = !1
          ;(e = Math.max(0, e)), (t = Math.max(0, t))
          var l = n.ownerDocument.createRange()
          for (l.setStart(o || n, 0), l.collapse(!0); !s && o; ) {
            var d = r + o.textContent.length
            if (
              !a &&
              e >= r &&
              e <= d &&
              (0 === e
                ? l.setStart(o, 0)
                : 3 === o.childNodes[0].nodeType
                ? l.setStart(o.childNodes[0], e - r)
                : o.nextSibling
                ? l.setStartBefore(o.nextSibling)
                : l.setStartAfter(o),
              (a = !0),
              e === t)
            ) {
              s = !0
              break
            }
            a &&
              t >= r &&
              t <= d &&
              (0 === t
                ? l.setEnd(o, 0)
                : 3 === o.childNodes[0].nodeType
                ? l.setEnd(o.childNodes[0], t - r)
                : o.nextSibling
                ? l.setEndBefore(o.nextSibling)
                : l.setEndAfter(o),
              (s = !0)),
              (r = d),
              (o = n.childNodes[++i])
          }
          return (
            !s && n.childNodes[i - 1] && l.setStartBefore(n.childNodes[i - 1]),
            c(l),
            l
          )
        },
        p = function (e, t) {
          var n = e.querySelector("wbr")
          if (n) {
            if (n.previousElementSibling)
              if (n.previousElementSibling.isSameNode(n.previousSibling)) {
                if (n.previousElementSibling.lastChild)
                  return (
                    t.setStartBefore(n),
                    t.collapse(!0),
                    c(t),
                    !Object(i.b)() ||
                      ("EM" !== n.previousElementSibling.tagName &&
                        "STRONG" !== n.previousElementSibling.tagName &&
                        "S" !== n.previousElementSibling.tagName) ||
                      (t.insertNode(document.createTextNode(r.a.ZWSP)),
                      t.collapse(!1)),
                    void n.remove()
                  )
                t.setStartAfter(n.previousElementSibling)
              } else
                t.setStart(
                  n.previousSibling,
                  n.previousSibling.textContent.length
                )
            else
              n.previousSibling
                ? t.setStart(
                    n.previousSibling,
                    n.previousSibling.textContent.length
                  )
                : n.nextSibling
                ? 3 === n.nextSibling.nodeType
                  ? t.setStart(n.nextSibling, 0)
                  : t.setStartBefore(n.nextSibling)
                : t.setStart(n.parentElement, 0)
            t.collapse(!0), n.remove(), c(t)
          }
        },
        h = function (e, t) {
          var n = document.createElement("div")
          n.innerHTML = e
          var r = n.querySelectorAll("p")
          1 !== r.length ||
            r[0].previousSibling ||
            r[0].nextSibling ||
            ((("wysiwyg" === t.currentMode &&
              t.wysiwyg.element.children.length > 0) ||
              ("ir" === t.currentMode && t.ir.element.children.length > 0)) &&
              (e = r[0].innerHTML.trim()))
          var i = document.createElement("template")
          i.innerHTML = e
          var s = a(t[t.currentMode].element)
          "" !== s.toString() &&
            "sv" !== t.currentMode &&
            ((t[t.currentMode].preventInput = !0),
            document.execCommand("delete", !1, ""))
          var l = Object(o.c)(s.startContainer)
          i.content.firstElementChild &&
          "0" === i.content.firstElementChild.getAttribute("data-block") &&
          l
            ? l.insertAdjacentHTML("afterend", e)
            : (s.insertNode(i.content.cloneNode(!0)), s.collapse(!1))
        }
    },
    function (e, t, n) {
      "use strict"
      n.d(t, "b", function () {
        return r
      }),
        n.d(t, "a", function () {
          return i
        })
      var r = "3.2.8",
        i = (function () {
          function e() {}
          return (
            (e.ZWSP = "​"),
            (e.MOBILE_WIDTH = 520),
            (e.CLASS_MENU_DISABLED = "vditor-menu--disabled"),
            (e.EDIT_TOOLBARS = [
              "emoji",
              "headings",
              "bold",
              "italic",
              "strike",
              "link",
              "list",
              "ordered-list",
              "outdent",
              "indent",
              "check",
              "line",
              "quote",
              "code",
              "inline-code",
              "insert-after",
              "insert-before",
              "upload",
              "record",
              "table",
            ]),
            (e.CONTENT_THEME = ["dark", "light", "wechat"]),
            (e.CODE_THEME = [
              "abap",
              "algol",
              "algol_nu",
              "arduino",
              "autumn",
              "borland",
              "bw",
              "colorful",
              "dracula",
              "emacs",
              "friendly",
              "fruity",
              "github",
              "igor",
              "lovelace",
              "manni",
              "monokai",
              "monokailight",
              "murphy",
              "native",
              "paraiso-dark",
              "paraiso-light",
              "pastie",
              "perldoc",
              "pygments",
              "rainbow_dash",
              "rrt",
              "solarized-dark",
              "solarized-dark256",
              "solarized-light",
              "swapoff",
              "tango",
              "trac",
              "vim",
              "vs",
              "xcode",
            ]),
            (e.CODE_LANGUAGES = [
              "mermaid",
              "echarts",
              "mindmap",
              "abc",
              "graphviz",
              "apache",
              "bash",
              "cs",
              "cpp",
              "css",
              "coffeescript",
              "diff",
              "xml",
              "http",
              "ini",
              "json",
              "java",
              "javascript",
              "js",
              "makefile",
              "markdown",
              "nginx",
              "objectivec",
              "php",
              "perl",
              "properties",
              "python",
              "ruby",
              "sql",
              "shell",
              "dart",
              "erb",
              "go",
              "gradle",
              "julia",
              "kotlin",
              "less",
              "lua",
              "matlab",
              "rust",
              "scss",
              "typescript",
              "ts",
              "yaml",
            ]),
            e
          )
        })()
    },
    function (e, t, n) {
      "use strict"
      n.d(t, "e", function () {
        return r
      }),
        n.d(t, "d", function () {
          return i
        }),
        n.d(t, "a", function () {
          return o
        }),
        n.d(t, "c", function () {
          return a
        }),
        n.d(t, "f", function () {
          return s
        }),
        n.d(t, "b", function () {
          return l
        })
      var r = function () {
          return (
            navigator.userAgent.indexOf("Safari") > -1 &&
            -1 === navigator.userAgent.indexOf("Chrome")
          )
        },
        i = function () {
          return navigator.userAgent.toLowerCase().indexOf("firefox") > -1
        },
        o = function () {
          return navigator.userAgent.indexOf("iPhone") > -1
            ? "touchstart"
            : "click"
        },
        a = function (e) {
          return navigator.platform.toUpperCase().indexOf("MAC") >= 0
            ? !(!e.metaKey || e.ctrlKey)
            : !(e.metaKey || !e.ctrlKey)
        },
        s = function (e) {
          return (
            /Mac/.test(navigator.platform) || "iPhone" === navigator.platform
              ? (e = e
                  .replace("ctrl", "⌘")
                  .replace("shift", "⇧")
                  .replace("alt", "⌥")).indexOf("⇧") > -1 &&
                (e = i()
                  ? e.replace(";", ":").replace("=", "+")
                  : e.replace(":", ";").replace("+", "=").replace("_", "-"))
              : (e = e
                  .replace("⌘", "ctrl")
                  .replace("⇧", "shift")
                  .replace("⌥", "alt")).indexOf("shift") > -1 &&
                (e = e.replace(";", ":").replace("=", "+")),
            e
          )
        },
        l = function () {
          return (
            /Chrome/.test(navigator.userAgent) &&
            /Google Inc/.test(navigator.vendor)
          )
        }
    },
    function (e, t, n) {
      "use strict"
      n.d(t, "g", function () {
        return i
      }),
        n.d(t, "d", function () {
          return o
        }),
        n.d(t, "c", function () {
          return a
        }),
        n.d(t, "f", function () {
          return s
        }),
        n.d(t, "e", function () {
          return l
        }),
        n.d(t, "h", function () {
          return c
        }),
        n.d(t, "b", function () {
          return d
        }),
        n.d(t, "a", function () {
          return u
        })
      var r = n(6),
        i = function (e, t) {
          for (
            var n = l(e, t), r = !1, i = !1;
            n && !n.classList.contains("vditor-reset") && !i;

          )
            (r = l(n.parentElement, t)) ? (n = r) : (i = !0)
          return n || !1
        },
        o = function (e, t, n) {
          if (!e) return !1
          3 === e.nodeType && (e = e.parentElement)
          for (
            var r = e, i = !1;
            r && !i && !r.classList.contains("vditor-reset");

          )
            r.getAttribute(t) === n ? (i = !0) : (r = r.parentElement)
          return i && r
        },
        a = function (e) {
          if (!e) return !1
          3 === e.nodeType && (e = e.parentElement)
          var t = e,
            n = !1,
            r = o(e, "data-block", "0")
          if (r) return r
          for (; t && !n && !t.classList.contains("vditor-reset"); )
            "H1" === t.tagName ||
            "H2" === t.tagName ||
            "H3" === t.tagName ||
            "H4" === t.tagName ||
            "H5" === t.tagName ||
            "H6" === t.tagName ||
            "P" === t.tagName ||
            "BLOCKQUOTE" === t.tagName ||
            "OL" === t.tagName ||
            "UL" === t.tagName
              ? (n = !0)
              : (t = t.parentElement)
          return n && t
        },
        s = function (e, t) {
          if (!e) return !1
          3 === e.nodeType && (e = e.parentElement)
          for (
            var n = e, r = !1;
            n && !r && !n.classList.contains("vditor-reset");

          )
            n.nodeName === t ? (r = !0) : (n = n.parentElement)
          return r && n
        },
        l = function (e, t) {
          if (!e) return !1
          3 === e.nodeType && (e = e.parentElement)
          for (
            var n = e, r = !1;
            n && !r && !n.classList.contains("vditor-reset");

          )
            n.classList.contains(t) ? (r = !0) : (n = n.parentElement)
          return r && n
        },
        c = function (e, t) {
          if (!e) return !1
          3 === e.nodeType && (e = e.parentElement)
          var n = Object(r.b)(e, t),
            i = !1
          n && (i = Object(r.b)(n.parentElement, t))
          for (var o = !1; n && !n.classList.contains("vditor-reset") && !o; )
            i
              ? (n = Object(r.b)(n.parentElement, t)) &&
                (i = Object(r.b)(n.parentElement, t))
              : (o = !0)
          return n || !1
        },
        d = function (e) {
          var t = c(e, "UL"),
            n = c(e, "OL"),
            r = t
          return n && (!t || (t && n.contains(t))) && (r = n), r
        },
        u = function (e) {
          for (; e && e.lastChild; ) e = e.lastChild
          return e
        }
    },
    function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return r
      })
      var r = {
        en_US: {
          alignCenter: "Center",
          alignLeft: "Left",
          alignRight: "Right",
          alternateText: "Alternate text",
          bold: "Blod",
          both: "editor & preview",
          check: "Task List",
          code: "Code Block",
          "code-theme": "Code Block Theme Preview",
          column: "Column",
          confirm: "Confirm",
          "content-theme": "Content Theme Preview",
          copied: "Copied",
          copy: "Copy",
          devtools: "DevTools",
          down: "Down",
          downloadTip: "The browser does not support the download function",
          edit: "Edit",
          "edit-mode": "Toggle Edit Mode",
          emoji: "Emoji",
          export: "Export",
          fileTypeError: "file type is error",
          footnoteRef: "Footnote Ref",
          format: "Format",
          fullscreen: "Toggle Fullscreen",
          generate: "Generating",
          headings: "Headings",
          help: "Help",
          imageURL: "image URL",
          indent: "Indent",
          info: "Info",
          "inline-code": "Inline Code",
          "insert-after": "Insert line after",
          "insert-before": "Insert line Before",
          instantRendering: "Instant Rendering",
          italic: "Italic",
          language: "Language",
          line: "Line",
          link: "Link",
          linkRef: "Link Ref",
          list: "List",
          more: "More",
          nameEmpty: "Name is empty",
          "ordered-list": "Order List",
          outdent: "Outdent",
          outline: "Outline",
          over: "over",
          performanceTip: "Real-time preview requires ${x}ms, you can close it",
          preview: "Preview",
          quote: "Quote",
          record: "Start Record/End Record",
          "record-tip": "The device does not support recording",
          recording: "recording...",
          redo: "Redo",
          remove: "Remove",
          row: "Row",
          splitView: "Split View",
          strike: "Strike",
          table: "Table",
          textIsNotEmpty: "text(no empty)",
          tooltipText: "Tooltip text",
          undo: "Undo",
          up: "Up",
          update: "Update",
          upload: "Upload image or file",
          uploadError: "upload error",
          uploading: "uploading...",
          wysiwyg: "WYSIWYG",
        },
        ko_KR: {
          alignCenter: "가운데",
          alignLeft: "왼쪽",
          alignRight: "오른쪽",
          alternateText: "이미지 태그",
          bold: "굵게",
          both: "에디터 & 미리보기",
          check: "체크박스",
          code: "코드블럭삽입",
          "code-theme": "코드블럭테마",
          column: "행",
          confirm: "확인",
          "content-theme": "컨텐츠테마",
          copied: "복사완료",
          copy: "복사",
          devtools: "개발툴",
          down: "다운",
          downloadTip: "브라우저가 다운로드 기능을 지원하지 않습니다",
          edit: "수정",
          "edit-mode": "편집모드",
          emoji: "이모지",
          export: "내보내기",
          fileTypeError: "지원하지않습니다.",
          footnoteRef: "각주참조",
          format: "형식",
          fullscreen: "전체화면",
          generate: "생성",
          headings: "제목크기",
          help: "도움말",
          imageURL: "이미지 URL",
          indent: "들여쓰기",
          info: "정보",
          "inline-code": "인라인코드",
          "insert-after": "블락 뒤로 입력",
          "insert-before": "블락 앞으로 입력",
          instantRendering: "타이포라",
          italic: "기울임꼴",
          language: "언어",
          line: "문단나눔",
          link: "링크",
          linkRef: "링크 참조",
          list: "순서없는 목록",
          more: "더보기",
          nameEmpty: "이름이 비어있습니다.",
          "ordered-list": "순서있는 목록",
          outdent: "내어쓰기",
          outline: "개요",
          over: "오버",
          performanceTip:
            "실시간 미리보기에는 ${x}ms가 필요하며 에디터/미리보기 버튼을 클릭하여 닫을 수 있습니다.",
          preview: "미리보기",
          quote: "인용단락",
          record: "녹음시작/녹음종료",
          "record-tip": "녹음을 지원하지 않습니다.",
          recording: "녹음중...",
          redo: "되돌리기",
          remove: "삭제",
          row: "열",
          splitView: "마크다운",
          strike: "취소선",
          table: "표삽입",
          textIsNotEmpty: "텍스트(no empty)",
          tooltipText: "툴팁",
          undo: "취소하기",
          up: "위로",
          update: "업데이트",
          upload: "이미지 업로드하기",
          uploadError: "업로드 실패",
          uploading: "업로드중...",
          wysiwyg: "위지위그",
        },
        zh_CN: {
          alignCenter: "居中",
          alignLeft: "居左",
          alignRight: "居右",
          alternateText: "替代文本",
          bold: "粗体",
          both: "编辑 & 预览",
          check: "任务列表",
          code: "代码块",
          "code-theme": "代码块主题预览",
          column: "列",
          confirm: "确定",
          "content-theme": "内容主题预览",
          copied: "已复制",
          copy: "复制",
          devtools: "开发者工具",
          down: "下",
          downloadTip: "该浏览器不支持下载功能",
          edit: "编辑",
          "edit-mode": "切换编辑模式",
          emoji: "表情",
          export: "导出",
          fileTypeError: "文件类型不允许上传",
          footnoteRef: "脚注标识",
          format: "格式化",
          fullscreen: "全屏切换",
          generate: "生成中",
          headings: "标题",
          help: "帮助",
          imageURL: "图片地址",
          indent: "列表缩进",
          info: "关于",
          "inline-code": "行内代码",
          "insert-after": "末尾插入行",
          "insert-before": "起始插入行",
          instantRendering: "即时渲染",
          italic: "斜体",
          language: "语言",
          line: "分隔线",
          link: "链接",
          linkRef: "引用标识",
          list: "无序列表",
          more: "更多",
          nameEmpty: "文件名不能为空",
          "ordered-list": "有序列表",
          outdent: "列表反向缩进",
          outline: "大纲",
          over: "超过",
          performanceTip: "实时预览需 ${x}ms，可点击编辑 & 预览按钮进行关闭",
          preview: "预览",
          quote: "引用",
          record: "开始录音/结束录音",
          "record-tip": "该设备不支持录音功能",
          recording: "录音中...",
          redo: "重做",
          remove: "删除",
          row: "行",
          splitView: "分屏预览",
          strike: "删除线",
          table: "表格",
          textIsNotEmpty: "文本（不能为空）",
          tooltipText: "提示文本",
          undo: "撤销",
          up: "上",
          update: "更新",
          upload: "上传图片或文件",
          uploadError: "上传错误",
          uploading: "上传中...",
          wysiwyg: "所见即所得",
        },
      }
    },
    function (e, t, n) {
      "use strict"
      n.d(t, "b", function () {
        return r
      }),
        n.d(t, "a", function () {
          return i
        })
      var r = function (e, t) {
          if (document.getElementById(t)) return !1
          var n = new XMLHttpRequest()
          n.open("GET", e, !1),
            n.setRequestHeader(
              "Accept",
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01"
            ),
            n.send("")
          var r = document.createElement("script")
          ;(r.type = "text/javascript"),
            (r.text = n.responseText),
            (r.id = t),
            document.head.appendChild(r)
        },
        i = function (e, t) {
          return new Promise(function (n, r) {
            if (document.getElementById(t)) return n(), !1
            var i = document.createElement("script")
            ;(i.src = e),
              (i.async = !0),
              document.head.appendChild(i),
              (i.onload = function () {
                if (document.getElementById(t)) return i.remove(), n(), !1
                ;(i.id = t), n()
              })
          })
        }
    },
    function (e, t, n) {
      "use strict"
      n.d(t, "b", function () {
        return r
      }),
        n.d(t, "a", function () {
          return i
        })
      var r = function (e, t) {
          if (!e) return !1
          3 === e.nodeType && (e = e.parentElement)
          for (
            var n = e, r = !1;
            n && !r && !n.classList.contains("vditor-reset");

          )
            0 === n.nodeName.indexOf(t) ? (r = !0) : (n = n.parentElement)
          return r && n
        },
        i = function (e) {
          var t = r(e, "H")
          return !(!t || 2 !== t.tagName.length || "HR" === t.tagName) && t
        }
    },
    function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return r
      })
      var r = function (e, t) {
        if (!document.getElementById(t)) {
          var n = document.createElement("link")
          ;(n.id = t),
            (n.rel = "stylesheet"),
            (n.type = "text/css"),
            (n.href = e),
            document.getElementsByTagName("head")[0].appendChild(n)
        }
      }
    },
    function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return r
      })
      var r = function (e) {
        return e.replace(/\u00a0/g, " ")
      }
    },
    function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return o
      })
      var r = n(1),
        i = n(7),
        o = function (e, t) {
          if (
            (void 0 === t && (t = "https://cdn.jsdelivr.net/npm/vditor@" + r.b),
            r.a.CONTENT_THEME.includes(e))
          ) {
            var n = document.getElementById("vditorContentTheme"),
              o = t + "/dist/css/content-theme/" + e + ".css"
            "light" !== e
              ? n
                ? n.href !== o &&
                  (n.remove(), Object(i.a)(o, "vditorContentTheme"))
                : Object(i.a)(o, "vditorContentTheme")
              : n && n.remove()
          }
        }
    },
    function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return o
      })
      var r = n(1),
        i = n(5),
        o = function (e, t) {
          void 0 === e && (e = document),
            void 0 === t && (t = "https://cdn.jsdelivr.net/npm/vditor@" + r.b)
          var n = e.querySelectorAll(".language-abc")
          n.length > 0 &&
            Object(i.a)(
              t + "/dist/js/abcjs/abcjs_basic.min.js",
              "vditorAbcjsScript"
            ).then(function () {
              n.forEach(function (e) {
                var t = document.createElement("div")
                ;(t.style.backgroundColor = "var(--preview-background-color)"),
                  e.parentNode.replaceChild(t, e),
                  ABCJS.renderAbc(t, e.textContent.trim()),
                  (t.style.overflowX = "auto")
              })
            })
        }
    },
    function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return o
      })
      var r = n(1),
        i = n(5),
        o = function (e, t) {
          void 0 === e && (e = document),
            void 0 === t && (t = "https://cdn.jsdelivr.net/npm/vditor@" + r.b)
          var n = e.querySelectorAll(".language-echarts")
          n.length > 0 &&
            Object(i.a)(
              t + "/dist/js/echarts/echarts.min.js",
              "vditorEchartsScript"
            ).then(function () {
              n.forEach(function (e) {
                try {
                  if ("true" === e.getAttribute("data-processed")) return
                  var t = JSON.parse(e.innerText.trim())
                  echarts.init(e).setOption(t),
                    e.setAttribute("data-processed", "true")
                } catch (t) {
                  ;(e.className = "vditor-reset--error"),
                    (e.innerHTML = "echarts render error: <br>" + t)
                }
              })
            })
        }
    },
    function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return s
      })
      var r = n(25),
        i = n.n(r),
        o = n(4),
        a = n(8),
        s = function (e, t) {
          void 0 === t && (t = "zh_CN"),
            e.querySelectorAll("pre > code").forEach(function (n, r) {
              if (
                !(
                  n.classList.contains("language-mermaid") ||
                  n.classList.contains("language-echarts") ||
                  n.classList.contains("language-mindmap") ||
                  n.classList.contains("language-abc") ||
                  n.classList.contains("language-graphviz") ||
                  n.style.maxHeight.indexOf("px") > -1 ||
                  (e.classList.contains("vditor-preview") && r > 5)
                )
              ) {
                var s = n.innerText
                if (n.classList.contains("highlight-chroma")) {
                  var l = document.createElement("code")
                  ;(l.innerHTML = n.innerHTML),
                    l.querySelectorAll(".highlight-ln").forEach(function (e) {
                      e.remove()
                    }),
                    (s = l.innerText)
                }
                var c = document.createElement("div")
                ;(c.className = "vditor-copy"),
                  (c.innerHTML =
                    '<span aria-label="' +
                    o.a[t].copy +
                    "\"\nonmouseover=\"this.setAttribute('aria-label', '" +
                    o.a[t].copy +
                    "')\"\nclass=\"vditor-tooltipped vditor-tooltipped__w\"\nonclick=\"this.previousElementSibling.select();document.execCommand('copy');this.setAttribute('aria-label', '" +
                    o.a[t].copied +
                    "')\">" +
                    i.a +
                    "</span>")
                var d = document.createElement("textarea")
                ;(d.value = Object(a.a)(s)),
                  c.insertAdjacentElement("afterbegin", d),
                  n.before(c),
                  (n.style.maxHeight = window.outerHeight - 40 + "px")
              }
            })
        }
    },
    function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return o
      })
      var r = n(1),
        i = n(5),
        o = function (e, t) {
          void 0 === t && (t = "https://cdn.jsdelivr.net/npm/vditor@" + r.b)
          var n = e.querySelectorAll(".language-graphviz")
          0 !== n.length &&
            Object(i.a)(
              t + "/dist/js/graphviz/viz.js",
              "vditorGraphVizScript"
            ).then(function () {
              n.forEach(function (e) {
                if ("true" !== e.getAttribute("data-processed")) {
                  try {
                    var t = new Blob(
                        [
                          "importScripts('" +
                            document
                              .getElementById("vditorGraphVizScript")
                              .src.replace("viz.js", "full.render.js") +
                            "');",
                        ],
                        {
                          type: "application/javascript",
                        }
                      ),
                      n = (window.URL || window.webkitURL).createObjectURL(t),
                      r = new Worker(n)
                    new Viz({
                      worker: r,
                    })
                      .renderSVGElement(e.textContent)
                      .then(function (t) {
                        e.innerHTML = t.outerHTML
                      })
                      .catch(function (t) {
                        ;(e.innerHTML = "graphviz render error: <br>" + t),
                          (e.className = "vditor-math vditor-reset--error")
                      })
                  } catch (e) {
                    console.error("graphviz error", e)
                  }
                  e.setAttribute("data-processed", "true")
                }
              })
            })
        }
    },
    function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return a
      })
      var r = n(1),
        i = n(5),
        o = n(7),
        a = function (e, t, n) {
          void 0 === t && (t = document),
            void 0 === n && (n = "https://cdn.jsdelivr.net/npm/vditor@" + r.b)
          var a = e.style
          r.a.CODE_THEME.includes(a) || (a = "github")
          var s = document.getElementById("vditorHljsStyle"),
            l = n + "/dist/js/highlight.js/styles/" + a + ".css"
          ;(s && s.href !== l && s.remove(),
          Object(o.a)(
            n + "/dist/js/highlight.js/styles/" + a + ".css",
            "vditorHljsStyle"
          ),
          e.enable) &&
            0 !== t.querySelectorAll("pre > code").length &&
            Object(i.a)(
              n + "/dist/js/highlight.js/highlight.pack.js",
              "vditorHljsScript"
            ).then(function () {
              t.querySelectorAll("pre > code").forEach(function (t) {
                if (
                  !t.parentElement.classList.contains(
                    "vditor-ir__marker--pre"
                  ) &&
                  !t.parentElement.classList.contains("vditor-wysiwyg__pre") &&
                  !(
                    t.classList.contains("language-mermaid") ||
                    t.classList.contains("language-echarts") ||
                    t.classList.contains("language-mindmap") ||
                    t.classList.contains("language-abc") ||
                    t.classList.contains("language-graphviz")
                  ) &&
                  (hljs.highlightBlock(t), e.lineNumber)
                ) {
                  t.classList.add("vditor-linenumber")
                  var n = t.querySelector(".vditor-linenumber__temp")
                  n ||
                    (((n = document.createElement("div")).className =
                      "vditor-linenumber__temp"),
                    t.insertAdjacentElement("beforeend", n))
                  var r = getComputedStyle(t).whiteSpace,
                    i = !1
                  ;("pre-wrap" !== r && "pre-line" !== r) || (i = !0)
                  var o = "",
                    a = t.textContent.split(/\r\n|\r|\n/g)
                  a.pop(),
                    a.map(function (e) {
                      var t = ""
                      i &&
                        ((n.textContent = e || "\n"),
                        (t =
                          ' style="height:' +
                          n.getBoundingClientRect().height +
                          'px"')),
                        (o += "<span" + t + "></span>")
                    }),
                    (n.style.display = "none"),
                    (o =
                      '<span class="vditor-linenumber__rows">' + o + "</span>"),
                    t.insertAdjacentHTML("beforeend", o)
                }
              })
            })
        }
    },
    function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return s
      })
      var r = n(1),
        i = n(5),
        o = n(7),
        a = n(8),
        s = function (e, t) {
          var n = e.querySelectorAll(".vditor-math")
          if (0 !== n.length) {
            var s = {
              cdn: "https://cdn.jsdelivr.net/npm/vditor@" + r.b,
              math: {
                engine: "KaTeX",
                inlineDigit: !1,
                macros: {},
              },
            }
            t && t.math && (t.math = Object.assign({}, s.math, t.math)),
              "KaTeX" === (t = Object.assign({}, s, t)).math.engine
                ? (Object(o.a)(
                    t.cdn + "/dist/js/katex/katex.min.css",
                    "vditorKatexStyle"
                  ),
                  Object(i.a)(
                    t.cdn + "/dist/js/katex/katex.min.js",
                    "vditorKatexScript"
                  ).then(function () {
                    n.forEach(function (e) {
                      if (!e.getAttribute("data-math")) {
                        var t = Object(a.a)(e.textContent)
                        e.setAttribute("data-math", t)
                        try {
                          e.innerHTML = katex.renderToString(t, {
                            displayMode: "DIV" === e.tagName,
                            output: "html",
                          })
                        } catch (t) {
                          ;(e.innerHTML = t.message),
                            (e.className = "vditor-math vditor-reset--error")
                        }
                        e.addEventListener("copy", function (e) {
                          e.stopPropagation(), e.preventDefault()
                          var t = e.currentTarget.closest(".vditor-math")
                          e.clipboardData.setData("text/html", t.innerHTML),
                            e.clipboardData.setData(
                              "text/plain",
                              t.getAttribute("data-math")
                            )
                        })
                      }
                    })
                  }))
                : "MathJax" === t.math.engine &&
                  (window.MathJax ||
                    (window.MathJax = {
                      loader: {
                        paths: {
                          mathjax: t.cdn + "/dist/js/mathjax",
                        },
                      },
                      tex: {
                        macros: t.math.macros,
                      },
                    }),
                  Object(i.b)(
                    t.cdn + "/dist/js/mathjax/tex-svg.js",
                    "vditorMathJaxScript"
                  ),
                  setTimeout(function () {
                    n.forEach(function (e) {
                      if (!e.getAttribute("data-math")) {
                        var t = Object(a.a)(e.textContent)
                        e.setAttribute("data-math", t),
                          window.MathJax.texReset()
                        var n = window.MathJax.getMetricsFor(e)
                        ;(n.display = "DIV" === e.tagName),
                          window.MathJax.tex2svgPromise(t, n).then(function (
                            t
                          ) {
                            ;(e.innerHTML = ""),
                              e.append(t),
                              window.MathJax.startup.document.clear(),
                              window.MathJax.startup.document.updateDocument()
                            var n = e
                              .querySelector("mjx-container")
                              .textContent.trim()
                            "" !== n &&
                              ((e.innerHTML = n),
                              (e.className = "vditor-math vditor-reset--error"))
                          })
                      }
                    })
                  }))
          }
        }
    },
    function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return o
      })
      var r = n(1),
        i = n(5),
        o = function (e, t, n) {
          void 0 === t && (t = ".language-mermaid"),
            void 0 === n && (n = "https://cdn.jsdelivr.net/npm/vditor@" + r.b),
            0 !== e.querySelectorAll(t).length &&
              Object(i.a)(
                n + "/dist/js/mermaid/mermaid.min.js",
                "vditorMermaidScript"
              ).then(function () {
                mermaid.init(
                  {
                    noteMargin: 10,
                  },
                  t
                )
              })
        }
    },
    function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return o
      })
      var r = n(1),
        i = n(5),
        o = function (e, t) {
          void 0 === e && (e = document),
            void 0 === t && (t = "https://cdn.jsdelivr.net/npm/vditor@" + r.b)
          var n = e.querySelectorAll(".language-mindmap")
          n.length > 0 &&
            Object(i.a)(
              t + "/dist/js/echarts/echarts.min.js",
              "vditorEchartsScript"
            ).then(function () {
              n.forEach(function (e) {
                try {
                  if ("true" === e.getAttribute("data-processed")) return
                  var t = {
                    series: [
                      {
                        data: [
                          JSON.parse(
                            decodeURIComponent(e.getAttribute("data-code"))
                          ),
                        ],
                        initialTreeDepth: -1,
                        itemStyle: {
                          borderWidth: 0,
                          color: "#4285f4",
                        },
                        label: {
                          backgroundColor: "#f6f8fa",
                          borderColor: "#d1d5da",
                          borderRadius: 5,
                          borderWidth: 0.5,
                          color: "#586069",
                          lineHeight: 20,
                          offset: [-5, 0],
                          padding: [0, 5],
                          position: "insideRight",
                        },
                        lineStyle: {
                          color: "#d1d5da",
                          width: 1,
                        },
                        roam: !0,
                        symbol: function (e, t) {
                          var n
                          return (
                            null === (n = null == t ? void 0 : t.data) ||
                            void 0 === n
                              ? void 0
                              : n.children
                          )
                            ? "circle"
                            : "path://"
                        },
                        type: "tree",
                      },
                    ],
                    tooltip: {
                      trigger: "item",
                      triggerOn: "mousemove",
                    },
                  }
                  echarts.init(e).setOption(t),
                    e.setAttribute("data-processed", "true")
                } catch (t) {
                  ;(e.className = "vditor-reset--error"),
                    (e.innerHTML = "mindmap render error: <br>" + t)
                }
              })
            })
        }
    },
    function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return r
      })
      var r = function (e) {
        e &&
          e.querySelectorAll("a").forEach(function (e) {
            var t = e.getAttribute("href")
            t &&
              (t.match(/^.+.(mp4|m4v|ogg|ogv|webm)$/)
                ? (function (e, t) {
                    e.insertAdjacentHTML(
                      "afterend",
                      '<video controls="controls" src="' + t + '"></video>'
                    ),
                      e.remove()
                  })(e, t)
                : t.match(/^.+.(mp3|wav)$/)
                ? (function (e, t) {
                    e.insertAdjacentHTML(
                      "afterend",
                      '<audio controls="controls" src="' + t + '"></audio>'
                    ),
                      e.remove()
                  })(e, t)
                : (function (e, t) {
                    var n = t.match(
                        /\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?/
                      ),
                      r = t.match(
                        /\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/
                      ),
                      i = t.match(
                        /\/\/v\.qq\.com\/x\/cover\/.*\/([^\/]+)\.html\??.*/
                      ),
                      o = t.match(/(?:www\.|\/\/)coub\.com\/view\/(\w+)/),
                      a = t.match(
                        /(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/
                      ),
                      s = t.match(/.+dailymotion.com\/(video|hub)\/(\w+)\?/),
                      l = t.match(/(?:www\.|\/\/)bilibili\.com\/video\/(\w+)/)
                    n && 11 === n[1].length
                      ? (e.insertAdjacentHTML(
                          "afterend",
                          '<iframe class="iframe__video" src="//www.youtube.com/embed/' +
                            n[1] +
                            (n[2] ? "?start=" + n[2] : "") +
                            '"></iframe>'
                        ),
                        e.remove())
                      : r && r[1]
                      ? (e.insertAdjacentHTML(
                          "afterend",
                          '<iframe class="iframe__video" src="//player.youku.com/embed/' +
                            r[1] +
                            '"></iframe>'
                        ),
                        e.remove())
                      : i && i[1]
                      ? (e.insertAdjacentHTML(
                          "afterend",
                          '<iframe class="iframe__video" src="https://v.qq.com/txp/iframe/player.html?vid=' +
                            i[1] +
                            '"></iframe>'
                        ),
                        e.remove())
                      : o && o[1]
                      ? (e.insertAdjacentHTML(
                          "afterend",
                          '<iframe class="iframe__video"\n src="//coub.com/embed/' +
                            o[1] +
                            '?muted=false&autostart=false&originalSize=true&startWithHD=true"></iframe>'
                        ),
                        e.remove())
                      : a && a[0]
                      ? (e.insertAdjacentHTML(
                          "afterend",
                          '<iframe class="iframe__video"\n src="https://www.facebook.com/plugins/video.php?href=' +
                            encodeURIComponent(a[0]) +
                            '"></iframe>'
                        ),
                        e.remove())
                      : s && s[2]
                      ? (e.insertAdjacentHTML(
                          "afterend",
                          '<iframe class="iframe__video"\n src="https://www.dailymotion.com/embed/video/' +
                            s[2] +
                            '"></iframe>'
                        ),
                        e.remove())
                      : l &&
                        l[1] &&
                        (e.insertAdjacentHTML(
                          "afterend",
                          '<iframe class="iframe__video"\n src="//player.bilibili.com/player.html?bvid=' +
                            l[1] +
                            '"></iframe>'
                        ),
                        e.remove())
                  })(e, t))
          })
      }
    },
    function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return o
      })
      var r = n(1),
        i = n(7),
        o = function (e, t) {
          void 0 === t && (t = "https://cdn.jsdelivr.net/npm/vditor@" + r.b),
            r.a.CODE_THEME.includes(e) || (e = "github")
          var n = document.getElementById("vditorHljsStyle"),
            o = t + "/dist/js/highlight.js/styles/" + e + ".css"
          n
            ? n.href !== o && (n.remove(), Object(i.a)(o, "vditorHljsStyle"))
            : Object(i.a)(o, "vditorHljsStyle")
        }
    },
    function (e, t) {
      e.exports =
        '<svg version=1.1 xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M6 0v32l20-15.977-20-16.023z"></path> </svg> '
    },
    function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return i
      })
      var r = n(6),
        i = function (e, t, n) {
          var i = ""
          Array.from(e.children).forEach(function (e, t) {
            if (Object(r.a)(e)) {
              var o = parseInt(e.tagName.substring(1), 10),
                a = new Array(2 * (o - 1)).fill("&emsp;").join(""),
                s = ""
              s =
                n && "ir" === n.currentMode
                  ? e.textContent.substring(o + 1).trim()
                  : e.textContent.trim()
              var l = e.id.lastIndexOf("_"),
                c = e.id.substring(0, -1 === l ? void 0 : l)
              ;(e.id = c + "_" + t),
                (i +=
                  '<div data-id="' +
                  e.id +
                  '" class="vditor-outline__item">' +
                  a +
                  s +
                  "</div>")
            }
          }),
            (t.innerHTML = i),
            t.querySelectorAll(".vditor-outline__item").forEach(function (r) {
              r.addEventListener("click", function (i) {
                var o = r.getAttribute("data-id")
                if (n)
                  if ("auto" === n.options.height) {
                    var a =
                      document.getElementById(o).offsetTop + n.element.offsetTop
                    n.options.toolbarConfig.pin ||
                      (a += n.toolbar.element.offsetHeight),
                      window.scrollTo(window.scrollX, a)
                  } else
                    n.element.offsetTop < window.scrollY &&
                      window.scrollTo(window.scrollX, n.element.offsetTop),
                      n.preview.element.contains(e)
                        ? (e.parentElement.scrollTop = document.getElementById(
                            o
                          ).offsetTop)
                        : (e.scrollTop = document.getElementById(o).offsetTop)
                else
                  window.scrollTo(
                    window.scrollX,
                    document.getElementById(o).offsetTop
                  )
                t
                  .querySelectorAll(".vditor-outline__item")
                  .forEach(function (e) {
                    e.classList.remove("vditor-outline__item--current")
                  }),
                  r.classList.add("vditor-outline__item--current")
              })
            })
        }
    },
    function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return r
      })
      var r = function (e) {
        var t = Lute.New()
        return (
          t.PutEmojis(e.emojis),
          t.SetEmojiSite(e.emojiSite),
          t.SetHeadingAnchor(e.headingAnchor),
          t.SetInlineMathAllowDigitAfterOpenMarker(e.inlineMathDigit),
          t.SetAutoSpace(e.autoSpace),
          t.SetToC(e.toc),
          t.SetFootnotes(e.footnotes),
          t.SetChinesePunct(e.chinesePunct),
          t.SetFixTermTypo(e.fixTermTypo),
          t.SetVditorCodeBlockPreview(e.codeBlockPreview),
          t.SetSetext(e.setext),
          t.SetSanitize(e.sanitize),
          t.SetChineseParagraphBeginningSpace(e.paragraphBeginningSpace),
          t.SetRenderListMarker(e.listMarker),
          e.lazyLoadImage && t.SetImageLazyLoading(e.lazyLoadImage),
          t
        )
      }
    },
    function (e, t) {
      e.exports =
        '<svg version=1.1 xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M11 0h-6c-0.553 0-1 0.448-1 1v30c0 0.553 0.447 1 1 1h6c0.553 0 1-0.447 1-1v-30c0-0.552-0.447-1-1-1zM27 0h-6c-0.553 0-1 0.448-1 1v30c0 0.553 0.447 1 1 1h6c0.553 0 1-0.447 1-1v-30c0-0.552-0.447-1-1-1z"></path> </svg> '
    },
    function (e, t) {
      function n() {
        ;(this.Diff_Timeout = 1),
          (this.Diff_EditCost = 4),
          (this.Match_Threshold = 0.5),
          (this.Match_Distance = 1e3),
          (this.Patch_DeleteThreshold = 0.5),
          (this.Patch_Margin = 4),
          (this.Match_MaxBits = 32)
      }
      n.Diff,
        (n.prototype.diff_main = function (e, t, n, r) {
          void 0 === r &&
            (r =
              this.Diff_Timeout <= 0
                ? Number.MAX_VALUE
                : new Date().getTime() + 1e3 * this.Diff_Timeout)
          var i = r
          if (null == e || null == t) throw new Error("Null input. (diff_main)")
          if (e == t) return e ? [[0, e]] : []
          void 0 === n && (n = !0)
          var o = n,
            a = this.diff_commonPrefix(e, t),
            s = e.substring(0, a)
          ;(e = e.substring(a)),
            (t = t.substring(a)),
            (a = this.diff_commonSuffix(e, t))
          var l = e.substring(e.length - a)
          ;(e = e.substring(0, e.length - a)),
            (t = t.substring(0, t.length - a))
          var c = this.diff_compute_(e, t, o, i)
          return (
            s && c.unshift([0, s]),
            l && c.push([0, l]),
            this.diff_cleanupMerge(c),
            c
          )
        }),
        (n.prototype.diff_compute_ = function (e, t, n, r) {
          var i
          if (!e) return [[1, t]]
          if (!t) return [[-1, e]]
          var o = e.length > t.length ? e : t,
            a = e.length > t.length ? t : e,
            s = o.indexOf(a)
          if (-1 != s)
            return (
              (i = [
                [1, o.substring(0, s)],
                [0, a],
                [1, o.substring(s + a.length)],
              ]),
              e.length > t.length && (i[0][0] = i[2][0] = -1),
              i
            )
          if (1 == a.length)
            return [
              [-1, e],
              [1, t],
            ]
          var l = this.diff_halfMatch_(e, t)
          if (l) {
            var c = l[0],
              d = l[1],
              u = l[2],
              p = l[3],
              h = l[4],
              f = this.diff_main(c, u, n, r),
              m = this.diff_main(d, p, n, r)
            return f.concat([[0, h]], m)
          }
          return n && e.length > 100 && t.length > 100
            ? this.diff_lineMode_(e, t, r)
            : this.diff_bisect_(e, t, r)
        }),
        (n.prototype.diff_lineMode_ = function (e, t, n) {
          ;(e = (d = this.diff_linesToChars_(e, t)).chars1), (t = d.chars2)
          var r = d.lineArray,
            i = this.diff_main(e, t, !1, n)
          this.diff_charsToLines_(i, r),
            this.diff_cleanupSemantic(i),
            i.push([0, ""])
          for (var o = 0, a = 0, s = 0, l = "", c = ""; o < i.length; ) {
            switch (i[o][0]) {
              case 1:
                s++, (c += i[o][1])
                break
              case -1:
                a++, (l += i[o][1])
                break
              case 0:
                if (a >= 1 && s >= 1) {
                  i.splice(o - a - s, a + s), (o = o - a - s)
                  for (
                    var d, u = (d = this.diff_main(l, c, !1, n)).length - 1;
                    u >= 0;
                    u--
                  )
                    i.splice(o, 0, d[u])
                  o += d.length
                }
                ;(s = 0), (a = 0), (l = ""), (c = "")
            }
            o++
          }
          return i.pop(), i
        }),
        (n.prototype.diff_bisect_ = function (e, t, n) {
          for (
            var r = e.length,
              i = t.length,
              o = Math.ceil((r + i) / 2),
              a = o,
              s = 2 * o,
              l = new Array(s),
              c = new Array(s),
              d = 0;
            d < s;
            d++
          )
            (l[d] = -1), (c[d] = -1)
          ;(l[a + 1] = 0), (c[a + 1] = 0)
          for (
            var u = r - i, p = u % 2 != 0, h = 0, f = 0, m = 0, v = 0, g = 0;
            g < o && !(new Date().getTime() > n);
            g++
          ) {
            for (var b = -g + h; b <= g - f; b += 2) {
              for (
                var y = a + b,
                  w =
                    (k =
                      b == -g || (b != g && l[y - 1] < l[y + 1])
                        ? l[y + 1]
                        : l[y - 1] + 1) - b;
                k < r && w < i && e.charAt(k) == t.charAt(w);

              )
                k++, w++
              if (((l[y] = k), k > r)) f += 2
              else if (w > i) h += 2
              else if (p) {
                if ((S = a + u - b) >= 0 && S < s && -1 != c[S])
                  if (k >= (M = r - c[S]))
                    return this.diff_bisectSplit_(e, t, k, w, n)
              }
            }
            for (var E = -g + m; E <= g - v; E += 2) {
              for (
                var M,
                  S = a + E,
                  O =
                    (M =
                      E == -g || (E != g && c[S - 1] < c[S + 1])
                        ? c[S + 1]
                        : c[S - 1] + 1) - E;
                M < r && O < i && e.charAt(r - M - 1) == t.charAt(i - O - 1);

              )
                M++, O++
              if (((c[S] = M), M > r)) v += 2
              else if (O > i) m += 2
              else if (!p) {
                if ((y = a + u - E) >= 0 && y < s && -1 != l[y]) {
                  var k
                  w = a + (k = l[y]) - y
                  if (k >= (M = r - M))
                    return this.diff_bisectSplit_(e, t, k, w, n)
                }
              }
            }
          }
          return [
            [-1, e],
            [1, t],
          ]
        }),
        (n.prototype.diff_bisectSplit_ = function (e, t, n, r, i) {
          var o = e.substring(0, n),
            a = t.substring(0, r),
            s = e.substring(n),
            l = t.substring(r),
            c = this.diff_main(o, a, !1, i),
            d = this.diff_main(s, l, !1, i)
          return c.concat(d)
        }),
        (n.prototype.diff_linesToChars_ = function (e, t) {
          var n = [],
            r = {}

          function i(e) {
            for (var t = "", i = 0, o = -1, a = n.length; o < e.length - 1; ) {
              ;-1 == (o = e.indexOf("\n", i)) && (o = e.length - 1)
              var s = e.substring(i, o + 1)
              ;(i = o + 1),
                (r.hasOwnProperty ? r.hasOwnProperty(s) : void 0 !== r[s])
                  ? (t += String.fromCharCode(r[s]))
                  : ((t += String.fromCharCode(a)), (r[s] = a), (n[a++] = s))
            }
            return t
          }
          return (
            (n[0] = ""),
            {
              chars1: i(e),
              chars2: i(t),
              lineArray: n,
            }
          )
        }),
        (n.prototype.diff_charsToLines_ = function (e, t) {
          for (var n = 0; n < e.length; n++) {
            for (var r = e[n][1], i = [], o = 0; o < r.length; o++)
              i[o] = t[r.charCodeAt(o)]
            e[n][1] = i.join("")
          }
        }),
        (n.prototype.diff_commonPrefix = function (e, t) {
          if (!e || !t || e.charAt(0) != t.charAt(0)) return 0
          for (
            var n = 0, r = Math.min(e.length, t.length), i = r, o = 0;
            n < i;

          )
            e.substring(o, i) == t.substring(o, i) ? (o = n = i) : (r = i),
              (i = Math.floor((r - n) / 2 + n))
          return i
        }),
        (n.prototype.diff_commonSuffix = function (e, t) {
          if (!e || !t || e.charAt(e.length - 1) != t.charAt(t.length - 1))
            return 0
          for (
            var n = 0, r = Math.min(e.length, t.length), i = r, o = 0;
            n < i;

          )
            e.substring(e.length - i, e.length - o) ==
            t.substring(t.length - i, t.length - o)
              ? (o = n = i)
              : (r = i),
              (i = Math.floor((r - n) / 2 + n))
          return i
        }),
        (n.prototype.diff_commonOverlap_ = function (e, t) {
          var n = e.length,
            r = t.length
          if (0 == n || 0 == r) return 0
          n > r ? (e = e.substring(n - r)) : n < r && (t = t.substring(0, n))
          var i = Math.min(n, r)
          if (e == t) return i
          for (var o = 0, a = 1; ; ) {
            var s = e.substring(i - a),
              l = t.indexOf(s)
            if (-1 == l) return o
            ;(a += l),
              (0 != l && e.substring(i - a) != t.substring(0, a)) ||
                ((o = a), a++)
          }
        }),
        (n.prototype.diff_halfMatch_ = function (e, t) {
          if (this.Diff_Timeout <= 0) return null
          var n = e.length > t.length ? e : t,
            r = e.length > t.length ? t : e
          if (n.length < 4 || 2 * r.length < n.length) return null
          var i = this

          function o(e, t, n) {
            for (
              var r,
                o,
                a,
                s,
                l = e.substring(n, n + Math.floor(e.length / 4)),
                c = -1,
                d = "";
              -1 != (c = t.indexOf(l, c + 1));

            ) {
              var u = i.diff_commonPrefix(e.substring(n), t.substring(c)),
                p = i.diff_commonSuffix(e.substring(0, n), t.substring(0, c))
              d.length < p + u &&
                ((d = t.substring(c - p, c) + t.substring(c, c + u)),
                (r = e.substring(0, n - p)),
                (o = e.substring(n + u)),
                (a = t.substring(0, c - p)),
                (s = t.substring(c + u)))
            }
            return 2 * d.length >= e.length ? [r, o, a, s, d] : null
          }
          var a,
            s,
            l,
            c,
            d,
            u = o(n, r, Math.ceil(n.length / 4)),
            p = o(n, r, Math.ceil(n.length / 2))
          return u || p
            ? ((a = p ? (u && u[4].length > p[4].length ? u : p) : u),
              e.length > t.length
                ? ((s = a[0]), (l = a[1]), (c = a[2]), (d = a[3]))
                : ((c = a[0]), (d = a[1]), (s = a[2]), (l = a[3])),
              [s, l, c, d, a[4]])
            : null
        }),
        (n.prototype.diff_cleanupSemantic = function (e) {
          for (
            var t = !1,
              n = [],
              r = 0,
              i = null,
              o = 0,
              a = 0,
              s = 0,
              l = 0,
              c = 0;
            o < e.length;

          )
            0 == e[o][0]
              ? ((n[r++] = o),
                (a = l),
                (s = c),
                (l = 0),
                (c = 0),
                (i = e[o][1]))
              : (1 == e[o][0] ? (l += e[o][1].length) : (c += e[o][1].length),
                i &&
                  i.length <= Math.max(a, s) &&
                  i.length <= Math.max(l, c) &&
                  (e.splice(n[r - 1], 0, [-1, i]),
                  (e[n[r - 1] + 1][0] = 1),
                  r--,
                  (o = --r > 0 ? n[r - 1] : -1),
                  (a = 0),
                  (s = 0),
                  (l = 0),
                  (c = 0),
                  (i = null),
                  (t = !0))),
              o++
          for (
            t && this.diff_cleanupMerge(e),
              this.diff_cleanupSemanticLossless(e),
              o = 1;
            o < e.length;

          ) {
            if (-1 == e[o - 1][0] && 1 == e[o][0]) {
              var d = e[o - 1][1],
                u = e[o][1],
                p = this.diff_commonOverlap_(d, u),
                h = this.diff_commonOverlap_(u, d)
              p >= h
                ? (p >= d.length / 2 || p >= u.length / 2) &&
                  (e.splice(o, 0, [0, u.substring(0, p)]),
                  (e[o - 1][1] = d.substring(0, d.length - p)),
                  (e[o + 1][1] = u.substring(p)),
                  o++)
                : (h >= d.length / 2 || h >= u.length / 2) &&
                  (e.splice(o, 0, [0, d.substring(0, h)]),
                  (e[o - 1][0] = 1),
                  (e[o - 1][1] = u.substring(0, u.length - h)),
                  (e[o + 1][0] = -1),
                  (e[o + 1][1] = d.substring(h)),
                  o++),
                o++
            }
            o++
          }
        }),
        (n.prototype.diff_cleanupSemanticLossless = function (e) {
          function t(e, t) {
            if (!e || !t) return 6
            var r = e.charAt(e.length - 1),
              i = t.charAt(0),
              o = r.match(n.nonAlphaNumericRegex_),
              a = i.match(n.nonAlphaNumericRegex_),
              s = o && r.match(n.whitespaceRegex_),
              l = a && i.match(n.whitespaceRegex_),
              c = s && r.match(n.linebreakRegex_),
              d = l && i.match(n.linebreakRegex_),
              u = c && e.match(n.blanklineEndRegex_),
              p = d && t.match(n.blanklineStartRegex_)
            return u || p
              ? 5
              : c || d
              ? 4
              : o && !s && l
              ? 3
              : s || l
              ? 2
              : o || a
              ? 1
              : 0
          }
          for (var r = 1; r < e.length - 1; ) {
            if (0 == e[r - 1][0] && 0 == e[r + 1][0]) {
              var i = e[r - 1][1],
                o = e[r][1],
                a = e[r + 1][1],
                s = this.diff_commonSuffix(i, o)
              if (s) {
                var l = o.substring(o.length - s)
                ;(i = i.substring(0, i.length - s)),
                  (o = l + o.substring(0, o.length - s)),
                  (a = l + a)
              }
              for (
                var c = i, d = o, u = a, p = t(i, o) + t(o, a);
                o.charAt(0) === a.charAt(0);

              ) {
                ;(i += o.charAt(0)),
                  (o = o.substring(1) + a.charAt(0)),
                  (a = a.substring(1))
                var h = t(i, o) + t(o, a)
                h >= p && ((p = h), (c = i), (d = o), (u = a))
              }
              e[r - 1][1] != c &&
                (c ? (e[r - 1][1] = c) : (e.splice(r - 1, 1), r--),
                (e[r][1] = d),
                u ? (e[r + 1][1] = u) : (e.splice(r + 1, 1), r--))
            }
            r++
          }
        }),
        (n.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/),
        (n.whitespaceRegex_ = /\s/),
        (n.linebreakRegex_ = /[\r\n]/),
        (n.blanklineEndRegex_ = /\n\r?\n$/),
        (n.blanklineStartRegex_ = /^\r?\n\r?\n/),
        (n.prototype.diff_cleanupEfficiency = function (e) {
          for (
            var t = !1,
              n = [],
              r = 0,
              i = null,
              o = 0,
              a = !1,
              s = !1,
              l = !1,
              c = !1;
            o < e.length;

          )
            0 == e[o][0]
              ? (e[o][1].length < this.Diff_EditCost && (l || c)
                  ? ((n[r++] = o), (a = l), (s = c), (i = e[o][1]))
                  : ((r = 0), (i = null)),
                (l = c = !1))
              : (-1 == e[o][0] ? (c = !0) : (l = !0),
                i &&
                  ((a && s && l && c) ||
                    (i.length < this.Diff_EditCost / 2 &&
                      a + s + l + c == 3)) &&
                  (e.splice(n[r - 1], 0, [-1, i]),
                  (e[n[r - 1] + 1][0] = 1),
                  r--,
                  (i = null),
                  a && s
                    ? ((l = c = !0), (r = 0))
                    : ((o = --r > 0 ? n[r - 1] : -1), (l = c = !1)),
                  (t = !0))),
              o++
          t && this.diff_cleanupMerge(e)
        }),
        (n.prototype.diff_cleanupMerge = function (e) {
          e.push([0, ""])
          for (var t, n = 0, r = 0, i = 0, o = "", a = ""; n < e.length; )
            switch (e[n][0]) {
              case 1:
                i++, (a += e[n][1]), n++
                break
              case -1:
                r++, (o += e[n][1]), n++
                break
              case 0:
                r + i > 1
                  ? (0 !== r &&
                      0 !== i &&
                      (0 !== (t = this.diff_commonPrefix(a, o)) &&
                        (n - r - i > 0 && 0 == e[n - r - i - 1][0]
                          ? (e[n - r - i - 1][1] += a.substring(0, t))
                          : (e.splice(0, 0, [0, a.substring(0, t)]), n++),
                        (a = a.substring(t)),
                        (o = o.substring(t))),
                      0 !== (t = this.diff_commonSuffix(a, o)) &&
                        ((e[n][1] = a.substring(a.length - t) + e[n][1]),
                        (a = a.substring(0, a.length - t)),
                        (o = o.substring(0, o.length - t)))),
                    0 === r
                      ? e.splice(n - i, r + i, [1, a])
                      : 0 === i
                      ? e.splice(n - r, r + i, [-1, o])
                      : e.splice(n - r - i, r + i, [-1, o], [1, a]),
                    (n = n - r - i + (r ? 1 : 0) + (i ? 1 : 0) + 1))
                  : 0 !== n && 0 == e[n - 1][0]
                  ? ((e[n - 1][1] += e[n][1]), e.splice(n, 1))
                  : n++,
                  (i = 0),
                  (r = 0),
                  (o = ""),
                  (a = "")
            }
          "" === e[e.length - 1][1] && e.pop()
          var s = !1
          for (n = 1; n < e.length - 1; )
            0 == e[n - 1][0] &&
              0 == e[n + 1][0] &&
              (e[n][1].substring(e[n][1].length - e[n - 1][1].length) ==
              e[n - 1][1]
                ? ((e[n][1] =
                    e[n - 1][1] +
                    e[n][1].substring(0, e[n][1].length - e[n - 1][1].length)),
                  (e[n + 1][1] = e[n - 1][1] + e[n + 1][1]),
                  e.splice(n - 1, 1),
                  (s = !0))
                : e[n][1].substring(0, e[n + 1][1].length) == e[n + 1][1] &&
                  ((e[n - 1][1] += e[n + 1][1]),
                  (e[n][1] =
                    e[n][1].substring(e[n + 1][1].length) + e[n + 1][1]),
                  e.splice(n + 1, 1),
                  (s = !0))),
              n++
          s && this.diff_cleanupMerge(e)
        }),
        (n.prototype.diff_xIndex = function (e, t) {
          var n,
            r = 0,
            i = 0,
            o = 0,
            a = 0
          for (
            n = 0;
            n < e.length &&
            (1 !== e[n][0] && (r += e[n][1].length),
            -1 !== e[n][0] && (i += e[n][1].length),
            !(r > t));
            n++
          )
            (o = r), (a = i)
          return e.length != n && -1 === e[n][0] ? a : a + (t - o)
        }),
        (n.prototype.diff_prettyHtml = function (e) {
          for (
            var t = [], n = /&/g, r = /</g, i = />/g, o = /\n/g, a = 0;
            a < e.length;
            a++
          ) {
            var s = e[a][0],
              l = e[a][1]
                .replace(n, "&amp;")
                .replace(r, "&lt;")
                .replace(i, "&gt;")
                .replace(o, "&para;<br>")
            switch (s) {
              case 1:
                t[a] = '<ins style="background:#e6ffe6;">' + l + "</ins>"
                break
              case -1:
                t[a] = '<del style="background:#ffe6e6;">' + l + "</del>"
                break
              case 0:
                t[a] = "<span>" + l + "</span>"
            }
          }
          return t.join("")
        }),
        (n.prototype.diff_text1 = function (e) {
          for (var t = [], n = 0; n < e.length; n++)
            1 !== e[n][0] && (t[n] = e[n][1])
          return t.join("")
        }),
        (n.prototype.diff_text2 = function (e) {
          for (var t = [], n = 0; n < e.length; n++)
            -1 !== e[n][0] && (t[n] = e[n][1])
          return t.join("")
        }),
        (n.prototype.diff_levenshtein = function (e) {
          for (var t = 0, n = 0, r = 0, i = 0; i < e.length; i++) {
            var o = e[i][0],
              a = e[i][1]
            switch (o) {
              case 1:
                n += a.length
                break
              case -1:
                r += a.length
                break
              case 0:
                ;(t += Math.max(n, r)), (n = 0), (r = 0)
            }
          }
          return (t += Math.max(n, r))
        }),
        (n.prototype.diff_toDelta = function (e) {
          for (var t = [], n = 0; n < e.length; n++)
            switch (e[n][0]) {
              case 1:
                t[n] = "+" + encodeURI(e[n][1])
                break
              case -1:
                t[n] = "-" + e[n][1].length
                break
              case 0:
                t[n] = "=" + e[n][1].length
            }
          return t.join("\t").replace(/%20/g, " ")
        }),
        (n.prototype.diff_fromDelta = function (e, t) {
          for (
            var n = [], r = 0, i = 0, o = t.split(/\t/g), a = 0;
            a < o.length;
            a++
          ) {
            var s = o[a].substring(1)
            switch (o[a].charAt(0)) {
              case "+":
                try {
                  n[r++] = [1, decodeURI(s)]
                } catch (e) {
                  throw new Error("Illegal escape in diff_fromDelta: " + s)
                }
                break
              case "-":
              case "=":
                var l = parseInt(s, 10)
                if (isNaN(l) || l < 0)
                  throw new Error("Invalid number in diff_fromDelta: " + s)
                var c = e.substring(i, (i += l))
                "=" == o[a].charAt(0) ? (n[r++] = [0, c]) : (n[r++] = [-1, c])
                break
              default:
                if (o[a])
                  throw new Error(
                    "Invalid diff operation in diff_fromDelta: " + o[a]
                  )
            }
          }
          if (i != e.length)
            throw new Error(
              "Delta length (" +
                i +
                ") does not equal source text length (" +
                e.length +
                ")."
            )
          return n
        }),
        (n.prototype.match_main = function (e, t, n) {
          if (null == e || null == t || null == n)
            throw new Error("Null input. (match_main)")
          return (
            (n = Math.max(0, Math.min(n, e.length))),
            e == t
              ? 0
              : e.length
              ? e.substring(n, n + t.length) == t
                ? n
                : this.match_bitap_(e, t, n)
              : -1
          )
        }),
        (n.prototype.match_bitap_ = function (e, t, n) {
          if (t.length > this.Match_MaxBits)
            throw new Error("Pattern too long for this browser.")
          var r = this.match_alphabet_(t),
            i = this

          function o(e, r) {
            var o = e / t.length,
              a = Math.abs(n - r)
            return i.Match_Distance ? o + a / i.Match_Distance : a ? 1 : o
          }
          var a = this.Match_Threshold,
            s = e.indexOf(t, n)
          ;-1 != s &&
            ((a = Math.min(o(0, s), a)),
            -1 != (s = e.lastIndexOf(t, n + t.length)) &&
              (a = Math.min(o(0, s), a)))
          var l,
            c,
            d = 1 << (t.length - 1)
          s = -1
          for (var u, p = t.length + e.length, h = 0; h < t.length; h++) {
            for (l = 0, c = p; l < c; )
              o(h, n + c) <= a ? (l = c) : (p = c),
                (c = Math.floor((p - l) / 2 + l))
            p = c
            var f = Math.max(1, n - c + 1),
              m = Math.min(n + c, e.length) + t.length,
              v = Array(m + 2)
            v[m + 1] = (1 << h) - 1
            for (var g = m; g >= f; g--) {
              var b = r[e.charAt(g - 1)]
              if (
                ((v[g] =
                  0 === h
                    ? ((v[g + 1] << 1) | 1) & b
                    : (((v[g + 1] << 1) | 1) & b) |
                      ((u[g + 1] | u[g]) << 1) |
                      1 |
                      u[g + 1]),
                v[g] & d)
              ) {
                var y = o(h, g - 1)
                if (y <= a) {
                  if (((a = y), !((s = g - 1) > n))) break
                  f = Math.max(1, 2 * n - s)
                }
              }
            }
            if (o(h + 1, n) > a) break
            u = v
          }
          return s
        }),
        (n.prototype.match_alphabet_ = function (e) {
          for (var t = {}, n = 0; n < e.length; n++) t[e.charAt(n)] = 0
          for (n = 0; n < e.length; n++)
            t[e.charAt(n)] |= 1 << (e.length - n - 1)
          return t
        }),
        (n.prototype.patch_addContext_ = function (e, t) {
          if (0 != t.length) {
            for (
              var n = t.substring(e.start2, e.start2 + e.length1), r = 0;
              t.indexOf(n) != t.lastIndexOf(n) &&
              n.length <
                this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin;

            )
              (r += this.Patch_Margin),
                (n = t.substring(e.start2 - r, e.start2 + e.length1 + r))
            r += this.Patch_Margin
            var i = t.substring(e.start2 - r, e.start2)
            i && e.diffs.unshift([0, i])
            var o = t.substring(e.start2 + e.length1, e.start2 + e.length1 + r)
            o && e.diffs.push([0, o]),
              (e.start1 -= i.length),
              (e.start2 -= i.length),
              (e.length1 += i.length + o.length),
              (e.length2 += i.length + o.length)
          }
        }),
        (n.prototype.patch_make = function (e, t, r) {
          var i, o
          if ("string" == typeof e && "string" == typeof t && void 0 === r)
            (i = e),
              (o = this.diff_main(i, t, !0)).length > 2 &&
                (this.diff_cleanupSemantic(o), this.diff_cleanupEfficiency(o))
          else if (e && "object" == typeof e && void 0 === t && void 0 === r)
            (o = e), (i = this.diff_text1(o))
          else if (
            "string" == typeof e &&
            t &&
            "object" == typeof t &&
            void 0 === r
          )
            (i = e), (o = t)
          else {
            if (
              "string" != typeof e ||
              "string" != typeof t ||
              !r ||
              "object" != typeof r
            )
              throw new Error("Unknown call format to patch_make.")
            ;(i = e), (o = r)
          }
          if (0 === o.length) return []
          for (
            var a = [],
              s = new n.patch_obj(),
              l = 0,
              c = 0,
              d = 0,
              u = i,
              p = i,
              h = 0;
            h < o.length;
            h++
          ) {
            var f = o[h][0],
              m = o[h][1]
            switch ((l || 0 === f || ((s.start1 = c), (s.start2 = d)), f)) {
              case 1:
                ;(s.diffs[l++] = o[h]),
                  (s.length2 += m.length),
                  (p = p.substring(0, d) + m + p.substring(d))
                break
              case -1:
                ;(s.length1 += m.length),
                  (s.diffs[l++] = o[h]),
                  (p = p.substring(0, d) + p.substring(d + m.length))
                break
              case 0:
                m.length <= 2 * this.Patch_Margin && l && o.length != h + 1
                  ? ((s.diffs[l++] = o[h]),
                    (s.length1 += m.length),
                    (s.length2 += m.length))
                  : m.length >= 2 * this.Patch_Margin &&
                    l &&
                    (this.patch_addContext_(s, u),
                    a.push(s),
                    (s = new n.patch_obj()),
                    (l = 0),
                    (u = p),
                    (c = d))
            }
            1 !== f && (c += m.length), -1 !== f && (d += m.length)
          }
          return l && (this.patch_addContext_(s, u), a.push(s)), a
        }),
        (n.prototype.patch_deepCopy = function (e) {
          for (var t = [], r = 0; r < e.length; r++) {
            var i = e[r],
              o = new n.patch_obj()
            o.diffs = []
            for (var a = 0; a < i.diffs.length; a++)
              o.diffs[a] = i.diffs[a].slice()
            ;(o.start1 = i.start1),
              (o.start2 = i.start2),
              (o.length1 = i.length1),
              (o.length2 = i.length2),
              (t[r] = o)
          }
          return t
        }),
        (n.prototype.patch_apply = function (e, t) {
          if (0 == e.length) return [t, []]
          e = this.patch_deepCopy(e)
          var n = this.patch_addPadding(e)
          ;(t = n + t + n), this.patch_splitMax(e)
          for (var r = 0, i = [], o = 0; o < e.length; o++) {
            var a,
              s,
              l = e[o].start2 + r,
              c = this.diff_text1(e[o].diffs),
              d = -1
            if (
              (c.length > this.Match_MaxBits
                ? -1 !=
                    (a = this.match_main(
                      t,
                      c.substring(0, this.Match_MaxBits),
                      l
                    )) &&
                  (-1 ==
                    (d = this.match_main(
                      t,
                      c.substring(c.length - this.Match_MaxBits),
                      l + c.length - this.Match_MaxBits
                    )) ||
                    a >= d) &&
                  (a = -1)
                : (a = this.match_main(t, c, l)),
              -1 == a)
            )
              (i[o] = !1), (r -= e[o].length2 - e[o].length1)
            else if (
              ((i[o] = !0),
              (r = a - l),
              c ==
                (s =
                  -1 == d
                    ? t.substring(a, a + c.length)
                    : t.substring(a, d + this.Match_MaxBits)))
            )
              t =
                t.substring(0, a) +
                this.diff_text2(e[o].diffs) +
                t.substring(a + c.length)
            else {
              var u = this.diff_main(c, s, !1)
              if (
                c.length > this.Match_MaxBits &&
                this.diff_levenshtein(u) / c.length > this.Patch_DeleteThreshold
              )
                i[o] = !1
              else {
                this.diff_cleanupSemanticLossless(u)
                for (var p, h = 0, f = 0; f < e[o].diffs.length; f++) {
                  var m = e[o].diffs[f]
                  0 !== m[0] && (p = this.diff_xIndex(u, h)),
                    1 === m[0]
                      ? (t = t.substring(0, a + p) + m[1] + t.substring(a + p))
                      : -1 === m[0] &&
                        (t =
                          t.substring(0, a + p) +
                          t.substring(
                            a + this.diff_xIndex(u, h + m[1].length)
                          )),
                    -1 !== m[0] && (h += m[1].length)
                }
              }
            }
          }
          return [(t = t.substring(n.length, t.length - n.length)), i]
        }),
        (n.prototype.patch_addPadding = function (e) {
          for (var t = this.Patch_Margin, n = "", r = 1; r <= t; r++)
            n += String.fromCharCode(r)
          for (r = 0; r < e.length; r++) (e[r].start1 += t), (e[r].start2 += t)
          var i = e[0],
            o = i.diffs
          if (0 == o.length || 0 != o[0][0])
            o.unshift([0, n]),
              (i.start1 -= t),
              (i.start2 -= t),
              (i.length1 += t),
              (i.length2 += t)
          else if (t > o[0][1].length) {
            var a = t - o[0][1].length
            ;(o[0][1] = n.substring(o[0][1].length) + o[0][1]),
              (i.start1 -= a),
              (i.start2 -= a),
              (i.length1 += a),
              (i.length2 += a)
          }
          if (
            0 == (o = (i = e[e.length - 1]).diffs).length ||
            0 != o[o.length - 1][0]
          )
            o.push([0, n]), (i.length1 += t), (i.length2 += t)
          else if (t > o[o.length - 1][1].length) {
            a = t - o[o.length - 1][1].length
            ;(o[o.length - 1][1] += n.substring(0, a)),
              (i.length1 += a),
              (i.length2 += a)
          }
          return n
        }),
        (n.prototype.patch_splitMax = function (e) {
          for (var t = this.Match_MaxBits, r = 0; r < e.length; r++)
            if (!(e[r].length1 <= t)) {
              var i = e[r]
              e.splice(r--, 1)
              for (
                var o = i.start1, a = i.start2, s = "";
                0 !== i.diffs.length;

              ) {
                var l = new n.patch_obj(),
                  c = !0
                for (
                  l.start1 = o - s.length,
                    l.start2 = a - s.length,
                    "" !== s &&
                      ((l.length1 = l.length2 = s.length),
                      l.diffs.push([0, s]));
                  0 !== i.diffs.length && l.length1 < t - this.Patch_Margin;

                ) {
                  var d = i.diffs[0][0],
                    u = i.diffs[0][1]
                  1 === d
                    ? ((l.length2 += u.length),
                      (a += u.length),
                      l.diffs.push(i.diffs.shift()),
                      (c = !1))
                    : -1 === d &&
                      1 == l.diffs.length &&
                      0 == l.diffs[0][0] &&
                      u.length > 2 * t
                    ? ((l.length1 += u.length),
                      (o += u.length),
                      (c = !1),
                      l.diffs.push([d, u]),
                      i.diffs.shift())
                    : ((u = u.substring(0, t - l.length1 - this.Patch_Margin)),
                      (l.length1 += u.length),
                      (o += u.length),
                      0 === d
                        ? ((l.length2 += u.length), (a += u.length))
                        : (c = !1),
                      l.diffs.push([d, u]),
                      u == i.diffs[0][1]
                        ? i.diffs.shift()
                        : (i.diffs[0][1] = i.diffs[0][1].substring(u.length)))
                }
                s = (s = this.diff_text2(l.diffs)).substring(
                  s.length - this.Patch_Margin
                )
                var p = this.diff_text1(i.diffs).substring(0, this.Patch_Margin)
                "" !== p &&
                  ((l.length1 += p.length),
                  (l.length2 += p.length),
                  0 !== l.diffs.length && 0 === l.diffs[l.diffs.length - 1][0]
                    ? (l.diffs[l.diffs.length - 1][1] += p)
                    : l.diffs.push([0, p])),
                  c || e.splice(++r, 0, l)
              }
            }
        }),
        (n.prototype.patch_toText = function (e) {
          for (var t = [], n = 0; n < e.length; n++) t[n] = e[n]
          return t.join("")
        }),
        (n.prototype.patch_fromText = function (e) {
          var t = []
          if (!e) return t
          for (
            var r = e.split("\n"),
              i = 0,
              o = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;
            i < r.length;

          ) {
            var a = r[i].match(o)
            if (!a) throw new Error("Invalid patch string: " + r[i])
            var s = new n.patch_obj()
            for (
              t.push(s),
                s.start1 = parseInt(a[1], 10),
                "" === a[2]
                  ? (s.start1--, (s.length1 = 1))
                  : "0" == a[2]
                  ? (s.length1 = 0)
                  : (s.start1--, (s.length1 = parseInt(a[2], 10))),
                s.start2 = parseInt(a[3], 10),
                "" === a[4]
                  ? (s.start2--, (s.length2 = 1))
                  : "0" == a[4]
                  ? (s.length2 = 0)
                  : (s.start2--, (s.length2 = parseInt(a[4], 10))),
                i++;
              i < r.length;

            ) {
              var l = r[i].charAt(0)
              try {
                var c = decodeURI(r[i].substring(1))
              } catch (e) {
                throw new Error("Illegal escape in patch_fromText: " + c)
              }
              if ("-" == l) s.diffs.push([-1, c])
              else if ("+" == l) s.diffs.push([1, c])
              else if (" " == l) s.diffs.push([0, c])
              else {
                if ("@" == l) break
                if ("" !== l)
                  throw new Error('Invalid patch mode "' + l + '" in: ' + c)
              }
              i++
            }
          }
          return t
        }),
        (n.patch_obj = function () {
          ;(this.diffs = []),
            (this.start1 = null),
            (this.start2 = null),
            (this.length1 = 0),
            (this.length2 = 0)
        }),
        (n.patch_obj.prototype.toString = function () {
          for (
            var e,
              t = [
                "@@ -" +
                  (0 === this.length1
                    ? this.start1 + ",0"
                    : 1 == this.length1
                    ? this.start1 + 1
                    : this.start1 + 1 + "," + this.length1) +
                  " +" +
                  (0 === this.length2
                    ? this.start2 + ",0"
                    : 1 == this.length2
                    ? this.start2 + 1
                    : this.start2 + 1 + "," + this.length2) +
                  " @@\n",
              ],
              n = 0;
            n < this.diffs.length;
            n++
          ) {
            switch (this.diffs[n][0]) {
              case 1:
                e = "+"
                break
              case -1:
                e = "-"
                break
              case 0:
                e = " "
            }
            t[n + 1] = e + encodeURI(this.diffs[n][1]) + "\n"
          }
          return t.join("").replace(/%20/g, " ")
        }),
        (e.exports = n),
        (e.exports.diff_match_patch = n),
        (e.exports.DIFF_DELETE = -1),
        (e.exports.DIFF_INSERT = 1),
        (e.exports.DIFF_EQUAL = 0)
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 32 32" width=32px height=32px> <path d="M28.681 11.159c-0.694-0.947-1.662-2.053-2.724-3.116s-2.169-2.030-3.116-2.724c-1.612-1.182-2.393-1.319-2.841-1.319h-11.5c-1.379 0-2.5 1.121-2.5 2.5v23c0 1.378 1.121 2.5 2.5 2.5h19c1.378 0 2.5-1.122 2.5-2.5v-15.5c0-0.448-0.137-1.23-1.319-2.841zM24.543 9.457c0.959 0.959 1.712 1.825 2.268 2.543h-4.811v-4.811c0.718 0.556 1.584 1.309 2.543 2.268v0zM28 29.5c0 0.271-0.229 0.5-0.5 0.5h-19c-0.271 0-0.5-0.229-0.5-0.5v-23c0-0.271 0.229-0.5 0.5-0.5 0 0 11.499-0 11.5 0v7c0 0.552 0.448 1 1 1h7v15.5zM18.841 1.319c-1.612-1.182-2.393-1.319-2.841-1.319h-11.5c-1.378 0-2.5 1.121-2.5 2.5v23c0 1.207 0.86 2.217 2 2.45v-25.45c0-0.271 0.229-0.5 0.5-0.5h15.215c-0.301-0.248-0.595-0.477-0.873-0.681z"></path> </svg>'
    },
    function (e, t, n) {
      "use strict"
      n.r(t)
      var r = n(10),
        i = n(11),
        o = n(12),
        a = n(13),
        s = n(14),
        l = function (e) {
          void 0 === e && (e = document)
          var t = function (e) {
            var t = document.createElement("img")
            ;(t.src = e.getAttribute("data-src")),
              t.addEventListener("load", function () {
                e.getAttribute("style") ||
                  e.getAttribute("class") ||
                  e.getAttribute("width") ||
                  e.getAttribute("height") ||
                  (t.naturalHeight > t.naturalWidth &&
                    t.naturalWidth / t.naturalHeight <
                      document.querySelector(".vditor-reset").clientWidth /
                        (window.innerHeight - 40) &&
                    t.naturalHeight > window.innerHeight - 40 &&
                    (e.style.height = window.innerHeight - 40 + "px")),
                  (e.src = t.src)
              }),
              e.removeAttribute("data-src")
          }
          if (!("IntersectionObserver" in window))
            return (
              e.querySelectorAll("img").forEach(function (e) {
                e.getAttribute("data-src") && t(e)
              }),
              !1
            )
          window.vditorImageIntersectionObserver
            ? (window.vditorImageIntersectionObserver.disconnect(),
              e.querySelectorAll("img").forEach(function (e) {
                window.vditorImageIntersectionObserver.observe(e)
              }))
            : ((window.vditorImageIntersectionObserver = new IntersectionObserver(
                function (e) {
                  e.forEach(function (e) {
                    ;(void 0 === e.isIntersecting
                      ? 0 !== e.intersectionRatio
                      : e.isIntersecting) &&
                      e.target.getAttribute("data-src") &&
                      t(e.target)
                  })
                }
              )),
              e.querySelectorAll("img").forEach(function (e) {
                window.vditorImageIntersectionObserver.observe(e)
              }))
        },
        c = n(15),
        d = n(18),
        u = n(16),
        p = n(17),
        h = n(21),
        f = n(1),
        m = n(9),
        v = n(5),
        g = n(22),
        b = n(23),
        y = n.n(b),
        w = n(20),
        E = n.n(w),
        M = n(0),
        S = function (e, t) {
          if (
            (void 0 === t && (t = "zh_CN"),
            "undefined" != typeof speechSynthesis &&
              "undefined" != typeof SpeechSynthesisUtterance)
          ) {
            var n = document.querySelector(".vditor-speech")
            if (!n) {
              ;((n = document.createElement("div")).className =
                "vditor-speech"),
                document.body.insertAdjacentElement("beforeend", n)
              var r = function () {
                var e, n
                return (
                  speechSynthesis.getVoices().forEach(function (r) {
                    r.lang === t.replace("_", "-") && (e = r),
                      r.default && (n = r)
                  }),
                  e || (e = n),
                  e
                )
              }
              void 0 !== speechSynthesis.onvoiceschanged &&
                (speechSynthesis.onvoiceschanged = r)
              var i = r()
              ;(n.onclick = function () {
                if ("vditor-speech" === n.className) {
                  var e = new SpeechSynthesisUtterance(
                    n.getAttribute("data-text")
                  )
                  ;(e.voice = i),
                    (e.onend = function () {
                      ;(n.className = "vditor-speech"),
                        speechSynthesis.cancel(),
                        (n.innerHTML = E.a)
                    }),
                    speechSynthesis.speak(e),
                    (n.className = "vditor-speech vditor-speech--current"),
                    (n.innerHTML = y.a)
                } else
                  speechSynthesis.speaking &&
                    (speechSynthesis.paused
                      ? (speechSynthesis.resume(), (n.innerHTML = y.a))
                      : (speechSynthesis.pause(), (n.innerHTML = E.a)))
                Object(M.h)(window.vditorSpeechRange)
              }),
                document.body.addEventListener("click", function () {
                  "" === getSelection().toString().trim() &&
                    "block" === n.style.display &&
                    ((n.className = "vditor-speech"),
                    speechSynthesis.cancel(),
                    (n.style.display = "none"))
                })
            }
            e.addEventListener("mouseup", function (e) {
              var t = getSelection().toString().trim()
              if (
                (speechSynthesis.cancel(),
                "" !== getSelection().toString().trim())
              ) {
                window.vditorSpeechRange = getSelection()
                  .getRangeAt(0)
                  .cloneRange()
                var r = getSelection().getRangeAt(0).getBoundingClientRect()
                ;(n.innerHTML = E.a),
                  (n.style.display = "block"),
                  (n.style.top =
                    r.top +
                    r.height +
                    document.querySelector("html").scrollTop -
                    20 +
                    "px"),
                  (n.style.left = e.screenX + 2 + "px"),
                  n.setAttribute("data-text", t)
              } else "block" === n.style.display && ((n.className = "vditor-speech"), (n.style.display = "none"))
            })
          }
        },
        O = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                l(r.next(e))
              } catch (e) {
                o(e)
              }
            }
            function s(e) {
              try {
                l(r.throw(e))
              } catch (e) {
                o(e)
              }
            }
            function l(e) {
              var t
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t)
                      })).then(a, s)
            }
            l((r = r.apply(e, t || [])).next())
          })
        },
        k = function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1]
                return i[1]
              },
              trys: [],
              ops: [],
            }
          return (
            (o = {
              next: s(0),
              throw: s(1),
              return: s(2),
            }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this
              }),
            o
          )

          function s(o) {
            return function (s) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.")
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r.return
                            : o[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o
                        break
                      case 4:
                        return (
                          a.label++,
                          {
                            value: o[1],
                            done: !1,
                          }
                        )
                      case 5:
                        a.label++, (r = o[1]), (o = [0])
                        continue
                      case 7:
                        ;(o = a.ops.pop()), a.trys.pop()
                        continue
                      default:
                        if (
                          !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          a = 0
                          continue
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          a.label = o[1]
                          break
                        }
                        if (6 === o[0] && a.label < i[1]) {
                          ;(a.label = i[1]), (i = o)
                          break
                        }
                        if (i && a.label < i[2]) {
                          ;(a.label = i[2]), a.ops.push(o)
                          break
                        }
                        i[2] && a.ops.pop(), a.trys.pop()
                        continue
                    }
                    o = t.call(e, a)
                  } catch (e) {
                    ;(o = [6, e]), (r = 0)
                  } finally {
                    n = i = 0
                  }
                if (5 & o[0]) throw o[1]
                return {
                  value: o[0] ? o[1] : void 0,
                  done: !0,
                }
              })([o, s])
            }
          }
        },
        x = function (e) {
          var t = {
            anchor: 0,
            cdn: "https://cdn.jsdelivr.net/npm/vditor@" + f.b,
            customEmoji: {},
            emojiPath:
              ((e && e.emojiPath) ||
                "https://cdn.jsdelivr.net/npm/vditor@" + f.b) +
              "/dist/images/emoji",
            hljs: {
              enable: !0,
              lineNumber: !1,
              style: "github",
            },
            lang: "zh_CN",
            markdown: {
              autoSpace: !1,
              chinesePunct: !1,
              codeBlockPreview: !0,
              fixTermTypo: !1,
              footnotes: !0,
              listMarker: !1,
              paragraphBeginningSpace: !1,
              sanitize: !0,
              setext: !1,
              theme: "light",
              toc: !1,
            },
            math: {
              engine: "KaTeX",
              inlineDigit: !1,
              macros: {},
            },
            speech: {
              enable: !1,
            },
          }
          return (
            (null == e ? void 0 : e.hljs) &&
              (e.hljs = Object.assign({}, t.hljs, e.hljs)),
            (null == e ? void 0 : e.speech) &&
              (e.speech = Object.assign({}, t.speech, e.speech)),
            (null == e ? void 0 : e.math) &&
              (e.math = Object.assign({}, t.math, e.math)),
            (null == e ? void 0 : e.markdown) &&
              (e.markdown = Object.assign({}, t.markdown, e.markdown)),
            Object.assign(t, e)
          )
        },
        L = function (e, t) {
          var n = x(t)
          return Object(v.a)(
            n.cdn + "/dist/js/lute/lute.min.js",
            "vditorLuteScript"
          ).then(function () {
            var r = Object(g.a)({
              autoSpace: n.markdown.autoSpace,
              chinesePunct: n.markdown.chinesePunct,
              codeBlockPreview: n.markdown.codeBlockPreview,
              emojiSite: n.emojiPath,
              emojis: n.customEmoji,
              fixTermTypo: n.markdown.fixTermTypo,
              footnotes: n.markdown.footnotes,
              headingAnchor: 0 !== n.anchor,
              inlineMathDigit: n.math.inlineDigit,
              lazyLoadImage: n.lazyLoadImage,
              listMarker: n.markdown.listMarker,
              paragraphBeginningSpace: n.markdown.paragraphBeginningSpace,
              sanitize: n.markdown.sanitize,
              setext: n.markdown.setext,
              toc: n.markdown.toc,
            })
            return (
              (null == t ? void 0 : t.renderers) &&
                r.SetJSRenderers({
                  renderers: {
                    Md2HTML: t.renderers,
                  },
                }),
              r.Md2HTML(e)
            )
          })
        },
        T = function (e, t, n) {
          return O(void 0, void 0, void 0, function () {
            var h, f
            return k(this, function (v) {
              switch (v.label) {
                case 0:
                  return (h = x(n)), [4, L(t, h)]
                case 1:
                  return (
                    (f = v.sent()),
                    h.transform && (f = h.transform(f)),
                    (e.innerHTML = f),
                    e.classList.add("vditor-reset"),
                    Object(m.a)(h.markdown.theme, h.cdn),
                    1 === h.anchor && e.classList.add("vditor-reset--anchor"),
                    Object(o.a)(e, h.lang),
                    Object(s.a)(h.hljs, e, h.cdn),
                    Object(c.a)(e, {
                      cdn: h.cdn,
                      math: h.math,
                    }),
                    Object(u.a)(e, ".language-mermaid", h.cdn),
                    Object(a.a)(e, h.cdn),
                    Object(i.a)(e, h.cdn),
                    Object(p.a)(e, h.cdn),
                    Object(r.a)(e, h.cdn),
                    Object(d.a)(e),
                    h.speech.enable && S(e, h.lang),
                    0 !== h.anchor &&
                      ((g = h.anchor),
                      document
                        .querySelectorAll(".vditor-anchor")
                        .forEach(function (e) {
                          1 === g && e.classList.add("vditor-anchor--left"),
                            (e.onclick = function () {
                              var t = e.getAttribute("href").substr(1),
                                n = document.getElementById("vditorAnchor-" + t)
                                  .offsetTop
                              document.querySelector("html").scrollTop = n
                            })
                        }),
                      (window.onhashchange = function () {
                        var e = document.getElementById(
                          "vditorAnchor-" +
                            decodeURIComponent(window.location.hash.substr(1))
                        )
                        e &&
                          (document.querySelector("html").scrollTop =
                            e.offsetTop)
                      })),
                    h.after && h.after(),
                    h.lazyLoadImage && l(e),
                    [2]
                  )
              }
              var g
            })
          })
        },
        _ = n(19),
        j = (function () {
          function e() {}
          return (
            (e.codeRender = o.a),
            (e.graphvizRender = a.a),
            (e.highlightRender = s.a),
            (e.mathRender = c.a),
            (e.mermaidRender = u.a),
            (e.chartRender = i.a),
            (e.abcRender = r.a),
            (e.mindmapRender = p.a),
            (e.outlineRender = h.a),
            (e.mediaRender = d.a),
            (e.speechRender = S),
            (e.lazyLoadImageRender = l),
            (e.md2html = L),
            (e.preview = T),
            (e.setCodeTheme = _.a),
            (e.setContentTheme = m.a),
            e
          )
        })()
      t.default = j
    },
    function (e, t) {
      e.exports =
        '<svg version=1.1 xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M32 6.857v-2.286c0-0.625-0.518-1.143-1.143-1.143h-29.714c-0.625 0-1.143 0.518-1.143 1.143v2.286c0 0.625 0.518 1.143 1.143 1.143h29.714c0.625 0 1.143-0.518 1.143-1.143zM25.143 13.714v-2.286c0-0.625-0.518-1.143-1.143-1.143h-16c-0.625 0-1.143 0.518-1.143 1.143v2.286c0 0.625 0.518 1.143 1.143 1.143h16c0.625 0 1.143-0.518 1.143-1.143zM29.714 20.571v-2.286c0-0.625-0.518-1.143-1.143-1.143h-25.143c-0.625 0-1.143 0.518-1.143 1.143v2.286c0 0.625 0.518 1.143 1.143 1.143h25.143c0.625 0 1.143-0.518 1.143-1.143zM22.857 27.429v-2.286c0-0.625-0.518-1.143-1.143-1.143h-11.429c-0.625 0-1.143 0.518-1.143 1.143v2.286c0 0.625 0.518 1.143 1.143 1.143h11.429c0.625 0 1.143-0.518 1.143-1.143z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M21.334 16.532q0-0.233-0.15-0.384l-5.867-5.867q-0.15-0.15-0.384-0.15t-0.384 0.15l-5.85 5.85q-0.167 0.2-0.167 0.399 0 0.233 0.15 0.384t0.384 0.15h3.733v5.867q0 0.217 0.159 0.375t0.375 0.159h3.2q0.217 0 0.375-0.159t0.159-0.375v-5.867h3.734q0.217 0 0.375-0.159t0.159-0.375zM32 21.332q0 2.65-1.875 4.525t-4.525 1.875h-18.133q-3.083 0-5.275-2.192t-2.192-5.275q0-2.166 1.167-4t3.134-2.75q-0.034-0.5-0.034-0.717 0-3.533 2.5-6.033t6.033-2.5q2.6 0 4.759 1.45t3.142 3.849q1.184-1.033 2.767-1.033 1.767 0 3.017 1.25t1.25 3.017q0 1.267-0.683 2.3 2.166 0.516 3.558 2.258t1.392 3.975z"></path> </svg>'
    },
    function (e, t) {
      e.exports =
        '<svg version=1.1 xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M6.857 10.857v10.286c0 0.304-0.268 0.571-0.571 0.571-0.143 0-0.304-0.054-0.411-0.161l-5.143-5.143c-0.107-0.107-0.161-0.268-0.161-0.411s0.054-0.304 0.161-0.411l5.143-5.143c0.107-0.107 0.268-0.161 0.411-0.161 0.304 0 0.571 0.268 0.571 0.571zM32 24.571v3.429c0 0.304-0.268 0.571-0.571 0.571h-30.857c-0.304 0-0.571-0.268-0.571-0.571v-3.429c0-0.304 0.268-0.571 0.571-0.571h30.857c0.304 0 0.571 0.268 0.571 0.571zM32 17.714v3.429c0 0.304-0.268 0.571-0.571 0.571h-19.429c-0.304 0-0.571-0.268-0.571-0.571v-3.429c0-0.304 0.268-0.571 0.571-0.571h19.429c0.304 0 0.571 0.268 0.571 0.571zM32 10.857v3.429c0 0.304-0.268 0.571-0.571 0.571h-19.429c-0.304 0-0.571-0.268-0.571-0.571v-3.429c0-0.304 0.268-0.571 0.571-0.571h19.429c0.304 0 0.571 0.268 0.571 0.571zM32 4v3.429c0 0.304-0.268 0.571-0.571 0.571h-30.857c-0.304 0-0.571-0.268-0.571-0.571v-3.429c0-0.304 0.268-0.571 0.571-0.571h30.857c0.304 0 0.571 0.268 0.571 0.571z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg version=1.1 xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M31.628 11.185l-14.734 14.714c-0.496 0.496-1.291 0.496-1.787 0l-14.734-14.714c-0.496-0.496-0.496-1.311 0-1.807l3.296-3.276c0.496-0.496 1.291-0.496 1.787 0l10.544 10.544 10.544-10.544c0.496-0.496 1.291-0.496 1.787 0l3.296 3.276c0.496 0.496 0.496 1.311 0 1.807z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg version=1.1 xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M32 25.143v2.286c0 0.625-0.518 1.143-1.143 1.143h-29.714c-0.625 0-1.143-0.518-1.143-1.143v-2.286c0-0.625 0.518-1.143 1.143-1.143h29.714c0.625 0 1.143 0.518 1.143 1.143zM25.143 18.286v2.286c0 0.625-0.518 1.143-1.143 1.143h-22.857c-0.625 0-1.143-0.518-1.143-1.143v-2.286c0-0.625 0.518-1.143 1.143-1.143h22.857c0.625 0 1.143 0.518 1.143 1.143zM29.714 11.429v2.286c0 0.625-0.518 1.143-1.143 1.143h-27.429c-0.625 0-1.143-0.518-1.143-1.143v-2.286c0-0.625 0.518-1.143 1.143-1.143h27.429c0.625 0 1.143 0.518 1.143 1.143zM22.857 4.571v2.286c0 0.625-0.518 1.143-1.143 1.143h-20.571c-0.625 0-1.143-0.518-1.143-1.143v-2.286c0-0.625 0.518-1.143 1.143-1.143h20.571c0.625 0 1.143 0.518 1.143 1.143z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg version=1.1 xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M32 25.143v2.286c0 0.625-0.518 1.143-1.143 1.143h-29.714c-0.625 0-1.143-0.518-1.143-1.143v-2.286c0-0.625 0.518-1.143 1.143-1.143h29.714c0.625 0 1.143 0.518 1.143 1.143zM32 18.286v2.286c0 0.625-0.518 1.143-1.143 1.143h-22.857c-0.625 0-1.143-0.518-1.143-1.143v-2.286c0-0.625 0.518-1.143 1.143-1.143h22.857c0.625 0 1.143 0.518 1.143 1.143zM32 11.429v2.286c0 0.625-0.518 1.143-1.143 1.143h-27.429c-0.625 0-1.143-0.518-1.143-1.143v-2.286c0-0.625 0.518-1.143 1.143-1.143h27.429c0.625 0 1.143 0.518 1.143 1.143zM32 4.571v2.286c0 0.625-0.518 1.143-1.143 1.143h-20.571c-0.625 0-1.143-0.518-1.143-1.143v-2.286c0-0.625 0.518-1.143 1.143-1.143h20.571c0.625 0 1.143 0.518 1.143 1.143z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg version=1.1 xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M5.76 28.16c0 2.12 1.719 3.84 3.84 3.84h12.8c2.12 0 3.84-1.72 3.84-3.84l2.56-20.48h-25.6l2.56 20.48zM19.84 11.52h2.56v16.64h-2.56v-16.64zM14.72 11.52h2.56v16.64h-2.56v-16.64zM9.6 11.52h2.56v16.64h-2.56v-16.64zM28.16 2.56h-8.32c0 0-0.573-2.56-1.28-2.56h-5.12c-0.708 0-1.28 2.56-1.28 2.56h-8.32c-1.061 0-1.92 0.859-1.92 1.92s0 1.92 0 1.92h28.16c0 0 0-0.859 0-1.92s-0.86-1.92-1.92-1.92z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg version=1.1 xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M31.628 22.622l-3.296 3.276c-0.496 0.496-1.291 0.496-1.787 0l-10.544-10.544-10.544 10.544c-0.496 0.496-1.291 0.496-1.787 0l-3.296-3.276c-0.496-0.496-0.496-1.311 0-1.807l14.734-14.714c0.496-0.496 1.291-0.496 1.787 0l14.734 14.714c0.496 0.496 0.496 1.311 0 1.807z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg version=1.1 xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M6.927 17.719s-3.040-3.431-2.915-6.942c0.16-4.453 4.738-10.257 11.359-10.257 1.884 0 5.653 0 10.328 5.52 0.249 0.302-15.075-3.84-18.772 11.679z"></path> <path d="M17.477 9.301s3.946-1.298 7.271-0.178c4.222 1.422 8.693 6.826 6.809 13.182-0.533 1.804-1.609 5.413-8.231 8.32-0.356 0.16 10.613-13.351-5.849-21.323z"></path> <path d="M10.944 24.332c-1.938 2.035-3.751 1.742-3.751 1.742l0.578-3.191c-5.235-3.44-6.373-10.328-6.453-10.106-2.444 6.817-0.916 11.377 0.027 13.004 3.315 5.733 11.982 7.351 17.484 3.893 2.969-1.867 4.533-7.057 4.533-7.057-5.298 2.338-9.342 2.569-12.417 1.715z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg width=128 height=32 viewBox="0 0 128 32"> <path d="M0 0h128v6.4h-128zM0 12.8h128v6.4h-128zM0 25.6h128v6.4h-128z"></path> </svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 32 32" width=32px height=32px> <path d="M14 18v13l-5-5-6 6-3-3 6-6-5-5zM32 3l-6 6 5 5h-13v-13l5 5 6-6z"></path> </svg>'
    },
    function (e, t) {
      e.exports =
        '<svg version=1.1 xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M7.521 0c-0.747 0-1.362 0.614-1.362 1.362s0.614 1.362 1.362 1.362h15.593v5.53h-15.56c-0.747 0-1.362 0.614-1.362 1.362s0.614 1.362 1.362 1.362h15.56v5.729h-15.56c-0.747 0-1.362 0.614-1.362 1.362s0.614 1.362 1.362 1.362h15.56v1.876c0 0.747 0.614 1.362 1.362 1.362s1.362-0.614 1.362-1.362v-20.027c0-0.697-0.565-1.262-1.262-1.262h-17.054zM15.458 24.743h13.085c0.482 0 0.88 0.399 0.88 0.88v3.919c0 0.482-0.399 0.88-0.88 0.88h-13.085c-0.482 0-0.88-0.399-0.88-0.88v-3.919c0-0.482 0.399-0.88 0.88-0.88zM7.438 23.331l-4.65 3.819c-0.282 0.232-0.282 0.664 0 0.897l4.65 3.819c0.382 0.316 0.947 0.033 0.947-0.448v-2.74h3.354c0.316 0 0.581-0.266 0.581-0.581v-1.013c0-0.316-0.266-0.581-0.581-0.581h-3.354v-2.723c0-0.498-0.565-0.764-0.947-0.448z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg version=1.1 xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M7.521 32c-0.747 0-1.362-0.614-1.362-1.362s0.614-1.362 1.362-1.362h15.593v-5.53h-15.56c-0.747 0-1.362-0.614-1.362-1.362s0.614-1.362 1.362-1.362h15.56v-5.729h-15.56c-0.747 0-1.362-0.614-1.362-1.362s0.614-1.362 1.362-1.362h15.56v-1.876c0-0.747 0.614-1.362 1.362-1.362s1.362 0.614 1.362 1.362v20.027c0 0.697-0.565 1.262-1.262 1.262h-17.054zM15.458 7.257h13.085c0.482 0 0.88-0.399 0.88-0.88v-3.919c0-0.482-0.399-0.88-0.88-0.88h-13.085c-0.482 0-0.88 0.399-0.88 0.88v3.919c0 0.482 0.399 0.88 0.88 0.88zM7.438 8.669l-4.65-3.819c-0.282-0.232-0.282-0.664 0-0.897l4.65-3.819c0.382-0.316 0.947-0.033 0.947 0.448v2.74h3.354c0.316 0 0.581 0.266 0.581 0.581v1.013c0 0.316-0.266 0.581-0.581 0.581h-3.354v2.723c0 0.498-0.565 0.764-0.947 0.448z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 32 32" width=32px height=32px> <path d="M22.996 15.023c1.339-1.591 2.147-3.643 2.147-5.88 0-5.041-4.102-9.143-9.143-9.143h-11.429v32h13.714c5.041 0 9.143-4.102 9.143-9.143 0-3.32-1.779-6.232-4.433-7.834zM11.429 4.571h3.625c1.999 0 3.625 2.051 3.625 4.571s-1.626 4.571-3.625 4.571h-3.625v-9.143zM17.107 27.429h-5.679v-9.143h5.679c2.087 0 3.786 2.051 3.786 4.571s-1.698 4.571-3.786 4.571z"></path> </svg>'
    },
    function (e, t) {
      e.exports =
        '<svg version=1.1 xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M11.429 6.095h-9.905c-0.842 0-1.524 0.682-1.524 1.524v1.524c0 0.841 0.682 1.524 1.524 1.524h9.905c0.841 0 1.524-0.682 1.524-1.524v-1.524c0-0.842-0.682-1.524-1.524-1.524zM11.429 13.714h-9.905c-0.842 0-1.524 0.682-1.524 1.524v1.524c0 0.841 0.682 1.524 1.524 1.524h9.905c0.841 0 1.524-0.682 1.524-1.524v-1.524c0-0.841-0.682-1.524-1.524-1.524zM11.429 21.333h-9.905c-0.842 0-1.524 0.682-1.524 1.524v1.524c0 0.841 0.682 1.524 1.524 1.524h9.905c0.841 0 1.524-0.682 1.524-1.524v-1.524c0-0.841-0.682-1.524-1.524-1.524zM30.476 6.095h-12.952c-0.841 0-1.524 0.682-1.524 1.524v16.762c0 0.841 0.682 1.524 1.524 1.524h12.952c0.841 0 1.524-0.682 1.524-1.524v-16.762c0-0.841-0.682-1.524-1.524-1.524z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg version=1.1 xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M32 18.24c0 0.7-0.58 1.28-1.28 1.28h-4.48c0 2.5-0.54 4.38-1.34 5.8l4.16 4.18c0.5 0.5 0.5 1.3 0 1.8-0.24 0.26-0.58 0.38-0.9 0.38s-0.66-0.12-0.9-0.38l-3.96-3.94s-2.62 2.4-6.020 2.4v-17.92h-2.56v17.92c-3.62 0-6.26-2.64-6.26-2.64l-3.66 4.14c-0.26 0.28-0.6 0.42-0.96 0.42-0.3 0-0.6-0.1-0.86-0.32-0.52-0.48-0.56-1.28-0.1-1.82l4.040-4.54c-0.7-1.38-1.16-3.16-1.16-5.48h-4.48c-0.7 0-1.28-0.58-1.28-1.28s0.58-1.28 1.28-1.28h4.48v-5.88l-3.46-3.46c-0.5-0.5-0.5-1.3 0-1.8s1.3-0.5 1.8 0l3.46 3.46h16.88l3.46-3.46c0.5-0.5 1.3-0.5 1.8 0s0.5 1.3 0 1.8l-3.46 3.46v5.88h4.48c0.7 0 1.28 0.58 1.28 1.28zM22.4 6.72h-12.8c0-3.54 2.86-6.4 6.4-6.4s6.4 2.86 6.4 6.4z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M27.094 19.485v6.12c0 3.059-2.483 5.542-5.542 5.542h-16.010c-3.059 0-5.542-2.483-5.542-5.542v-16.010c0-3.059 2.483-5.542 5.542-5.542h16.010c0.769 0 1.54 0.154 2.251 0.481 0.174 0.077 0.308 0.25 0.346 0.443 0.039 0.211-0.019 0.404-0.174 0.558l-0.943 0.943c-0.115 0.115-0.289 0.193-0.443 0.193-0.058 0-0.115-0.019-0.174-0.039-0.289-0.077-0.578-0.115-0.866-0.115h-16.010c-1.693 0-3.079 1.386-3.079 3.079v16.010c0 1.693 1.386 3.079 3.079 3.079h16.010c1.693 0 3.079-1.386 3.079-3.079v-4.888c0-0.154 0.058-0.308 0.174-0.424l1.232-1.232c0.135-0.135 0.289-0.193 0.443-0.193 0.077 0 0.154 0.019 0.231 0.058 0.231 0.096 0.385 0.308 0.385 0.558zM31.54 10.076l-15.664 15.664c-0.615 0.615-1.578 0.615-2.194 0l-8.275-8.275c-0.615-0.615-0.615-1.578 0-2.194l2.116-2.116c0.615-0.615 1.578-0.615 2.194 0l5.060 5.060 12.451-12.451c0.615-0.615 1.578-0.615 2.194 0l2.116 2.116c0.615 0.615 0.615 1.578 0 2.194z"></path> </svg>'
    },
    function (e, t) {
      e.exports =
        '<svg version=1.1 xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M2.783 5.565v20.87h26.435v-20.87h-26.435zM2.783 2.783h26.435c1.535 0 2.783 1.248 2.783 2.783v20.87c0 1.535-1.248 2.783-2.783 2.783h-26.435c-1.535 0-2.783-1.248-2.783-2.783v-20.87c0-1.535 1.248-2.783 2.783-2.783zM0 9.739h31.304v1.391h-31.304v-1.391zM4.87 6.957h1.391c0.383 0 0.696 0.313 0.696 0.696s-0.313 0.696-0.696 0.696h-1.391c-0.383 0-0.696-0.313-0.696-0.696s0.313-0.696 0.696-0.696zM9.043 6.957h1.391c0.383 0 0.696 0.313 0.696 0.696s-0.313 0.696-0.696 0.696h-1.391c-0.383 0-0.696-0.313-0.696-0.696s0.313-0.696 0.696-0.696z"></path> <path d="M11.817 16.47v1.291l-4.635 1.965 4.635 1.965v1.291l-6.322-2.73v-1.052l6.322-2.73zM16.443 15.47h1.226l-3.648 8.739h-1.239l3.661-8.739zM19.33 16.47l6.322 2.73v1.052l-6.322 2.73v-1.291l4.635-1.965-4.635-1.965v-1.291z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"><path d="M21.053 21.895l2.526 2.526 8.421-8.421-8.421-8.421-2.526 2.526 5.895 5.895z"></path><path d="M10.947 10.105l-2.526-2.526-8.421 8.421 8.421 8.421 2.526-2.526-5.895-5.895z"></path><path d="M17.613 6.487l1.828 0.499-5.052 18.527-1.828-0.499 5.052-18.527z"></path></svg> '
    },
    function (e, t) {
      e.exports =
        '<svg version=1.1 xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M15.931 22.315l2.081-2.081-2.727-2.727-2.081 2.081v1.005h1.722v1.722h1.005zM23.824 9.398c-0.161-0.161-0.431-0.143-0.592 0.018l-6.279 6.279c-0.161 0.161-0.179 0.431-0.018 0.592s0.431 0.143 0.592-0.018l6.279-6.279c0.161-0.161 0.179-0.431 0.018-0.592zM25.259 20.054v3.409c0 2.852-2.314 5.167-5.167 5.167h-14.926c-2.852 0-5.167-2.314-5.167-5.167v-14.926c0-2.852 2.314-5.167 5.167-5.167h14.926c0.718 0 1.435 0.143 2.099 0.449 0.161 0.072 0.287 0.233 0.323 0.413 0.036 0.197-0.018 0.377-0.161 0.52l-0.879 0.879c-0.161 0.161-0.377 0.215-0.574 0.144-0.269-0.072-0.538-0.108-0.807-0.108h-14.926c-1.579 0-2.87 1.292-2.87 2.87v14.926c0 1.579 1.292 2.87 2.87 2.87h14.926c1.579 0 2.87-1.292 2.87-2.87v-2.26c0-0.143 0.054-0.287 0.161-0.395l1.148-1.148c0.179-0.179 0.413-0.215 0.628-0.126s0.359 0.287 0.359 0.52zM23.537 6.815l5.167 5.167-12.055 12.055h-5.167v-5.167zM31.502 9.183l-1.65 1.65-5.167-5.167 1.65-1.65c0.664-0.664 1.776-0.664 2.44 0l2.727 2.727c0.664 0.664 0.664 1.776 0 2.44z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 32 32" width=32px height=32px> <path d="M16 24.789c-3.756 0-6.911-2.254-8.188-5.559h16.376c-1.277 3.305-4.432 5.559-8.188 5.559zM10.366 14.423c-1.352 0-2.404-1.052-2.404-2.404s1.052-2.404 2.404-2.404 2.404 1.052 2.404 2.404-1.052 2.404-2.404 2.404zM21.634 14.423c-1.352 0-2.404-1.052-2.404-2.404s1.052-2.404 2.404-2.404 2.404 1.052 2.404 2.404-1.052 2.404-2.404 2.404zM16 28.845c7.061 0 12.845-5.784 12.845-12.845s-5.784-12.845-12.845-12.845-12.845 5.784-12.845 12.845 5.784 12.845 12.845 12.845zM16 0c8.864 0 16 7.136 16 16s-7.136 16-16 16-16-7.136-16-16 7.136-16 16-16z"></path> </svg>'
    },
    function (e, t) {
      e.exports =
        '<svg version=1.1 xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M24 25.279h-20.8v-14.4h4.152c0 0 1.102-1.434 3.472-3.2h-9.224c-0.885 0-1.6 0.718-1.6 1.6v17.6c0 0.885 0.715 1.6 1.6 1.6h24c0.885 0 1.6-0.715 1.6-1.6v-5.994l-3.2 2.632v1.762zM21.378 14.159v5.682l10.622-8.322-10.622-7.998v5.010c-12.898 0-12.898 12.749-12.898 12.749 3.651-5.997 5.898-7.12 12.898-7.12z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 32 32" width=32px height=32px> <path d="M32 0v13l-5-5-6 6-3-3 6-6-5-5zM14 21l-6 6 5 5h-13v-13l5 5 6-6z"></path> </svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M4.45 0h3.594c0.595 0 1.078 0.384 1.078 0.858v30.284c0 0.474-0.482 0.858-1.078 0.858h-3.594c-0.595 0-1.078-0.384-1.078-0.858v-30.284c-0-0.474 0.482-0.858 1.078-0.858zM23.888 0h3.673c0.59 0 1.068 0.384 1.068 0.858v30.284c0 0.474-0.478 0.858-1.068 0.858h-3.673c-0.59 0-1.068-0.384-1.068-0.858v-30.284c0-0.474 0.478-0.858 1.068-0.858z"></path> <path d="M25.069 14.167v3.667c0 0.589-0.384 1.065-0.858 1.065h-15.655c-0.474 0-0.858-0.477-0.858-1.065v-3.667c0-0.589 0.384-1.065 0.858-1.065h15.655c0.474 0 0.858 0.477 0.858 1.065z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M19.652 25v6c0 0.55-0.45 1-1 1h-6c-0.55 0-1-0.45-1-1v-6c0-0.55 0.45-1 1-1h6c0.55 0 1 0.45 1 1zM27.552 10c0 4.75-3.225 6.575-5.6 7.9-1.475 0.85-2.4 2.575-2.4 3.3v0c0 0.55-0.425 1.2-1 1.2h-6c-0.55 0-0.9-0.85-0.9-1.4v-1.125c0-3.025 3-5.625 5.2-6.625 1.925-0.875 2.725-1.7 2.725-3.3 0-1.4-1.825-2.65-3.85-2.65-1.125 0-2.15 0.35-2.7 0.725-0.6 0.425-1.2 1.025-2.675 2.875-0.2 0.25-0.5 0.4-0.775 0.4-0.225 0-0.425-0.075-0.625-0.2l-4.1-3.125c-0.425-0.325-0.525-0.875-0.25-1.325 2.7-4.475 6.5-6.65 11.6-6.65 5.35 0 11.35 4.275 11.35 10z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg version=1.1 xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M6.286 16c0 0.143-0.054 0.304-0.161 0.411l-5.143 5.143c-0.107 0.107-0.268 0.161-0.411 0.161-0.304 0-0.571-0.268-0.571-0.571v-10.286c0-0.304 0.268-0.571 0.571-0.571 0.143 0 0.304 0.054 0.411 0.161l5.143 5.143c0.107 0.107 0.161 0.268 0.161 0.411zM32 24.571v3.429c0 0.304-0.268 0.571-0.571 0.571h-30.857c-0.304 0-0.571-0.268-0.571-0.571v-3.429c0-0.304 0.268-0.571 0.571-0.571h30.857c0.304 0 0.571 0.268 0.571 0.571zM32 17.714v3.429c0 0.304-0.268 0.571-0.571 0.571h-19.429c-0.304 0-0.571-0.268-0.571-0.571v-3.429c0-0.304 0.268-0.571 0.571-0.571h19.429c0.304 0 0.571 0.268 0.571 0.571zM32 10.857v3.429c0 0.304-0.268 0.571-0.571 0.571h-19.429c-0.304 0-0.571-0.268-0.571-0.571v-3.429c0-0.304 0.268-0.571 0.571-0.571h19.429c0.304 0 0.571 0.268 0.571 0.571zM32 4v3.429c0 0.304-0.268 0.571-0.571 0.571h-30.857c-0.304 0-0.571-0.268-0.571-0.571v-3.429c0-0.304 0.268-0.571 0.571-0.571h30.857c0.304 0 0.571 0.268 0.571 0.571z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M23.273 27.636v2.909c0 0.795-0.659 1.455-1.455 1.455h-11.636c-0.795 0-1.455-0.659-1.455-1.455v-2.909c0-0.795 0.659-1.455 1.455-1.455h1.455v-8.727h-1.455c-0.795 0-1.455-0.659-1.455-1.455v-2.909c0-0.795 0.659-1.455 1.455-1.455h8.727c0.795 0 1.455 0.659 1.455 1.455v13.091h1.455c0.795 0 1.455 0.659 1.455 1.455zM20.364 1.455v4.364c0 0.795-0.659 1.455-1.455 1.455h-5.818c-0.795 0-1.455-0.659-1.455-1.455v-4.364c0-0.795 0.659-1.455 1.455-1.455h5.818c0.795 0 1.455 0.659 1.455 1.455z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M18.133 23.467l3.2 3.2 10.667-10.667-10.667-10.667-3.2 3.2 7.467 7.467z"></path> <path d="M13.867 8.533l-3.2-3.2-10.667 10.667 10.667 10.667 3.2-3.2-7.467-7.467z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M29.714 0v2.286h-4.571l-11.429 27.429h4.571v2.286h-16v-2.286h4.571l11.429-27.429h-4.571v-2.286z"></path> </svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M31.68 14.56h-31.36c-0.176 0-0.32 0.144-0.32 0.32v2.24c0 0.176 0.144 0.32 0.32 0.32h31.36c0.176 0 0.32-0.144 0.32-0.32v-2.24c0-0.176-0.144-0.32-0.32-0.32z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M29.187 2.933l-0.12-0.121c-2.813-2.812-7.415-2.812-10.228 0l-6.516 6.517c-2.812 2.812-2.812 7.415 0 10.227l0.12 0.12c0.234 0.234 0.482 0.446 0.739 0.641l2.386-2.386c-0.278-0.164-0.542-0.361-0.78-0.599l-0.121-0.121c-1.527-1.527-1.527-4.012 0-5.539l6.517-6.516c1.527-1.527 4.012-1.527 5.539 0l0.121 0.12c1.527 1.527 1.527 4.012 0 5.539l-2.948 2.948c0.512 1.264 0.754 2.611 0.733 3.955l4.559-4.559c2.812-2.812 2.812-7.415-0-10.227zM19.557 12.323c-0.234-0.234-0.482-0.446-0.739-0.641l-2.386 2.385c0.278 0.164 0.542 0.361 0.78 0.599l0.121 0.121c1.527 1.527 1.527 4.012 0 5.539l-6.517 6.517c-1.527 1.527-4.012 1.527-5.539 0l-0.121-0.121c-1.527-1.527-1.527-4.012 0-5.539l2.948-2.948c-0.512-1.264-0.754-2.611-0.733-3.955l-4.559 4.559c-2.812 2.812-2.812 7.415 0 10.228l0.12 0.12c2.813 2.812 7.415 2.812 10.228 0l6.516-6.517c2.812-2.812 2.812-7.415 0-10.228l-0.12-0.12z"></path> </svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M12 2h20v4h-20v-4zM12 14h20v4h-20v-4zM12 26h20v4h-20v-4zM0 4c0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.209-1.791-4-4-4s-4 1.791-4 4zM0 16c0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.209-1.791-4-4-4s-4 1.791-4 4zM0 28c0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.209-1.791-4-4-4s-4 1.791-4 4z"></path> </svg>'
    },
    function (e, t) {
      e.exports =
        '<svg version=1.1 xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M8.727 13.818v4.364c0 1.205-0.977 2.182-2.182 2.182h-4.364c-1.205 0-2.182-0.977-2.182-2.182v-4.364c0-1.205 0.977-2.182 2.182-2.182h4.364c1.205 0 2.182 0.977 2.182 2.182zM20.364 13.818v4.364c0 1.205-0.977 2.182-2.182 2.182h-4.364c-1.205 0-2.182-0.977-2.182-2.182v-4.364c0-1.205 0.977-2.182 2.182-2.182h4.364c1.205 0 2.182 0.977 2.182 2.182zM32 13.818v4.364c0 1.205-0.977 2.182-2.182 2.182h-4.364c-1.205 0-2.182-0.977-2.182-2.182v-4.364c0-1.205 0.977-2.182 2.182-2.182h4.364c1.205 0 2.182 0.977 2.182 2.182z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M11 26h20v4h-20zM11 14h20v4h-20zM11 2h20v4h-20zM5 0v8h-2v-6h-2v-2zM3 16.438v1.563h4v2h-6v-4.563l4-1.875v-1.563h-4v-2h6v4.563zM7 22v10h-6v-2h4v-2h-4v-2h4v-2h-4v-2z"></path> </svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M0 16c3.037-5.864 9.058-9.802 16-9.802s12.963 3.938 15.953 9.703l0.047 0.1c-3.037 5.864-9.058 9.802-16 9.802s-12.963-3.938-15.953-9.703l-0.047-0.1zM16 22.531c3.607 0 6.531-2.924 6.531-6.531s-2.924-6.531-6.531-6.531v0c-3.607 0-6.531 2.924-6.531 6.531s2.924 6.531 6.531 6.531v0zM16 19.265c-1.804 0-3.265-1.461-3.265-3.265s1.461-3.265 3.265-3.265v0c1.804 0 3.265 1.461 3.265 3.265s-1.461 3.265-3.265 3.265v0z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M7.024 13.003c3.862 0 6.993 3.131 6.993 6.993s-3.131 6.993-6.993 6.993-6.993-3.131-6.993-6.993l-0.031-0.999c0-7.724 6.262-13.986 13.986-13.986v3.996c-2.668 0-5.177 1.039-7.064 2.926-0.363 0.363-0.695 0.75-0.994 1.156 0.357-0.056 0.723-0.086 1.096-0.086zM25.007 13.003c3.862 0 6.993 3.131 6.993 6.993s-3.131 6.993-6.993 6.993-6.993-3.131-6.993-6.993l-0.031-0.999c0-7.724 6.262-13.986 13.986-13.986v3.996c-2.668 0-5.177 1.039-7.064 2.926-0.363 0.363-0.695 0.75-0.994 1.156 0.357-0.056 0.723-0.086 1.096-0.086z"></path> </svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M4.571 16c0 6.312 5.117 11.429 11.429 11.429s11.429-5.117 11.429-11.429v0c0-6.312-5.117-11.429-11.429-11.429s-11.429 5.117-11.429 11.429v0z"></path> <path d="M16 30.857c-8.229 0-14.933-6.705-14.933-14.933s6.705-14.933 14.933-14.933 15.010 6.705 15.010 15.010c0 8.152-6.705 14.857-15.010 14.857zM16 0c-8.838 0-16 7.162-16 16s7.162 16 16 16 16-7.162 16-16-7.162-16-16-16z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M19.583 9.75q-8.667 1.25-13.375 6.625t-6.208 12.958q6.417-9.083 19.583-9.083v7.25l12.417-12.417-12.417-12.417v7.083z"></path> </svg>'
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M32 16v2h-7.328c0.86 1.203 1.328 2.584 1.328 4 0 2.215-1.146 4.345-3.143 5.843-1.855 1.391-4.29 2.157-6.857 2.157s-5.002-0.766-6.857-2.157c-1.998-1.498-3.143-3.628-3.143-5.843h4c0 2.168 2.748 4 6 4s6-1.832 6-4c0-2.168-2.748-4-6-4h-16v-2h9.36c-0.073-0.052-0.146-0.104-0.217-0.157-1.998-1.498-3.143-3.628-3.143-5.843s1.146-4.345 3.143-5.843c1.855-1.391 4.29-2.157 6.857-2.157s5.002 0.766 6.857 2.157c1.997 1.498 3.143 3.628 3.143 5.843h-4c0-2.168-2.748-4-6-4s-6 1.832-6 4c0 2.168 2.748 4 6 4 2.468 0 4.814 0.709 6.64 2h9.36z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M9.846 26.462v-3.692c0-0.346-0.269-0.615-0.615-0.615h-6.154c-0.346 0-0.615 0.269-0.615 0.615v3.692c0 0.346 0.269 0.615 0.615 0.615h6.154c0.346 0 0.615-0.269 0.615-0.615zM9.846 19.077v-3.692c0-0.346-0.269-0.615-0.615-0.615h-6.154c-0.346 0-0.615 0.269-0.615 0.615v3.692c0 0.346 0.269 0.615 0.615 0.615h6.154c0.346 0 0.615-0.269 0.615-0.615zM19.692 26.462v-3.692c0-0.346-0.269-0.615-0.615-0.615h-6.154c-0.346 0-0.615 0.269-0.615 0.615v3.692c0 0.346 0.269 0.615 0.615 0.615h6.154c0.346 0 0.615-0.269 0.615-0.615zM9.846 11.692v-3.692c0-0.346-0.269-0.615-0.615-0.615h-6.154c-0.346 0-0.615 0.269-0.615 0.615v3.692c0 0.346 0.269 0.615 0.615 0.615h6.154c0.346 0 0.615-0.269 0.615-0.615zM19.692 19.077v-3.692c0-0.346-0.269-0.615-0.615-0.615h-6.154c-0.346 0-0.615 0.269-0.615 0.615v3.692c0 0.346 0.269 0.615 0.615 0.615h6.154c0.346 0 0.615-0.269 0.615-0.615zM29.538 26.462v-3.692c0-0.346-0.269-0.615-0.615-0.615h-6.154c-0.346 0-0.615 0.269-0.615 0.615v3.692c0 0.346 0.269 0.615 0.615 0.615h6.154c0.346 0 0.615-0.269 0.615-0.615zM19.692 11.692v-3.692c0-0.346-0.269-0.615-0.615-0.615h-6.154c-0.346 0-0.615 0.269-0.615 0.615v3.692c0 0.346 0.269 0.615 0.615 0.615h6.154c0.346 0 0.615-0.269 0.615-0.615zM29.538 19.077v-3.692c0-0.346-0.269-0.615-0.615-0.615h-6.154c-0.346 0-0.615 0.269-0.615 0.615v3.692c0 0.346 0.269 0.615 0.615 0.615h6.154c0.346 0 0.615-0.269 0.615-0.615zM29.538 11.692v-3.692c0-0.346-0.269-0.615-0.615-0.615h-6.154c-0.346 0-0.615 0.269-0.615 0.615v3.692c0 0.346 0.269 0.615 0.615 0.615h6.154c0.346 0 0.615-0.269 0.615-0.615zM32 5.538v20.923c0 1.692-1.385 3.077-3.077 3.077h-25.846c-1.692 0-3.077-1.385-3.077-3.077v-20.923c0-1.692 1.385-3.077 3.077-3.077h25.846c1.692 0 3.077 1.385 3.077 3.077z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg version=1.1 xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M25.75 16q1.083 0 1.875-0.75t0.792-1.917-0.792-1.917-1.875-0.75-1.875 0.75-0.792 1.917 0.792 1.917 1.875 0.75zM20.417 8.917q1.083 0 1.875-0.792t0.792-1.875-0.792-1.875-1.875-0.792-1.875 0.792-0.792 1.875 0.792 1.875 1.875 0.792zM11.583 8.917q1.083 0 1.875-0.792t0.792-1.875-0.792-1.875-1.875-0.792-1.875 0.792-0.792 1.875 0.792 1.875 1.875 0.792zM6.25 16q1.083 0 1.875-0.75t0.792-1.917-0.792-1.917-1.875-0.75-1.875 0.75-0.792 1.917 0.792 1.917 1.875 0.75zM16 0q6.583 0 11.292 4.167t4.708 10.083q0 3.667-2.625 6.25t-6.292 2.583h-3.083q-1.167 0-1.917 0.792t-0.75 1.875q0 0.917 0.667 1.75t0.667 1.833q0 1.167-0.75 1.917t-1.917 0.75q-6.667 0-11.333-4.667t-4.667-11.333 4.667-11.333 11.333-4.667z"></path> </svg> '
    },
    function (e, t) {
      e.exports =
        '<svg xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 32 32"> <path d="M12.417 9.75q8.667 1.25 13.375 6.625t6.208 12.958q-6.417-9.083-19.583-9.083v7.25l-12.417-12.417 12.417-12.417v7.083z"></path> </svg> '
    },
    function (e, t, n) {
      "use strict"
      n.r(t)
      var r,
        i,
        o = n(26),
        a = n(1),
        s = n(8),
        l = function (e) {
          return "sv" === e.currentMode
            ? Object(s.a)(
                (e.sv.element.textContent + "\n").replace(/\n\n$/, "\n")
              )
            : "wysiwyg" === e.currentMode
            ? e.lute.VditorDOM2Md(e.wysiwyg.element.innerHTML)
            : "ir" === e.currentMode
            ? e.lute.VditorIRDOM2Md(e.ir.element.innerHTML)
            : ""
        },
        c = n(5),
        d = (function () {
          function e() {
            ;(this.element = document.createElement("div")),
              (this.element.className = "vditor-devtools"),
              (this.element.innerHTML =
                '<div class="vditor-reset--error"></div><div style="height: 100%;"></div>')
          }
          return (
            (e.prototype.renderEchart = function (e) {
              var t = this
              "block" === e.devtools.element.style.display &&
                Object(c.a)(
                  e.options.cdn + "/dist/js/echarts/echarts.min.js",
                  "vditorEchartsScript"
                ).then(function () {
                  t.ASTChart ||
                    (t.ASTChart = echarts.init(
                      e.devtools.element.lastElementChild
                    ))
                  try {
                    ;(t.element.lastElementChild.style.display = "block"),
                      (t.element.firstElementChild.innerHTML = ""),
                      t.ASTChart.setOption({
                        series: [
                          {
                            data: JSON.parse(e.lute.RenderEChartsJSON(l(e))),
                            initialTreeDepth: -1,
                            label: {
                              align: "left",
                              fontSize: 12,
                              offset: [9, 12],
                              position: "top",
                              verticalAlign: "middle",
                            },
                            lineStyle: {
                              color: "#4285f4",
                              type: "curve",
                            },
                            orient: "vertical",
                            roam: !0,
                            type: "tree",
                          },
                        ],
                        toolbox: {
                          bottom: 25,
                          emphasis: {
                            iconStyle: {
                              color: "#4285f4",
                            },
                          },
                          feature: {
                            restore: {
                              show: !0,
                            },
                            saveAsImage: {
                              show: !0,
                            },
                          },
                          right: 15,
                          show: !0,
                        },
                      }),
                      t.ASTChart.resize()
                  } catch (e) {
                    ;(t.element.lastElementChild.style.display = "none"),
                      (t.element.firstElementChild.innerHTML = e)
                  }
                })
            }),
            e
          )
        })(),
        u = n(2),
        p = function (e, t) {
          t.forEach(function (t) {
            if (e[t]) {
              var n = e[t].children[0]
              n &&
                n.classList.contains("vditor-menu--current") &&
                n.classList.remove("vditor-menu--current")
            }
          })
        },
        h = function (e, t) {
          t.forEach(function (t) {
            if (e[t]) {
              var n = e[t].children[0]
              n &&
                !n.classList.contains("vditor-menu--current") &&
                n.classList.add("vditor-menu--current")
            }
          })
        },
        f = function (e, t) {
          t.forEach(function (t) {
            if (e[t]) {
              var n = e[t].children[0]
              n &&
                n.classList.contains(a.a.CLASS_MENU_DISABLED) &&
                n.classList.remove(a.a.CLASS_MENU_DISABLED)
            }
          })
        },
        m = function (e, t) {
          t.forEach(function (t) {
            if (e[t]) {
              var n = e[t].children[0]
              n &&
                !n.classList.contains(a.a.CLASS_MENU_DISABLED) &&
                n.classList.add(a.a.CLASS_MENU_DISABLED)
            }
          })
        },
        v = function (e, t) {
          t.forEach(function (t) {
            e[t] && e[t] && (e[t].style.display = "none")
          })
        },
        g = function (e, t) {
          t.forEach(function (t) {
            e[t] && e[t] && (e[t].style.display = "block")
          })
        },
        b = function (e, t, n) {
          t.includes("subToolbar") &&
            (e.toolbar.element
              .querySelectorAll(".vditor-hint")
              .forEach(function (e) {
                ;(n && e.isEqualNode(n)) || (e.style.display = "none")
              }),
            e.toolbar.elements.emoji &&
              (e.toolbar.elements.emoji.lastElementChild.style.display =
                "none")),
            t.includes("hint") && (e.hint.element.style.display = "none"),
            e.wysiwyg.popover &&
              t.includes("popover") &&
              (e.wysiwyg.popover.style.display = "none")
        },
        y = function (e, t, n, r) {
          n.addEventListener(Object(u.a)(), function (r) {
            r.preventDefault(),
              r.stopPropagation(),
              n.classList.contains(a.a.CLASS_MENU_DISABLED) ||
                (e.toolbar.element
                  .querySelectorAll(".vditor-hint--current")
                  .forEach(function (e) {
                    e.classList.remove("vditor-hint--current")
                  }),
                "block" === t.style.display
                  ? (t.style.display = "none")
                  : (b(
                      e,
                      ["subToolbar", "hint", "popover"],
                      n.parentElement.parentElement
                    ),
                    n.classList.contains("vditor-tooltipped") ||
                      n.classList.add("vditor-hint--current"),
                    (t.style.display = "block"),
                    e.toolbar.element.getBoundingClientRect().right -
                      n.getBoundingClientRect().right <
                    250
                      ? t.classList.add("vditor-panel--left")
                      : t.classList.remove("vditor-panel--left")))
          })
        },
        w = n(3),
        E = n(6),
        M = n(0),
        S = function (e) {
          clearTimeout(e.ir.hlToolbarTimeoutId),
            (e.ir.hlToolbarTimeoutId = window.setTimeout(function () {
              if (
                "false" !== e.ir.element.getAttribute("contenteditable") &&
                Object(M.e)(e.ir.element)
              ) {
                p(e.toolbar.elements, a.a.EDIT_TOOLBARS),
                  f(e.toolbar.elements, a.a.EDIT_TOOLBARS)
                var t = Object(M.b)(e.ir.element),
                  n = t.startContainer
                3 === t.startContainer.nodeType &&
                  (n = t.startContainer.parentElement),
                  n.classList.contains("vditor-reset") &&
                    (n = n.childNodes[t.startOffset]),
                  Object(E.a)(n) && h(e.toolbar.elements, ["headings"]),
                  Object(w.f)(n, "BLOCKQUOTE") &&
                    h(e.toolbar.elements, ["quote"]),
                  Object(w.d)(n, "data-type", "a") &&
                    h(e.toolbar.elements, ["link"]),
                  Object(w.d)(n, "data-type", "em") &&
                    h(e.toolbar.elements, ["italic"]),
                  Object(w.d)(n, "data-type", "strong") &&
                    h(e.toolbar.elements, ["bold"]),
                  Object(w.d)(n, "data-type", "s") &&
                    h(e.toolbar.elements, ["strike"]),
                  Object(w.d)(n, "data-type", "code") &&
                    (m(e.toolbar.elements, [
                      "headings",
                      "bold",
                      "italic",
                      "strike",
                      "line",
                      "quote",
                      "list",
                      "ordered-list",
                      "check",
                      "code",
                      "upload",
                      "link",
                      "table",
                      "record",
                    ]),
                    h(e.toolbar.elements, ["inline-code"])),
                  Object(w.d)(n, "data-type", "code-block") &&
                    (m(e.toolbar.elements, [
                      "headings",
                      "bold",
                      "italic",
                      "strike",
                      "line",
                      "quote",
                      "list",
                      "ordered-list",
                      "check",
                      "code",
                      "inline-code",
                      "upload",
                      "link",
                      "table",
                      "record",
                    ]),
                    h(e.toolbar.elements, ["code"])),
                  Object(w.f)(n, "TABLE") && m(e.toolbar.elements, ["table"])
                var r = Object(w.f)(n, "LI")
                r
                  ? (r.classList.contains("vditor-task")
                      ? h(e.toolbar.elements, ["check"])
                      : "OL" === r.parentElement.tagName
                      ? h(e.toolbar.elements, ["ordered-list"])
                      : "UL" === r.parentElement.tagName &&
                        h(e.toolbar.elements, ["list"]),
                    f(e.toolbar.elements, ["outdent", "indent"]))
                  : m(e.toolbar.elements, ["outdent", "indent"])
              }
            }, 200))
        },
        O = n(4),
        k = function (e, t) {
          void 0 === t &&
            (t = {
              enableAddUndoStack: !0,
              enableHint: !1,
              enableInput: !0,
            })
          var n = l(e)
          e.options.counter.enable && e.counter.render(e, n),
            "function" == typeof e.options.input &&
              t.enableInput &&
              e.options.input(n, e.preview.element),
            t.enableHint && e.hint.render(e),
            e.options.cache.enable &&
              (localStorage.setItem(e.options.cache.id, n),
              e.options.cache.after && e.options.cache.after(n)),
            e.preview.render(e),
            t.enableAddUndoStack && e.undo.addToUndoStack(e),
            e.devtools && e.devtools.renderEchart(e)
        },
        x = function (e, t, n, r) {
          void 0 === r &&
            (r = {
              enableAddUndoStack: !0,
              enableHint: !1,
              enableInput: !0,
            })
          var i = t.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n"),
            o = "",
            a = '<span><br><span style="display: none">\n</span></span>',
            l = !0
          i.forEach(function (e, t) {
            "" !== e && (l = !1),
              (t === i.length - 1 && "" === e) ||
                (o += e
                  ? "<span>" +
                    Object(s.a)(
                      e.replace(/&/g, "&amp;").replace(/</g, "&lt;")
                    ) +
                    "</span>" +
                    a
                  : a)
          }),
            i.length <= 2 && l
              ? (e.sv.element.innerHTML = "")
              : (e.sv.element.innerHTML = o || a),
            n && Object(M.g)(n.start, n.end, e.sv.element),
            k(e, {
              enableAddUndoStack: r.enableAddUndoStack,
              enableHint: r.enableHint,
              enableInput: r.enableInput,
            })
        },
        L = function (e, t, n, r, i) {
          void 0 === r && (r = !1), void 0 === i && (i = !1)
          var o = Object(M.b)(e.sv.element),
            a = Object(M.c)(e.sv.element, o),
            s = l(e)
          if (o.collapsed || (!o.collapsed && r)) {
            var c = t + n
            x(e, s.substring(0, a.start) + c + s.substring(a.end), {
              end: a.start + t.length,
              start: a.start + t.length,
            })
          } else {
            var d = s.substring(a.start, a.end)
            if (
              i &&
              s.substring(a.start - t.length, a.start) === t &&
              s.substring(a.end, a.end + n.length) === n
            )
              x(
                e,
                s.substring(0, a.start - t.length) +
                  d +
                  s.substring(a.end + n.length),
                {
                  end: a.start - t.length + d.length,
                  start: a.start - t.length,
                }
              )
            else {
              c = t + d + n
              x(e, s.substring(0, a.start) + c + s.substring(a.end), {
                end: a.start + t.length + d.length,
                start: a.start + t.length,
              })
            }
          }
        },
        T = function (e) {
          switch (e.currentMode) {
            case "ir":
              return e.ir.element
            case "wysiwyg":
              return e.wysiwyg.element
            case "sv":
              return e.sv.element
          }
        },
        _ = function (e, t) {
          e.options.upload.setHeaders &&
            (e.options.upload.headers = e.options.upload.setHeaders()),
            e.options.upload.headers &&
              Object.keys(e.options.upload.headers).forEach(function (n) {
                t.setRequestHeader(n, e.options.upload.headers[n])
              })
        },
        j = function () {
          ;(this.isUploading = !1),
            (this.element = document.createElement("div")),
            (this.element.className = "vditor-upload")
        },
        C = function (e, t, n) {
          for (var r, i = [], o = t.length, a = 0; a < o; a++) {
            var s = t[a]
            s instanceof DataTransferItem && (s = s.getAsFile()), i.push(s)
          }
          if (e.options.upload.handler)
            return "string" == typeof (r = e.options.upload.handler(i))
              ? void e.tip.show(r)
              : void 0
          if (!e.options.upload.url || !e.upload)
            return (
              n && (n.value = ""),
              void e.tip.show("please config: options.upload.url")
            )
          if (
            (e.options.upload.file && (i = e.options.upload.file(i)),
            e.options.upload.validate) &&
            "string" == typeof (r = e.options.upload.validate(i))
          )
            return void e.tip.show(r)
          var l = T(e)
          e.upload.range = Object(M.b)(l)
          var c = (function (e, t) {
            e.tip.hide()
            for (
              var n = [],
                r = "",
                i = "",
                o = e.options.lang,
                a = function (a, s) {
                  var l = t[s],
                    c = !0
                  l.name ||
                    ((r += "<li>" + O.a[o].nameEmpty + "</li>"), (c = !1)),
                    l.size > e.options.upload.max &&
                      ((r +=
                        "<li>" +
                        l.name +
                        " " +
                        O.a[o].over +
                        " " +
                        e.options.upload.max / 1024 / 1024 +
                        "M</li>"),
                      (c = !1))
                  var d = l.name.lastIndexOf("."),
                    u = l.name.substr(d),
                    p = e.options.upload.filename(l.name.substr(0, d)) + u
                  if (e.options.upload.accept) {
                    var h = !1
                    e.options.upload.accept.split(",").forEach(function (e) {
                      var t = e.trim()
                      0 === t.indexOf(".")
                        ? u === t && (h = !0)
                        : l.type.split("/")[0] === t.split("/")[0] && (h = !0)
                    }),
                      h ||
                        ((r +=
                          "<li>" +
                          l.name +
                          " " +
                          O.a[o].fileTypeError +
                          "</li>"),
                        (c = !1))
                  }
                  c &&
                    (n.push(l),
                    (i += "<li>" + p + " " + O.a[o].uploading + "</li>"))
                },
                s = t.length,
                l = 0;
              l < s;
              l++
            )
              a(0, l)
            return e.tip.show("<ul>" + r + i + "</ul>"), n
          })(e, i)
          if (0 !== c.length) {
            var d = new FormData()
            for (a = 0, o = c.length; a < o; a++) d.append("file[]", c[a])
            for (
              var u = e.options.upload.extraData, p = 0, h = Object.keys(u);
              p < h.length;
              p++
            ) {
              var f = h[p]
              d.append(f, u[f])
            }
            var m = new XMLHttpRequest()
            m.open("POST", e.options.upload.url),
              e.options.upload.token &&
                m.setRequestHeader("X-Upload-Token", e.options.upload.token),
              e.options.upload.withCredentials && (m.withCredentials = !0),
              _(e, m),
              (e.upload.isUploading = !0),
              l.setAttribute("contenteditable", "false"),
              (m.onreadystatechange = function () {
                if (m.readyState === XMLHttpRequest.DONE) {
                  if (
                    ((e.upload.isUploading = !1),
                    n && (n.value = ""),
                    l.setAttribute("contenteditable", "true"),
                    200 === m.status)
                  )
                    if (e.options.upload.success)
                      e.options.upload.success(l, m.responseText)
                    else {
                      var r = m.responseText
                      e.options.upload.format &&
                        (r = e.options.upload.format(t, m.responseText)),
                        (function (e, t) {
                          T(t).focus()
                          var n = JSON.parse(e),
                            r = ""
                          1 === n.code && (r = "" + n.msg),
                            n.data.errFiles &&
                              n.data.errFiles.length > 0 &&
                              ((r = "<ul><li>" + r + "</li>"),
                              n.data.errFiles.forEach(function (e) {
                                var n = e.lastIndexOf("."),
                                  i =
                                    t.options.upload.filename(e.substr(0, n)) +
                                    e.substr(n)
                                r +=
                                  "<li>" +
                                  i +
                                  " " +
                                  O.a[t.options.lang].uploadError +
                                  "</li>"
                              }),
                              (r += "</ul>")),
                            r ? t.tip.show(r) : t.tip.hide()
                          var i = ""
                          Object.keys(n.data.succMap).forEach(function (e) {
                            var r = n.data.succMap[e],
                              o = e.lastIndexOf("."),
                              a = e.substr(o),
                              s = t.options.upload.filename(e.substr(0, o)) + a
                            ".wav" === (a = a.toLowerCase()) ||
                            ".mp3" === a ||
                            ".ogg" === a
                              ? "wysiwyg" === t.currentMode
                                ? (i +=
                                    '<div class="vditor-wysiwyg__block" data-type="html-block"\n data-block="0"><pre><code>&lt;audio controls="controls" src="' +
                                    r +
                                    '"&gt;&lt;/audio&gt;</code></pre>')
                                : (i +=
                                    '<audio controls="controls" src="' +
                                    r +
                                    '"></audio>\n')
                              : ".apng" === a ||
                                ".bmp" === a ||
                                ".gif" === a ||
                                ".ico" === a ||
                                ".cur" === a ||
                                ".jpg" === a ||
                                ".jpeg" === a ||
                                ".jfif" === a ||
                                ".pjp" === a ||
                                ".pjpeg" === a ||
                                ".png" === a ||
                                ".svg" === a ||
                                ".webp" === a
                              ? "wysiwyg" === t.currentMode
                                ? (i += '<img alt="' + s + '" src="' + r + '">')
                                : (i += "![" + s + "](" + r + ")\n")
                              : "wysiwyg" === t.currentMode
                              ? (i += '<a href="' + r + '">' + s + "</a>")
                              : (i += "[" + s + "](" + r + ")\n")
                          }),
                            Object(M.h)(t.upload.range),
                            "sv" !== t.currentMode
                              ? document.execCommand("insertHTML", !1, i)
                              : L(t, i, "", !0),
                            (t.upload.range = getSelection()
                              .getRangeAt(0)
                              .cloneRange())
                        })(r, e)
                    }
                  else
                    e.options.upload.error
                      ? e.options.upload.error(m.responseText)
                      : e.tip.show(m.responseText)
                  e.upload.element.style.display = "none"
                }
              }),
              (m.upload.onprogress = function (t) {
                if (t.lengthComputable) {
                  var n = (t.loaded / t.total) * 100
                  ;(e.upload.element.style.display = "block"),
                    (e.upload.element.style.width = n + "%")
                }
              }),
              m.send(d)
          } else n && (n.value = "")
        },
        A = n(10),
        N = n(11),
        H = n(12),
        D = n(13),
        R = n(14),
        I = n(15),
        P = n(16),
        B = n(17),
        q = function (e, t, n) {
          void 0 === n && (n = "sv")
          var r = document.createElement("div")
          r.innerHTML = e
          var i = !1
          1 === r.childElementCount &&
            r.lastElementChild.style.fontFamily.indexOf("monospace") > -1 &&
            (i = !0)
          var o = r.querySelectorAll("pre")
          if (
            (1 === r.childElementCount &&
              1 === o.length &&
              "vditor-wysiwyg" !== o[0].className &&
              "vditor-textarea" !== o[0].className &&
              (i = !0),
            0 === e.indexOf('\n<p class="p1">') && (i = !0),
            i)
          ) {
            var a = t || e
            return /\n/.test(a) || 1 === o.length
              ? "wysiwyg" === n
                ? '<div class="vditor-wysiwyg__block" data-block="0" data-type="code-block"><pre><code>' +
                  a.replace(/&/g, "&amp;").replace(/</g, "&lt;") +
                  "<wbr></code></pre></div>"
                : "ir" === n
                ? "```\n" +
                  a.replace(/&/g, "&amp;").replace(/</g, "&lt;") +
                  "\n```"
                : "```\n" + a + "\n```"
              : "wysiwyg" === n
              ? "<code>" +
                a.replace(/&/g, "&amp;").replace(/</g, "&lt;") +
                "</code><wbr>"
              : "`" + a + "`"
          }
          return !1
        },
        z = function (e, t) {
          if (e) {
            var n = e.querySelector("code")
            if (n) {
              var r = n.className.replace("language-", "")
              if ("abc" === r) Object(A.a)(e, t.options.cdn)
              else if ("mermaid" === r)
                Object(P.a)(
                  e,
                  ".vditor-" + t.currentMode + "__preview .language-mermaid",
                  t.options.cdn
                )
              else if ("echarts" === r) Object(N.a)(e, t.options.cdn)
              else if ("mindmap" === r) Object(B.a)(e, t.options.cdn)
              else if ("graphviz" === r) Object(D.a)(e, t.options.cdn)
              else if ("math" === r) {
                var i = "div"
                "SPAN" === e.tagName && (i = "span"),
                  (e.innerHTML =
                    '<code class="language-math"><' +
                    i +
                    ' class="vditor-math">' +
                    e.innerHTML +
                    "</" +
                    i +
                    "></code>"),
                  Object(I.a)(e.parentElement, {
                    cdn: t.options.cdn,
                    math: t.options.preview.math,
                  })
              } else
                Object(R.a)(
                  Object.assign({}, t.options.preview.hljs, {
                    enable: !0,
                  }),
                  e,
                  t.options.cdn
                ),
                  Object(H.a)(e, t.options.lang)
              e.setAttribute("data-render", "1")
            }
          }
        },
        U = function (e, t) {
          void 0 === t &&
            (t = {
              enableAddUndoStack: !0,
              enableHint: !1,
              enableInput: !0,
            }),
            t.enableHint && e.hint.render(e),
            clearTimeout(e.wysiwyg.afterRenderTimeoutId),
            (e.wysiwyg.afterRenderTimeoutId = window.setTimeout(function () {
              if (!e.wysiwyg.composingLock || !Object(u.e)()) {
                var n = l(e)
                "function" == typeof e.options.input &&
                  t.enableInput &&
                  e.options.input(n),
                  e.options.counter.enable && e.counter.render(e, n),
                  e.options.cache.enable &&
                    (localStorage.setItem(e.options.cache.id, n),
                    e.options.cache.after && e.options.cache.after(n)),
                  e.devtools && e.devtools.renderEchart(e),
                  t.enableAddUndoStack && e.wysiwygUndo.addToUndoStack(e)
              }
            }, 800))
        },
        F = n(27),
        K = n.n(F),
        V = n(30),
        W = n.n(V),
        J = n(31),
        Z = n.n(J),
        G = n(32),
        X = n.n(G),
        Q = n(33),
        $ = n.n(Q),
        Y = n(34),
        ee = n.n(Y),
        te = function (e, t) {
          return Object(M.e)(e, t) ? getSelection().toString() : ""
        },
        ne = function (e, t) {
          var n = Object(u.f)(e).split("-"),
            r = n.length > 2 && ("shift" === n[1] || "⇧" === n[1]),
            i = (r ? n[2] : n[1]) || "-"
          return (
            !r ||
              "-" !== i ||
              (!Object(u.d)() && /Mac/.test(navigator.platform)) ||
              (i = "_"),
            !(
              !Object(u.c)(t) ||
              t.key.toLowerCase() !== i.toLowerCase() ||
              t.altKey ||
              !((!r && !t.shiftKey) || (r && t.shiftKey))
            )
          )
        },
        re = function (e, t) {
          for (var n = e.start - 1, r = !1; !r && n > -1; )
            "\n" === t.charAt(n) && t.length !== n + 1
              ? (n++, (r = !0))
              : 0 === n
              ? (r = !0)
              : n--
          for (var i = e.end, o = !1; !o && i <= t.length; )
            "\n" === t.charAt(i)
              ? (i++, (o = !0))
              : i === t.length
              ? (o = !0)
              : i++
          return {
            end: Math.min(i, t.length),
            start: Math.max(0, n),
          }
        },
        ie = function (e, t, n) {
          var r = new DOMParser().parseFromString(t, "text/html")
          r.body && (t = r.body.innerHTML)
          var i = q(t, n)
          return (
            i ||
            (e.lute.SetJSRenderers({
              renderers: {
                HTML2Md: {
                  renderLinkDest: function (t) {
                    var r = t.TokensStr()
                    if (
                      34 === t.__internal_object__.Parent.Type &&
                      r &&
                      -1 === r.indexOf("file://") &&
                      e.options.upload.linkToImgUrl &&
                      void 0 !== n
                    ) {
                      var i = new XMLHttpRequest()
                      i.open("POST", e.options.upload.linkToImgUrl),
                        _(e, i),
                        (i.onreadystatechange = function () {
                          if (i.readyState === XMLHttpRequest.DONE)
                            if (200 === i.status) {
                              var t = JSON.parse(i.responseText)
                              if (0 !== t.code) return void e.tip.show(t.msg)
                              !(function (e, t) {
                                var n = 0,
                                  r = 0
                                if (
                                  (Array.from(t).some(function (i, o) {
                                    if (
                                      (r = i.textContent.indexOf(e)) > -1 &&
                                      3 === t[o].childNodes[0].nodeType
                                    )
                                      return (n = o), !0
                                  }),
                                  !(r < 0))
                                ) {
                                  var i = document.createRange()
                                  i.setStart(t[n].childNodes[0], r),
                                    i.setEnd(t[n].childNodes[0], r + e.length),
                                    Object(M.h)(i)
                                }
                              })(t.data.originalURL, e.sv.element.childNodes),
                                L(e, t.data.url, "", !0)
                            } else e.tip.show(i.responseText)
                        }),
                        i.send(
                          JSON.stringify({
                            url: r,
                          })
                        )
                    }
                    return [t.TokensStr(), Lute.WalkStop]
                  },
                },
              },
            }),
            e.lute.HTML2Md(t))
          )
        },
        oe = n(9),
        ae = function (e) {
          "dark" === e.options.theme
            ? e.element.classList.add("vditor--dark")
            : e.element.classList.remove("vditor--dark")
        },
        se = function (e) {
          var t = window.innerWidth <= a.a.MOBILE_WIDTH ? 10 : 35
          if ("none" !== e.wysiwyg.element.parentElement.style.display) {
            var n =
              (e.wysiwyg.element.parentElement.clientWidth -
                e.options.preview.maxWidth) /
              2
            e.wysiwyg.element.style.padding = "10px " + Math.max(t, n) + "px"
          }
          if ("none" !== e.ir.element.parentElement.style.display) {
            n =
              (e.ir.element.parentElement.clientWidth -
                e.options.preview.maxWidth) /
              2
            e.ir.element.style.padding = "10px " + Math.max(t, n) + "px"
          }
          ;("block" === e.preview.element.style.display &&
            "sv" !== e.currentMode) ||
            (e.toolbar.element.style.paddingLeft =
              Math.max(
                5,
                parseInt(
                  e[e.currentMode].element.style.paddingLeft || "0",
                  10
                ) + e.outline.element.offsetWidth
              ) + "px")
        },
        le = function (e) {
          if (e.options.typewriterMode) {
            var t = window.innerHeight
            "number" == typeof e.options.height &&
              ((t = e.options.height),
              "number" == typeof e.options.minHeight &&
                (t = Math.max(t, e.options.minHeight)),
              (t = Math.min(window.innerHeight, t))),
              e.element.classList.contains("vditor--fullscreen") &&
                (t = window.innerHeight),
              e[e.currentMode].element.style.setProperty(
                "--editor-bottom",
                (t - e.toolbar.element.offsetHeight) / 2 + "px"
              )
          }
        },
        ce = function (e, t) {
          le(e),
            window.addEventListener("resize", function () {
              se(e), le(e)
            })
          var n = e.options.cache.enable
            ? localStorage.getItem(e.options.cache.id)
            : ""
          return (
            (e.options.cache.enable && n) ||
              (e.options.value
                ? (n = e.options.value)
                : e.originalInnerHTML
                ? (n = ie(e, e.originalInnerHTML))
                : e.options.cache.enable || (n = "")),
            n || ""
          )
        },
        de = function (e, t, n) {
          void 0 === n && (n = !0)
          var r = e.wysiwyg.element
          ;(r.innerHTML = e.lute.Md2VditorDOM(t)),
            r
              .querySelectorAll(".vditor-wysiwyg__preview[data-render='2']")
              .forEach(function (t) {
                z(t, e),
                  t.previousElementSibling.setAttribute("style", "display:none")
              }),
            U(e, {
              enableAddUndoStack: !0,
              enableHint: !1,
              enableInput: n,
            })
        },
        ue = function (e) {
          for (var t = "", n = e.nextSibling; n; )
            3 === n.nodeType ? (t += n.textContent) : (t += n.outerHTML),
              (n = n.nextSibling)
          return t
        },
        pe = function (e) {
          for (var t = "", n = e.previousSibling; n; )
            (t = 3 === n.nodeType ? n.textContent + t : n.outerHTML + t),
              (n = n.previousSibling)
          return t
        },
        he = function (e, t) {
          Array.from(e.wysiwyg.element.childNodes).find(function (n) {
            if (3 === n.nodeType) {
              var r = document.createElement("p")
              r.setAttribute("data-block", "0"), (r.textContent = n.textContent)
              var i =
                3 === t.startContainer.nodeType
                  ? t.startOffset
                  : n.textContent.length
              return (
                n.parentNode.insertBefore(r, n),
                n.remove(),
                t.setStart(
                  r.firstChild,
                  Math.min(r.firstChild.textContent.length, i)
                ),
                t.collapse(!0),
                Object(M.h)(t),
                !0
              )
            }
            if (!n.getAttribute("data-block"))
              return (
                "P" === n.tagName
                  ? n.remove()
                  : ("DIV" === n.tagName
                      ? (t.insertNode(document.createElement("wbr")),
                        (n.outerHTML =
                          '<p data-block="0">' + n.innerHTML + "</p>"))
                      : "BR" === n.tagName
                      ? (n.outerHTML =
                          '<p data-block="0">' + n.outerHTML + "<wbr></p>")
                      : (t.insertNode(document.createElement("wbr")),
                        (n.outerHTML =
                          '<p data-block="0">' + n.outerHTML + "</p>")),
                    Object(M.f)(e.wysiwyg.element, t),
                    (t = getSelection().getRangeAt(0))),
                !0
              )
          })
        },
        fe = function (e, t, n) {
          for (
            var r = e.startContainer.parentElement,
              i = !1,
              o = "",
              s = "",
              l = (function (e) {
                var t = pe(e.startContainer),
                  n = ue(e.startContainer),
                  r = e.startContainer.textContent,
                  i = e.startOffset,
                  o = "",
                  s = ""
                return (
                  (("" !== r.substr(0, i) && r.substr(0, i) !== a.a.ZWSP) ||
                    t) &&
                    (o = "" + t + r.substr(0, i)),
                  (("" !== r.substr(i) && r.substr(i) !== a.a.ZWSP) || n) &&
                    (s = "" + r.substr(i) + n),
                  {
                    afterHTML: s,
                    beforeHTML: o,
                  }
                )
              })(e),
              c = l.beforeHTML,
              d = l.afterHTML;
            r && !i;

          ) {
            var u = r.tagName
            if (
              ("STRIKE" === u && (u = "S"),
              "I" === u && (u = "EM"),
              "B" === u && (u = "STRONG"),
              "S" === u || "STRONG" === u || "EM" === u)
            ) {
              var p = "",
                h = "",
                f = ""
              "0" !== r.parentElement.getAttribute("data-block") &&
                ((h = pe(r)), (f = ue(r))),
                (c || h) && (c = p = h + "<" + u + ">" + c + "</" + u + ">"),
                (("bold" === n && "STRONG" === u) ||
                  ("italic" === n && "EM" === u) ||
                  ("strikeThrough" === n && "S" === u)) &&
                  ((p += "" + o + a.a.ZWSP + "<wbr>" + s), (i = !0)),
                (d || f) && (p += d = "<" + u + ">" + d + "</" + u + ">" + f),
                "0" !== r.parentElement.getAttribute("data-block")
                  ? ((r = r.parentElement).innerHTML = p)
                  : ((r.outerHTML = p), (r = r.parentElement)),
                (o = "<" + u + ">" + o),
                (s = "</" + u + ">" + s)
            } else i = !0
          }
          Object(M.f)(t.wysiwyg.element, e)
        },
        me = function (e, t) {
          var n,
            r = this
          ;(this.element = document.createElement("div")),
            t.className &&
              (n = this.element.classList).add.apply(n, t.className.split(" "))
          var i = t.hotkey ? " <" + Object(u.f)(t.hotkey) + ">" : ""
          2 === t.level &&
            (i = t.hotkey ? " &lt;" + Object(u.f)(t.hotkey) + "&gt;" : "")
          var o = t.tip ? t.tip + i : O.a[e.options.lang][t.name] + i,
            s = "upload" === t.name ? "div" : "button"
          if (2 === t.level)
            this.element.innerHTML = "<" + s + ">" + o + "</" + s + ">"
          else {
            this.element.classList.add("vditor-toolbar__item")
            var l = document.createElement(s)
            l.setAttribute("data-type", t.name),
              (l.className =
                "vditor-tooltipped vditor-tooltipped__" + t.tipPosition),
              l.setAttribute("aria-label", o),
              (l.innerHTML = t.icon),
              this.element.appendChild(l)
          }
          t.prefix &&
            this.element.children[0].addEventListener(Object(u.a)(), function (
              n
            ) {
              n.preventDefault(),
                r.element.firstElementChild.classList.contains(
                  a.a.CLASS_MENU_DISABLED
                ) ||
                  ("wysiwyg" === e.currentMode
                    ? (function (e, t) {
                        if (!e.wysiwyg.composingLock) {
                          var n = !0,
                            r = !0
                          e.wysiwyg.element.querySelector("wbr") &&
                            e.wysiwyg.element.querySelector("wbr").remove()
                          var i = Object(M.b)(e.wysiwyg.element),
                            o = t.getAttribute("data-type")
                          if (t.classList.contains("vditor-menu--current"))
                            if (
                              ("strike" === o && (o = "strikeThrough"),
                              "quote" === o)
                            ) {
                              var s = Object(w.f)(
                                i.startContainer,
                                "BLOCKQUOTE"
                              )
                              s ||
                                (s =
                                  i.startContainer.childNodes[i.startOffset]),
                                s &&
                                  ((n = !1),
                                  t.classList.remove("vditor-menu--current"),
                                  i.insertNode(document.createElement("wbr")),
                                  (s.outerHTML =
                                    "" === s.innerHTML.trim()
                                      ? '<p data-block="0">' +
                                        s.innerHTML +
                                        "</p>"
                                      : s.innerHTML),
                                  Object(M.f)(e.wysiwyg.element, i))
                            } else
                              "inline-code" === o
                                ? i.collapsed
                                  ? (i.selectNode(
                                      i.startContainer.parentElement
                                    ),
                                    document.execCommand(
                                      "removeFormat",
                                      !1,
                                      ""
                                    ))
                                  : document.execCommand("removeFormat", !1, "")
                                : "link" === o
                                ? i.collapsed
                                  ? (i.selectNode(
                                      i.startContainer.parentElement
                                    ),
                                    document.execCommand("unlink", !1, ""))
                                  : document.execCommand("unlink", !1, "")
                                : "check" === o ||
                                  "list" === o ||
                                  "ordered-list" === o
                                ? (Fe(e, i, o),
                                  Object(M.f)(e.wysiwyg.element, i),
                                  (n = !1),
                                  t.classList.remove("vditor-menu--current"))
                                : ((n = !1),
                                  t.classList.remove("vditor-menu--current"),
                                  "" === i.toString()
                                    ? fe(i, e, o)
                                    : document.execCommand(o, !1, ""))
                          else if (
                            (0 === e.wysiwyg.element.childNodes.length &&
                              ((e.wysiwyg.element.innerHTML =
                                '<p data-block="0"><wbr></p>'),
                              Object(M.f)(e.wysiwyg.element, i)),
                            "quote" === o)
                          ) {
                            if (
                              ((d = Object(w.c)(i.startContainer)) ||
                                (d =
                                  i.startContainer.childNodes[i.startOffset]),
                              d)
                            ) {
                              ;(n = !1),
                                t.classList.add("vditor-menu--current"),
                                i.insertNode(document.createElement("wbr"))
                              var l = Object(w.f)(i.startContainer, "LI")
                              l && d.contains(l)
                                ? (l.innerHTML =
                                    '<blockquote data-block="0">' +
                                    l.innerHTML +
                                    "</blockquote>")
                                : (d.outerHTML =
                                    '<blockquote data-block="0">' +
                                    d.outerHTML +
                                    "</blockquote>"),
                                Object(M.f)(e.wysiwyg.element, i)
                            }
                          } else if (
                            "check" === o ||
                            "list" === o ||
                            "ordered-list" === o
                          )
                            Fe(e, i, o, !1),
                              Object(M.f)(e.wysiwyg.element, i),
                              (n = !1),
                              p(e.toolbar.elements, [
                                "check",
                                "list",
                                "ordered-list",
                              ]),
                              t.classList.add("vditor-menu--current")
                          else if ("inline-code" === o) {
                            if ("" === i.toString())
                              ((c = document.createElement(
                                "code"
                              )).textContent = a.a.ZWSP),
                                i.insertNode(c),
                                i.setStart(c.firstChild, 1),
                                i.collapse(!0),
                                Object(M.h)(i)
                            else if (3 === i.startContainer.nodeType) {
                              var c = document.createElement("code")
                              i.surroundContents(c),
                                i.insertNode(c),
                                Object(M.h)(i)
                            }
                            ;(n = !1), h(e.toolbar.elements, ["inline-code"])
                          } else if ("code" === o) {
                            var d
                            ;((c = document.createElement("div")).className =
                              "vditor-wysiwyg__block"),
                              c.setAttribute("data-type", "code-block"),
                              c.setAttribute("data-block", "0"),
                              c.setAttribute("data-marker", "```"),
                              "" === i.toString()
                                ? (c.innerHTML =
                                    "<pre><code><wbr>\n</code></pre>")
                                : ((c.innerHTML =
                                    "<pre><code>" +
                                    i.toString() +
                                    "<wbr></code></pre>"),
                                  i.deleteContents()),
                              i.insertNode(c),
                              (d = Object(w.d)(
                                i.startContainer,
                                "data-block",
                                "0"
                              )) &&
                                (d.outerHTML = e.lute.SpinVditorDOM(
                                  d.outerHTML
                                )),
                              Object(M.f)(e.wysiwyg.element, i),
                              e.wysiwyg.element
                                .querySelectorAll(
                                  ".vditor-wysiwyg__preview[data-render='2']"
                                )
                                .forEach(function (t) {
                                  z(t, e)
                                })
                          } else if ("link" === o)
                            if ("" === i.toString()) {
                              var u = document.createElement("a")
                              ;(u.innerText = a.a.ZWSP),
                                i.insertNode(u),
                                i.setStart(u.firstChild, 1),
                                i.collapse(!0),
                                Ne(e, u)
                              var f = e.wysiwyg.popover.querySelector("input")
                              ;(f.value = ""), f.focus(), (n = !1), (r = !1)
                            } else
                              (c = document.createElement("a")).setAttribute(
                                "href",
                                ""
                              ),
                                (c.innerHTML = i.toString()),
                                i.surroundContents(c),
                                i.insertNode(c),
                                Object(M.h)(i)
                          else if ("table" === o)
                            document.execCommand(
                              "insertHTML",
                              !1,
                              '<table data-block="0"><thead><tr><th>col1<wbr></th><th>col2</th><th>col3</th></tr></thead><tbody><tr><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td></tr></tbody></table>'
                            ),
                              i.selectNode(
                                e.wysiwyg.element.querySelector("wbr")
                                  .previousSibling
                              ),
                              e.wysiwyg.element.querySelector("wbr").remove(),
                              Object(M.h)(i)
                          else if ("line" === o) {
                            var m = i.startContainer
                            3 === m.nodeType &&
                              (m = i.startContainer.parentElement),
                              m.insertAdjacentHTML(
                                "afterend",
                                '<hr data-block="0"><p data-block="0">\n<wbr></p>'
                              ),
                              Object(M.f)(e.wysiwyg.element, i)
                          } else if (
                            ((n = !1),
                            t.classList.add("vditor-menu--current"),
                            "strike" === o && (o = "strikeThrough"),
                            "" !== i.toString() ||
                              ("bold" !== o &&
                                "italic" !== o &&
                                "strikeThrough" !== o))
                          )
                            document.execCommand(o, !1, "")
                          else {
                            var v = "strong"
                            "italic" === o
                              ? (v = "em")
                              : "strikeThrough" === o && (v = "s"),
                              ((c = document.createElement(v)).textContent =
                                a.a.ZWSP),
                              i.insertNode(c),
                              c.previousSibling &&
                                c.previousSibling.textContent === a.a.ZWSP &&
                                (c.previousSibling.textContent = ""),
                              i.setStart(c.firstChild, 1),
                              i.collapse(!0),
                              Object(M.h)(i)
                          }
                          n && Le(e), r && U(e)
                        }
                      })(e, r.element.children[0])
                    : "ir" === e.currentMode
                    ? pt(
                        e,
                        r.element.children[0],
                        t.prefix || "",
                        t.suffix || ""
                      )
                    : L(e, t.prefix || "", t.suffix || "", !1, !0))
            })
        },
        ve =
          ((r = function (e, t) {
            return (r =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(e, t)
          }),
          function (e, t) {
            function n() {
              this.constructor = e
            }
            r(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()))
          }),
        ge = function (e, t, n) {
          var r
          "string" != typeof n
            ? (b(e, ["subToolbar", "hint"]), n.preventDefault(), (r = l(e)))
            : (r = n),
            (e.currentMode === t && "string" != typeof n) ||
              (e.devtools && e.devtools.renderEchart(e),
              "both" === e.options.preview.mode && "sv" === t
                ? (e.preview.element.style.display = "block")
                : (e.preview.element.style.display = "none"),
              f(e.toolbar.elements, a.a.EDIT_TOOLBARS),
              p(e.toolbar.elements, a.a.EDIT_TOOLBARS),
              m(e.toolbar.elements, ["outdent", "indent"]),
              "ir" === t
                ? (v(e.toolbar.elements, ["format", "both"]),
                  g(e.toolbar.elements, [
                    "outdent",
                    "indent",
                    "outline",
                    "insert-before",
                    "insert-after",
                  ]),
                  e.irUndo.resetIcon(e),
                  (e.sv.element.style.display = "none"),
                  (e.wysiwyg.element.parentElement.style.display = "none"),
                  (e.ir.element.parentElement.style.display = "block"),
                  (e.currentMode = "ir"),
                  (e.ir.element.innerHTML = e.lute.Md2VditorIRDOM(r)),
                  ct(e, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1,
                  }),
                  se(e),
                  e.ir.element
                    .querySelectorAll(".vditor-ir__preview[data-render='2']")
                    .forEach(function (t) {
                      z(t, e)
                    }),
                  "string" != typeof n && (e.ir.element.focus(), S(e)))
                : "wysiwyg" === t
                ? (v(e.toolbar.elements, ["format", "both"]),
                  g(e.toolbar.elements, [
                    "outdent",
                    "indent",
                    "outline",
                    "insert-before",
                    "insert-after",
                  ]),
                  e.wysiwygUndo.resetIcon(e),
                  (e.sv.element.style.display = "none"),
                  (e.wysiwyg.element.parentElement.style.display = "block"),
                  (e.ir.element.parentElement.style.display = "none"),
                  (e.currentMode = "wysiwyg"),
                  se(e),
                  de(e, r, !1),
                  "string" != typeof n && (e.wysiwyg.element.focus(), Le(e)),
                  (e.wysiwyg.popover.style.display = "none"))
                : "sv" === t &&
                  (g(e.toolbar.elements, ["format", "both"]),
                  v(e.toolbar.elements, [
                    "outdent",
                    "indent",
                    "outline",
                    "insert-before",
                    "insert-after",
                  ]),
                  e.undo.resetIcon(e),
                  (e.wysiwyg.element.parentElement.style.display = "none"),
                  (e.ir.element.parentElement.style.display = "none"),
                  ("both" === e.options.preview.mode ||
                    "editor" === e.options.preview.mode) &&
                    (e.sv.element.style.display = "block"),
                  (e.currentMode = "sv"),
                  x(e, r, void 0, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1,
                  }),
                  "string" != typeof n && e.sv.element.focus(),
                  se(e)),
              "string" == typeof n && e.outline.render(e),
              le(e),
              e.toolbar.elements["edit-mode"] &&
                (e.toolbar.elements["edit-mode"]
                  .querySelectorAll("button")
                  .forEach(function (e) {
                    e.classList.remove("vditor-menu--current")
                  }),
                e.toolbar.elements["edit-mode"]
                  .querySelector('button[data-mode="' + e.currentMode + '"]')
                  .classList.add("vditor-menu--current")),
              e.outline.toggle(e, "sv" !== e.currentMode && e.options.outline))
        },
        be = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this,
              i = document.createElement("div")
            return (
              (i.className =
                "vditor-hint" + (2 === n.level ? "" : " vditor-panel--arrow")),
              (i.innerHTML =
                '<button data-mode="wysiwyg">' +
                O.a[t.options.lang].wysiwyg +
                " &lt;" +
                Object(u.f)("⌘-⌥-7") +
                '></button>\n<button data-mode="ir">' +
                O.a[t.options.lang].instantRendering +
                " &lt;" +
                Object(u.f)("⌘-⌥-8") +
                '></button>\n<button data-mode="sv">' +
                O.a[t.options.lang].splitView +
                " &lt;" +
                Object(u.f)("⌘-⌥-9") +
                "></button>"),
              r.element.appendChild(i),
              r._bindEvent(t, i, n),
              r
            )
          }
          return (
            ve(t, e),
            (t.prototype._bindEvent = function (e, t, n) {
              var r = this.element.children[0]
              y(e, t, r, n.level),
                t.children
                  .item(0)
                  .addEventListener(Object(u.a)(), function (t) {
                    ge(e, "wysiwyg", t), t.preventDefault(), t.stopPropagation()
                  }),
                t.children
                  .item(1)
                  .addEventListener(Object(u.a)(), function (t) {
                    ge(e, "ir", t), t.preventDefault(), t.stopPropagation()
                  }),
                t.children
                  .item(2)
                  .addEventListener(Object(u.a)(), function (t) {
                    ge(e, "sv", t), t.preventDefault(), t.stopPropagation()
                  })
            }),
            t
          )
        })(me),
        ye = function (e, t) {
          var n = Object(M.b)(e.wysiwyg.element),
            r = Object(w.c)(n.startContainer)
          r || (r = n.startContainer.childNodes[n.startOffset]),
            r ||
              0 !== e.wysiwyg.element.children.length ||
              (r = e.wysiwyg.element),
            r &&
              !r.classList.contains("vditor-wysiwyg__block") &&
              (n.insertNode(document.createElement("wbr")),
              "<wbr>" === r.innerHTML.trim() && (r.innerHTML = "<wbr><br>"),
              "BLOCKQUOTE" === r.tagName || r.classList.contains("vditor-reset")
                ? (r.innerHTML =
                    "<" +
                    t +
                    ' data-block="0">' +
                    r.innerHTML.trim() +
                    "</" +
                    t +
                    ">")
                : (r.outerHTML =
                    "<" +
                    t +
                    ' data-block="0">' +
                    r.innerHTML.trim() +
                    "</" +
                    t +
                    ">"),
              Object(M.f)(e.wysiwyg.element, n),
              Ge(e))
        },
        we = function (e) {
          var t = getSelection().getRangeAt(0),
            n = Object(w.c)(t.startContainer)
          n || (n = t.startContainer.childNodes[t.startOffset]),
            n &&
              (t.insertNode(document.createElement("wbr")),
              (n.outerHTML = '<p data-block="0">' + n.innerHTML + "</p>"),
              Object(M.f)(e.wysiwyg.element, t)),
            (e.wysiwyg.popover.style.display = "none")
        },
        Ee = function (e, t, n) {
          void 0 === n && (n = !0)
          var r = e.previousElementSibling,
            i = r.ownerDocument.createRange()
          "CODE" === r.tagName
            ? ((r.style.display = "inline-block"),
              n ? i.setStart(r.firstChild, 1) : i.selectNodeContents(r))
            : ((r.style.display = "block"),
              r.firstChild.firstChild ||
                r.firstChild.appendChild(document.createTextNode("")),
              i.selectNodeContents(r.firstChild)),
            n ? i.collapse(!0) : i.collapse(!1),
            Object(M.h)(i),
            e.firstElementChild.classList.contains("language-mindmap") || Oe(t)
        },
        Me = function (e, t) {
          t.addEventListener("focus", function () {
            e.options.focus && e.options.focus(l(e)), b(e, ["subToolbar"])
          })
        },
        Se = function (e, t) {
          t.addEventListener("blur", function () {
            e.options.blur && e.options.blur(l(e))
          })
        },
        Oe = function (e) {
          if (e.options.typewriterMode) {
            var t = e[e.currentMode].element,
              n = Object(M.a)(t).top
            "string" != typeof e.options.height ||
              e.element.classList.contains("vditor--fullscreen") ||
              window.scrollTo(
                window.scrollX,
                n +
                  e.element.offsetTop +
                  e.toolbar.element.offsetHeight -
                  window.innerHeight / 2 +
                  10
              ),
              ("number" == typeof e.options.height ||
                e.element.classList.contains("vditor--fullscreen")) &&
                (t.scrollTop = n + t.scrollTop - t.clientHeight / 2 + 10)
          }
        },
        ke = function (e, t) {
          t.addEventListener("keydown", function (t) {
            if (
              (!e.options.hint.at && !e.toolbar.elements.emoji) ||
              !e.hint.select(t, e)
            ) {
              if ("sv" === e.currentMode) {
                if (
                  (function (e, t) {
                    e.undo.recordFirstPosition(e)
                    var n = e.sv.element,
                      r = Object(M.c)(n),
                      i = l(e)
                    if (e.options.tab && "Tab" === t.key) {
                      t.preventDefault(), t.stopPropagation()
                      var o = re(r, i),
                        a = i.substring(o.start, o.end - 1).split("\n")
                      if (t.shiftKey) {
                        var s = 0,
                          c = !1,
                          d = a
                            .map(function (t, n) {
                              var r = t
                              return (
                                0 === t.indexOf(e.options.tab) &&
                                  (0 === n && (c = !0),
                                  s++,
                                  (r = t.replace(e.options.tab, ""))),
                                r
                              )
                            })
                            .join("\n")
                        return (
                          x(
                            e,
                            i.substring(0, o.start) +
                              d +
                              i.substring(o.end - 1),
                            {
                              end: r.end - s * e.options.tab.length,
                              start: r.start - (c ? e.options.tab.length : 0),
                            }
                          ),
                          !0
                        )
                      }
                      if (r.start === r.end) return L(e, e.options.tab, ""), !0
                      var p = a
                        .map(function (t) {
                          return e.options.tab + t
                        })
                        .join("\n")
                      return (
                        x(
                          e,
                          i.substring(0, o.start) + p + i.substring(o.end - 1),
                          {
                            end: r.end + a.length * e.options.tab.length,
                            start: r.start + e.options.tab.length,
                          }
                        ),
                        !0
                      )
                    }
                    if (!Object(u.c)(t) && !t.shiftKey && 8 === t.keyCode) {
                      if (r.start !== r.end) L(e, "", "", !0)
                      else {
                        var h = i
                            .substring(0, r.start)
                            .match(
                              /([\u{1F300}-\u{1F5FF}][\u{2000}-\u{206F}][\u{2700}-\u{27BF}]|([\u{1F900}-\u{1F9FF}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F600}-\u{1F64F}])[\u{2000}-\u{206F}][\u{2600}-\u{26FF}]|[\u{1F300}-\u{1F5FF}]|[\u{1F100}-\u{1F1FF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F200}-\u{1F2FF}]|[\u{1F900}-\u{1F9FF}]|[\u{1F000}-\u{1F02F}]|[\u{FE00}-\u{FE0F}]|[\u{1F0A0}-\u{1F0FF}]|[\u{0000}-\u{007F}][\u{20D0}-\u{20FF}]|[\u{0000}-\u{007F}][\u{FE00}-\u{FE0F}][\u{20D0}-\u{20FF}])$/u
                            ),
                          f = h ? h[0].length : 1
                        x(
                          e,
                          i.substring(0, r.start - f) + i.substring(r.start),
                          {
                            end: r.start - f,
                            start: r.start - f,
                          },
                          {
                            enableAddUndoStack: !0,
                            enableHint: !0,
                            enableInput: !0,
                          }
                        )
                      }
                      return t.preventDefault(), t.stopPropagation(), !0
                    }
                    if (
                      e.options.keymap.deleteLine &&
                      ne(e.options.keymap.deleteLine, t)
                    ) {
                      var m = re(r, i),
                        v = i.substring(0, m.start) + i.substring(m.end),
                        g = Math.min(v.length, r.start)
                      return (
                        x(e, v, {
                          end: g,
                          start: g,
                        }),
                        t.preventDefault(),
                        !0
                      )
                    }
                    if (
                      e.options.keymap.duplicate &&
                      ne(e.options.keymap.duplicate, t)
                    ) {
                      var b = i.substring(r.start, r.end)
                      if (r.start === r.end) {
                        m = re(r, i)
                        ;(b = i.substring(m.start, m.end)),
                          x(e, i.substring(0, m.end) + b + i.substring(m.end), {
                            end: r.end + b.length,
                            start: r.start + b.length,
                          })
                      } else
                        x(e, i.substring(0, r.end) + b + i.substring(r.end), {
                          end: r.end + b.length,
                          start: r.start + b.length,
                        })
                      return t.preventDefault(), !0
                    }
                    return !1
                  })(e, t)
                )
                  return
              } else if ("wysiwyg" === e.currentMode) {
                if (
                  (function (e, t) {
                    if (
                      ((e.wysiwyg.composingLock = t.isComposing), t.isComposing)
                    )
                      return !1
                    ;-1 === t.key.indexOf("Arrow") &&
                      e.wysiwygUndo.recordFirstWbr(e, t)
                    var n = Object(M.b)(e.wysiwyg.element),
                      r = n.startContainer
                    if (
                      (De(n, t),
                      ot(n),
                      "Enter" !== t.key &&
                        "Tab" !== t.key &&
                        "Backspace" !== t.key &&
                        -1 === t.key.indexOf("Arrow") &&
                        !Object(u.c)(t) &&
                        "Escape" !== t.key)
                    )
                      return !1
                    var i = Object(w.c)(r),
                      o = Object(w.f)(r, "P")
                    if (Ye(t, e, o, n)) return !0
                    if (Qe(n, e, o, t)) return !0
                    if (et(e, t, n)) return !0
                    var s = Object(w.e)(r, "vditor-wysiwyg__block")
                    if (s) {
                      if ("Escape" === t.key && 2 === s.children.length)
                        return (
                          (e.wysiwyg.popover.style.display = "none"),
                          (s.firstElementChild.style.display = "none"),
                          e.wysiwyg.element.blur(),
                          t.preventDefault(),
                          !0
                        )
                      if (
                        !Object(u.c)(t) &&
                        !t.shiftKey &&
                        t.altKey &&
                        "Enter" === t.key &&
                        "code-block" === s.getAttribute("data-type")
                      ) {
                        var l = e.wysiwyg.popover.querySelector(".vditor-input")
                        return l.focus(), l.select(), t.preventDefault(), !0
                      }
                      if ("0" === s.getAttribute("data-block")) {
                        if (tt(e, t, s.firstElementChild, n)) return !0
                        if (ze(e, t, n, s.firstElementChild, s)) return !0
                      }
                    }
                    if (nt(e, n, t, o)) return !0
                    var c = Object(w.h)(r, "BLOCKQUOTE")
                    if (c && !t.shiftKey && t.altKey && "Enter" === t.key) {
                      Object(u.c)(t) ? n.setStartBefore(c) : n.setStartAfter(c),
                        Object(M.h)(n)
                      var d = document.createElement("p")
                      return (
                        d.setAttribute("data-block", "0"),
                        (d.innerHTML = "\n"),
                        n.insertNode(d),
                        n.collapse(!0),
                        Object(M.h)(n),
                        U(e),
                        Oe(e),
                        t.preventDefault(),
                        !0
                      )
                    }
                    var p,
                      h = Object(E.a)(r)
                    if (h) {
                      if (
                        "H6" === h.tagName &&
                        r.textContent.length === n.startOffset &&
                        !Object(u.c)(t) &&
                        !t.shiftKey &&
                        !t.altKey &&
                        "Enter" === t.key
                      ) {
                        var f = document.createElement("p")
                        return (
                          (f.textContent = "\n"),
                          f.setAttribute("data-block", "0"),
                          r.parentElement.insertAdjacentElement("afterend", f),
                          n.setStart(f, 0),
                          Object(M.h)(n),
                          U(e),
                          Oe(e),
                          t.preventDefault(),
                          !0
                        )
                      }
                      var m
                      if (ne("⌘-=", t))
                        return (
                          (m = parseInt(h.tagName.substr(1), 10) - 1) > 0 &&
                            (ye(e, "h" + m), U(e)),
                          t.preventDefault(),
                          !0
                        )
                      if (ne("⌘--", t))
                        return (
                          (m = parseInt(h.tagName.substr(1), 10) + 1) < 7 &&
                            (ye(e, "h" + m), U(e)),
                          t.preventDefault(),
                          !0
                        )
                      "Backspace" !== t.key ||
                        Object(u.c)(t) ||
                        t.shiftKey ||
                        t.altKey ||
                        "" !== h.textContent ||
                        we(e)
                    }
                    if (rt(e, n, t)) return !0
                    if (
                      t.altKey &&
                      "Enter" === t.key &&
                      !Object(u.c)(t) &&
                      !t.shiftKey
                    ) {
                      var v = Object(w.f)(r, "A"),
                        g = Object(w.d)(r, "data-type", "link-ref"),
                        b = Object(w.d)(r, "data-type", "footnotes-ref")
                      if (v || g || b || (h && 2 === h.tagName.length)) {
                        var y = e.wysiwyg.popover.querySelector("input")
                        y.focus(), y.select()
                      }
                    }
                    if (
                      ne("⌘-⇧-X", t) &&
                      (p = e.wysiwyg.popover.querySelector(
                        '[data-type="remove"]'
                      ))
                    )
                      return p.click(), t.preventDefault(), !0
                    if (
                      ne("⌘-⇧-U", t) &&
                      (p = e.wysiwyg.popover.querySelector('[data-type="up"]'))
                    )
                      return p.click(), t.preventDefault(), !0
                    if (
                      ne("⌘-⇧-D", t) &&
                      (p = e.wysiwyg.popover.querySelector(
                        '[data-type="down"]'
                      ))
                    )
                      return p.click(), t.preventDefault(), !0
                    if ($e(e, n, t)) return !0
                    if (
                      !Object(u.c)(t) &&
                      t.shiftKey &&
                      !t.altKey &&
                      "Enter" === t.key
                    )
                      return (
                        ["STRONG", "S", "STRONG", "I", "EM", "B"].includes(
                          r.parentElement.tagName
                        )
                          ? n.insertNode(
                              document.createTextNode("\n" + a.a.ZWSP)
                            )
                          : n.insertNode(document.createTextNode("\n")),
                        n.collapse(!1),
                        Object(M.h)(n),
                        U(e),
                        Oe(e),
                        t.preventDefault(),
                        !0
                      )
                    if (
                      "Backspace" === t.key &&
                      !Object(u.c)(t) &&
                      !t.shiftKey &&
                      !t.altKey &&
                      "" === n.toString()
                    ) {
                      if (it(e, n, t, o)) return !0
                      if (i) {
                        if (
                          i.previousElementSibling &&
                          i.previousElementSibling.classList.contains(
                            "vditor-wysiwyg__block"
                          ) &&
                          "0" ===
                            i.previousElementSibling.getAttribute("data-block")
                        ) {
                          var S = Object(M.c)(i, n).start
                          if (
                            0 === S ||
                            (1 === S && i.innerText.startsWith(a.a.ZWSP))
                          )
                            return (
                              Ee(
                                i.previousElementSibling.lastElementChild,
                                e,
                                !1
                              ),
                              "" === i.innerHTML.trim() && (i.remove(), U(e)),
                              t.preventDefault(),
                              !0
                            )
                        }
                        var O = n.startOffset
                        if (
                          "" === n.toString() &&
                          3 === r.nodeType &&
                          "\n" === r.textContent.charAt(O - 2) &&
                          r.textContent.charAt(O - 1) !== a.a.ZWSP &&
                          ["STRONG", "S", "STRONG", "I", "EM", "B"].includes(
                            r.parentElement.tagName
                          )
                        )
                          return (
                            (r.textContent =
                              r.textContent.substring(0, O - 1) + a.a.ZWSP),
                            n.setStart(r, O),
                            n.collapse(!0),
                            U(e),
                            t.preventDefault(),
                            !0
                          )
                        r.textContent === a.a.ZWSP &&
                          1 === n.startOffset &&
                          !r.previousSibling &&
                          (function (e) {
                            for (
                              var t = e.startContainer.nextSibling;
                              t && "" === t.textContent;

                            )
                              t = t.nextSibling
                            return !(
                              !t ||
                              3 === t.nodeType ||
                              ("CODE" !== t.tagName &&
                                "math-inline" !== t.getAttribute("data-type") &&
                                "html-inline" !== t.getAttribute("data-type"))
                            )
                          })(n) &&
                          (r.textContent = ""),
                          i
                            .querySelectorAll("span.vditor-wysiwyg__block")
                            .forEach(function (e) {
                              ;(e.firstElementChild.style.display = "inline"),
                                (e.lastElementChild.style.display = "none")
                            })
                      }
                    }
                    if (
                      Object(u.d)() &&
                      1 === n.startOffset &&
                      r.textContent.indexOf(a.a.ZWSP) > -1 &&
                      3 !== r.previousSibling.nodeType &&
                      "CODE" === r.previousSibling.tagName &&
                      ("Backspace" === t.key || "ArrowLeft" === t.key)
                    )
                      return (
                        n.selectNodeContents(r.previousSibling),
                        n.collapse(!1),
                        t.preventDefault(),
                        !0
                      )
                    if (at(t, i, n)) return t.preventDefault(), !0
                    if ((Re(n, t.key), "ArrowDown" === t.key)) {
                      var k = r.nextSibling
                      k &&
                        3 !== k.nodeType &&
                        "math-inline" === k.getAttribute("data-type") &&
                        n.setStartAfter(k)
                    }
                    return !1
                  })(e, t)
                )
                  return
              } else if (
                "ir" === e.currentMode &&
                (function (e, t) {
                  if (((e.ir.composingLock = t.isComposing), t.isComposing))
                    return !1
                  ;-1 === t.key.indexOf("Arrow") &&
                    e.irUndo.recordFirstWbr(e, t)
                  var n = Object(M.b)(e.ir.element),
                    r = n.startContainer
                  if (
                    (De(n, t),
                    ot(n),
                    "Enter" !== t.key &&
                      "Tab" !== t.key &&
                      "Backspace" !== t.key &&
                      -1 === t.key.indexOf("Arrow") &&
                      !Object(u.c)(t) &&
                      "Escape" !== t.key)
                  )
                    return !1
                  var i = Object(w.d)(r, "data-newline", "1")
                  if (
                    !Object(u.c)(t) &&
                    !t.altKey &&
                    !t.shiftKey &&
                    "Enter" === t.key &&
                    i &&
                    n.startOffset < i.textContent.length
                  ) {
                    var o = i.previousElementSibling
                    o &&
                      (n.insertNode(document.createTextNode(o.textContent)),
                      n.collapse(!1))
                    var a = i.nextSibling
                    a &&
                      (n.insertNode(document.createTextNode(a.textContent)),
                      n.collapse(!0))
                  }
                  var s = Object(w.f)(r, "P")
                  if (Ye(t, e, s, n)) return !0
                  if (Qe(n, e, s, t)) return !0
                  if (nt(e, n, t, s)) return !0
                  if (
                    s &&
                    s.previousElementSibling &&
                    s.previousElementSibling.classList.contains("vditor-toc") &&
                    Ue(e, t, n, s, s.previousElementSibling)
                  )
                    return !0
                  var l = Object(w.e)(r, "vditor-ir__marker--pre")
                  if (l && "PRE" === l.tagName) {
                    var c = l.firstChild
                    if (tt(e, t, l, n)) return !0
                    if (
                      ("math-block" === c.getAttribute("data-type") ||
                        "html-block" === c.getAttribute("data-type")) &&
                      Ue(e, t, n, c, l.parentElement)
                    )
                      return !0
                    if (ze(e, t, n, c, l.parentElement)) return !0
                  }
                  var d = Object(w.d)(r, "data-type", "code-block-info")
                  if (d) {
                    if ("Enter" === t.key || "Tab" === t.key)
                      return (
                        n.selectNodeContents(d.nextElementSibling.firstChild),
                        n.collapse(!0),
                        t.preventDefault(),
                        !0
                      )
                    if ("Backspace" === t.key) {
                      var p = Object(M.c)(d).start
                      1 === p && n.setStart(r, 0),
                        2 === p && (e.hint.recentLanguage = "")
                    }
                    if (Ue(e, t, n, d, d.parentElement))
                      return b(e, ["hint"]), !0
                  }
                  var h = Object(w.f)(r, "TD") || Object(w.f)(r, "TH")
                  if (t.key.indexOf("Arrow") > -1 && h) {
                    var f = Pe(h)
                    if (f && Ue(e, t, n, h, f)) return !0
                    var m = Be(h)
                    if (m && ze(e, t, n, h, m)) return !0
                  }
                  if (et(e, t, n)) return !0
                  if (rt(e, n, t)) return !0
                  if ($e(e, n, t)) return !0
                  if (
                    "Backspace" === t.key &&
                    !Object(u.c)(t) &&
                    !t.shiftKey &&
                    !t.altKey &&
                    "" === n.toString()
                  ) {
                    if (it(e, n, t, s)) return !0
                    var v = Object(E.a)(r)
                    if (v) {
                      var g = v.firstElementChild.textContent.length
                      Object(M.c)(v).start === g &&
                        (n.setStart(v.firstElementChild.firstChild, g - 1),
                        n.collapse(!0))
                    }
                  }
                  var y = Object(w.c)(r)
                  return (
                    !(
                      ("ArrowUp" !== t.key && "ArrowDown" !== t.key) ||
                      !y ||
                      (y
                        .querySelectorAll(".vditor-ir__node")
                        .forEach(function (e) {
                          e.contains(r) ||
                            e.classList.add("vditor-ir__node--hidden")
                        }),
                      !at(t, y, n))
                    ) || (Re(n, t.key), !1)
                  )
                })(e, t)
              )
                return
              if (e.options.ctrlEnter && ne("⌘-Enter", t))
                return e.options.ctrlEnter(l(e)), void t.preventDefault()
              if (ne("⌘-Z", t)) {
                if ("sv" === e.currentMode && !e.toolbar.elements.undo)
                  return e.undo.undo(e), void t.preventDefault()
                if ("wysiwyg" === e.currentMode && !e.toolbar.elements.undo)
                  return e.wysiwygUndo.undo(e), void t.preventDefault()
                if ("ir" === e.currentMode)
                  return e.irUndo.undo(e), void t.preventDefault()
              }
              if (ne("⌘-Y", t)) {
                if ("sv" === e.currentMode && !e.toolbar.elements.redo)
                  return e.undo.redo(e), void t.preventDefault()
                if ("wysiwyg" === e.currentMode && !e.toolbar.elements.redo)
                  return e.wysiwygUndo.redo(e), void t.preventDefault()
                if ("ir" === e.currentMode)
                  return e.irUndo.redo(e), void t.preventDefault()
              }
              if ("Escape" === t.key)
                return (
                  e.options.esc && e.options.esc(l(e)),
                  "block" === e.hint.element.style.display &&
                    (e.hint.element.style.display = "none"),
                  void t.preventDefault()
                )
              if (
                Object(u.c)(t) &&
                t.altKey &&
                !t.shiftKey &&
                /^Digit[1-6]$/.test(t.code)
              ) {
                if ("wysiwyg" === e.currentMode) {
                  var n = t.code.replace("Digit", "H")
                  Object(w.f)(getSelection().getRangeAt(0).startContainer, n)
                    ? we(e)
                    : ye(e, n),
                    U(e)
                } else
                  "sv" === e.currentMode
                    ? L(
                        e,
                        "#".repeat(parseInt(t.code.replace("Digit", ""), 10)) +
                          " ",
                        "",
                        !1,
                        !0
                      )
                    : "ir" === e.currentMode &&
                      dt(
                        e,
                        "#".repeat(parseInt(t.code.replace("Digit", ""), 10)) +
                          " "
                      )
                return t.preventDefault(), !0
              }
              if (
                Object(u.c)(t) &&
                t.altKey &&
                !t.shiftKey &&
                /^Digit[7-9]$/.test(t.code)
              )
                return (
                  "Digit7" === t.code
                    ? ge(e, "wysiwyg", t)
                    : "Digit8" === t.code
                    ? ge(e, "ir", t)
                    : "Digit9" === t.code && ge(e, "sv", t),
                  !0
                )
              e.options.toolbar.find(function (n) {
                return !n.hotkey || n.toolbar
                  ? !!n.toolbar &&
                      !!n.toolbar.find(function (n) {
                        return (
                          !!n.hotkey &&
                          (ne(n.hotkey, t)
                            ? (e.toolbar.elements[
                                n.name
                              ].children[0].dispatchEvent(
                                new CustomEvent(Object(u.a)())
                              ),
                              t.preventDefault(),
                              !0)
                            : void 0)
                        )
                      })
                  : ne(n.hotkey, t)
                  ? (e.toolbar.elements[n.name].children[0].dispatchEvent(
                      new CustomEvent(Object(u.a)())
                    ),
                    t.preventDefault(),
                    !0)
                  : void 0
              })
            }
          })
        },
        xe = function (e, t) {
          e.options.select &&
            t.addEventListener("selectstart", function (n) {
              t.onmouseup = function () {
                var t = te(e[e.currentMode].element)
                t && e.options.select(t)
              }
            })
        },
        Le = function (e) {
          clearTimeout(e.wysiwyg.hlToolbarTimeoutId),
            (e.wysiwyg.hlToolbarTimeoutId = window.setTimeout(function () {
              var t
              if (
                "false" !== e.wysiwyg.element.getAttribute("contenteditable") &&
                Object(M.e)(e.wysiwyg.element)
              ) {
                p(e.toolbar.elements, a.a.EDIT_TOOLBARS),
                  f(e.toolbar.elements, a.a.EDIT_TOOLBARS)
                var n = getSelection().getRangeAt(0),
                  r = n.startContainer
                3 === n.startContainer.nodeType &&
                  (r = n.startContainer.parentElement),
                  r.classList.contains("vditor-reset") &&
                    (r = r.childNodes[n.startOffset])
                var i = Object(w.d)(r, "data-type", "footnotes-block")
                if (i)
                  return (
                    (e.wysiwyg.popover.innerHTML = ""), Ce(i, e), void Te(e, i)
                  )
                var o = Object(w.f)(r, "LI")
                o
                  ? (o.classList.contains("vditor-task")
                      ? h(e.toolbar.elements, ["check"])
                      : "OL" === o.parentElement.tagName
                      ? h(e.toolbar.elements, ["ordered-list"])
                      : "UL" === o.parentElement.tagName &&
                        h(e.toolbar.elements, ["list"]),
                    f(e.toolbar.elements, ["outdent", "indent"]))
                  : m(e.toolbar.elements, ["outdent", "indent"]),
                  Object(w.f)(r, "BLOCKQUOTE") &&
                    h(e.toolbar.elements, ["quote"]),
                  (Object(w.f)(r, "B") || Object(w.f)(r, "STRONG")) &&
                    h(e.toolbar.elements, ["bold"]),
                  (Object(w.f)(r, "I") || Object(w.f)(r, "EM")) &&
                    h(e.toolbar.elements, ["italic"]),
                  (Object(w.f)(r, "STRIKE") || Object(w.f)(r, "S")) &&
                    h(e.toolbar.elements, ["strike"])
                var s = Object(w.f)(r, "A")
                s && h(e.toolbar.elements, ["link"])
                var l = Object(w.f)(r, "TABLE"),
                  c = Object(E.a)(r)
                Object(w.f)(r, "CODE")
                  ? Object(w.f)(r, "PRE")
                    ? (m(e.toolbar.elements, [
                        "headings",
                        "bold",
                        "italic",
                        "strike",
                        "line",
                        "quote",
                        "list",
                        "ordered-list",
                        "check",
                        "code",
                        "inline-code",
                        "upload",
                        "link",
                        "table",
                        "record",
                      ]),
                      h(e.toolbar.elements, ["code"]))
                    : (m(e.toolbar.elements, [
                        "headings",
                        "bold",
                        "italic",
                        "strike",
                        "line",
                        "quote",
                        "list",
                        "ordered-list",
                        "check",
                        "code",
                        "upload",
                        "link",
                        "table",
                        "record",
                      ]),
                      h(e.toolbar.elements, ["inline-code"]))
                  : c
                  ? (m(e.toolbar.elements, ["bold"]),
                    h(e.toolbar.elements, ["headings"]))
                  : l && m(e.toolbar.elements, ["table"])
                var d = Object(w.e)(r, "vditor-toc")
                if (!d)
                  (B = Object(w.d)(r, "data-block", "0")) &&
                    (null === (t = B.previousElementSibling) || void 0 === t
                      ? void 0
                      : t.classList.contains("vditor-toc")) &&
                    (d = B.previousElementSibling)
                d && ((e.wysiwyg.popover.innerHTML = ""), Ce(d, e), Te(e, d))
                var v = Object(E.b)(r, "BLOCKQUOTE")
                if (
                  (v &&
                    ((e.wysiwyg.popover.innerHTML = ""),
                    _e(n, v, e),
                    je(n, v, e),
                    Ce(v, e),
                    Te(e, v)),
                  o &&
                    ((e.wysiwyg.popover.innerHTML = ""),
                    _e(n, o, e),
                    je(n, o, e),
                    Ce(o, e),
                    Te(e, o)),
                  l)
                ) {
                  e.wysiwyg.popover.innerHTML = ""
                  var g = function () {
                      var e = l.rows.length,
                        t = l.rows[0].cells.length,
                        n = parseInt(_.value, 10) || e,
                        r = parseInt(C.value, 10) || t
                      if (n !== e || t !== r) {
                        if (t !== r)
                          for (var i = r - t, o = 0; o < l.rows.length; o++)
                            if (i > 0)
                              for (var a = 0; a < i; a++)
                                0 === o
                                  ? l.rows[
                                      o
                                    ].lastElementChild.insertAdjacentHTML(
                                      "afterend",
                                      "<th> </th>"
                                    )
                                  : l.rows[
                                      o
                                    ].lastElementChild.insertAdjacentHTML(
                                      "afterend",
                                      "<td> </td>"
                                    )
                            else
                              for (var s = t - 1; s >= r; s--)
                                l.rows[o].cells[s].remove()
                        if (e !== n) {
                          var c = n - e
                          if (c > 0) {
                            for (var d = "<tr>", u = 0; u < r; u++)
                              d += "<td> </td>"
                            for (var p = 0; p < c; p++)
                              l.querySelector("tbody")
                                ? l
                                    .querySelector("tbody")
                                    .insertAdjacentHTML("beforeend", d)
                                : l
                                    .querySelector("thead")
                                    .insertAdjacentHTML("afterend", d + "</tr>")
                          } else
                            for (u = e - 1; u >= n; u--)
                              l.rows[u].remove(),
                                1 === l.rows.length &&
                                  l.querySelector("tbody").remove()
                        }
                      }
                    },
                    b = function (t) {
                      We(l, t),
                        "right" === t
                          ? (x.classList.remove("vditor-icon--current"),
                            L.classList.remove("vditor-icon--current"),
                            T.classList.add("vditor-icon--current"))
                          : "center" === t
                          ? (x.classList.remove("vditor-icon--current"),
                            T.classList.remove("vditor-icon--current"),
                            L.classList.add("vditor-icon--current"))
                          : (L.classList.remove("vditor-icon--current"),
                            T.classList.remove("vditor-icon--current"),
                            x.classList.add("vditor-icon--current")),
                        Object(M.h)(n),
                        U(e)
                    },
                    y = Object(w.f)(r, "TD"),
                    S = Object(w.f)(r, "TH"),
                    k = "left"
                  y
                    ? (k = y.getAttribute("align") || "left")
                    : S && (k = S.getAttribute("align") || "center")
                  var x = document.createElement("button")
                  x.setAttribute(
                    "aria-label",
                    O.a[e.options.lang].alignLeft +
                      "<" +
                      Object(u.f)("⌘-⇧-L") +
                      ">"
                  ),
                    x.setAttribute("data-type", "left"),
                    (x.innerHTML = Z.a),
                    (x.className =
                      "vditor-icon vditor-tooltipped vditor-tooltipped__n" +
                      ("left" === k ? " vditor-icon--current" : "")),
                    (x.onclick = function () {
                      b("left")
                    })
                  var L = document.createElement("button")
                  L.setAttribute(
                    "aria-label",
                    O.a[e.options.lang].alignCenter +
                      "<" +
                      Object(u.f)("⌘-⇧-C") +
                      ">"
                  ),
                    L.setAttribute("data-type", "center"),
                    (L.innerHTML = K.a),
                    (L.className =
                      "vditor-icon vditor-tooltipped vditor-tooltipped__n" +
                      ("center" === k ? " vditor-icon--current" : "")),
                    (L.onclick = function () {
                      b("center")
                    })
                  var T = document.createElement("button")
                  T.setAttribute(
                    "aria-label",
                    O.a[e.options.lang].alignRight +
                      "<" +
                      Object(u.f)("⌘-⇧-R") +
                      ">"
                  ),
                    T.setAttribute("data-type", "right"),
                    (T.innerHTML = X.a),
                    (T.className =
                      "vditor-icon vditor-tooltipped vditor-tooltipped__n" +
                      ("right" === k ? " vditor-icon--current" : "")),
                    (T.onclick = function () {
                      b("right")
                    }),
                    (J = document.createElement("span")).setAttribute(
                      "aria-label",
                      O.a[e.options.lang].row
                    ),
                    (J.className = "vditor-tooltipped vditor-tooltipped__n")
                  var _ = document.createElement("input")
                  J.appendChild(_),
                    (_.type = "number"),
                    (_.min = "1"),
                    (_.className = "vditor-input"),
                    (_.style.width = "42px"),
                    (_.style.textAlign = "center"),
                    _.setAttribute("placeholder", O.a[e.options.lang].row),
                    (_.value = l.rows.length.toString()),
                    (_.oninput = function () {
                      g()
                    }),
                    (_.onkeydown = function (e) {
                      if (!e.isComposing)
                        return "Tab" === e.key
                          ? (C.focus(), C.select(), void e.preventDefault())
                          : void 0
                    })
                  var j = document.createElement("span")
                  j.setAttribute("aria-label", O.a[e.options.lang].column),
                    (j.className = "vditor-tooltipped vditor-tooltipped__n")
                  var C = document.createElement("input")
                  j.appendChild(C),
                    (C.type = "number"),
                    (C.min = "1"),
                    (C.className = "vditor-input"),
                    (C.style.width = "42px"),
                    (C.style.textAlign = "center"),
                    C.setAttribute("placeholder", O.a[e.options.lang].column),
                    (C.value = l.rows[0].cells.length.toString()),
                    (C.oninput = function () {
                      g()
                    }),
                    (C.onkeydown = function (e) {
                      if (!e.isComposing)
                        return "Tab" === e.key
                          ? (_.focus(), _.select(), void e.preventDefault())
                          : void 0
                    }),
                    _e(n, l, e),
                    je(n, l, e),
                    Ce(l, e),
                    e.wysiwyg.popover.insertAdjacentElement("beforeend", x),
                    e.wysiwyg.popover.insertAdjacentElement("beforeend", L),
                    e.wysiwyg.popover.insertAdjacentElement("beforeend", T),
                    e.wysiwyg.popover.insertAdjacentElement("beforeend", J),
                    e.wysiwyg.popover.insertAdjacentHTML("beforeend", " x "),
                    e.wysiwyg.popover.insertAdjacentElement("beforeend", j),
                    Te(e, l)
                }
                var A = Object(w.d)(r, "data-type", "link-ref")
                if (A) {
                  e.wysiwyg.popover.innerHTML = ""
                  var N = function () {
                    "" !== H.value.trim() && (A.textContent = H.value),
                      "" !== R.value.trim() &&
                        A.setAttribute("data-link-label", R.value)
                  }
                  ;(J = document.createElement("span")).setAttribute(
                    "aria-label",
                    O.a[e.options.lang].textIsNotEmpty
                  ),
                    (J.className = "vditor-tooltipped vditor-tooltipped__n")
                  var H = document.createElement("input")
                  J.appendChild(H),
                    (H.className = "vditor-input"),
                    H.setAttribute(
                      "placeholder",
                      O.a[e.options.lang].textIsNotEmpty
                    ),
                    (H.style.width = "120px"),
                    (H.value = A.textContent),
                    (H.oninput = function () {
                      N()
                    }),
                    (H.onkeydown = function (t) {
                      Ae(e.wysiwyg.element, A, t, R)
                    })
                  var D = document.createElement("span")
                  D.setAttribute("aria-label", O.a[e.options.lang].linkRef),
                    (D.className = "vditor-tooltipped vditor-tooltipped__n")
                  var R = document.createElement("input")
                  D.appendChild(R),
                    (R.className = "vditor-input"),
                    R.setAttribute("placeholder", O.a[e.options.lang].linkRef),
                    (R.value = A.getAttribute("data-link-label")),
                    (R.oninput = function () {
                      N()
                    }),
                    (R.onkeydown = function (t) {
                      Ae(e.wysiwyg.element, A, t, H)
                    }),
                    Ce(A, e),
                    e.wysiwyg.popover.insertAdjacentElement("beforeend", J),
                    e.wysiwyg.popover.insertAdjacentElement("beforeend", D),
                    Te(e, A)
                }
                var I = Object(w.d)(r, "data-type", "footnotes-ref")
                if (I) {
                  ;(e.wysiwyg.popover.innerHTML = ""),
                    (J = document.createElement("span")).setAttribute(
                      "aria-label",
                      O.a[e.options.lang].footnoteRef +
                        "<" +
                        Object(u.f)("⌥-Enter") +
                        ">"
                    ),
                    (J.className = "vditor-tooltipped vditor-tooltipped__n")
                  var P = document.createElement("input")
                  J.appendChild(P),
                    (P.className = "vditor-input"),
                    P.setAttribute(
                      "placeholder",
                      O.a[e.options.lang].footnoteRef +
                        "<" +
                        Object(u.f)("⌥-Enter") +
                        ">"
                    ),
                    (P.style.width = "120px"),
                    (P.value = I.getAttribute("data-footnotes-label")),
                    (P.oninput = function () {
                      "" !== P.value.trim() &&
                        I.setAttribute("data-footnotes-label", P.value)
                    }),
                    (P.onkeydown = function (e) {
                      e.isComposing ||
                        Object(u.c)(e) ||
                        e.shiftKey ||
                        !e.altKey ||
                        "Enter" !== e.key ||
                        (n.selectNodeContents(I),
                        n.collapse(!1),
                        Object(M.h)(n),
                        e.preventDefault())
                    }),
                    Ce(I, e),
                    e.wysiwyg.popover.insertAdjacentElement("beforeend", J),
                    Te(e, I)
                }
                var B,
                  q = Object(w.e)(r, "vditor-wysiwyg__block")
                if (q && q.getAttribute("data-type").indexOf("block") > -1) {
                  if (
                    ((e.wysiwyg.popover.innerHTML = ""),
                    _e(n, q, e),
                    je(n, q, e),
                    Ce(q, e),
                    "code-block" === q.getAttribute("data-type"))
                  ) {
                    var F = document.createElement("span")
                    F.setAttribute(
                      "aria-label",
                      O.a[e.options.lang].language +
                        "<" +
                        Object(u.f)("⌥-Enter") +
                        ">"
                    ),
                      (F.className = "vditor-tooltipped vditor-tooltipped__n")
                    var V = document.createElement("input")
                    F.appendChild(V)
                    var W = q.firstElementChild.firstElementChild
                    ;(V.className = "vditor-input"),
                      V.setAttribute(
                        "placeholder",
                        O.a[e.options.lang].language +
                          "<" +
                          Object(u.f)("⌥-Enter") +
                          ">"
                      ),
                      (V.value =
                        W.className.indexOf("language-") > -1
                          ? W.className.split("-")[1].split(" ")[0]
                          : e.hint.recentLanguage),
                      (V.oninput = function () {
                        ;(W.className = "language-" + V.value),
                          q.lastElementChild.classList.contains(
                            "vditor-wysiwyg__preview"
                          ) &&
                            ((q.lastElementChild.innerHTML =
                              q.firstElementChild.innerHTML),
                            z(q.lastElementChild, e)),
                          U(e)
                      }),
                      (V.onkeydown = function (t) {
                        t.isComposing ||
                          (Object(u.c)(t) ||
                            t.shiftKey ||
                            !t.altKey ||
                            "Enter" !== t.key ||
                            (n.setStart(W.firstChild, 0),
                            n.collapse(!0),
                            Object(M.h)(n)),
                          e.hint.select(t, e))
                      }),
                      (V.onkeyup = function (t) {
                        if (
                          !t.isComposing &&
                          "Enter" !== t.key &&
                          "ArrowUp" !== t.key &&
                          "ArrowDown" !== t.key
                        ) {
                          var n = [],
                            r = V.value.substring(0, V.selectionStart)
                          a.a.CODE_LANGUAGES.forEach(function (e) {
                            e.indexOf(r.toLowerCase()) > -1 &&
                              n.push({
                                html: e,
                                value: e,
                              })
                          }),
                            e.hint.genHTML(n, r, e),
                            t.preventDefault()
                        }
                      }),
                      e.wysiwyg.popover.insertAdjacentElement("beforeend", F)
                  }
                  Te(e, q)
                } else
                  q ||
                    e.wysiwyg.element
                      .querySelectorAll(".vditor-wysiwyg__preview")
                      .forEach(function (e) {
                        e.previousElementSibling.style.display = "none"
                      }),
                    (q = void 0)
                if (c) {
                  var J
                  ;(e.wysiwyg.popover.innerHTML = ""),
                    (J = document.createElement("span")).setAttribute(
                      "aria-label",
                      "ID<" + Object(u.f)("⌥-Enter") + ">"
                    ),
                    (J.className = "vditor-tooltipped vditor-tooltipped__n")
                  var G = document.createElement("input")
                  J.appendChild(G),
                    (G.className = "vditor-input"),
                    G.setAttribute(
                      "placeholder",
                      "ID<" + Object(u.f)("⌥-Enter") + ">"
                    ),
                    (G.style.width = "120px"),
                    (G.value = c.getAttribute("data-id") || ""),
                    (G.oninput = function () {
                      c.setAttribute("data-id", G.value)
                    }),
                    (G.onkeydown = function (e) {
                      e.isComposing ||
                        Object(u.c)(e) ||
                        e.shiftKey ||
                        !e.altKey ||
                        "Enter" !== e.key ||
                        (n.selectNodeContents(c),
                        n.collapse(!1),
                        Object(M.h)(n),
                        e.preventDefault())
                    }),
                    _e(n, c, e),
                    je(n, c, e),
                    Ce(c, e),
                    e.wysiwyg.popover.insertAdjacentElement("beforeend", J),
                    Te(e, c)
                }
                if (
                  (s && Ne(e, s), !(v || o || l || q || s || A || I || c || d))
                )
                  (B = Object(w.d)(r, "data-block", "0")) &&
                  B.parentElement.isEqualNode(e.wysiwyg.element)
                    ? ((e.wysiwyg.popover.innerHTML = ""),
                      _e(n, B, e),
                      je(n, B, e),
                      Ce(B, e),
                      Te(e, B))
                    : (e.wysiwyg.popover.style.display = "none")
                e.wysiwyg.element
                  .querySelectorAll('span[data-type="backslash"] > span')
                  .forEach(function (e) {
                    e.style.display = "none"
                  })
                var Q = Object(w.d)(n.startContainer, "data-type", "backslash")
                Q && (Q.querySelector("span").style.display = "inline")
              }
            }, 200))
        },
        Te = function (e, t) {
          var n = t,
            r = Object(w.f)(t, "TABLE")
          r && (n = r),
            (e.wysiwyg.popover.style.left = "0"),
            (e.wysiwyg.popover.style.display = "block"),
            (e.wysiwyg.popover.style.top =
              Math.max(-8, n.offsetTop - 21 - e.wysiwyg.element.scrollTop) +
              "px"),
            (e.wysiwyg.popover.style.left =
              Math.min(
                n.offsetLeft,
                e.wysiwyg.element.clientWidth - e.wysiwyg.popover.clientWidth
              ) + "px"),
            e.wysiwyg.popover.setAttribute(
              "data-top",
              (n.offsetTop - 21).toString()
            )
        },
        _e = function (e, t, n) {
          var r = t.previousElementSibling
          if (
            r &&
            (t.parentElement.isEqualNode(n.wysiwyg.element) ||
              "LI" === t.tagName)
          ) {
            var i = document.createElement("button")
            i.setAttribute("data-type", "up"),
              i.setAttribute(
                "aria-label",
                O.a[n.options.lang].up + "<" + Object(u.f)("⌘-⇧-U") + ">"
              ),
              (i.innerHTML = ee.a),
              (i.className =
                "vditor-icon vditor-tooltipped vditor-tooltipped__n"),
              (i.onclick = function () {
                e.insertNode(document.createElement("wbr")),
                  r.insertAdjacentElement("beforebegin", t),
                  Object(M.f)(n.wysiwyg.element, e),
                  U(n),
                  Le(n),
                  Oe(n)
              }),
              n.wysiwyg.popover.insertAdjacentElement("beforeend", i)
          }
        },
        je = function (e, t, n) {
          var r = t.nextElementSibling
          if (
            r &&
            (t.parentElement.isEqualNode(n.wysiwyg.element) ||
              "LI" === t.tagName)
          ) {
            var i = document.createElement("button")
            i.setAttribute("data-type", "down"),
              i.setAttribute(
                "aria-label",
                O.a[n.options.lang].down + "<" + Object(u.f)("⌘-⇧-D") + ">"
              ),
              (i.innerHTML = W.a),
              (i.className =
                "vditor-icon vditor-tooltipped vditor-tooltipped__n"),
              (i.onclick = function () {
                e.insertNode(document.createElement("wbr")),
                  r.insertAdjacentElement("afterend", t),
                  Object(M.f)(n.wysiwyg.element, e),
                  U(n),
                  Le(n),
                  Oe(n)
              }),
              n.wysiwyg.popover.insertAdjacentElement("beforeend", i)
          }
        },
        Ce = function (e, t) {
          if (
            1 !== t.wysiwyg.element.children.length ||
            "P" !== t.wysiwyg.element.firstElementChild.tagName
          ) {
            var n = document.createElement("button")
            n.setAttribute("data-type", "remove"),
              n.setAttribute(
                "aria-label",
                O.a[t.options.lang].remove + "<" + Object(u.f)("⌘-⇧-X") + ">"
              ),
              (n.innerHTML = $.a),
              (n.className =
                "vditor-icon vditor-tooltipped vditor-tooltipped__n"),
              (n.onclick = function () {
                var n = Object(M.b)(t.wysiwyg.element)
                n.setStartAfter(e), Object(M.h)(n), e.remove(), U(t), Le(t)
              }),
              t.wysiwyg.popover.insertAdjacentElement("beforeend", n)
          }
        },
        Ae = function (e, t, n, r) {
          if (!n.isComposing) {
            if ("Tab" === n.key)
              return r.focus(), r.select(), void n.preventDefault()
            if (
              !Object(u.c)(n) &&
              !n.shiftKey &&
              n.altKey &&
              "Enter" === n.key
            ) {
              var i = Object(M.b)(e)
              t.insertAdjacentHTML("afterend", a.a.ZWSP),
                i.setStartAfter(t.nextSibling),
                i.collapse(!0),
                Object(M.h)(i),
                n.preventDefault()
            }
          }
        },
        Ne = function (e, t) {
          e.wysiwyg.popover.innerHTML = ""
          var n = function () {
            "" !== i.value.trim() && (t.innerHTML = i.value),
              t.setAttribute("href", a.value),
              t.setAttribute("title", l.value)
          }
          t.querySelectorAll("[data-marker]").forEach(function (e) {
            e.removeAttribute("data-marker")
          })
          var r = document.createElement("span")
          r.setAttribute("aria-label", O.a[e.options.lang].textIsNotEmpty),
            (r.className = "vditor-tooltipped vditor-tooltipped__n")
          var i = document.createElement("input")
          r.appendChild(i),
            (i.className = "vditor-input"),
            i.setAttribute("placeholder", O.a[e.options.lang].textIsNotEmpty),
            (i.style.width = "120px"),
            (i.value = t.innerHTML || ""),
            (i.oninput = function () {
              n()
            }),
            (i.onkeydown = function (n) {
              Ae(e.wysiwyg.element, t, n, a)
            })
          var o = document.createElement("span")
          o.setAttribute("aria-label", O.a[e.options.lang].link),
            (o.className = "vditor-tooltipped vditor-tooltipped__n")
          var a = document.createElement("input")
          o.appendChild(a),
            (a.className = "vditor-input"),
            a.setAttribute("placeholder", O.a[e.options.lang].link),
            (a.value = t.getAttribute("href") || ""),
            (a.oninput = function () {
              n()
            }),
            (a.onkeydown = function (n) {
              Ae(e.wysiwyg.element, t, n, l)
            })
          var s = document.createElement("span")
          s.setAttribute("aria-label", O.a[e.options.lang].tooltipText),
            (s.className = "vditor-tooltipped vditor-tooltipped__n")
          var l = document.createElement("input")
          s.appendChild(l),
            (l.className = "vditor-input"),
            l.setAttribute("placeholder", O.a[e.options.lang].tooltipText),
            (l.style.width = "60px"),
            (l.value = t.getAttribute("title") || ""),
            (l.oninput = function () {
              n()
            }),
            (l.onkeydown = function (n) {
              Ae(e.wysiwyg.element, t, n, i)
            }),
            Ce(t, e),
            e.wysiwyg.popover.insertAdjacentElement("beforeend", r),
            e.wysiwyg.popover.insertAdjacentElement("beforeend", o),
            e.wysiwyg.popover.insertAdjacentElement("beforeend", s),
            Te(e, t)
        },
        He = function (e, t) {
          return (
            Object.defineProperty
              ? Object.defineProperty(e, "raw", {
                  value: t,
                })
              : (e.raw = t),
            e
          )
        },
        De = function (e, t) {
          if (
            !(
              "Enter" === t.key ||
              "Tab" === t.key ||
              "Backspace" === t.key ||
              t.key.indexOf("Arrow") > -1 ||
              Object(u.c)(t) ||
              "Escape" === t.key ||
              t.shiftKey ||
              t.altKey
            )
          ) {
            var n = Object(w.f)(e.startContainer, "P")
            if (n && 0 === Object(M.c)(n, e).start) {
              var r = document.createTextNode(a.a.ZWSP)
              e.insertNode(r), e.setStartAfter(r)
            }
          }
        },
        Re = function (e, t) {
          if ("ArrowDown" === t || "ArrowUp" === t) {
            var n = Object(w.d)(e.startContainer, "data-type", "math-inline")
            n &&
              ("ArrowDown" === t && e.setStartAfter(n.parentElement),
              "ArrowUp" === t && e.setStartBefore(n.parentElement))
          }
        },
        Ie = function (e, t) {
          var n = Object(M.b)(e[e.currentMode].element),
            r = Object(w.c)(n.startContainer)
          r &&
            (r.insertAdjacentHTML(
              t,
              '<p data-block="0">' + a.a.ZWSP + "<wbr>\n</p>"
            ),
            Object(M.f)(e[e.currentMode].element, n),
            "ir" === e.currentMode ? S(e) : Le(e),
            Xe(e))
        },
        Pe = function (e) {
          var t = Object(w.f)(e, "TABLE")
          return !(!t || !t.rows[0].cells[0].isSameNode(e)) && t
        },
        Be = function (e) {
          var t = Object(w.f)(e, "TABLE")
          return (
            !(
              !t ||
              !t.lastElementChild.lastElementChild.lastElementChild.isSameNode(
                e
              )
            ) && t
          )
        },
        qe = function (e, t, n) {
          void 0 === n && (n = !0)
          var r = e.previousElementSibling
          return (
            r ||
              (r = e.parentElement.previousElementSibling
                ? e.parentElement.previousElementSibling.lastElementChild
                : "TBODY" === e.parentElement.parentElement.tagName &&
                  e.parentElement.parentElement.previousElementSibling
                ? e.parentElement.parentElement.previousElementSibling
                    .lastElementChild.lastElementChild
                : null),
            r && (t.selectNodeContents(r), n || t.collapse(!1), Object(M.h)(t)),
            r
          )
        },
        ze = function (e, t, n, r, i) {
          var o = Object(M.c)(r, n)
          if (
            ("ArrowDown" === t.key &&
              -1 === r.textContent.trimRight().substr(o.start).indexOf("\n")) ||
            ("ArrowRight" === t.key &&
              o.start >= r.textContent.trimRight().length)
          ) {
            var s = i.nextElementSibling
            return (
              !s ||
              (s && ("TABLE" === s.tagName || s.getAttribute("data-type")))
                ? (i.insertAdjacentHTML(
                    "afterend",
                    '<p data-block="0">' + a.a.ZWSP + "<wbr></p>"
                  ),
                  Object(M.f)(e[e.currentMode].element, n))
                : (n.selectNodeContents(s), n.collapse(!0), Object(M.h)(n)),
              t.preventDefault(),
              !0
            )
          }
          return !1
        },
        Ue = function (e, t, n, r, i) {
          var o = Object(M.c)(r, n)
          if (
            ("ArrowUp" === t.key &&
              -1 === r.textContent.substr(o.start).indexOf("\n")) ||
            (("ArrowLeft" === t.key || "Backspace" === t.key) && 0 === o.start)
          ) {
            var s = i.previousElementSibling
            return (
              !s ||
              (s && ("TABLE" === s.tagName || s.getAttribute("data-type")))
                ? (i.insertAdjacentHTML(
                    "beforebegin",
                    '<p data-block="0">' + a.a.ZWSP + "<wbr></p>"
                  ),
                  Object(M.f)(e.ir.element, n))
                : (n.selectNodeContents(s), n.collapse(!1), Object(M.h)(n)),
              t.preventDefault(),
              !0
            )
          }
          return !1
        },
        Fe = function (e, t, n, r) {
          void 0 === r && (r = !0)
          var i = Object(w.f)(t.startContainer, "LI")
          if (
            (e[e.currentMode].element
              .querySelectorAll("wbr")
              .forEach(function (e) {
                e.remove()
              }),
            t.insertNode(document.createElement("wbr")),
            r && i)
          ) {
            for (
              var o = "", a = 0;
              a < i.parentElement.childElementCount;
              a++
            ) {
              var s = i.parentElement.children[a].querySelector("input")
              s && s.remove(),
                (o +=
                  '<p data-block="0">' +
                  i.parentElement.children[a].innerHTML.trimLeft() +
                  "</p>")
            }
            i.parentElement.insertAdjacentHTML("beforebegin", o),
              i.parentElement.remove()
          } else if (i)
            if ("check" === n)
              i.parentElement.querySelectorAll("li").forEach(function (e) {
                e.insertAdjacentHTML(
                  "afterbegin",
                  '<input type="checkbox" />' +
                    (0 === e.textContent.indexOf(" ") ? "" : " ")
                ),
                  e.classList.add("vditor-task")
              })
            else {
              i.querySelector("input") &&
                i.parentElement.querySelectorAll("li").forEach(function (e) {
                  e.querySelector("input").remove(),
                    e.classList.remove("vditor-task")
                })
              var l = void 0
              ;((l =
                "list" === n
                  ? document.createElement("ul")
                  : document.createElement("ol")).innerHTML =
                i.parentElement.innerHTML),
                i.parentElement.parentNode.replaceChild(l, i.parentElement)
            }
          else {
            var c = Object(w.d)(t.startContainer, "data-block", "0")
            c ||
              (e[e.currentMode].element.querySelector("wbr").remove(),
              ((c = e[e.currentMode].element.querySelector("p")).innerHTML =
                "<wbr>")),
              "check" === n
                ? (c.insertAdjacentHTML(
                    "beforebegin",
                    '<ul data-block="0"><li class="vditor-task"><input type="checkbox" /> ' +
                      c.innerHTML +
                      "</li></ul>"
                  ),
                  c.remove())
                : "list" === n
                ? (c.insertAdjacentHTML(
                    "beforebegin",
                    '<ul data-block="0"><li>' + c.innerHTML + "</li></ul>"
                  ),
                  c.remove())
                : "ordered-list" === n &&
                  (c.insertAdjacentHTML(
                    "beforebegin",
                    '<ol data-block="0"><li>' + c.innerHTML + "</li></ol>"
                  ),
                  c.remove())
          }
        },
        Ke = function (e, t, n) {
          if (t && t.previousElementSibling) {
            e[e.currentMode].element
              .querySelectorAll("wbr")
              .forEach(function (e) {
                e.remove()
              }),
              n.insertNode(document.createElement("wbr"))
            var r = t.parentElement,
              i = t.getAttribute("data-marker")
            1 !== i.length && (i = "1" + i.slice(-1)),
              t.previousElementSibling.insertAdjacentHTML(
                "beforeend",
                "<" +
                  r.tagName +
                  ' data-block="0"><li data-marker="' +
                  i +
                  '">' +
                  t.innerHTML +
                  "</li></" +
                  r.tagName +
                  ">"
              ),
              t.remove(),
              "wysiwyg" === e.currentMode
                ? (r.outerHTML = e.lute.SpinVditorDOM(r.outerHTML))
                : (r.outerHTML = e.lute.SpinVditorIRDOM(r.outerHTML)),
              Object(M.f)(e[e.currentMode].element, n)
            var o = Object(w.b)(n.startContainer)
            o &&
              o
                .querySelectorAll(
                  ".vditor-" + e.currentMode + "__preview[data-render='2']"
                )
                .forEach(function (t) {
                  z(t, e),
                    "wysiwyg" === e.currentMode &&
                      t.previousElementSibling.setAttribute(
                        "style",
                        "display:none"
                      )
                }),
              Xe(e),
              "wysiwyg" === e.currentMode && Le(e)
          } else e[e.currentMode].element.focus()
        },
        Ve = function (e, t, n, r) {
          var i = Object(w.f)(t.parentElement, "LI")
          if (i) {
            e[e.currentMode].element
              .querySelectorAll("wbr")
              .forEach(function (e) {
                e.remove()
              }),
              n.insertNode(document.createElement("wbr"))
            var o = t.parentElement,
              a = o.cloneNode(),
              s = !1,
              l = ""
            o.querySelectorAll("li").forEach(function (e) {
              s &&
                ((l += e.outerHTML),
                e.nextElementSibling || e.previousElementSibling
                  ? e.remove()
                  : e.parentElement.remove()),
                e.isSameNode(t) && (s = !0)
            }),
              i.insertAdjacentElement("afterend", t),
              l && ((a.innerHTML = l), t.insertAdjacentElement("beforeend", a)),
              "wysiwyg" === e.currentMode
                ? (r.outerHTML = e.lute.SpinVditorDOM(r.outerHTML))
                : (r.outerHTML = e.lute.SpinVditorIRDOM(r.outerHTML)),
              Object(M.f)(e[e.currentMode].element, n)
            var c = Object(w.b)(n.startContainer)
            c &&
              c
                .querySelectorAll(
                  ".vditor-" + e.currentMode + "__preview[data-render='2']"
                )
                .forEach(function (t) {
                  z(t, e),
                    "wysiwyg" === e.currentMode &&
                      t.previousElementSibling.setAttribute(
                        "style",
                        "display:none"
                      )
                }),
              Xe(e),
              "wysiwyg" === e.currentMode && Le(e)
          } else e[e.currentMode].element.focus()
        },
        We = function (e, t) {
          for (
            var n = getSelection().getRangeAt(0).startContainer.parentElement,
              r = e.rows[0].cells.length,
              i = e.rows.length,
              o = 0,
              a = 0;
            a < i;
            a++
          )
            for (var s = 0; s < r; s++)
              if (e.rows[a].cells[s].isSameNode(n)) {
                o = s
                break
              }
          for (var l = 0; l < i; l++)
            e.rows[l].cells[o].setAttribute("align", t)
        },
        Je = function (e) {
          var t = e.trimRight().split("\n").pop()
          return (
            "" !== t &&
            ("" === t.replace(/ |-/g, "") ||
              "" === t.replace(/ |_/g, "") ||
              "" === t.replace(/ |\*/g, "")) &&
            t.replace(/ /g, "").length > 2 &&
            !(
              t.indexOf("-") > -1 &&
              -1 === t.trimLeft().indexOf(" ") &&
              e.trimRight().split("\n").length > 1
            ) &&
            0 !== t.indexOf("    ") &&
            0 !== t.indexOf("\t")
          )
        },
        Ze = function (e) {
          var t = e.trimRight().split("\n")
          return (
            0 !== (e = t.pop()).indexOf("    ") &&
            0 !== e.indexOf("\t") &&
            "" !== (e = e.trimLeft()) &&
            0 !== t.length &&
            ("" === e.replace(/-/g, "") || "" === e.replace(/=/g, ""))
          )
        },
        Ge = function (e) {
          var t = e[e.currentMode].element
          e.outline.render(e)
          var n = t.querySelector('[data-type="toc-block"]')
          if (n) {
            var r = ""
            Array.from(t.children).forEach(function (t) {
              if (Object(E.a)(t)) {
                var n = parseInt(t.tagName.substring(1), 10),
                  i = new Array(2 * (n - 1)).fill("&emsp;").join("")
                "ir" === e.currentMode
                  ? (r +=
                      i +
                      '<span data-type="toc-h">' +
                      t.textContent.substring(n + 1).trim() +
                      "</span><br>")
                  : (r +=
                      i +
                      '<span data-type="toc-h">' +
                      t.textContent.trim() +
                      "</span><br>")
              }
            }),
              (n.innerHTML = r || "[ToC]")
          }
        },
        Xe = function (e) {
          "wysiwyg" === e.currentMode ? U(e) : "ir" === e.currentMode && ct(e)
        },
        Qe = function (e, t, n, r) {
          var i = e.startContainer,
            o = Object(w.f)(i, "LI")
          if (o) {
            if (
              !Object(u.c)(r) &&
              !r.altKey &&
              "Enter" === r.key &&
              !r.shiftKey &&
              n &&
              o.contains(n) &&
              n.nextElementSibling
            )
              return (
                o &&
                  !o.textContent.endsWith("\n") &&
                  o.insertAdjacentText("beforeend", "\n"),
                e.insertNode(document.createTextNode("\n")),
                e.collapse(!1),
                Xe(t),
                r.preventDefault(),
                !0
              )
            if (
              !(
                Object(u.c)(r) ||
                r.shiftKey ||
                r.altKey ||
                "Backspace" !== r.key ||
                o.previousElementSibling ||
                "" !== e.toString() ||
                0 !== Object(M.c)(o, e).start
              )
            )
              return (
                o.nextElementSibling
                  ? (o.parentElement.insertAdjacentHTML(
                      "beforebegin",
                      '<p data-block="0"><wbr>' + o.innerHTML + "</p>"
                    ),
                    o.remove())
                  : (o.parentElement.outerHTML =
                      '<p data-block="0"><wbr>' + o.innerHTML + "</p>"),
                Object(M.f)(t[t.currentMode].element, e),
                Xe(t),
                r.preventDefault(),
                !0
              )
            if (!Object(u.c)(r) && !r.altKey && "Tab" === r.key) {
              var a = !1
              if (
                (((0 === e.startOffset &&
                  ((3 === i.nodeType && !i.previousSibling) ||
                    (3 !== i.nodeType && "LI" === i.nodeName))) ||
                  (o.classList.contains("vditor-task") &&
                    1 === e.startOffset &&
                    3 !== i.previousSibling.nodeType &&
                    "INPUT" === i.previousSibling.tagName)) &&
                  (a = !0),
                a)
              )
                return (
                  r.shiftKey ? Ve(t, o, e, o.parentElement) : Ke(t, o, e),
                  r.preventDefault(),
                  !0
                )
            }
          }
          return !1
        },
        $e = function (e, t, n) {
          if (e.options.tab && "Tab" === n.key)
            return (
              n.shiftKey ||
                ("" === t.toString()
                  ? (t.insertNode(document.createTextNode(e.options.tab)),
                    t.collapse(!1))
                  : (t.extractContents(),
                    t.insertNode(document.createTextNode(e.options.tab)),
                    t.collapse(!1))),
              Xe(e),
              n.preventDefault(),
              !0
            )
        },
        Ye = function (e, t, n, r) {
          if (n) {
            if (!Object(u.c)(e) && !e.altKey && "Enter" === e.key) {
              var o = String.raw(
                  i || (i = He(["", ""], ["", ""])),
                  n.textContent
                )
                  .replace(/\\\|/g, "")
                  .trim(),
                a = o.split("|")
              if (o.startsWith("|") && o.endsWith("|") && a.length > 3) {
                var s = a
                  .map(function () {
                    return "---"
                  })
                  .join("|")
                return (
                  (s =
                    n.textContent + s.substring(3, s.length - 3) + "\n|<wbr>"),
                  (n.outerHTML = t.lute.SpinVditorDOM(s)),
                  Object(M.f)(t[t.currentMode].element, r),
                  Xe(t),
                  Oe(t),
                  e.preventDefault(),
                  !0
                )
              }
              if (Je(n.innerHTML)) {
                var l = "",
                  c = n.innerHTML.trimRight().split("\n")
                return (
                  c.length > 1 &&
                    (c.pop(),
                    (l = '<p data-block="0">' + c.join("\n") + "</p>")),
                  n.insertAdjacentHTML(
                    "afterend",
                    l + '<hr data-block="0"><p data-block="0">\n<wbr></p>'
                  ),
                  n.remove(),
                  Object(M.f)(t[t.currentMode].element, r),
                  Xe(t),
                  Oe(t),
                  e.preventDefault(),
                  !0
                )
              }
              if (Ze(n.innerHTML))
                return (
                  (n.outerHTML = t.lute.SpinVditorDOM(
                    n.innerHTML + '<p data-block="0">\n<wbr></p>'
                  )),
                  Object(M.f)(t[t.currentMode].element, r),
                  Xe(t),
                  Oe(t),
                  e.preventDefault(),
                  !0
                )
            }
            if (
              n.previousElementSibling &&
              "Backspace" === e.key &&
              !Object(u.c)(e) &&
              !e.altKey &&
              !e.shiftKey &&
              n.textContent.trimRight().split("\n").length > 1 &&
              0 === Object(M.c)(n, r).start
            ) {
              var d = Object(w.a)(n.previousElementSibling)
              return (
                d.textContent.endsWith("\n") ||
                  (d.textContent = d.textContent + "\n"),
                d.parentElement.insertAdjacentHTML(
                  "beforeend",
                  "<wbr>" + n.innerHTML
                ),
                n.remove(),
                Object(M.f)(t[t.currentMode].element, r),
                !1
              )
            }
            return !1
          }
        },
        et = function (e, t, n) {
          var r = n.startContainer,
            i = Object(w.f)(r, "TD") || Object(w.f)(r, "TH")
          if (i) {
            if (!Object(u.c)(t) && !t.altKey && "Enter" === t.key) {
              ;(i.lastElementChild &&
                (!i.lastElementChild ||
                  (i.lastElementChild.isSameNode(i.lastChild) &&
                    "BR" === i.lastElementChild.tagName))) ||
                i.insertAdjacentHTML("beforeend", "<br>")
              var o = document.createElement("br")
              return (
                n.insertNode(o),
                n.setStartAfter(o),
                Xe(e),
                Oe(e),
                t.preventDefault(),
                !0
              )
            }
            if ("Tab" === t.key)
              return t.shiftKey
                ? (qe(i, n), t.preventDefault(), !0)
                : ((c = i.nextElementSibling) ||
                    (c = i.parentElement.nextElementSibling
                      ? i.parentElement.nextElementSibling.firstElementChild
                      : "THEAD" === i.parentElement.parentElement.tagName &&
                        i.parentElement.parentElement.nextElementSibling
                      ? i.parentElement.parentElement.nextElementSibling
                          .firstElementChild.firstElementChild
                      : null),
                  c && (n.selectNodeContents(c), Object(M.h)(n)),
                  t.preventDefault(),
                  !0)
            var a = i.parentElement.parentElement.parentElement
            if ("ArrowUp" === t.key) {
              if ((t.preventDefault(), "TH" === i.tagName))
                return (
                  a.previousElementSibling
                    ? (n.selectNodeContents(a.previousElementSibling),
                      n.collapse(!1),
                      Object(M.h)(n))
                    : Ie(e, "beforebegin"),
                  !0
                )
              for (
                var s = 0, l = i.parentElement;
                s < l.cells.length && !l.cells[s].isSameNode(i);
                s++
              );
              return (
                (m = l.previousElementSibling) ||
                  (m = l.parentElement.previousElementSibling.firstChild),
                n.selectNodeContents(m.cells[s]),
                n.collapse(!1),
                Object(M.h)(n),
                !0
              )
            }
            if ("ArrowDown" === t.key) {
              var c
              if (
                (t.preventDefault(),
                !(l = i.parentElement).nextElementSibling && "TD" === i.tagName)
              )
                return (
                  a.nextElementSibling
                    ? (n.selectNodeContents(a.nextElementSibling),
                      n.collapse(!0),
                      Object(M.h)(n))
                    : Ie(e, "afterend"),
                  !0
                )
              for (s = 0; s < l.cells.length && !l.cells[s].isSameNode(i); s++);
              return (
                (c = l.nextElementSibling) ||
                  (c = l.parentElement.nextElementSibling.firstChild),
                n.selectNodeContents(c.cells[s]),
                n.collapse(!0),
                Object(M.h)(n),
                !0
              )
            }
            if (ne("⌘--", t)) {
              if ("TD" === i.tagName) {
                var d = i.parentElement.parentElement
                i.parentElement.previousElementSibling
                  ? n.selectNodeContents(
                      i.parentElement.previousElementSibling.lastElementChild
                    )
                  : n.selectNodeContents(
                      d.previousElementSibling.lastElementChild.lastElementChild
                    ),
                  1 === d.childElementCount
                    ? d.remove()
                    : i.parentElement.remove(),
                  n.collapse(!1),
                  Xe(e)
              }
              return t.preventDefault(), !0
            }
            if (ne("⌘-=", t)) {
              var p = ""
              for (s = 0; s < i.parentElement.childElementCount; s++)
                p += "<td>" + (0 === s ? " <wbr>" : " ") + "</td>"
              return (
                "TH" === i.tagName
                  ? i.parentElement.parentElement.insertAdjacentHTML(
                      "afterend",
                      "<tbody><tr>" + p + "</tr></tbody>"
                    )
                  : i.parentElement.insertAdjacentHTML(
                      "afterend",
                      "<tr>" + p + "</tr>"
                    ),
                Object(M.f)(e[e.currentMode].element, n),
                Xe(e),
                Oe(e),
                t.preventDefault(),
                !0
              )
            }
            if (
              "wysiwyg" === e.currentMode &&
              !Object(u.c)(t) &&
              "Enter" === t.key &&
              !t.shiftKey &&
              t.altKey
            ) {
              var h = e.wysiwyg.popover.querySelector(".vditor-input")
              return h.focus(), h.select(), t.preventDefault(), !0
            }
            if (
              !Object(u.c)(t) &&
              !t.shiftKey &&
              !t.altKey &&
              "Backspace" === t.key &&
              0 === n.startOffset &&
              "" === n.toString()
            )
              return (
                !qe(i, n, !1) &&
                  a &&
                  ((a.outerHTML =
                    '<p data-block="0"><wbr>' + a.textContent.trim() + "</p>"),
                  Object(M.f)(e[e.currentMode].element, n),
                  Xe(e)),
                t.preventDefault(),
                !0
              )
            if (ne("⌘-⇧-=", t)) {
              for (var f = 0, m = i.previousElementSibling; m; )
                f++, (m = m.previousElementSibling)
              for (var v = 0; v < a.rows.length; v++)
                0 === v
                  ? a.rows[v].cells[f].insertAdjacentHTML(
                      "afterend",
                      "<th> </th>"
                    )
                  : a.rows[v].cells[f].insertAdjacentHTML(
                      "afterend",
                      "<td> </td>"
                    )
              return Xe(e), t.preventDefault(), !0
            }
            if (ne("⌘-⇧--", t)) {
              for (f = 0, m = i.previousElementSibling; m; )
                f++, (m = m.previousElementSibling)
              ;(i.previousElementSibling || i.nextElementSibling) &&
                (n.selectNodeContents(
                  i.previousElementSibling || i.nextElementSibling
                ),
                n.collapse(!0))
              for (v = 0; v < a.rows.length; v++) {
                var g = a.rows[v].cells
                if (1 === g.length) {
                  a.remove()
                  break
                }
                g[f].remove()
              }
              return Xe(e), t.preventDefault(), !0
            }
            if (ne("⌘-⇧-L", t)) {
              if ("ir" === e.currentMode)
                return We(a, "left"), Xe(e), t.preventDefault(), !0
              if ((b = e.wysiwyg.popover.querySelector('[data-type="left"]')))
                return b.click(), t.preventDefault(), !0
            }
            if (ne("⌘-⇧-C", t)) {
              if ("ir" === e.currentMode)
                return We(a, "center"), Xe(e), t.preventDefault(), !0
              if ((b = e.wysiwyg.popover.querySelector('[data-type="center"]')))
                return b.click(), t.preventDefault(), !0
            }
            if (ne("⌘-⇧-R", t)) {
              if ("ir" === e.currentMode)
                return We(a, "right"), Xe(e), t.preventDefault(), !0
              var b
              if ((b = e.wysiwyg.popover.querySelector('[data-type="right"]')))
                return b.click(), t.preventDefault(), !0
            }
          }
          return !1
        },
        tt = function (e, t, n, r) {
          if ("PRE" === n.tagName && ne("⌘-A", t))
            return (
              r.selectNodeContents(n.firstElementChild), t.preventDefault(), !0
            )
          if (
            e.options.tab &&
            "Tab" === t.key &&
            !t.shiftKey &&
            "" === r.toString()
          )
            return (
              r.insertNode(document.createTextNode(e.options.tab)),
              r.collapse(!1),
              Xe(e),
              t.preventDefault(),
              !0
            )
          if (
            "Backspace" === t.key &&
            !Object(u.c)(t) &&
            !t.shiftKey &&
            !t.altKey
          ) {
            var i = Object(M.c)(n, r)
            if (
              (0 === i.start || (1 === i.start && "\n" === n.innerText)) &&
              "" === r.toString()
            )
              return (
                (n.parentElement.outerHTML =
                  '<p data-block="0"><wbr>' +
                  n.firstElementChild.innerHTML +
                  "</p>"),
                Object(M.f)(e[e.currentMode].element, r),
                Xe(e),
                t.preventDefault(),
                !0
              )
          }
          return (
            !Object(u.c)(t) &&
            !t.altKey &&
            "Enter" === t.key &&
            (n.firstElementChild.textContent.endsWith("\n") ||
              n.firstElementChild.insertAdjacentText("beforeend", "\n"),
            r.insertNode(document.createTextNode("\n")),
            r.collapse(!1),
            Object(M.h)(r),
            Xe(e),
            Oe(e),
            t.preventDefault(),
            !0)
          )
        },
        nt = function (e, t, n, r) {
          var i = t.startContainer,
            o = Object(w.f)(i, "BLOCKQUOTE")
          if (o && "" === t.toString()) {
            if (
              "Backspace" === n.key &&
              !Object(u.c)(n) &&
              !n.shiftKey &&
              !n.altKey &&
              0 === Object(M.c)(o, t).start
            )
              return (
                t.insertNode(document.createElement("wbr")),
                (o.outerHTML = o.innerHTML),
                Object(M.f)(e[e.currentMode].element, t),
                Xe(e),
                n.preventDefault(),
                !0
              )
            if (
              r &&
              "Enter" === n.key &&
              !Object(u.c)(n) &&
              !n.shiftKey &&
              !n.altKey &&
              "BLOCKQUOTE" === r.parentElement.tagName
            ) {
              var s = !1
              if (
                ("\n" === r.innerHTML.replace(a.a.ZWSP, "")
                  ? ((s = !0), r.remove())
                  : r.innerHTML.endsWith("\n\n") &&
                    Object(M.c)(r, t).start === r.textContent.length - 1 &&
                    ((r.innerHTML = r.innerHTML.substr(
                      0,
                      r.innerHTML.length - 2
                    )),
                    (s = !0)),
                s)
              )
                return (
                  o.insertAdjacentHTML(
                    "afterend",
                    '<p data-block="0">' + a.a.ZWSP + "<wbr>\n</p>"
                  ),
                  Object(M.f)(e[e.currentMode].element, t),
                  Xe(e),
                  n.preventDefault(),
                  !0
                )
            }
            var l = Object(w.c)(i)
            if ("wysiwyg" === e.currentMode && l && ne("⌘-⇧-:", n))
              return (
                t.insertNode(document.createElement("wbr")),
                (l.outerHTML =
                  '<blockquote data-block="0">' +
                  l.outerHTML +
                  "</blockquote>"),
                Object(M.f)(e.wysiwyg.element, t),
                U(e),
                n.preventDefault(),
                !0
              )
          }
          return !1
        },
        rt = function (e, t, n) {
          var r = t.startContainer,
            i = Object(w.e)(r, "vditor-task")
          if (i) {
            if (ne("⌘-⇧-J", n)) {
              var o = i.firstElementChild
              return (
                o.checked
                  ? o.removeAttribute("checked")
                  : o.setAttribute("checked", "checked"),
                Xe(e),
                n.preventDefault(),
                !0
              )
            }
            if (
              "Backspace" === n.key &&
              !Object(u.c)(n) &&
              !n.shiftKey &&
              !n.altKey &&
              "" === t.toString() &&
              1 === t.startOffset &&
              ((3 === r.nodeType &&
                r.previousSibling &&
                "INPUT" === r.previousSibling.tagName) ||
                3 !== r.nodeType)
            ) {
              var a = i.previousElementSibling
              if ((i.querySelector("input").remove(), a))
                Object(w.a)(a).parentElement.insertAdjacentHTML(
                  "beforeend",
                  "<wbr>" + i.innerHTML.trim()
                ),
                  i.remove()
              else
                i.parentElement.insertAdjacentHTML(
                  "beforebegin",
                  '<p data-block="0"><wbr>' +
                    (i.innerHTML.trim() || "\n") +
                    "</p>"
                ),
                  i.nextElementSibling ? i.remove() : i.parentElement.remove()
              return (
                Object(M.f)(e[e.currentMode].element, t),
                Xe(e),
                n.preventDefault(),
                !0
              )
            }
            if (
              "Enter" === n.key &&
              !Object(u.c)(n) &&
              !n.shiftKey &&
              !n.altKey
            ) {
              if ("" === i.textContent.trim())
                if (Object(w.e)(i.parentElement, "vditor-task")) {
                  var s = Object(w.b)(r)
                  s && Ve(e, i, t, s)
                } else if (i.nextElementSibling) {
                  var l = "",
                    c = "",
                    d = !1
                  Array.from(i.parentElement.children).forEach(function (e) {
                    i.isSameNode(e)
                      ? (d = !0)
                      : d
                      ? (l += e.outerHTML)
                      : (c += e.outerHTML)
                  })
                  var p = i.parentElement.tagName,
                    h =
                      "OL" === i.parentElement.tagName
                        ? ""
                        : ' data-marker="' +
                          i.parentElement.getAttribute("data-marker") +
                          '"',
                    f = ""
                  c &&
                    ((f = "UL" === i.parentElement.tagName ? "" : ' start="1"'),
                    (c =
                      "<" +
                      p +
                      ' data-tight="true"' +
                      h +
                      ' data-block="0">' +
                      c +
                      "</" +
                      p +
                      ">")),
                    (i.parentElement.outerHTML =
                      c +
                      '<p data-block="0">\n<wbr></p><' +
                      p +
                      '\n data-tight="true"' +
                      h +
                      ' data-block="0"' +
                      f +
                      ">" +
                      l +
                      "</" +
                      p +
                      ">")
                } else
                  i.parentElement.insertAdjacentHTML(
                    "afterend",
                    '<p data-block="0">\n<wbr></p>'
                  ),
                    1 === i.parentElement.querySelectorAll("li").length
                      ? i.parentElement.remove()
                      : i.remove()
              else
                3 !== r.nodeType &&
                0 === t.startOffset &&
                "INPUT" === r.firstChild.tagName
                  ? t.setStart(r.childNodes[1], 1)
                  : (t.setEndAfter(i.lastChild),
                    i.insertAdjacentHTML(
                      "afterend",
                      '<li class="vditor-task" data-marker="' +
                        i.getAttribute("data-marker") +
                        '"><input type="checkbox"> <wbr></li>'
                    ),
                    document.querySelector("wbr").after(t.extractContents()))
              return (
                Object(M.f)(e[e.currentMode].element, t),
                Xe(e),
                Oe(e),
                n.preventDefault(),
                !0
              )
            }
          }
          return !1
        },
        it = function (e, t, n, r) {
          if (3 !== t.startContainer.nodeType) {
            var i = t.startContainer.children[t.startOffset]
            if (i && "HR" === i.tagName)
              return (
                t.selectNodeContents(i.previousElementSibling),
                t.collapse(!1),
                n.preventDefault(),
                !0
              )
          }
          if (r) {
            var o = r.previousElementSibling
            if (
              o &&
              0 === Object(M.c)(r, t).start &&
              ((Object(u.d)() && "HR" === o.tagName) || "TABLE" === o.tagName)
            ) {
              if ("TABLE" === o.tagName) {
                var a = o.lastElementChild.lastElementChild.lastElementChild
                ;(a.innerHTML =
                  a.innerHTML.trimLeft() + "<wbr>" + r.textContent.trim()),
                  r.remove()
              } else o.remove()
              return (
                Object(M.f)(e[e.currentMode].element, t),
                Xe(e),
                n.preventDefault(),
                !0
              )
            }
          }
          return !1
        },
        ot = function (e) {
          Object(u.d)() &&
            3 !== e.startContainer.nodeType &&
            "HR" === e.startContainer.tagName &&
            e.setStartBefore(e.startContainer)
        },
        at = function (e, t, n) {
          var r, i
          if (!Object(u.d)()) return !1
          if (
            "ArrowUp" === e.key &&
            t &&
            "TABLE" ===
              (null === (r = t.previousElementSibling) || void 0 === r
                ? void 0
                : r.tagName)
          ) {
            var o = t.previousElementSibling
            return (
              n.selectNodeContents(o.rows[o.rows.length - 1].lastElementChild),
              n.collapse(!1),
              e.preventDefault(),
              !0
            )
          }
          return (
            !(
              "ArrowDown" !== e.key ||
              !t ||
              "TABLE" !==
                (null === (i = t.nextElementSibling) || void 0 === i
                  ? void 0
                  : i.tagName)
            ) &&
            (n.selectNodeContents(t.nextElementSibling.rows[0].cells[0]),
            n.collapse(!0),
            e.preventDefault(),
            !0)
          )
        },
        st = function (e, t, n) {
          t.stopPropagation(), t.preventDefault()
          var r = t.clipboardData.getData("text/html"),
            i = t.clipboardData.getData("text/plain"),
            o = {},
            a = function (t) {
              var n = t.TokensStr()
              if (
                34 === t.__internal_object__.Parent.Type &&
                n &&
                -1 === n.indexOf("file://") &&
                e.options.upload.linkToImgUrl
              ) {
                var r = new XMLHttpRequest()
                r.open("POST", e.options.upload.linkToImgUrl),
                  _(e, r),
                  (r.onreadystatechange = function () {
                    if (r.readyState === XMLHttpRequest.DONE)
                      if (200 === r.status) {
                        var t = JSON.parse(r.responseText)
                        if (0 !== t.code) return void e.tip.show(t.msg)
                        var n = t.data.originalURL,
                          i = e[e.currentMode].element.querySelector(
                            'img[src="' + n + '"]'
                          )
                        ;(i.src = t.data.url),
                          "ir" === e.currentMode &&
                            (i.previousElementSibling.previousElementSibling.innerHTML =
                              t.data.url),
                          Xe(e)
                      } else e.tip.show(r.responseText)
                  }),
                  r.send(
                    JSON.stringify({
                      url: n,
                    })
                  )
              }
              return "ir" === e.currentMode
                ? [
                    '<span class="vditor-ir__marker vditor-ir__marker--link">' +
                      n +
                      "</span>",
                    Lute.WalkStop,
                  ]
                : ["", Lute.WalkStop]
            }
          ;(r.replace(/<(|\/)(html|body|meta)[^>]*?>/gi, "").trim() !==
            '<a href="' + i + '">' + i + "</a>" &&
            r.replace(/<(|\/)(html|body|meta)[^>]*?>/gi, "").trim() !==
              '\x3c!--StartFragment--\x3e<a href="' +
                i +
                '">' +
                i +
                "</a>\x3c!--EndFragment--\x3e") ||
            (r = "")
          var s = new DOMParser().parseFromString(r, "text/html")
          s.body && (r = s.body.innerHTML)
          var l = q(r, i, e.currentMode),
            c = Object(w.f)(t.target, "CODE")
          if (c) {
            var d = Object(M.c)(t.target)
            ;(c.textContent =
              c.textContent.substring(0, d.start) +
              i +
              c.textContent.substring(d.end)),
              Object(M.g)(
                d.start + i.length,
                d.start + i.length,
                c.parentElement
              ),
              c.parentElement.nextElementSibling.classList.contains(
                "vditor-" + e.currentMode + "__preview"
              ) &&
                ((c.parentElement.nextElementSibling.innerHTML = c.outerHTML),
                z(c.parentElement.nextElementSibling, e))
          } else if (l) n.pasteCode(l)
          else if ("" !== r.trim()) {
            var u = document.createElement("div")
            ;(u.innerHTML = r),
              u.querySelectorAll("[style]").forEach(function (e) {
                e.removeAttribute("style")
              }),
              u.querySelectorAll(".vditor-copy").forEach(function (e) {
                e.remove()
              }),
              "ir" === e.currentMode
                ? ((o.HTML2VditorIRDOM = {
                    renderLinkDest: a,
                  }),
                  e.lute.SetJSRenderers({
                    renderers: o,
                  }),
                  Object(M.d)(e.lute.HTML2VditorIRDOM(u.innerHTML), e))
                : ((o.HTML2VditorDOM = {
                    renderLinkDest: a,
                  }),
                  e.lute.SetJSRenderers({
                    renderers: o,
                  }),
                  Object(M.d)(e.lute.HTML2VditorDOM(u.innerHTML), e)),
              e.outline.render(e)
          } else
            t.clipboardData.files.length > 0 && e.options.upload.url
              ? C(e, t.clipboardData.files)
              : "" !== i.trim() &&
                0 === t.clipboardData.files.length &&
                ("ir" === e.currentMode
                  ? ((o.Md2VditorIRDOM = {
                      renderLinkDest: a,
                    }),
                    e.lute.SetJSRenderers({
                      renderers: o,
                    }),
                    Object(M.d)(e.lute.Md2VditorIRDOM(i), e))
                  : ((o.Md2VditorDOM = {
                      renderLinkDest: a,
                    }),
                    e.lute.SetJSRenderers({
                      renderers: o,
                    }),
                    Object(M.d)(e.lute.Md2VditorDOM(i), e)),
                e.outline.render(e))
          e[e.currentMode].element
            .querySelectorAll(
              ".vditor-" + e.currentMode + "__preview[data-render='2']"
            )
            .forEach(function (t) {
              z(t, e)
            }),
            Xe(e)
        },
        lt = function (e) {
          e.hint.render(e)
          var t = Object(M.b)(e.ir.element).startContainer,
            n = Object(w.d)(t, "data-type", "code-block-info")
          if (n)
            if (
              "" === n.textContent.replace(a.a.ZWSP, "") &&
              e.hint.recentLanguage
            ) {
              ;(n.textContent = a.a.ZWSP + e.hint.recentLanguage),
                Object(M.b)(e.ir.element).selectNodeContents(n)
            } else {
              var r = [],
                i = n.textContent
                  .substring(0, Object(M.c)(n).start)
                  .replace(a.a.ZWSP, "")
              a.a.CODE_LANGUAGES.forEach(function (e) {
                e.indexOf(i.toLowerCase()) > -1 &&
                  r.push({
                    html: e,
                    value: e,
                  })
              }),
                e.hint.genHTML(r, i, e)
            }
        },
        ct = function (e, t) {
          void 0 === t &&
            (t = {
              enableAddUndoStack: !0,
              enableHint: !1,
              enableInput: !0,
            }),
            t.enableHint && lt(e),
            clearTimeout(e.ir.processTimeoutId),
            (e.ir.processTimeoutId = window.setTimeout(function () {
              if (!e.ir.composingLock || !Object(u.e)()) {
                var n = l(e)
                "function" == typeof e.options.input &&
                  t.enableInput &&
                  e.options.input(n),
                  e.options.counter.enable && e.counter.render(e, n),
                  e.options.cache.enable &&
                    (localStorage.setItem(e.options.cache.id, n),
                    e.options.cache.after && e.options.cache.after(n)),
                  e.devtools && e.devtools.renderEchart(e),
                  t.enableAddUndoStack && e.irUndo.addToUndoStack(e)
              }
            }, 800))
        },
        dt = function (e, t) {
          var n = getSelection().getRangeAt(0),
            r = Object(w.c)(n.startContainer) || n.startContainer
          if (r) {
            if ("" === t) {
              var i = r.querySelector(".vditor-ir__marker--heading")
              n.selectNodeContents(i), document.execCommand("delete")
            } else
              n.selectNodeContents(r),
                n.collapse(!0),
                document.execCommand("insertHTML", !1, t)
            S(e), Ge(e)
          }
        },
        ut = function (e, t, n) {
          var r = Object(w.d)(e.startContainer, "data-type", n)
          if (r) {
            r.firstElementChild.remove(),
              r.lastElementChild.remove(),
              e.insertNode(document.createElement("wbr"))
            var i = document.createElement("div")
            ;(i.innerHTML = t.lute.SpinVditorIRDOM(r.outerHTML)),
              (r.outerHTML = i.firstElementChild.innerHTML.trim())
          }
        },
        pt = function (e, t, n, r) {
          var i = Object(M.b)(e.ir.element),
            o = t.getAttribute("data-type"),
            a = i.startContainer
          if (
            (3 === a.nodeType && (a = a.parentElement),
            t.classList.contains("vditor-menu--current"))
          )
            if ("quote" === o) {
              var s = Object(w.f)(a, "BLOCKQUOTE")
              s &&
                (i.insertNode(document.createElement("wbr")),
                (s.outerHTML =
                  "" === s.innerHTML.trim()
                    ? '<p data-block="0">' + s.innerHTML + "</p>"
                    : s.innerHTML))
            } else if ("link" === o) {
              var l = Object(w.d)(i.startContainer, "data-type", "a")
              if (l) {
                var c = Object(w.e)(i.startContainer, "vditor-ir__link")
                c
                  ? (i.insertNode(document.createElement("wbr")),
                    (l.outerHTML = c.innerHTML))
                  : (l.outerHTML =
                      l.querySelector(".vditor-ir__link").innerHTML + "<wbr>")
              }
            } else
              "italic" === o
                ? ut(i, e, "em")
                : "bold" === o
                ? ut(i, e, "strong")
                : "strike" === o
                ? ut(i, e, "s")
                : "inline-code" === o
                ? ut(i, e, "code")
                : ("check" !== o && "list" !== o && "ordered-list" !== o) ||
                  Fe(e, i, o)
          else if (
            (0 === e.ir.element.childNodes.length &&
              ((e.ir.element.innerHTML = '<p data-block="0"><wbr></p>'),
              Object(M.f)(e.ir.element, i)),
            "line" === o)
          )
            a.classList.contains("vditor-reset")
              ? (a.innerHTML =
                  '<hr data-block="0"><p data-block="0">\n<wbr></p>')
              : a.insertAdjacentHTML(
                  "afterend",
                  '<hr data-block="0"><p data-block="0">\n<wbr></p>'
                )
          else if ("quote" === o) {
            var d = Object(w.c)(i.startContainer)
            d &&
              (i.insertNode(document.createElement("wbr")),
              (d.outerHTML =
                '<blockquote data-block="0">' + d.outerHTML + "</blockquote>"))
          } else if ("link" === o) {
            var u = void 0
            ;(u =
              "" === i.toString()
                ? n + "<wbr>" + r
                : "" + n + i.toString() + r.replace(")", "<wbr>)")),
              document.execCommand("insertHTML", !1, u)
          } else if (
            "italic" === o ||
            "bold" === o ||
            "strike" === o ||
            "inline-code" === o ||
            "code" === o ||
            "table" === o
          ) {
            u = void 0
            ;(u =
              "" === i.toString()
                ? n + "<wbr>" + r
                : "" + n + i.toString() + "<wbr>" + n),
              ("table" !== o && "code" !== o) || (u = "\n" + u + "\n"),
              document.execCommand("insertHTML", !1, u)
          } else
            ("check" !== o && "list" !== o && "ordered-list" !== o) ||
              Fe(e, i, o, !1)
          Object(M.f)(e.ir.element, i), ct(e), S(e)
        },
        ht = (function () {
          function e() {
            var e = this
            ;(this.fillEmoji = function (t, n) {
              e.element.style.display = "none"
              var r = t.getAttribute("data-value"),
                i = 0 === r.indexOf("@") ? "@" : ":",
                o = window.getSelection().getRangeAt(0)
              if ("sv" !== n.currentMode) {
                if ("ir" === n.currentMode) {
                  var s = Object(w.d)(
                    o.startContainer,
                    "data-type",
                    "code-block-info"
                  )
                  if (s)
                    return (
                      (s.textContent = a.a.ZWSP + r.trimRight()),
                      o.selectNodeContents(s),
                      o.collapse(!1),
                      ct(n),
                      s.parentElement
                        .querySelectorAll("code")
                        .forEach(function (e) {
                          e.className = "language-" + r.trimRight()
                        }),
                      z(
                        s.parentElement.querySelector(".vditor-ir__preview"),
                        n
                      ),
                      void (e.recentLanguage = r.trimRight())
                    )
                }
                if (
                  "wysiwyg" === n.currentMode &&
                  3 !== o.startContainer.nodeType &&
                  o.startContainer.firstElementChild.classList.contains(
                    "vditor-input"
                  )
                ) {
                  var c = o.startContainer.firstElementChild
                  return (
                    (c.value = r.trimRight()),
                    o.selectNodeContents(c),
                    o.collapse(!1),
                    c.dispatchEvent(new CustomEvent("input")),
                    void (e.recentLanguage = r.trimRight())
                  )
                }
                var d
                if (
                  (o.setStart(
                    o.startContainer,
                    o.startContainer.textContent.lastIndexOf(i)
                  ),
                  o.deleteContents(),
                  r.indexOf(":") > -1
                    ? (Object(M.d)(n.lute.SpinVditorDOM(r), n),
                      o.insertNode(document.createTextNode(" ")))
                    : o.insertNode(document.createTextNode(r)),
                  o.collapse(!1),
                  Object(M.h)(o),
                  "wysiwyg" === n.currentMode)
                )
                  (d = Object(w.e)(
                    o.startContainer,
                    "vditor-wysiwyg__block"
                  )) &&
                    d.lastElementChild.classList.contains(
                      "vditor-wysiwyg__preview"
                    ) &&
                    ((d.lastElementChild.innerHTML =
                      d.firstElementChild.innerHTML),
                    z(d.lastElementChild, n))
                else
                  (d = Object(w.e)(
                    o.startContainer,
                    "vditor-ir__marker--pre"
                  )) &&
                    d.nextElementSibling.classList.contains(
                      "vditor-ir__preview"
                    ) &&
                    ((d.nextElementSibling.innerHTML = d.innerHTML),
                    z(d.nextElementSibling, n))
                Xe(n)
              } else {
                var u = Object(M.c)(n.sv.element, o),
                  p = l(n),
                  h = p.substring(0, p.substring(0, u.start).lastIndexOf(i))
                x(n, h + r + p.substring(u.start), {
                  end: (h + r).length,
                  start: (h + r).length,
                })
              }
            }),
              (this.timeId = -1),
              (this.element = document.createElement("div")),
              (this.element.className = "vditor-hint"),
              (this.recentLanguage = "")
          }
          return (
            (e.prototype.render = function (e) {
              var t = this
              if (window.getSelection().focusNode) {
                var n,
                  r = Object(M.c)(
                    "wysiwyg" === e.currentMode
                      ? e.wysiwyg.element
                      : e.sv.element
                  )
                if ("sv" !== e.currentMode) {
                  var i = getSelection().getRangeAt(0)
                  n =
                    i.startContainer.textContent.substring(0, i.startOffset) ||
                    ""
                } else n = l(e).substring(0, r.end).split("\n").slice(-1).pop()
                var o = this.getKey(n, ":"),
                  a = !1
                if (
                  (void 0 === o && ((a = !0), (o = this.getKey(n, "@"))),
                  void 0 === o)
                )
                  (this.element.style.display = "none"),
                    clearTimeout(this.timeId)
                else if (
                  (a &&
                    e.options.hint.at &&
                    (clearTimeout(this.timeId),
                    (this.timeId = window.setTimeout(function () {
                      t.genHTML(e.options.hint.at(o), o, e)
                    }, e.options.hint.delay))),
                  !a)
                ) {
                  var s = "" === o ? e.options.hint.emoji : e.lute.GetEmojis(),
                    c = []
                  Object.keys(s).forEach(function (e) {
                    0 === e.indexOf(o.toLowerCase()) &&
                      (s[e].indexOf(".") > -1
                        ? c.push({
                            html:
                              '<img src="' +
                              s[e] +
                              '" title=":' +
                              e +
                              ':"/> :' +
                              e +
                              ":",
                            value: ":" + e + ":",
                          })
                        : c.push({
                            html:
                              '<span class="vditor-hint__emoji">' +
                              s[e] +
                              "</span>" +
                              e,
                            value: s[e],
                          }))
                  }),
                    this.genHTML(c, o, e)
                }
              }
            }),
            (e.prototype.genHTML = function (e, t, n) {
              var r = this
              if (0 !== e.length) {
                var i = n[n.currentMode].element,
                  o = Object(M.a)(i),
                  a = o.left + n.outline.element.offsetWidth,
                  s = o.top,
                  l = ""
                e.forEach(function (e, n) {
                  if (!(n > 7)) {
                    var r = e.html
                    if ("" !== t) {
                      var i = r.lastIndexOf(">") + 1,
                        o = r.substr(i),
                        a = o.toLowerCase().indexOf(t.toLowerCase())
                      a > -1 &&
                        ((o =
                          o.substring(0, a) +
                          "<b>" +
                          o.substring(a, a + t.length) +
                          "</b>" +
                          o.substring(a + t.length)),
                        (r = r.substr(0, i) + o))
                    }
                    l +=
                      '<button data-value="' +
                      e.value +
                      ' "\n' +
                      (0 === n ? "class='vditor-hint--current'" : "") +
                      "> " +
                      r +
                      "</button>"
                  }
                }),
                  (this.element.innerHTML = l)
                var c = parseInt(
                  document.defaultView
                    .getComputedStyle(i, null)
                    .getPropertyValue("line-height"),
                  10
                )
                ;(this.element.style.top = s + (c || 22) + "px"),
                  (this.element.style.left = a + "px"),
                  (this.element.style.display = "block"),
                  this.element.querySelectorAll("button").forEach(function (e) {
                    e.addEventListener("click", function (t) {
                      r.fillEmoji(e, n), t.preventDefault()
                    })
                  }),
                  this.element.getBoundingClientRect().bottom >
                    window.innerHeight &&
                    (this.element.style.top =
                      s - this.element.offsetHeight + "px")
              } else this.element.style.display = "none"
            }),
            (e.prototype.select = function (e, t) {
              if (
                0 === this.element.querySelectorAll("button").length ||
                "none" === this.element.style.display
              )
                return !1
              var n = this.element.querySelector(".vditor-hint--current")
              if ("ArrowDown" === e.key)
                return (
                  e.preventDefault(),
                  e.stopPropagation(),
                  n.removeAttribute("class"),
                  n.nextElementSibling
                    ? (n.nextElementSibling.className = "vditor-hint--current")
                    : (this.element.children[0].className =
                        "vditor-hint--current"),
                  !0
                )
              if ("ArrowUp" === e.key) {
                if (
                  (e.preventDefault(),
                  e.stopPropagation(),
                  n.removeAttribute("class"),
                  n.previousElementSibling)
                )
                  n.previousElementSibling.className = "vditor-hint--current"
                else {
                  var r = this.element.children.length
                  this.element.children[r - 1].className =
                    "vditor-hint--current"
                }
                return !0
              }
              return (
                "Enter" === e.key &&
                (e.preventDefault(),
                e.stopPropagation(),
                this.fillEmoji(n, t),
                !0)
              )
            }),
            (e.prototype.getKey = function (e, t) {
              var n,
                r = e.split(t),
                i = r[r.length - 1]
              if (r.length > 1 && i.trim() === i)
                if (2 === r.length && "" === r[0] && r[1].length < 32) n = r[1]
                else {
                  var o = r[r.length - 2].slice(-1)
                  " " === Object(s.a)(o) && i.length < 32 && (n = i)
                }
              return n
            }),
            e
          )
        })(),
        ft = function (e, t) {
          t.ir.element
            .querySelectorAll(".vditor-ir__node--expand")
            .forEach(function (e) {
              e.classList.remove("vditor-ir__node--expand")
            })
          var n = Object(w.g)(e.startContainer, "vditor-ir__node")
          n &&
            (n.classList.add("vditor-ir__node--expand"),
            n.classList.remove("vditor-ir__node--hidden"))
          var r = (function (e) {
            var t = e.startContainer
            if (3 === t.nodeType && t.nodeValue.length !== e.startOffset)
              return !1
            for (var n = t.nextSibling; n && "" === n.textContent; )
              n = n.nextSibling
            if (!n) {
              var r = Object(w.e)(t, "vditor-ir__marker")
              if (r && !r.nextSibling) {
                var i = t.parentElement.parentElement.nextSibling
                if (
                  i &&
                  3 !== i.nodeType &&
                  i.classList.contains("vditor-ir__node")
                )
                  return i
              }
              return !1
            }
            return (
              !(
                !n ||
                3 === n.nodeType ||
                !n.classList.contains("vditor-ir__node") ||
                n.getAttribute("data-block")
              ) && n
            )
          })(e)
          if (r)
            return (
              r.classList.add("vditor-ir__node--expand"),
              void r.classList.remove("vditor-ir__node--hidden")
            )
        },
        mt = function (e, t, n, r) {
          r && console.log(e + " - " + n + ": " + t)
        },
        vt = function (e, t, n) {
          void 0 === n && (n = !1)
          var r = Object(w.c)(t.startContainer)
          if (r && !n) {
            if (Je(r.innerHTML) || Ze(r.innerHTML)) return
            for (
              var i = Object(M.c)(r, t).start, o = !0, a = i - 1;
              a > r.textContent.substr(0, i).lastIndexOf("\n");
              a--
            )
              if (
                " " !== r.textContent.charAt(a) &&
                "\t" !== r.textContent.charAt(a)
              ) {
                o = !1
                break
              }
            0 === i && (o = !1)
            var s = !0
            for (a = i - 1; a < r.textContent.length; a++)
              if (
                " " !== r.textContent.charAt(a) &&
                "\n" !== r.textContent.charAt(a)
              ) {
                s = !1
                break
              }
            if ((o && !r.querySelector(".language-mindmap")) || s) {
              if (!s) return
              if (!Object(w.e)(t.startContainer, "vditor-ir__marker")) {
                var l = t.startContainer.previousSibling
                return void (
                  l &&
                  3 !== l.nodeType &&
                  l.classList.contains("vditor-ir__node--expand") &&
                  l.classList.remove("vditor-ir__node--expand")
                )
              }
            }
          }
          if (
            (e.ir.element
              .querySelectorAll(".vditor-ir__node--expand")
              .forEach(function (e) {
                e.classList.remove("vditor-ir__node--expand")
              }),
            r || (r = e.ir.element),
            !r.querySelector("wbr"))
          ) {
            var c = Object(w.e)(t.startContainer, "vditor-ir__preview")
            c &&
              (c.previousElementSibling.firstElementChild
                ? t.selectNodeContents(
                    c.previousElementSibling.firstElementChild
                  )
                : t.selectNodeContents(c.previousElementSibling),
              t.collapse(!1)),
              t.insertNode(document.createElement("wbr"))
          }
          r.querySelectorAll("[style]").forEach(function (e) {
            e.removeAttribute("style")
          }),
            "link-ref-defs-block" === r.getAttribute("data-type") &&
              (r = e.ir.element)
          var d = r.isEqualNode(e.ir.element),
            u = ""
          if (d) u = r.innerHTML
          else {
            var p = Object(w.b)(t.startContainer)
            if (p)
              r = Object(E.b)(t.startContainer, "BLOCKQUOTE")
                ? Object(w.c)(t.startContainer) || r
                : p
            var h,
              f,
              m = Object(w.d)(r, "data-type", "footnotes-block")
            if (
              (m && (r = m),
              (u = r.outerHTML),
              "UL" === r.tagName || "OL" === r.tagName)
            ) {
              var v = r.previousElementSibling,
                g = r.nextElementSibling
              !v ||
                ("UL" !== v.tagName && "OL" !== v.tagName) ||
                ((u = v.outerHTML + u), v.remove()),
                !g ||
                  ("UL" !== g.tagName && "OL" !== g.tagName) ||
                  ((u += g.outerHTML), g.remove()),
                (u = u.replace(
                  "<div><wbr><br></div>",
                  "<li><p><wbr><br></p></li>"
                ))
            } else
              r.previousElementSibling &&
                "" !== r.previousElementSibling.textContent &&
                ((u = r.previousElementSibling.outerHTML + u),
                r.previousElementSibling.remove())
            ;(h = e.ir.element.querySelector(
              "[data-type='link-ref-defs-block']"
            )) &&
              !r.isEqualNode(h) &&
              ((u += h.outerHTML), h.remove()),
              (f = e.ir.element.querySelector(
                "[data-type='footnotes-block']"
              )) &&
                !r.isEqualNode(f) &&
                ((u += f.outerHTML), f.remove())
          }
          ;(mt("SpinVditorIRDOM", u, "argument", e.options.debugger),
          (u = e.lute.SpinVditorIRDOM(u)),
          mt("SpinVditorIRDOM", u, "result", e.options.debugger),
          d)
            ? (r.innerHTML = u)
            : ((r.outerHTML = u),
              (h = e.ir.element.querySelector(
                "[data-type='link-ref-defs-block']"
              )) && e.ir.element.insertAdjacentElement("beforeend", h),
              (f = e.ir.element.querySelector(
                "[data-type='footnotes-block']"
              )) && e.ir.element.insertAdjacentElement("beforeend", f))
          Object(M.f)(e.ir.element, t),
            e.ir.element
              .querySelectorAll(".vditor-ir__preview[data-render='2']")
              .forEach(function (t) {
                z(t, e)
              }),
            Ge(e),
            ct(e, {
              enableAddUndoStack: !0,
              enableHint: !0,
              enableInput: !0,
            })
        },
        gt = (function () {
          function e(e) {
            this.composingLock = !1
            var t = document.createElement("div")
            ;(t.className = "vditor-ir"),
              (t.innerHTML =
                '<pre class="vditor-reset" placeholder="' +
                e.options.placeholder +
                '"\n contenteditable="true" spellcheck="false"></pre>'),
              (this.element = t.firstElementChild),
              this.bindEvent(e),
              document.execCommand("DefaultParagraphSeparator", !1, "p"),
              Me(e, this.element),
              Se(e, this.element),
              ke(e, this.element),
              xe(e, this.element)
          }
          return (
            (e.prototype.bindEvent = function (e) {
              var t = this
              this.element.addEventListener("copy", function (t) {
                var n = getSelection().getRangeAt(0)
                if ("" !== n.toString()) {
                  t.stopPropagation(), t.preventDefault()
                  var r = document.createElement("div")
                  r.appendChild(n.cloneContents()),
                    t.clipboardData.setData(
                      "text/plain",
                      e.lute.VditorIRDOM2Md(r.innerHTML).trim()
                    ),
                    t.clipboardData.setData("text/html", "")
                }
              }),
                this.element.addEventListener("paste", function (t) {
                  st(e, t, {
                    pasteCode: function (e) {
                      document.execCommand("insertHTML", !1, e)
                    },
                  })
                }),
                (e.options.upload.url || e.options.upload.handler) &&
                  this.element.addEventListener("drop", function (t) {
                    if ("Files" === t.dataTransfer.types[0]) {
                      var n = t.dataTransfer.items
                      n.length > 0 && C(e, n), t.preventDefault()
                    }
                  }),
                this.element.addEventListener("compositionend", function (t) {
                  vt(e, getSelection().getRangeAt(0).cloneRange())
                }),
                this.element.addEventListener("compositionstart", function (e) {
                  t.composingLock = !0
                }),
                this.element.addEventListener("input", function (n) {
                  t.preventInput
                    ? (t.preventInput = !1)
                    : t.composingLock ||
                      vt(e, getSelection().getRangeAt(0).cloneRange())
                }),
                this.element.addEventListener("click", function (n) {
                  if ("INPUT" === n.target.tagName)
                    return (
                      n.target.checked
                        ? n.target.setAttribute("checked", "checked")
                        : n.target.removeAttribute("checked"),
                      (t.preventInput = !0),
                      void ct(e)
                    )
                  var r = Object(M.b)(t.element)
                  if (
                    n.target.isEqualNode(t.element) &&
                    t.element.lastElementChild &&
                    r.collapsed
                  ) {
                    var i = t.element.lastElementChild.getBoundingClientRect()
                    if (n.y > i.top + i.height)
                      return void ("P" === t.element.lastElementChild.tagName
                        ? (r.selectNodeContents(t.element.lastElementChild),
                          r.collapse(!1))
                        : (t.element.insertAdjacentHTML(
                            "beforeend",
                            '<p data-block="0">' + a.a.ZWSP + "<wbr></p>"
                          ),
                          Object(M.f)(t.element, r)))
                  }
                  ft(r, e), S(e)
                  var o = Object(w.e)(n.target, "vditor-ir__preview")
                  o ||
                    (o = Object(w.e)(r.startContainer, "vditor-ir__preview")),
                    o &&
                      (o.previousElementSibling.firstElementChild
                        ? r.selectNodeContents(
                            o.previousElementSibling.firstElementChild
                          )
                        : r.selectNodeContents(o.previousElementSibling),
                      r.collapse(!0),
                      Object(M.h)(r),
                      Oe(e))
                }),
                this.element.addEventListener("keyup", function (n) {
                  if (!n.isComposing && !Object(u.c)(n))
                    if (
                      ("Enter" === n.key && Oe(e),
                      S(e),
                      ("Backspace" !== n.key && "Delete" !== n.key) ||
                        "" === e.ir.element.innerHTML ||
                        1 !== e.ir.element.childNodes.length ||
                        !e.ir.element.firstElementChild ||
                        "P" !== e.ir.element.firstElementChild.tagName ||
                        0 !==
                          e.ir.element.firstElementChild.childElementCount ||
                        ("" !== e.ir.element.textContent &&
                          "\n" !== e.ir.element.textContent))
                    ) {
                      var r = Object(M.b)(t.element)
                      "Backspace" === n.key
                        ? (Object(u.d)() &&
                            "\n" === r.startContainer.textContent &&
                            1 === r.startOffset &&
                            ((r.startContainer.textContent = ""), ft(r, e)),
                          t.element
                            .querySelectorAll(".language-math")
                            .forEach(function (e) {
                              var t = e.querySelector("br")
                              t && t.remove()
                            }))
                        : n.key.indexOf("Arrow") > -1 &&
                          (("ArrowLeft" !== n.key && "ArrowRight" !== n.key) ||
                            lt(e),
                          ft(r, e))
                      var i = Object(w.e)(
                        r.startContainer,
                        "vditor-ir__preview"
                      )
                      if (i) {
                        if ("ArrowUp" === n.key || "ArrowLeft" === n.key)
                          return (
                            i.previousElementSibling.firstElementChild
                              ? r.selectNodeContents(
                                  i.previousElementSibling.firstElementChild
                                )
                              : r.selectNodeContents(i.previousElementSibling),
                            r.collapse(!1),
                            n.preventDefault(),
                            !0
                          )
                        if (
                          "SPAN" === i.tagName &&
                          ("ArrowDown" === n.key || "ArrowRight" === n.key)
                        )
                          return (
                            r.selectNodeContents(
                              i.parentElement.lastElementChild
                            ),
                            r.collapse(!1),
                            n.preventDefault(),
                            !0
                          )
                      }
                    } else e.ir.element.innerHTML = ""
                })
            }),
            e
          )
        })(),
        bt = function (e) {
          return "sv" === e.currentMode
            ? e.lute.Md2HTML(l(e))
            : "wysiwyg" === e.currentMode
            ? e.lute.VditorDOM2HTML(e.wysiwyg.element.innerHTML)
            : "ir" === e.currentMode
            ? e.lute.VditorIRDOM2HTML(e.ir.element.innerHTML)
            : void 0
        },
        yt = n(22),
        wt = n(21),
        Et = (function () {
          function e(e) {
            ;(this.element = document.createElement("div")),
              (this.element.className = "vditor-outline"),
              (this.element.innerHTML =
                '<div class="vditor-outline__title">' +
                e +
                '</div>\n<div class="vditor-outline__content"></div>')
          }
          return (
            (e.prototype.render = function (e) {
              "block" === this.element.style.display &&
                ("block" === e.preview.element.style.display
                  ? Object(wt.a)(
                      e.preview.element.lastElementChild,
                      this.element.lastElementChild,
                      e
                    )
                  : Object(wt.a)(
                      e[e.currentMode].element,
                      this.element.lastElementChild,
                      e
                    ))
            }),
            (e.prototype.toggle = function (e, t) {
              var n
              void 0 === t && (t = !0)
              var r =
                null === (n = e.toolbar.elements.outline) || void 0 === n
                  ? void 0
                  : n.firstElementChild
              t && window.innerWidth >= a.a.MOBILE_WIDTH
                ? ((this.element.style.display = "block"),
                  this.render(e),
                  null == r || r.classList.add("vditor-menu--current"))
                : ((this.element.style.display = "none"),
                  null == r || r.classList.remove("vditor-menu--current")),
                se(e)
            }),
            e
          )
        })(),
        Mt = n(35),
        St = n.n(Mt),
        Ot = n(18),
        kt = (function () {
          function e(e) {
            var t = this
            ;(this.element = document.createElement("div")),
              (this.element.className = "vditor-preview")
            var n = document.createElement("div")
            ;(n.className = "vditor-reset"),
              e.options.classes.preview &&
                n.classList.add(e.options.classes.preview),
              (n.style.maxWidth = e.options.preview.maxWidth + "px"),
              n.addEventListener("copy", function (n) {
                var r = document.createElement("div")
                ;(r.className = "vditor-reset"),
                  r.appendChild(getSelection().getRangeAt(0).cloneContents()),
                  t.copyToWechat(e, r),
                  n.preventDefault()
              })
            var r = document.createElement("div")
            ;(r.className = "vditor-preview__action"),
              (r.innerHTML =
                '<button class="vditor-preview__action--current" data-type="desktop">Desktop</button>\n<button data-type="tablet">Tablet</button>\n<button data-type="mobile">Mobile/Wechat</button>\n<button data-type="mp-wechat" class="vditor-tooltipped vditor-tooltipped__w" aria-label="复制到公众号">' +
                St.a +
                "</button>"),
              this.element.appendChild(r),
              this.element.appendChild(n),
              r.addEventListener(Object(u.a)(), function (i) {
                var o = Object(E.b)(i.target, "BUTTON")
                if (o) {
                  var a = o.getAttribute("data-type")
                  a !==
                    r
                      .querySelector(".vditor-preview__action--current")
                      .getAttribute("data-type") &&
                    ("mp-wechat" !== a
                      ? ((n.style.width =
                          "desktop" === a
                            ? "auto"
                            : "tablet" === a
                            ? "780px"
                            : "360px"),
                        n.scrollWidth > n.parentElement.clientWidth &&
                          (n.style.width = "auto"),
                        t.render(e),
                        r.querySelectorAll("button").forEach(function (e) {
                          e.classList.remove("vditor-preview__action--current")
                        }),
                        o.classList.add("vditor-preview__action--current"))
                      : t.copyToWechat(
                          e,
                          t.element.lastElementChild.cloneNode(!0)
                        ))
                }
              })
          }
          return (
            (e.prototype.render = function (e, t) {
              var n = this
              if (
                (clearTimeout(this.mdTimeoutId),
                "none" !== this.element.style.display)
              )
                if (t) this.element.lastElementChild.innerHTML = t
                else if (
                  "" !== l(e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                ) {
                  var r = new Date().getTime(),
                    i = l(e)
                  this.mdTimeoutId = window.setTimeout(function () {
                    if (e.options.preview.url) {
                      var t = new XMLHttpRequest()
                      t.open("POST", e.options.preview.url),
                        t.setRequestHeader(
                          "Content-Type",
                          "application/json;charset=UTF-8"
                        ),
                        (t.onreadystatechange = function () {
                          if (t.readyState === XMLHttpRequest.DONE)
                            if (200 === t.status) {
                              var o = JSON.parse(t.responseText)
                              if (0 !== o.code) return void e.tip.show(o.msg)
                              e.options.preview.transform &&
                                (o.data = e.options.preview.transform(o.data)),
                                (n.element.lastElementChild.innerHTML = o.data),
                                n.afterRender(e, r)
                            } else {
                              var a = e.lute.Md2HTML(i)
                              e.options.preview.transform &&
                                (a = e.options.preview.transform(a)),
                                (n.element.lastElementChild.innerHTML = a),
                                n.afterRender(e, r)
                            }
                        }),
                        t.send(
                          JSON.stringify({
                            markdownText: i,
                          })
                        )
                    } else {
                      var o = e.lute.Md2HTML(i)
                      e.options.preview.transform &&
                        (o = e.options.preview.transform(o)),
                        (n.element.lastElementChild.innerHTML = o),
                        n.afterRender(e, r)
                    }
                  }, e.options.preview.delay)
                } else this.element.lastElementChild.innerHTML = ""
              else
                "renderPerformance" ===
                  this.element.getAttribute("data-type") && e.tip.hide()
            }),
            (e.prototype.afterRender = function (e, t) {
              e.options.preview.parse && e.options.preview.parse(this.element)
              var n = new Date().getTime() - t
              new Date().getTime() - t > 2600
                ? (e.tip.show(
                    O.a[e.options.lang].performanceTip.replace(
                      "${x}",
                      n.toString()
                    )
                  ),
                  e.preview.element.setAttribute(
                    "data-type",
                    "renderPerformance"
                  ))
                : "renderPerformance" ===
                    e.preview.element.getAttribute("data-type") &&
                  (e.tip.hide(),
                  e.preview.element.removeAttribute("data-type")),
                Object(H.a)(e.preview.element.lastElementChild, e.options.lang),
                Object(R.a)(
                  e.options.preview.hljs,
                  e.preview.element.lastElementChild,
                  e.options.cdn
                ),
                Object(I.a)(e.preview.element.lastElementChild, {
                  cdn: e.options.cdn,
                  math: e.options.preview.math,
                }),
                Object(P.a)(
                  e.preview.element.lastElementChild,
                  ".language-mermaid",
                  e.options.cdn
                ),
                Object(D.a)(e.preview.element.lastElementChild, e.options.cdn),
                Object(N.a)(e.preview.element.lastElementChild, e.options.cdn),
                Object(B.a)(e.preview.element.lastElementChild, e.options.cdn),
                Object(A.a)(e.preview.element.lastElementChild, e.options.cdn),
                Object(Ot.a)(e.preview.element.lastElementChild)
            }),
            (e.prototype.copyToWechat = function (e, t) {
              t.querySelectorAll(".katex-html .base").forEach(function (e) {
                e.style.display = "initial"
              }),
                (t.style.backgroundColor = "#fff"),
                t.querySelectorAll("code").forEach(function (e) {
                  e.style.backgroundImage = "none"
                }),
                this.element.append(t)
              var n = t.ownerDocument.createRange()
              n.selectNode(t),
                Object(M.h)(n),
                document.execCommand("copy"),
                this.element.lastElementChild.remove(),
                e.tip.show("已复制，可到微信公众号平台进行粘贴")
            }),
            e
          )
        })(),
        xt = n(36),
        Lt = n.n(xt),
        Tt = (function () {
          function e(e) {
            ;(this.element = document.createElement("div")),
              (this.element.className =
                "vditor-resize vditor-resize--" + e.options.resize.position),
              (this.element.innerHTML = "<div>" + Lt.a + "</div>"),
              this.bindEvent(e)
          }
          return (
            (e.prototype.bindEvent = function (e) {
              var t = this
              this.element.addEventListener("mousedown", function (n) {
                var r = document,
                  i = n.clientY,
                  o = e.element.offsetHeight,
                  a =
                    63 + e.element.querySelector(".vditor-toolbar").clientHeight
                ;(r.ondragstart = function () {
                  return !1
                }),
                  window.captureEvents && window.captureEvents(),
                  t.element.classList.add("vditor-resize--selected"),
                  (r.onmousemove = function (t) {
                    "top" === e.options.resize.position
                      ? (e.element.style.height =
                          Math.max(a, o + (i - t.clientY)) + "px")
                      : (e.element.style.height =
                          Math.max(a, o + (t.clientY - i)) + "px"),
                      e.options.typewriterMode &&
                        (e.sv.element.style.paddingBottom =
                          e.sv.element.parentElement.offsetHeight / 2 + "px")
                  }),
                  (r.onmouseup = function () {
                    e.options.resize.after &&
                      e.options.resize.after(e.element.offsetHeight - o),
                      window.captureEvents && window.captureEvents(),
                      (r.onmousemove = null),
                      (r.onmouseup = null),
                      (r.ondragstart = null),
                      (r.onselectstart = null),
                      (r.onselect = null),
                      t.element.classList.remove("vditor-resize--selected")
                  })
              })
            }),
            e
          )
        })(),
        _t = (function () {
          function e(e) {
            ;(this.element = document.createElement("pre")),
              (this.element.className = "vditor-textarea"),
              this.element.setAttribute("placeholder", e.options.placeholder),
              this.element.setAttribute("contenteditable", "true"),
              this.element.setAttribute("spellcheck", "false"),
              this.bindEvent(e),
              Me(e, this.element),
              ke(e, this.element),
              xe(e, this.element)
          }
          return (
            (e.prototype.bindEvent = function (e) {
              var t = this
              this.element.addEventListener("copy", function (e) {
                e.stopPropagation(),
                  e.preventDefault(),
                  e.clipboardData.setData("text/plain", te(t.element))
              }),
                this.element.addEventListener("keypress", function (t) {
                  Object(u.c)(t) ||
                    "Enter" !== t.key ||
                    (L(e, "\n", "", !0), Oe(e), t.preventDefault())
                }),
                this.element.addEventListener("input", function () {
                  k(e, {
                    enableAddUndoStack: !0,
                    enableHint: !0,
                    enableInput: !0,
                  }),
                    t.element.querySelectorAll("br").forEach(function (e) {
                      e.nextElementSibling ||
                        e.insertAdjacentHTML(
                          "afterend",
                          '<span style="display: none">\n</span>'
                        )
                    })
                }),
                this.element.addEventListener("blur", function () {
                  e.options.blur && e.options.blur(l(e))
                }),
                this.element.addEventListener("scroll", function () {
                  if ("block" === e.preview.element.style.display) {
                    var n = t.element.scrollTop,
                      r = t.element.clientHeight,
                      i =
                        t.element.scrollHeight -
                        parseFloat(t.element.style.paddingBottom || "0"),
                      o = e.preview.element
                    o.scrollTop =
                      n / r > 0.5
                        ? ((n + r) * o.scrollHeight) / i - r
                        : (n * o.scrollHeight) / i
                  }
                }),
                (e.options.upload.url || e.options.upload.handler) &&
                  this.element.addEventListener("drop", function (t) {
                    if ("Files" !== t.dataTransfer.types[0])
                      return (
                        L(e, getSelection().toString(), "", !1),
                        void t.preventDefault()
                      )
                    var n = t.dataTransfer.items
                    0 !== n.length && (C(e, n), t.preventDefault())
                  }),
                this.element.addEventListener("paste", function (t) {
                  var n = t.clipboardData.getData("text/html"),
                    r = t.clipboardData.getData("text/plain")
                  if (
                    (t.stopPropagation(), t.preventDefault(), "" !== n.trim())
                  ) {
                    if (
                      n
                        .replace(/<(|\/)(html|body|meta)[^>]*?>/gi, "")
                        .trim() !==
                        '<a href="' + r + '">' + r + "</a>" &&
                      n
                        .replace(/<(|\/)(html|body|meta)[^>]*?>/gi, "")
                        .trim() !==
                        '\x3c!--StartFragment--\x3e<a href="' +
                          r +
                          '">' +
                          r +
                          "</a>\x3c!--EndFragment--\x3e"
                    ) {
                      var i = document.createElement("div")
                      ;(i.innerHTML = n),
                        i.querySelectorAll("[style]").forEach(function (e) {
                          e.removeAttribute("style")
                        }),
                        i
                          .querySelectorAll(".vditor-copy")
                          .forEach(function (e) {
                            e.remove()
                          }),
                        i
                          .querySelectorAll(".vditor-anchor")
                          .forEach(function (e) {
                            e.remove()
                          })
                      var o = ie(e, i.innerHTML, r).trimRight()
                      return void L(e, o, "", !0)
                    }
                  } else if (
                    "" !== r.trim() &&
                    0 === t.clipboardData.files.length
                  );
                  else if (t.clipboardData.files.length > 0) {
                    if (!e.options.upload.url && !e.options.upload.handler)
                      return
                    return void C(e, t.clipboardData.files)
                  }
                  L(e, r, "", !0)
                })
            }),
            e
          )
        })(),
        jt = (function () {
          function e() {
            ;(this.element = document.createElement("div")),
              (this.element.className = "vditor-tip")
          }
          return (
            (e.prototype.show = function (e, t) {
              var n = this
              if (
                (void 0 === t && (t = 6e3),
                (this.element.className = "vditor-tip vditor-tip--show"),
                0 === t)
              )
                return (
                  (this.element.innerHTML =
                    '<div class="vditor-tip__content">' +
                    e +
                    '\n<div class="vditor-tip__close">X</div></div>'),
                  void this.element
                    .querySelector(".vditor-tip__close")
                    .addEventListener("click", function () {
                      n.hide()
                    })
                )
              ;(this.element.innerHTML =
                '<div class="vditor-tip__content">' + e + "</div>"),
                setTimeout(function () {
                  n.hide()
                }, t)
            }),
            (e.prototype.hide = function () {
              ;(this.element.className = "vditor-messageElementtip"),
                (this.element.innerHTML = "")
            }),
            e
          )
        })(),
        Ct = function (e, t) {
          if (t.options.preview.mode !== e) {
            switch (((t.options.preview.mode = e), e)) {
              case "both":
                ;(t.sv.element.style.display = "block"),
                  (t.preview.element.style.display = "block"),
                  t.preview.render(t),
                  h(t.toolbar.elements, ["both"])
                break
              case "editor":
                ;(t.sv.element.style.display = "block"),
                  (t.preview.element.style.display = "none"),
                  p(t.toolbar.elements, ["both"])
            }
            t.devtools && t.devtools.renderEchart(t)
          }
        },
        At = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        Nt = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this
            return (
              "both" === t.options.preview.mode &&
                r.element.children[0].classList.add("vditor-menu--current"),
              r.element.children[0].addEventListener(Object(u.a)(), function (
                e
              ) {
                r.element.firstElementChild.classList.contains(
                  a.a.CLASS_MENU_DISABLED
                ) ||
                  (e.preventDefault(),
                  "sv" === t.currentMode &&
                    ("both" === t.options.preview.mode
                      ? Ct("editor", t)
                      : Ct("both", t)))
              }),
              r
            )
          }
          return At(t, e), t
        })(me),
        Ht = function () {
          ;(this.element = document.createElement("div")),
            (this.element.className = "vditor-toolbar__br")
        },
        Dt = n(19),
        Rt = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        It = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this,
              i = r.element.children[0],
              o = document.createElement("div")
            o.className =
              "vditor-hint" + (2 === n.level ? "" : " vditor-panel--arrow")
            var s = ""
            return (
              a.a.CODE_THEME.forEach(function (e) {
                s += "<button>" + e + "</button>"
              }),
              (o.innerHTML =
                '<div style="overflow: auto;max-height:' +
                window.innerHeight / 2 +
                'px">' +
                s +
                "</div>"),
              o.addEventListener(Object(u.a)(), function (e) {
                "BUTTON" === e.target.tagName &&
                  (b(t, ["subToolbar"]),
                  (t.options.preview.hljs.style = e.target.textContent),
                  Object(Dt.a)(e.target.textContent, t.options.cdn),
                  e.preventDefault(),
                  e.stopPropagation())
              }),
              r.element.appendChild(o),
              y(t, o, i, n.level),
              r
            )
          }
          return Rt(t, e), t
        })(me),
        Pt = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        Bt = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this,
              i = r.element.children[0],
              o = document.createElement("div")
            o.className =
              "vditor-hint" + (2 === n.level ? "" : " vditor-panel--arrow")
            var s = ""
            return (
              a.a.CONTENT_THEME.forEach(function (e) {
                s += "<button>" + e + "</button>"
              }),
              (o.innerHTML =
                '<div style="overflow: auto;max-height:' +
                window.innerHeight / 2 +
                'px">' +
                s +
                "</div>"),
              o.addEventListener(Object(u.a)(), function (e) {
                "BUTTON" === e.target.tagName &&
                  (b(t, ["subToolbar"]),
                  (t.options.preview.markdown.theme = e.target.textContent),
                  Object(oe.a)(e.target.textContent, t.options.cdn),
                  e.preventDefault(),
                  e.stopPropagation())
              }),
              r.element.appendChild(o),
              y(t, o, i, n.level),
              r
            )
          }
          return Pt(t, e), t
        })(me),
        qt = (function () {
          function e(e) {
            ;(this.element = document.createElement("span")),
              (this.element.className =
                "vditor-counter vditor-tooltipped vditor-tooltipped__nw"),
              this.render(e, "")
          }
          return (
            (e.prototype.render = function (e, t) {
              var n = t.endsWith("\n") ? t.length - 1 : t.length
              if ("text" === e.options.counter.type && e[e.currentMode]) {
                var r = e[e.currentMode].element.cloneNode(!0)
                r
                  .querySelectorAll(".vditor-wysiwyg__preview")
                  .forEach(function (e) {
                    e.remove()
                  }),
                  (n = r.textContent.length)
              }
              "number" == typeof e.options.counter.max
                ? (n > e.options.counter.max
                    ? (this.element.className =
                        "vditor-counter vditor-counter--error")
                    : (this.element.className = "vditor-counter"),
                  (this.element.innerHTML = n + "/" + e.options.counter.max))
                : (this.element.innerHTML = "" + n),
                this.element.setAttribute("aria-label", e.options.counter.type)
            }),
            e
          )
        })(),
        zt = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        Ut = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this
            return (
              (r.element.children[0].innerHTML = n.icon),
              r.element.children[0].addEventListener(Object(u.a)(), function (
                e
              ) {
                e.preventDefault(), n.click()
              }),
              r
            )
          }
          return zt(t, e), t
        })(me),
        Ft = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        Kt = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this
            return (
              r.element.firstElementChild.addEventListener(
                Object(u.a)(),
                function (e) {
                  var n = r.element.firstElementChild
                  n.classList.contains(a.a.CLASS_MENU_DISABLED) ||
                    (e.preventDefault(),
                    n.classList.contains("vditor-menu--current")
                      ? (n.classList.remove("vditor-menu--current"),
                        (t.devtools.element.style.display = "none"),
                        se(t))
                      : (n.classList.add("vditor-menu--current"),
                        (t.devtools.element.style.display = "block"),
                        se(t),
                        t.devtools.renderEchart(t)))
                }
              ),
              r
            )
          }
          return Ft(t, e), t
        })(me),
        Vt = function () {
          ;(this.element = document.createElement("div")),
            (this.element.className = "vditor-toolbar__divider")
        },
        Wt = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        Jt = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this,
              i = document.createElement("div")
            i.className = "vditor-panel vditor-panel--arrow"
            var o = ""
            Object.keys(t.options.hint.emoji).forEach(function (e) {
              var n = t.options.hint.emoji[e]
              n.indexOf(".") > -1
                ? (o +=
                    '<button data-value=":' +
                    e +
                    ': " data-key=":' +
                    e +
                    ':"><img\ndata-value=":' +
                    e +
                    ': " data-key=":' +
                    e +
                    ':" class="vditor-emojis__icon" src="' +
                    n +
                    '"/></button>')
                : (o +=
                    '<button data-value="' +
                    n +
                    ' "\n data-key="' +
                    e +
                    '"><span class="vditor-emojis__icon">' +
                    n +
                    "</span></button>")
            })
            var a =
              '<div class="vditor-emojis__tail">\n    <span class="vditor-emojis__tip"></span><span>' +
              (t.options.hint.emojiTail || "") +
              "</span>\n</div>"
            return (
              (i.innerHTML =
                '<div class="vditor-emojis" style="max-height: ' +
                ("auto" === t.options.height ? "auto" : t.options.height - 80) +
                'px">' +
                o +
                "</div>" +
                a),
              r.element.appendChild(i),
              y(t, i, r.element.children[0], n.level),
              r._bindEvent(t, i),
              r
            )
          }
          return (
            Wt(t, e),
            (t.prototype._bindEvent = function (e, t) {
              t.querySelectorAll(".vditor-emojis button").forEach(function (n) {
                n.addEventListener(Object(u.a)(), function (r) {
                  r.preventDefault()
                  var i = n.getAttribute("data-value")
                  if ("sv" === e.currentMode) L(e, i, "", !0)
                  else {
                    var o = void 0,
                      a = ""
                    if (
                      ("wysiwyg" === e.currentMode
                        ? ((o = Object(M.b)(e.wysiwyg.element)),
                          (a = e.lute.SpinVditorDOM(i)))
                        : "ir" === e.currentMode &&
                          ((o = Object(M.b)(e.ir.element)),
                          (a = e.lute.SpinVditorIRDOM(i))),
                      i.indexOf(":") > -1)
                    ) {
                      var s = document.createElement("div")
                      ;(s.innerHTML = a),
                        (a =
                          s.firstElementChild.firstElementChild.outerHTML +
                          " "),
                        Object(M.d)(a, e)
                    } else o.insertNode(document.createTextNode(i))
                    o.collapse(!1), Object(M.h)(o)
                  }
                  t.style.display = "none"
                }),
                  n.addEventListener("mouseover", function (e) {
                    "BUTTON" === e.target.tagName &&
                      (t.querySelector(
                        ".vditor-emojis__tip"
                      ).innerHTML = e.target.getAttribute("data-key"))
                  })
              })
            }),
            t
          )
        })(me),
        Zt = function (e, t, n) {
          var r = document.createElement("a")
          "download" in r
            ? ((r.download = n),
              (r.style.display = "none"),
              (r.href = URL.createObjectURL(new Blob([t]))),
              document.body.appendChild(r),
              r.click(),
              r.remove())
            : e.tip.show(O.a[e.options.lang].downloadTip, 0)
        },
        Gt = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        Xt = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this,
              i = r.element.children[0],
              o = document.createElement("div")
            return (
              (o.className =
                "vditor-hint" + (2 === n.level ? "" : " vditor-panel--arrow")),
              (o.innerHTML =
                '<button data-type="markdown">Markdown</button>\n<button data-type="pdf">PDF</button>\n<button data-type="html">HTML</button>'),
              o.addEventListener(Object(u.a)(), function (e) {
                var n = e.target
                if ("BUTTON" === n.tagName) {
                  switch (n.getAttribute("data-type")) {
                    case "markdown":
                      !(function (e) {
                        var t = l(e)
                        Zt(e, t, t.substr(0, 10) + ".md")
                      })(t)
                      break
                    case "pdf":
                      !(function (e) {
                        e.tip.show(O.a[e.options.lang].generate, 3800)
                        var t = document.querySelector("iframe")
                        t.contentDocument.open(),
                          t.contentDocument.write(
                            '<link rel="stylesheet" href="' +
                              e.options.cdn +
                              '/dist/index.css"/>\n<script src="' +
                              e.options.cdn +
                              '/dist/method.min.js"></script>\n<div id="preview"></div>\n<script>\nwindow.addEventListener("message", (e) => {\n  if(!e.data) {\n    return;\n  }\n  Vditor.preview(document.getElementById(\'preview\'), e.data, {\n    markdown: {\n      theme: "' +
                              e.options.preview.markdown.theme +
                              '"\n    },\n    hljs: {\n      style: "' +
                              e.options.preview.hljs.style +
                              '"\n    }\n  });\n  setTimeout(() => {\n        window.print();\n    }, 3600);\n}, false);\n</script>'
                          ),
                          t.contentDocument.close(),
                          setTimeout(function () {
                            t.contentWindow.postMessage(l(e), "*")
                          }, 200)
                      })(t)
                      break
                    case "html":
                      !(function (e) {
                        var t = bt(e),
                          n =
                            '<html><head><link rel="stylesheet" type="text/css" href="' +
                            e.options.cdn +
                            '/dist/index.css"/>\n<script src="' +
                            e.options.cdn +
                            '/dist/method.min.js"></script></head>\n<body><div class="vditor-reset" id="preview">' +
                            t +
                            "</div>\n<script>\n    const previewElement = document.getElementById('preview')\n    Vditor.setContentTheme('" +
                            e.options.preview.markdown.theme +
                            "', '" +
                            e.options.cdn +
                            "');\n    Vditor.codeRender(previewElement, '" +
                            e.options.lang +
                            "');\n    Vditor.highlightRender(" +
                            JSON.stringify(e.options.preview.hljs) +
                            ", previewElement, '" +
                            e.options.cdn +
                            "');\n    Vditor.mathRender(previewElement, {\n        cdn: '" +
                            e.options.cdn +
                            "',\n        math: " +
                            JSON.stringify(e.options.preview.math) +
                            ',\n    });\n    Vditor.mermaidRender(previewElement, ".language-mermaid", \'' +
                            e.options.cdn +
                            "');\n    Vditor.graphvizRender(previewElement, '" +
                            e.options.cdn +
                            "');\n    Vditor.chartRender(previewElement, '" +
                            e.options.cdn +
                            "');\n    Vditor.mindmapRender(previewElement, '" +
                            e.options.cdn +
                            "');\n    Vditor.abcRender(previewElement, '" +
                            e.options.cdn +
                            "');\n    Vditor.mediaRender(previewElement);\n</script></body></html>"
                        Zt(e, n, t.substr(0, 10) + ".html")
                      })(t)
                  }
                  b(t, ["subToolbar"]), e.preventDefault(), e.stopPropagation()
                }
              }),
              r.element.appendChild(o),
              y(t, o, i, n.level),
              r
            )
          }
          return Gt(t, e), t
        })(me),
        Qt = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        $t = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this
            return (
              r.element.children[0].addEventListener(Object(u.a)(), function (
                e
              ) {
                e.preventDefault(),
                  x(
                    t,
                    t.lute.FormatMd(l(t)),
                    Object(M.c)(t.sv.element, getSelection().getRangeAt(0))
                  )
              }),
              r
            )
          }
          return Qt(t, e), t
        })(me),
        Yt = n(37),
        en = n.n(Yt),
        tn = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        nn = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this
            return r._bindEvent(t, n), r
          }
          return (
            tn(t, e),
            (t.prototype._bindEvent = function (e, t) {
              this.element.children[0].addEventListener(
                Object(u.a)(),
                function (n) {
                  n.preventDefault(),
                    e.element.className.includes("vditor--fullscreen")
                      ? (t.level || (this.innerHTML = t.icon),
                        e.element.classList.remove("vditor--fullscreen"),
                        Object.keys(e.toolbar.elements).forEach(function (t) {
                          var n = e.toolbar.elements[t].firstChild
                          n && (n.className = n.className.replace("__s", "__n"))
                        }),
                        e.counter &&
                          (e.counter.element.className = e.counter.element.className.replace(
                            "__s",
                            "__n"
                          )))
                      : (t.level || (this.innerHTML = en.a),
                        e.element.classList.add("vditor--fullscreen"),
                        Object.keys(e.toolbar.elements).forEach(function (t) {
                          var n = e.toolbar.elements[t].firstChild
                          n && (n.className = n.className.replace("__n", "__s"))
                        }),
                        e.counter &&
                          (e.counter.element.className = e.counter.element.className.replace(
                            "__n",
                            "__s"
                          ))),
                    e.devtools && e.devtools.renderEchart(e),
                    t.click &&
                      t.click(
                        e.element.classList.contains("vditor--fullscreen")
                      ),
                    se(e),
                    le(e)
                }
              )
            }),
            t
          )
        })(me),
        rn = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        on = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this,
              i = document.createElement("div")
            return (
              (i.className = "vditor-hint vditor-panel--arrow"),
              (i.innerHTML =
                '<button data-tag="h1" data-value="# ">Heading 1 ' +
                Object(u.f)("&lt;⌘-⌥-1>") +
                '</button>\n<button data-tag="h2" data-value="## ">Heading 2 &lt;' +
                Object(u.f)("⌘-⌥-2") +
                '></button>\n<button data-tag="h3" data-value="### ">Heading 3 &lt;' +
                Object(u.f)("⌘-⌥-3") +
                '></button>\n<button data-tag="h4" data-value="#### ">Heading 4 &lt;' +
                Object(u.f)("⌘-⌥-4") +
                '></button>\n<button data-tag="h5" data-value="##### ">Heading 5 &lt;' +
                Object(u.f)("⌘-⌥-5") +
                '></button>\n<button data-tag="h6" data-value="###### ">Heading 6 &lt;' +
                Object(u.f)("⌘-⌥-6") +
                "></button>"),
              r.element.appendChild(i),
              r._bindEvent(t, i),
              r
            )
          }
          return (
            rn(t, e),
            (t.prototype._bindEvent = function (e, t) {
              var n = this.element.children[0]
              n.addEventListener(Object(u.a)(), function (r) {
                r.preventDefault(),
                  n.classList.contains(a.a.CLASS_MENU_DISABLED) ||
                    (n.blur(),
                    "wysiwyg" === e.currentMode &&
                    n.classList.contains("vditor-menu--current")
                      ? (we(e),
                        U(e),
                        n.classList.remove("vditor-menu--current"))
                      : "ir" === e.currentMode &&
                        n.classList.contains("vditor-menu--current")
                      ? (dt(e, ""), n.classList.remove("vditor-menu--current"))
                      : "block" === t.style.display
                      ? (t.style.display = "none")
                      : (b(e, ["subToolbar"]), (t.style.display = "block")))
              })
              for (var r = 0; r < 6; r++)
                t.children
                  .item(r)
                  .addEventListener(Object(u.a)(), function (r) {
                    r.preventDefault(),
                      "wysiwyg" === e.currentMode
                        ? (ye(e, r.target.getAttribute("data-tag")),
                          U(e),
                          n.classList.add("vditor-menu--current"))
                        : "ir" === e.currentMode
                        ? (dt(e, r.target.getAttribute("data-value")),
                          n.classList.add("vditor-menu--current"))
                        : L(e, r.target.getAttribute("data-value"), "", !1, !0),
                      (t.style.display = "none")
                  })
            }),
            t
          )
        })(me),
        an = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        sn = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this
            return (
              r.element.children[0].addEventListener(Object(u.a)(), function (
                e
              ) {
                e.preventDefault(),
                  t.tip.show(
                    '<div style="margin-bottom:14px;font-size: 14px;line-height: 22px;min-width:300px;max-width: 360px;display: flex;">\n<div style="margin-top: 14px;flex: 1">\n    <div>Markdown 使用指南</div>\n    <ul style="list-style: none">\n        <li><a href="https://hacpai.com/article/1583308420519" target="_blank">语法速查手册</a></li>\n        <li><a href="https://hacpai.com/article/1583129520165" target="_blank">基础语法</a></li>\n        <li><a href="https://hacpai.com/article/1583305480675" target="_blank">扩展语法</a></li>\n        <li><a href="https://hacpai.com/article/1582778815353" target="_blank">键盘快捷键</a></li>\n    </ul>\n</div>\n<div style="margin-top: 14px;flex: 1">\n    <div>Vditor 支持</div>\n    <ul style="list-style: none">\n        <li><a href="https://github.com/Vanessa219/vditor/issues" target="_blank">Issues</a></li>\n        <li><a href="https://hacpai.com/tag/vditor" target="_blank">官方讨论区</a></li>\n        <li><a href="https://hacpai.com/article/1549638745630" target="_blank">开发手册</a></li>\n        <li><a href="https://hacpai.com/guide/markdown" target="_blank">演示地址</a></li>\n    </ul>\n</div></div>',
                    0
                  )
              }),
              r
            )
          }
          return an(t, e), t
        })(me),
        ln = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        cn = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this
            return (
              r.element.children[0].addEventListener(Object(u.a)(), function (
                e
              ) {
                if (
                  (e.preventDefault(),
                  !r.element.firstElementChild.classList.contains(
                    a.a.CLASS_MENU_DISABLED
                  ) && "sv" !== t.currentMode)
                ) {
                  var n = Object(M.b)(t[t.currentMode].element),
                    i = Object(w.f)(n.startContainer, "LI")
                  i && Ke(t, i, n)
                }
              }),
              r
            )
          }
          return ln(t, e), t
        })(me),
        dn = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        un = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this
            return (
              r.element.children[0].addEventListener(Object(u.a)(), function (
                e
              ) {
                e.preventDefault(),
                  t.tip.show(
                    '<div style="max-width: 520px; font-size: 14px;line-height: 22px;margin-bottom: 14px;">\n<p style="text-align: center;margin: 14px 0">\n    <em>下一代的 Markdown 编辑器，为未来而构建</em>\n</p>\n<div style="display: flex;margin-bottom: 14px;flex-wrap: wrap;align-items: center">\n    <img src="https://cdn.jsdelivr.net/npm/vditor/src/assets/images/logo.png" style="margin: 0 auto;height: 68px"/>\n    <div>&nbsp;&nbsp;</div>\n    <div style="flex: 1;min-width: 250px">\n        Vditor 是一款浏览器端的 Markdown 编辑器，支持所见即所得、即时渲染（类似 Typora）和分屏预览模式。\n        它使用 TypeScript 实现，支持原生 JavaScript、Vue、React、Angular，提供<a target="_blank" href="https://github.com/88250/liandi">桌面版</a>。\n    </div>\n</div>\n<div style="display: flex;flex-wrap: wrap;">\n    <ul style="list-style: none;flex: 1;min-width:148px">\n        <li>\n        项目地址：<a href="https://vditor.b3log.org" target="_blank">vditor.b3log.org</a>\n        </li>\n        <li>\n        开源协议：MIT\n        </li>\n    </ul>\n    <ul style="list-style: none;margin-right: 18px">\n        <li>\n        组件版本：Vditor v' +
                      a.b +
                      " / Lute v" +
                      Lute.Version +
                      '\n        </li>\n        <li>\n        赞助捐赠：<a href="https://hacpai.com/sponsor" target="_blank">https://hacpai.com/sponsor</a>\n        </li>\n    </ul>\n</div>\n</div>',
                    0
                  )
              }),
              r
            )
          }
          return dn(t, e), t
        })(me),
        pn = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        hn = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this
            return (
              r.element.children[0].addEventListener(Object(u.a)(), function (
                e
              ) {
                e.preventDefault(),
                  r.element.firstElementChild.classList.contains(
                    a.a.CLASS_MENU_DISABLED
                  ) ||
                    "sv" === t.currentMode ||
                    Ie(t, "afterend")
              }),
              r
            )
          }
          return pn(t, e), t
        })(me),
        fn = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        mn = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this
            return (
              r.element.children[0].addEventListener(Object(u.a)(), function (
                e
              ) {
                e.preventDefault(),
                  r.element.firstElementChild.classList.contains(
                    a.a.CLASS_MENU_DISABLED
                  ) ||
                    "sv" === t.currentMode ||
                    Ie(t, "beforebegin")
              }),
              r
            )
          }
          return fn(t, e), t
        })(me),
        vn = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        gn = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this
            return (
              r.element.children[0].addEventListener(Object(u.a)(), function (
                e
              ) {
                if (
                  (e.preventDefault(),
                  !r.element.firstElementChild.classList.contains(
                    a.a.CLASS_MENU_DISABLED
                  ) && "sv" !== t.currentMode)
                ) {
                  var n = Object(M.b)(t[t.currentMode].element),
                    i = Object(w.f)(n.startContainer, "LI")
                  i && Ve(t, i, n, i.parentElement)
                }
              }),
              r
            )
          }
          return vn(t, e), t
        })(me),
        bn = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        yn = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this
            return (
              t.options.outline &&
                r.element.firstElementChild.classList.add(
                  "vditor-menu--current"
                ),
              r.element.children[0].addEventListener(Object(u.a)(), function (
                e
              ) {
                e.preventDefault(),
                  t.toolbar.elements.outline.firstElementChild.classList.contains(
                    a.a.CLASS_MENU_DISABLED
                  ) ||
                    ((t.options.outline = !r.element.firstElementChild.classList.contains(
                      "vditor-menu--current"
                    )),
                    t.outline.toggle(t, t.options.outline))
              }),
              r
            )
          }
          return bn(t, e), t
        })(me),
        wn = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        En = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this
            return r._bindEvent(t), r
          }
          return (
            wn(t, e),
            (t.prototype._bindEvent = function (e) {
              var t = this
              this.element.children[0].addEventListener(
                Object(u.a)(),
                function (n) {
                  n.preventDefault()
                  var r = t.element.firstElementChild
                  if (!r.classList.contains(a.a.CLASS_MENU_DISABLED)) {
                    var i = a.a.EDIT_TOOLBARS.concat([
                      "both",
                      "format",
                      "edit-mode",
                      "devtools",
                    ])
                    r.classList.contains("vditor-menu--current")
                      ? (r.classList.remove("vditor-menu--current"),
                        "sv" === e.currentMode
                          ? ((e.sv.element.style.display = "block"),
                            "both" === e.options.preview.mode
                              ? (e.preview.element.style.display = "block")
                              : (e.preview.element.style.display = "none"))
                          : ((e[
                              e.currentMode
                            ].element.parentElement.style.display = "block"),
                            (e.preview.element.style.display = "none")),
                        f(e.toolbar.elements, i),
                        e.outline.render(e))
                      : (m(e.toolbar.elements, i),
                        (e.preview.element.style.display = "block"),
                        "sv" === e.currentMode
                          ? (e.sv.element.style.display = "none")
                          : (e[
                              e.currentMode
                            ].element.parentElement.style.display = "none"),
                        e.preview.render(e),
                        r.classList.add("vditor-menu--current"),
                        b(e, ["subToolbar", "hint", "popover"]),
                        setTimeout(function () {
                          e.outline.render(e)
                        }, e.options.preview.delay + 10)),
                      se(e)
                  }
                }
              )
            }),
            t
          )
        })(me),
        Mn = (function () {
          function e(e) {
            var t
            if (
              ((this.SAMPLE_RATE = 5e3),
              (this.isRecording = !1),
              (this.readyFlag = !1),
              (this.leftChannel = []),
              (this.rightChannel = []),
              (this.recordingLength = 0),
              "undefined" != typeof AudioContext)
            )
              t = new AudioContext()
            else {
              if (!webkitAudioContext) return
              t = new webkitAudioContext()
            }
            this.DEFAULT_SAMPLE_RATE = t.sampleRate
            var n = t.createGain()
            t.createMediaStreamSource(e).connect(n),
              (this.recorder = t.createScriptProcessor(2048, 2, 1)),
              (this.recorder.onaudioprocess = null),
              n.connect(this.recorder),
              this.recorder.connect(t.destination),
              (this.readyFlag = !0)
          }
          return (
            (e.prototype.cloneChannelData = function (e, t) {
              this.leftChannel.push(new Float32Array(e)),
                this.rightChannel.push(new Float32Array(t)),
                (this.recordingLength += 2048)
            }),
            (e.prototype.startRecordingNewWavFile = function () {
              this.readyFlag &&
                ((this.isRecording = !0),
                (this.leftChannel.length = this.rightChannel.length = 0),
                (this.recordingLength = 0))
            }),
            (e.prototype.stopRecording = function () {
              this.isRecording = !1
            }),
            (e.prototype.buildWavFileBlob = function () {
              for (
                var e = this.mergeBuffers(this.leftChannel),
                  t = this.mergeBuffers(this.rightChannel),
                  n = new Float32Array(e.length),
                  r = 0;
                r < e.length;
                ++r
              )
                n[r] = 0.5 * (e[r] + t[r])
              this.DEFAULT_SAMPLE_RATE > this.SAMPLE_RATE &&
                (n = this.downSampleBuffer(n, this.SAMPLE_RATE))
              var i = 44 + 2 * n.length,
                o = new ArrayBuffer(i),
                a = new DataView(o)
              this.writeUTFBytes(a, 0, "RIFF"),
                a.setUint32(4, i, !0),
                this.writeUTFBytes(a, 8, "WAVE"),
                this.writeUTFBytes(a, 12, "fmt "),
                a.setUint32(16, 16, !0),
                a.setUint16(20, 1, !0),
                a.setUint16(22, 1, !0),
                a.setUint32(24, this.SAMPLE_RATE, !0),
                a.setUint32(28, 2 * this.SAMPLE_RATE, !0),
                a.setUint16(32, 2, !0),
                a.setUint16(34, 16, !0)
              var s = 2 * n.length
              this.writeUTFBytes(a, 36, "data"), a.setUint32(40, s, !0)
              for (var l = n.length, c = 44, d = 0; d < l; d++)
                a.setInt16(c, 32767 * n[d], !0), (c += 2)
              return new Blob([a], {
                type: "audio/wav",
              })
            }),
            (e.prototype.downSampleBuffer = function (e, t) {
              if (t === this.DEFAULT_SAMPLE_RATE) return e
              if (t > this.DEFAULT_SAMPLE_RATE) return e
              for (
                var n = this.DEFAULT_SAMPLE_RATE / t,
                  r = Math.round(e.length / n),
                  i = new Float32Array(r),
                  o = 0,
                  a = 0;
                o < i.length;

              ) {
                for (
                  var s = Math.round((o + 1) * n), l = 0, c = 0, d = a;
                  d < s && d < e.length;
                  d++
                )
                  (l += e[d]), c++
                ;(i[o] = l / c), o++, (a = s)
              }
              return i
            }),
            (e.prototype.mergeBuffers = function (e) {
              for (
                var t = new Float32Array(this.recordingLength),
                  n = 0,
                  r = e.length,
                  i = 0;
                i < r;
                ++i
              ) {
                var o = e[i]
                t.set(o, n), (n += o.length)
              }
              return t
            }),
            (e.prototype.writeUTFBytes = function (e, t, n) {
              for (var r = n.length, i = 0; i < r; i++)
                e.setUint8(t + i, n.charCodeAt(i))
            }),
            e
          )
        })(),
        Sn = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        On = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this
            return r._bindEvent(t), r
          }
          return (
            Sn(t, e),
            (t.prototype._bindEvent = function (e) {
              var t,
                n = this
              this.element.children[0].addEventListener(
                Object(u.a)(),
                function (r) {
                  if (
                    (r.preventDefault(),
                    !n.element.firstElementChild.classList.contains(
                      a.a.CLASS_MENU_DISABLED
                    ))
                  ) {
                    var i =
                      "wysiwyg" === e.currentMode
                        ? e.wysiwyg.element
                        : e.sv.element
                    if (t)
                      if (t.isRecording) {
                        t.stopRecording(), e.tip.hide()
                        var o = new File(
                          [t.buildWavFileBlob()],
                          "record" + new Date().getTime() + ".wav",
                          {
                            type: "video/webm",
                          }
                        )
                        C(e, [o]),
                          n.element.children[0].classList.remove(
                            "vditor-menu--current"
                          )
                      } else
                        e.tip.show(O.a[e.options.lang].recording),
                          i.setAttribute("contenteditable", "false"),
                          t.startRecordingNewWavFile(),
                          n.element.children[0].classList.add(
                            "vditor-menu--current"
                          )
                    else
                      navigator.mediaDevices
                        .getUserMedia({
                          audio: !0,
                        })
                        .then(function (r) {
                          ;((t = new Mn(r)).recorder.onaudioprocess = function (
                            e
                          ) {
                            if (t.isRecording) {
                              var n = e.inputBuffer.getChannelData(0),
                                r = e.inputBuffer.getChannelData(1)
                              t.cloneChannelData(n, r)
                            }
                          }),
                            t.startRecordingNewWavFile(),
                            e.tip.show(O.a[e.options.lang].recording),
                            i.setAttribute("contenteditable", "false"),
                            n.element.children[0].classList.add(
                              "vditor-menu--current"
                            )
                        })
                        .catch(function () {
                          e.tip.show(O.a[e.options.lang]["record-tip"])
                        })
                  }
                }
              )
            }),
            t
          )
        })(me),
        kn = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        xn = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this
            return (
              m(
                {
                  redo: r.element,
                },
                ["redo"]
              ),
              r.element.children[0].addEventListener(Object(u.a)(), function (
                e
              ) {
                e.preventDefault(),
                  r.element.firstElementChild.classList.contains(
                    a.a.CLASS_MENU_DISABLED
                  ) ||
                    ("sv" === t.currentMode
                      ? t.undo.redo(t)
                      : "wysiwyg" === t.currentMode
                      ? t.wysiwygUndo.redo(t)
                      : "ir" === t.currentMode && t.irUndo.redo(t))
              }),
              r
            )
          }
          return kn(t, e), t
        })(me),
        Ln = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        Tn = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this
            return (
              m(
                {
                  undo: r.element,
                },
                ["undo"]
              ),
              r.element.children[0].addEventListener(Object(u.a)(), function (
                e
              ) {
                e.preventDefault(),
                  r.element.firstElementChild.classList.contains(
                    a.a.CLASS_MENU_DISABLED
                  ) ||
                    ("sv" === t.currentMode
                      ? t.undo.undo(t)
                      : "wysiwyg" === t.currentMode
                      ? t.wysiwygUndo.undo(t)
                      : "ir" === t.currentMode && t.irUndo.undo(t))
              }),
              r
            )
          }
          return Ln(t, e), t
        })(me),
        _n = n(28),
        jn = n.n(_n),
        Cn = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        An = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this,
              i = '<input multiple="multiple" type="file">'
            return (
              t.options.upload.accept &&
                (i =
                  '<input multiple="multiple" type="file" accept="' +
                  t.options.upload.accept +
                  '">'),
              (r.element.children[0].innerHTML = "" + (n.icon || jn.a) + i),
              r._bindEvent(t),
              r
            )
          }
          return (
            Cn(t, e),
            (t.prototype._bindEvent = function (e) {
              var t = this
              this.element
                .querySelector("input")
                .addEventListener("change", function (n) {
                  t.element.firstElementChild.classList.contains(
                    a.a.CLASS_MENU_DISABLED
                  ) ||
                    (0 !== n.target.files.length &&
                      C(e, n.target.files, n.target))
                })
            }),
            t
          )
        })(me),
        Nn = (function () {
          function e(e) {
            var t = this,
              n = e.options
            ;(this.elements = {}),
              (this.element = document.createElement("div")),
              (this.element.className = "vditor-toolbar"),
              n.toolbar.forEach(function (n, r) {
                var i = t.genItem(e, n, r)
                if ((t.element.appendChild(i), n.toolbar)) {
                  var o = document.createElement("div")
                  ;(o.className = "vditor-hint vditor-panel--arrow"),
                    o.addEventListener(Object(u.a)(), function (e) {
                      o.style.display = "none"
                    }),
                    n.toolbar.forEach(function (n, i) {
                      ;(n.level = 2), o.appendChild(t.genItem(e, n, r + i))
                    }),
                    i.appendChild(o),
                    y(e, o, i.children[0])
                }
              }),
              e.options.toolbarConfig.hide &&
                this.element.classList.add("vditor-toolbar--hide"),
              e.options.toolbarConfig.pin &&
                this.element.classList.add("vditor-toolbar--pin"),
              e.options.counter.enable &&
                ((e.counter = new qt(e)),
                this.element.appendChild(e.counter.element))
          }
          return (
            (e.prototype.genItem = function (e, t, n) {
              var r
              switch (t.name) {
                case "bold":
                case "italic":
                case "more":
                case "strike":
                case "line":
                case "quote":
                case "list":
                case "ordered-list":
                case "check":
                case "code":
                case "inline-code":
                case "link":
                case "table":
                  r = new me(e, t)
                  break
                case "emoji":
                  r = new Jt(e, t)
                  break
                case "headings":
                  r = new on(e, t)
                  break
                case "|":
                  r = new Vt()
                  break
                case "br":
                  r = new Ht()
                  break
                case "undo":
                  r = new Tn(e, t)
                  break
                case "redo":
                  r = new xn(e, t)
                  break
                case "help":
                  r = new sn(e, t)
                  break
                case "both":
                  r = new Nt(e, t)
                  break
                case "preview":
                  r = new En(e, t)
                  break
                case "fullscreen":
                  r = new nn(e, t)
                  break
                case "upload":
                  r = new An(e, t)
                  break
                case "record":
                  r = new On(e, t)
                  break
                case "info":
                  r = new un(e, t)
                  break
                case "format":
                  r = new $t(e, t)
                  break
                case "edit-mode":
                  r = new be(e, t)
                  break
                case "devtools":
                  r = new Kt(e, t)
                  break
                case "outdent":
                  r = new gn(e, t)
                  break
                case "indent":
                  r = new cn(e, t)
                  break
                case "outline":
                  r = new yn(e, t)
                  break
                case "insert-after":
                  r = new hn(e, t)
                  break
                case "insert-before":
                  r = new mn(e, t)
                  break
                case "code-theme":
                  r = new It(e, t)
                  break
                case "content-theme":
                  r = new Bt(e, t)
                  break
                case "export":
                  r = new Xt(e, t)
                  break
                default:
                  r = new Ut(e, t)
              }
              if (r) {
                var i = t.name
                return (
                  ("br" !== i && "|" !== i) || (i += n),
                  (this.elements[i] = r.element),
                  r.element
                )
              }
            }),
            e
          )
        })(),
        Hn = n(24),
        Dn = n.n(Hn),
        Rn = (function () {
          function e() {
            ;(this.stackSize = 50),
              (this.redoStack = []),
              (this.undoStack = []),
              (this.dmp = new Dn.a()),
              (this.lastText = ""),
              (this.hasUndo = !1)
          }
          return (
            (e.prototype.resetIcon = function (e) {
              this.undoStack.length > 1
                ? f(e.toolbar.elements, ["undo"])
                : m(e.toolbar.elements, ["undo"]),
                0 !== this.redoStack.length
                  ? f(e.toolbar.elements, ["redo"])
                  : m(e.toolbar.elements, ["redo"])
            }),
            (e.prototype.recordFirstPosition = function (e) {
              1 === this.undoStack.length &&
                (this.undoStack[0].end = Object(M.c)(e.sv.element).end)
            }),
            (e.prototype.undo = function (e) {
              if (
                "false" !== e.sv.element.getAttribute("contenteditable") &&
                !(this.undoStack.length < 2)
              ) {
                var t = this.undoStack.pop()
                t &&
                  t.patchList &&
                  (this.redoStack.push(t),
                  this.renderDiff(t, e),
                  (this.hasUndo = !0))
              }
            }),
            (e.prototype.redo = function (e) {
              if ("false" !== e.sv.element.getAttribute("contenteditable")) {
                var t = this.redoStack.pop()
                t &&
                  t.patchList &&
                  (this.undoStack.push(t), this.renderDiff(t, e, !0))
              }
            }),
            (e.prototype.addToUndoStack = function (e) {
              var t = this
              clearTimeout(this.timeout),
                (this.timeout = window.setTimeout(function () {
                  var n = l(e),
                    r = t.dmp.diff_main(n, t.lastText, !0),
                    i = t.dmp.patch_make(n, t.lastText, r)
                  0 !== i.length &&
                    ((t.lastText = n),
                    t.undoStack.push({
                      patchList: i,
                      end: Object(M.c)(e.sv.element).end,
                    }),
                    t.undoStack.length > t.stackSize && t.undoStack.shift(),
                    t.hasUndo &&
                      ((t.redoStack = []),
                      (t.hasUndo = !1),
                      m(e.toolbar.elements, ["redo"])),
                    t.undoStack.length > 1 && f(e.toolbar.elements, ["undo"]))
                }, 500))
            }),
            (e.prototype.renderDiff = function (e, t, n) {
              var r, i
              if ((void 0 === n && (n = !1), n)) {
                var o = this.dmp.patch_deepCopy(e.patchList).reverse()
                o.forEach(function (e) {
                  e.diffs.forEach(function (e) {
                    e[0] = -e[0]
                  })
                }),
                  (r = this.dmp.patch_apply(o, this.lastText)[0]),
                  (i = {
                    end: e.end,
                    start: e.end,
                  })
              } else
                (r = this.dmp.patch_apply(e.patchList, this.lastText)[0]),
                  this.undoStack[this.undoStack.length - 1] &&
                    (i = {
                      end: this.undoStack[this.undoStack.length - 1].end,
                      start: this.undoStack[this.undoStack.length - 1].end,
                    })
              ;(this.lastText = r),
                x(t, r, i, {
                  enableAddUndoStack: !1,
                  enableHint: !1,
                  enableInput: !0,
                }),
                Oe(t),
                this.undoStack.length > 1
                  ? f(t.toolbar.elements, ["undo"])
                  : m(t.toolbar.elements, ["undo"]),
                0 !== this.redoStack.length
                  ? f(t.toolbar.elements, ["redo"])
                  : m(t.toolbar.elements, ["redo"])
            }),
            e
          )
        })(),
        In = (function () {
          function e() {
            ;(this.stackSize = 50),
              (this.redoStack = []),
              (this.undoStack = []),
              (this.dmp = new Dn.a()),
              (this.lastText = ""),
              (this.hasUndo = !1)
          }
          return (
            (e.prototype.resetIcon = function (e) {
              this.undoStack.length > 1
                ? f(e.toolbar.elements, ["undo"])
                : m(e.toolbar.elements, ["undo"]),
                0 !== this.redoStack.length
                  ? f(e.toolbar.elements, ["redo"])
                  : m(e.toolbar.elements, ["redo"])
            }),
            (e.prototype.undo = function (e) {
              if (
                "false" !== e.ir.element.getAttribute("contenteditable") &&
                !(this.undoStack.length < 2)
              ) {
                var t = this.undoStack.pop()
                t &&
                  t &&
                  (this.redoStack.push(t),
                  this.renderDiff(t, e),
                  (this.hasUndo = !0))
              }
            }),
            (e.prototype.redo = function (e) {
              if ("false" !== e.ir.element.getAttribute("contenteditable")) {
                var t = this.redoStack.pop()
                t && (this.undoStack.push(t), this.renderDiff(t, e, !0))
              }
            }),
            (e.prototype.recordFirstWbr = function (e, t) {
              0 !== getSelection().rangeCount &&
                1 === this.undoStack.length &&
                0 !== this.undoStack[0].length &&
                ((Object(u.d)() && "Backspace" === t.key) ||
                  Object(u.e)() ||
                  (getSelection()
                    .getRangeAt(0)
                    .insertNode(document.createElement("wbr")),
                  (this.undoStack[0][0].diffs[0][1] = e.lute.SpinVditorIRDOM(
                    e.ir.element.innerHTML
                  )),
                  (this.lastText = this.undoStack[0][0].diffs[0][1]),
                  e.ir.element.querySelector("wbr") &&
                    e.ir.element.querySelector("wbr").remove()))
            }),
            (e.prototype.addToUndoStack = function (e) {
              var t
              if (
                0 !== getSelection().rangeCount &&
                !e.ir.element.querySelector("wbr")
              ) {
                var n = getSelection().getRangeAt(0)
                ;(t = n.cloneRange()),
                  e.ir.element.contains(n.startContainer) &&
                    n.insertNode(document.createElement("wbr"))
              }
              var r = e.lute.SpinVditorIRDOM(e.ir.element.innerHTML)
              e.ir.element.querySelector("wbr") &&
                e.ir.element.querySelector("wbr").remove(),
                t && Object(M.h)(t)
              var i = this.dmp.diff_main(r, this.lastText, !0),
                o = this.dmp.patch_make(r, this.lastText, i)
              ;(0 === o.length && this.undoStack.length > 0) ||
                ((this.lastText = r),
                this.undoStack.push(o),
                this.undoStack.length > this.stackSize &&
                  this.undoStack.shift(),
                this.hasUndo && ((this.redoStack = []), (this.hasUndo = !1)),
                this.undoStack.length > 1 && f(e.toolbar.elements, ["undo"]))
            }),
            (e.prototype.renderDiff = function (e, t, n) {
              var r
              if ((void 0 === n && (n = !1), n)) {
                var i = this.dmp.patch_deepCopy(e).reverse()
                i.forEach(function (e) {
                  e.diffs.forEach(function (e) {
                    e[0] = -e[0]
                  })
                }),
                  (r = this.dmp.patch_apply(i, this.lastText)[0])
              } else r = this.dmp.patch_apply(e, this.lastText)[0]
              ;(this.lastText = r),
                (t.ir.element.innerHTML = r),
                Object(M.f)(
                  t.ir.element,
                  t.ir.element.ownerDocument.createRange()
                ),
                Oe(t),
                ct(t, {
                  enableAddUndoStack: !1,
                  enableHint: !1,
                  enableInput: !0,
                }),
                this.undoStack.length > 1
                  ? f(t.toolbar.elements, ["undo"])
                  : m(t.toolbar.elements, ["undo"]),
                0 !== this.redoStack.length
                  ? f(t.toolbar.elements, ["redo"])
                  : m(t.toolbar.elements, ["redo"])
            }),
            e
          )
        })(),
        Pn = (function () {
          function e() {
            ;(this.stackSize = 50),
              (this.redoStack = []),
              (this.undoStack = []),
              (this.dmp = new Dn.a()),
              (this.lastText = ""),
              (this.hasUndo = !1)
          }
          return (
            (e.prototype.resetIcon = function (e) {
              this.undoStack.length > 1
                ? f(e.toolbar.elements, ["undo"])
                : m(e.toolbar.elements, ["undo"]),
                0 !== this.redoStack.length
                  ? f(e.toolbar.elements, ["redo"])
                  : m(e.toolbar.elements, ["redo"])
            }),
            (e.prototype.undo = function (e) {
              if (
                "false" !== e.wysiwyg.element.getAttribute("contenteditable") &&
                !(this.undoStack.length < 2)
              ) {
                var t = this.undoStack.pop()
                t &&
                  t &&
                  (this.redoStack.push(t),
                  this.renderDiff(t, e),
                  (this.hasUndo = !0))
              }
            }),
            (e.prototype.redo = function (e) {
              if (
                "false" !== e.wysiwyg.element.getAttribute("contenteditable")
              ) {
                var t = this.redoStack.pop()
                t && (this.undoStack.push(t), this.renderDiff(t, e, !0))
              }
            }),
            (e.prototype.recordFirstWbr = function (e, t) {
              0 !== getSelection().rangeCount &&
                1 === this.undoStack.length &&
                0 !== this.undoStack[0].length &&
                ((Object(u.d)() && "Backspace" === t.key) ||
                  Object(u.e)() ||
                  (getSelection()
                    .getRangeAt(0)
                    .insertNode(document.createElement("wbr")),
                  (this.undoStack[0][0].diffs[0][1] = e.lute.SpinVditorDOM(
                    e.wysiwyg.element.innerHTML
                  )),
                  (this.lastText = this.undoStack[0][0].diffs[0][1]),
                  e.wysiwyg.element.querySelector("wbr") &&
                    e.wysiwyg.element.querySelector("wbr").remove()))
            }),
            (e.prototype.addToUndoStack = function (e) {
              var t
              if (
                0 !== getSelection().rangeCount &&
                !e.wysiwyg.element.querySelector("wbr")
              ) {
                var n = getSelection().getRangeAt(0)
                e.wysiwyg.element.contains(n.startContainer) &&
                  ((t = n.cloneRange()),
                  n.insertNode(document.createElement("wbr")))
              }
              var r = e.lute.SpinVditorDOM(e.wysiwyg.element.innerHTML)
              e.wysiwyg.element.querySelector("wbr") &&
                e.wysiwyg.element.querySelector("wbr").remove(),
                t && Object(M.h)(t)
              var i = this.dmp.diff_main(r, this.lastText, !0),
                o = this.dmp.patch_make(r, this.lastText, i)
              ;(0 === o.length && this.undoStack.length > 0) ||
                ((this.lastText = r),
                this.undoStack.push(o),
                this.undoStack.length > this.stackSize &&
                  this.undoStack.shift(),
                this.hasUndo &&
                  ((this.redoStack = []),
                  (this.hasUndo = !1),
                  m(e.toolbar.elements, ["redo"])),
                this.undoStack.length > 1 && f(e.toolbar.elements, ["undo"]))
            }),
            (e.prototype.renderDiff = function (e, t, n) {
              var r
              if ((void 0 === n && (n = !1), n)) {
                var i = this.dmp.patch_deepCopy(e).reverse()
                i.forEach(function (e) {
                  e.diffs.forEach(function (e) {
                    e[0] = -e[0]
                  })
                }),
                  (r = this.dmp.patch_apply(i, this.lastText)[0])
              } else r = this.dmp.patch_apply(e, this.lastText)[0]
              ;(this.lastText = r),
                (t.wysiwyg.element.innerHTML = r),
                t.wysiwyg.element
                  .querySelectorAll(".vditor-wysiwyg__preview[data-render='2']")
                  .forEach(function (e) {
                    z(e, t)
                  }),
                Object(M.f)(
                  t.wysiwyg.element,
                  t.wysiwyg.element.ownerDocument.createRange()
                ),
                Oe(t),
                U(t, {
                  enableAddUndoStack: !1,
                  enableHint: !1,
                  enableInput: !0,
                }),
                Le(t),
                this.undoStack.length > 1
                  ? f(t.toolbar.elements, ["undo"])
                  : m(t.toolbar.elements, ["undo"]),
                0 !== this.redoStack.length
                  ? f(t.toolbar.elements, ["redo"])
                  : m(t.toolbar.elements, ["redo"])
            }),
            e
          )
        })(),
        Bn = n(38),
        qn = n.n(Bn),
        zn = n(39),
        Un = n.n(zn),
        Fn = n(40),
        Kn = n.n(Fn),
        Vn = n(41),
        Wn = n.n(Vn),
        Jn = n(42),
        Zn = n.n(Jn),
        Gn = n(43),
        Xn = n.n(Gn),
        Qn = n(44),
        $n = n.n(Qn),
        Yn = n(45),
        er = n.n(Yn),
        tr = n(46),
        nr = n.n(tr),
        rr = n(47),
        ir = n.n(rr),
        or = n(48),
        ar = n.n(or),
        sr = n(49),
        lr = n.n(sr),
        cr = n(50),
        dr = n.n(cr),
        ur = n(51),
        pr = n.n(ur),
        hr = n(52),
        fr = n.n(hr),
        mr = n(53),
        vr = n.n(mr),
        gr = n(54),
        br = n.n(gr),
        yr = n(55),
        wr = n.n(yr),
        Er = n(56),
        Mr = n.n(Er),
        Sr = n(57),
        Or = n.n(Sr),
        kr = n(58),
        xr = n.n(kr),
        Lr = n(59),
        Tr = n.n(Lr),
        _r = n(60),
        jr = n.n(_r),
        Cr = n(29),
        Ar = n.n(Cr),
        Nr = n(61),
        Hr = n.n(Nr),
        Dr = n(62),
        Rr = n.n(Dr),
        Ir = n(63),
        Pr = n.n(Ir),
        Br = n(64),
        qr = n.n(Br),
        zr = n(65),
        Ur = n.n(zr),
        Fr = n(66),
        Kr = n.n(Fr),
        Vr = n(67),
        Wr = n.n(Vr),
        Jr = n(68),
        Zr = n.n(Jr),
        Gr = (function () {
          function e(e) {
            ;(this.defaultOptions = {
              after: void 0,
              cache: {
                enable: !0,
              },
              cdn: "https://cdn.jsdelivr.net/npm/vditor@" + a.b,
              classes: {
                preview: "",
              },
              counter: {
                enable: !1,
                type: "markdown",
              },
              debugger: !1,
              height: "auto",
              hint: {
                delay: 200,
                emoji: {
                  "+1": "👍",
                  "-1": "👎",
                  confused: "😕",
                  eyes: "👀️",
                  heart: "❤️",
                  rocket: "🚀️",
                  smile: "😄",
                  tada: "🎉️",
                },
                emojiPath:
                  "https://cdn.jsdelivr.net/npm/vditor@" +
                  a.b +
                  "/dist/images/emoji",
              },
              keymap: {
                deleteLine: "⌘-Backspace",
                duplicate: "⌘-D",
              },
              lang: "zh_CN",
              mode: "wysiwyg",
              outline: !1,
              placeholder: "",
              preview: {
                delay: 1e3,
                hljs: {
                  enable: !0,
                  lineNumber: !1,
                  style: "github",
                },
                markdown: {
                  autoSpace: !1,
                  chinesePunct: !1,
                  codeBlockPreview: !0,
                  fixTermTypo: !1,
                  footnotes: !0,
                  listMarker: !1,
                  sanitize: !0,
                  setext: !1,
                  theme: "light",
                  toc: !1,
                },
                math: {
                  engine: "KaTeX",
                  inlineDigit: !1,
                  macros: {},
                },
                maxWidth: 800,
                mode: "both",
              },
              resize: {
                enable: !1,
                position: "bottom",
              },
              theme: "classic",
              toolbar: [
                "emoji",
                "headings",
                "bold",
                "italic",
                "strike",
                "link",
                "|",
                "list",
                "ordered-list",
                "check",
                "outdent",
                "indent",
                "|",
                "quote",
                "line",
                "code",
                "inline-code",
                "insert-before",
                "insert-after",
                "|",
                "upload",
                "record",
                "table",
                "|",
                "undo",
                "redo",
                "|",
                "fullscreen",
                "edit-mode",
                {
                  name: "more",
                  toolbar: [
                    "both",
                    "code-theme",
                    "content-theme",
                    "export",
                    "outline",
                    "preview",
                    "format",
                    "devtools",
                    "info",
                    "help",
                  ],
                },
              ],
              toolbarConfig: {
                hide: !1,
                pin: !1,
              },
              typewriterMode: !1,
              upload: {
                extraData: {},
                filename: function (e) {
                  return e.replace(/\W/g, "")
                },
                linkToImgUrl: "",
                max: 10485760,
                url: "",
                withCredentials: !1,
              },
              value: "",
              width: "auto",
            }),
              (this.toolbarItem = [
                {
                  icon: ar.a,
                  name: "export",
                  tipPosition: "ne",
                },
                {
                  hotkey: "⌘-E",
                  icon: ir.a,
                  name: "emoji",
                  tipPosition: "ne",
                },
                {
                  hotkey: "⌘-H",
                  icon: dr.a,
                  name: "headings",
                  tipPosition: "ne",
                },
                {
                  hotkey: "⌘-B",
                  icon: Kn.a,
                  name: "bold",
                  prefix: "**",
                  suffix: "**",
                  tipPosition: "ne",
                },
                {
                  hotkey: "⌘-I",
                  icon: wr.a,
                  name: "italic",
                  prefix: "*",
                  suffix: "*",
                  tipPosition: "ne",
                },
                {
                  hotkey: "⌘-S",
                  icon: Ur.a,
                  name: "strike",
                  prefix: "~~",
                  suffix: "~~",
                  tipPosition: "ne",
                },
                {
                  hotkey: "⌘-K",
                  icon: Or.a,
                  name: "link",
                  prefix: "[",
                  suffix: "](https://)",
                  tipPosition: "n",
                },
                {
                  name: "|",
                },
                {
                  hotkey: "⌘-L",
                  icon: xr.a,
                  name: "list",
                  prefix: "* ",
                  tipPosition: "n",
                },
                {
                  hotkey: "⌘-O",
                  icon: jr.a,
                  name: "ordered-list",
                  prefix: "1. ",
                  tipPosition: "n",
                },
                {
                  hotkey: "⌘-J",
                  icon: Xn.a,
                  name: "check",
                  prefix: "* [ ] ",
                  tipPosition: "n",
                },
                {
                  hotkey: "⌘-⇧-I",
                  icon: Ar.a,
                  name: "outdent",
                  tipPosition: "n",
                },
                {
                  hotkey: "⌘-⇧-O",
                  icon: fr.a,
                  name: "indent",
                  tipPosition: "n",
                },
                {
                  name: "|",
                },
                {
                  hotkey: "⌘-;",
                  icon: Rr.a,
                  name: "quote",
                  prefix: "> ",
                  tipPosition: "n",
                },
                {
                  hotkey: "⌘-⇧-H",
                  icon: Mr.a,
                  name: "line",
                  prefix: "---",
                  tipPosition: "n",
                },
                {
                  hotkey: "⌘-U",
                  icon: er.a,
                  name: "code",
                  prefix: "```\n",
                  suffix: "\n```",
                  tipPosition: "n",
                },
                {
                  hotkey: "⌘-G",
                  icon: br.a,
                  name: "inline-code",
                  prefix: "`",
                  suffix: "`",
                  tipPosition: "n",
                },
                {
                  hotkey: "⌘-⇧-B",
                  icon: Un.a,
                  name: "insert-before",
                  tipPosition: "n",
                },
                {
                  hotkey: "⌘-⇧-E",
                  icon: qn.a,
                  name: "insert-after",
                  tipPosition: "n",
                },
                {
                  name: "|",
                },
                {
                  icon: jn.a,
                  name: "upload",
                  tipPosition: "n",
                },
                {
                  icon: Pr.a,
                  name: "record",
                  tipPosition: "n",
                },
                {
                  hotkey: "⌘-M",
                  icon: Kr.a,
                  name: "table",
                  prefix: "| col1",
                  suffix:
                    " | col2 | col3 |\n| --- | --- | --- |\n|  |  |  |\n|  |  |  |",
                  tipPosition: "n",
                },
                {
                  name: "|",
                },
                {
                  hotkey: "⌘-Z",
                  icon: Zr.a,
                  name: "undo",
                  tipPosition: "nw",
                },
                {
                  hotkey: "⌘-Y",
                  icon: qr.a,
                  name: "redo",
                  tipPosition: "nw",
                },
                {
                  name: "|",
                },
                {
                  icon: Tr.a,
                  name: "more",
                  tipPosition: "e",
                },
                {
                  hotkey: "⌘-'",
                  icon: lr.a,
                  name: "fullscreen",
                  tipPosition: "nw",
                },
                {
                  icon: nr.a,
                  name: "edit-mode",
                  tipPosition: "nw",
                },
                {
                  hotkey: "⌘-P",
                  icon: Wn.a,
                  name: "both",
                  tipPosition: "nw",
                },
                {
                  icon: Hr.a,
                  name: "preview",
                  tipPosition: "nw",
                },
                {
                  hotkey: "⌘-⇧-F",
                  icon: Ar.a,
                  name: "format",
                  tipPosition: "nw",
                },
                {
                  icon: K.a,
                  name: "outline",
                  tipPosition: "nw",
                },
                {
                  icon: Wr.a,
                  name: "content-theme",
                  tipPosition: "nw",
                },
                {
                  icon: $n.a,
                  name: "code-theme",
                  tipPosition: "nw",
                },
                {
                  icon: Zn.a,
                  name: "devtools",
                  tipPosition: "nw",
                },
                {
                  icon: vr.a,
                  name: "info",
                  tipPosition: "nw",
                },
                {
                  icon: pr.a,
                  name: "help",
                  tipPosition: "nw",
                },
                {
                  name: "br",
                },
              ]),
              (this.options = e)
          }
          return (
            (e.prototype.merge = function () {
              this.options &&
                (this.options.upload &&
                  (this.options.upload = Object.assign(
                    {},
                    this.defaultOptions.upload,
                    this.options.upload
                  )),
                this.options.cache &&
                  (this.options.cache = Object.assign(
                    {},
                    this.defaultOptions.cache,
                    this.options.cache
                  )),
                this.options.classes &&
                  (this.options.classes = Object.assign(
                    {},
                    this.defaultOptions.classes,
                    this.options.classes
                  )),
                this.options.keymap &&
                  (this.options.keymap = Object.assign(
                    {},
                    this.defaultOptions.keymap,
                    this.options.keymap
                  )),
                this.options.preview &&
                  (this.options.preview.hljs &&
                    (this.options.preview.hljs = Object.assign(
                      {},
                      this.defaultOptions.preview.hljs,
                      this.options.preview.hljs
                    )),
                  this.options.preview.math &&
                    (this.options.preview.math = Object.assign(
                      {},
                      this.defaultOptions.preview.math,
                      this.options.preview.math
                    )),
                  this.options.preview.markdown &&
                    (this.options.preview.markdown = Object.assign(
                      {},
                      this.defaultOptions.preview.markdown,
                      this.options.preview.markdown
                    )),
                  (this.options.preview = Object.assign(
                    {},
                    this.defaultOptions.preview,
                    this.options.preview
                  ))),
                this.options.hint &&
                  (this.options.hint = Object.assign(
                    {},
                    this.defaultOptions.hint,
                    this.options.hint
                  )),
                this.options.resize &&
                  (this.options.resize = Object.assign(
                    {},
                    this.defaultOptions.resize,
                    this.options.resize
                  )),
                this.options.counter &&
                  (this.options.counter = Object.assign(
                    {},
                    this.defaultOptions.counter,
                    this.options.counter
                  )),
                this.options.toolbarConfig &&
                  (this.options.toolbarConfig = Object.assign(
                    {},
                    this.defaultOptions.toolbarConfig,
                    this.options.toolbarConfig
                  )),
                this.options.toolbar
                  ? (this.options.toolbar = this.mergeToolbar(
                      this.options.toolbar
                    ))
                  : (this.options.toolbar = this.mergeToolbar(
                      this.defaultOptions.toolbar
                    )))
              var e = Object.assign({}, this.defaultOptions, this.options)
              if (e.cache.enable && !e.cache.id)
                throw new Error(
                  "need options.cache.id, see https://hacpai.com/article/1549638745630#options"
                )
              return e
            }),
            (e.prototype.mergeToolbar = function (e) {
              var t = this,
                n = []
              return (
                e.forEach(function (e) {
                  var r = e
                  t.toolbarItem.forEach(function (t) {
                    "string" == typeof e && t.name === e && (r = t),
                      "object" == typeof e &&
                        t.name === e.name &&
                        (r = Object.assign({}, t, e))
                  }),
                    e.toolbar && (r.toolbar = t.mergeToolbar(e.toolbar)),
                    n.push(r)
                }),
                n
              )
            }),
            e
          )
        })(),
        Xr = function (e, t, n) {
          var r = Object(w.c)(t.startContainer)
          if (
            (r || (r = e.wysiwyg.element),
            (n &&
              "formatItalic" !== n.inputType &&
              "deleteByDrag" !== n.inputType &&
              "insertFromDrop" !== n.inputType &&
              "formatBold" !== n.inputType &&
              "formatRemove" !== n.inputType &&
              "formatStrikeThrough" !== n.inputType &&
              "insertUnorderedList" !== n.inputType &&
              "insertOrderedList" !== n.inputType &&
              "formatOutdent" !== n.inputType &&
              "formatIndent" !== n.inputType &&
              "" !== n.inputType) ||
              !n)
          ) {
            var i = (function (e) {
              for (var t = e.previousSibling; t; ) {
                if (
                  3 !== t.nodeType &&
                  "A" === t.tagName &&
                  !t.previousSibling &&
                  "" === t.innerHTML.replace(a.a.ZWSP, "") &&
                  t.nextSibling
                )
                  return t
                t = t.previousSibling
              }
              return !1
            })(t.startContainer)
            i && i.remove(),
              e.wysiwyg.element.querySelectorAll("wbr").forEach(function (e) {
                e.remove()
              }),
              t.insertNode(document.createElement("wbr")),
              r.querySelectorAll("[style]").forEach(function (e) {
                e.removeAttribute("style")
              })
            var o = ""
            ;("link-ref-defs-block" !== r.getAttribute("data-type") &&
              "[toc]" !== r.innerText.trim().toLowerCase()) ||
              (r = e.wysiwyg.element)
            var s = r.isEqualNode(e.wysiwyg.element)
            if (s) o = r.innerHTML
            else {
              var l = Object(w.b)(t.startContainer)
              if (l)
                r = Object(E.b)(t.startContainer, "BLOCKQUOTE")
                  ? Object(w.c)(t.startContainer) || r
                  : l
              var c,
                d,
                u = Object(w.d)(r, "data-type", "footnotes-block")
              if (
                (u && (r = u),
                (o = r.outerHTML),
                "UL" === r.tagName || "OL" === r.tagName)
              ) {
                var p = r.previousElementSibling,
                  h = r.nextElementSibling
                !p ||
                  ("UL" !== p.tagName && "OL" !== p.tagName) ||
                  ((o = p.outerHTML + o), p.remove()),
                  !h ||
                    ("UL" !== h.tagName && "OL" !== h.tagName) ||
                    ((o += h.outerHTML), h.remove()),
                  (o = o.replace(
                    "<div><wbr><br></div>",
                    "<li><p><wbr><br></p></li>"
                  ))
              }
              ;(c = e.wysiwyg.element.querySelector(
                "[data-type='link-ref-defs-block']"
              )) &&
                !r.isEqualNode(c) &&
                ((o += c.outerHTML), c.remove()),
                (d = e.wysiwyg.element.querySelector(
                  "[data-type='footnotes-block']"
                )) &&
                  !r.isEqualNode(d) &&
                  ((o += d.outerHTML), d.remove())
            }
            if (
              ((o = o
                .replace(/<\/(strong|b)><strong data-marker="\W{2}">/g, "")
                .replace(/<\/(em|i)><em data-marker="\W{1}">/g, "")
                .replace(/<\/(s|strike)><s data-marker="~{1,2}">/g, "")),
              mt("SpinVditorDOM", o, "argument", e.options.debugger),
              (o = e.lute.SpinVditorDOM(o)),
              mt("SpinVditorDOM", o, "result", e.options.debugger),
              s)
            )
              r.innerHTML = o
            else
              (r.outerHTML = o),
                (c = e.wysiwyg.element.querySelector(
                  "[data-type='link-ref-defs-block']"
                )) && e.wysiwyg.element.insertAdjacentElement("beforeend", c),
                (d = e.wysiwyg.element.querySelector(
                  "[data-type='footnotes-block']"
                )) && e.wysiwyg.element.insertAdjacentElement("beforeend", d)
            ;(Object(E.a)(r) ||
              o.startsWith("<h") ||
              "deleteContentBackward" === n.inputType ||
              "deleteContentForward" === n.inputType) &&
              Ge(e),
              Object(M.f)(e.wysiwyg.element, t),
              e.wysiwyg.element
                .querySelectorAll(".vditor-wysiwyg__preview[data-render='2']")
                .forEach(function (t) {
                  z(t, e)
                })
          }
          U(e, {
            enableAddUndoStack: !0,
            enableHint: !0,
            enableInput: !0,
          })
        },
        Qr = (function () {
          function e(e) {
            this.composingLock = !1
            var t = document.createElement("div")
            ;(t.className = "vditor-wysiwyg"),
              (t.innerHTML =
                '<pre class="vditor-reset" placeholder="' +
                e.options.placeholder +
                '"\n contenteditable="true" spellcheck="false"></pre>\n<div class="vditor-panel vditor-panel--none"></div>'),
              (this.element = t.firstElementChild),
              (this.popover = t.lastElementChild),
              this.bindEvent(e),
              document.execCommand("DefaultParagraphSeparator", !1, "p"),
              Me(e, this.element),
              Se(e, this.element),
              ke(e, this.element),
              xe(e, this.element)
          }
          return (
            (e.prototype.bindEvent = function (e) {
              var t = this
              ;(e.options.upload.url || e.options.upload.handler) &&
                this.element.addEventListener("drop", function (t) {
                  if ("Files" === t.dataTransfer.types[0]) {
                    var n = t.dataTransfer.items
                    n.length > 0 && C(e, n), t.preventDefault()
                  }
                }),
                window.addEventListener("scroll", function () {
                  if ((b(e, ["hint"]), "block" === t.popover.style.display)) {
                    var n = parseInt(t.popover.getAttribute("data-top"), 10)
                    "auto" === e.options.height
                      ? e.options.toolbarConfig.pin &&
                        (t.popover.style.top =
                          Math.max(
                            n,
                            window.scrollY - e.element.offsetTop - 8
                          ) + "px")
                      : e.options.toolbarConfig.pin &&
                        0 === e.toolbar.element.getBoundingClientRect().top &&
                        (t.popover.style.top =
                          Math.max(
                            window.scrollY - e.element.offsetTop - 8,
                            Math.min(
                              n - e.wysiwyg.element.scrollTop,
                              t.element.clientHeight - 21
                            )
                          ) + "px")
                  }
                }),
                this.element.addEventListener("scroll", function () {
                  if ((b(e, ["hint"]), "block" === t.popover.style.display)) {
                    var n =
                        parseInt(t.popover.getAttribute("data-top"), 10) -
                        e.wysiwyg.element.scrollTop,
                      r = -8
                    e.options.toolbarConfig.pin &&
                      0 === e.toolbar.element.getBoundingClientRect().top &&
                      (r = window.scrollY - e.element.offsetTop + r),
                      (t.popover.style.top =
                        Math.max(r, Math.min(n, t.element.clientHeight - 21)) +
                        "px")
                  }
                }),
                this.element.addEventListener("copy", function (t) {
                  var n = getSelection().getRangeAt(0)
                  if ("" !== n.toString()) {
                    t.stopPropagation(), t.preventDefault()
                    var r = Object(w.f)(n.startContainer, "CODE"),
                      i = Object(w.f)(n.endContainer, "CODE")
                    if (r && i && i.isSameNode(r)) {
                      var o = ""
                      return (
                        (o =
                          "PRE" === r.parentElement.tagName
                            ? n.toString()
                            : "`" + n.toString() + "`"),
                        t.clipboardData.setData("text/plain", o),
                        void t.clipboardData.setData("text/html", "")
                      )
                    }
                    var a = Object(w.f)(n.startContainer, "A"),
                      s = Object(w.f)(n.endContainer, "A")
                    if (a && s && s.isSameNode(a)) {
                      var l = a.getAttribute("title") || ""
                      return (
                        l && (l = ' "' + l + '"'),
                        t.clipboardData.setData(
                          "text/plain",
                          "[" +
                            n.toString() +
                            "](" +
                            a.getAttribute("href") +
                            l +
                            ")"
                        ),
                        void t.clipboardData.setData("text/html", "")
                      )
                    }
                    var c = document.createElement("div")
                    c.appendChild(n.cloneContents()),
                      t.clipboardData.setData(
                        "text/plain",
                        e.lute.VditorDOM2Md(c.innerHTML).trim()
                      ),
                      t.clipboardData.setData("text/html", "")
                  }
                }),
                this.element.addEventListener("paste", function (n) {
                  st(e, n, {
                    pasteCode: function (n) {
                      var r = Object(M.b)(t.element),
                        i = document.createElement("template")
                      ;(i.innerHTML = n), r.insertNode(i.content.cloneNode(!0))
                      var o = Object(w.d)(r.startContainer, "data-block", "0")
                      o
                        ? (o.outerHTML = e.lute.SpinVditorDOM(o.outerHTML))
                        : (e.wysiwyg.element.innerHTML = e.lute.SpinVditorDOM(
                            e.wysiwyg.element.innerHTML
                          )),
                        Object(M.f)(e.wysiwyg.element, r)
                    },
                  })
                }),
                this.element.addEventListener("compositionstart", function (e) {
                  t.composingLock = !0
                }),
                this.element.addEventListener("compositionend", function (t) {
                  var n = Object(E.a)(
                    getSelection().getRangeAt(0).startContainer
                  )
                  n && "" === n.textContent
                    ? Ge(e)
                    : Xr(e, getSelection().getRangeAt(0).cloneRange(), t)
                }),
                this.element.addEventListener("input", function (n) {
                  if (t.preventInput) t.preventInput = !1
                  else if (!t.composingLock) {
                    var r = getSelection().getRangeAt(0),
                      i = Object(w.c)(r.startContainer)
                    if (
                      (i || (he(e, r), (i = Object(w.c)(r.startContainer))), i)
                    ) {
                      for (
                        var o = Object(M.c)(i, r).start, a = !0, s = o - 1;
                        s > i.textContent.substr(0, o).lastIndexOf("\n");
                        s--
                      )
                        if (
                          " " !== i.textContent.charAt(s) &&
                          "\t" !== i.textContent.charAt(s)
                        ) {
                          a = !1
                          break
                        }
                      0 === o && (a = !1)
                      var l = !0
                      for (s = o - 1; s < i.textContent.length; s++)
                        if (
                          " " !== i.textContent.charAt(s) &&
                          "\n" !== i.textContent.charAt(s)
                        ) {
                          l = !1
                          break
                        }
                      var c = Object(E.a)(
                        getSelection().getRangeAt(0).startContainer
                      )
                      c && "" === c.textContent
                        ? Ge(e)
                        : (a && !i.querySelector(".language-mindmap")) ||
                          l ||
                          Je(i.innerHTML) ||
                          Ze(i.innerHTML) ||
                          Xr(e, r, n)
                    }
                  }
                }),
                this.element.addEventListener("click", function (n) {
                  if ("INPUT" === n.target.tagName) {
                    var r = n.target
                    return (
                      r.checked
                        ? r.setAttribute("checked", "checked")
                        : r.removeAttribute("checked"),
                      (t.preventInput = !0),
                      void U(e)
                    )
                  }
                  if ("IMG" !== n.target.tagName) {
                    var i = Object(M.b)(t.element)
                    if (
                      n.target.isEqualNode(t.element) &&
                      t.element.lastElementChild &&
                      i.collapsed
                    ) {
                      var o = t.element.lastElementChild.getBoundingClientRect()
                      if (n.y > o.top + o.height)
                        return void ("P" === t.element.lastElementChild.tagName
                          ? (i.selectNodeContents(t.element.lastElementChild),
                            i.collapse(!1))
                          : (t.element.insertAdjacentHTML(
                              "beforeend",
                              '<p data-block="0">' + a.a.ZWSP + "<wbr></p>"
                            ),
                            Object(M.f)(t.element, i)))
                    }
                    Le(e)
                    var s = Object(w.e)(n.target, "vditor-wysiwyg__preview")
                    s ||
                      (s = Object(w.e)(
                        Object(M.b)(t.element).startContainer,
                        "vditor-wysiwyg__preview"
                      )),
                      s && Ee(s, e)
                  } else
                    !(function (e, t) {
                      var n = e.target
                      t.wysiwyg.popover.innerHTML = ""
                      var r = function () {
                          n.setAttribute("src", o.value),
                            n.setAttribute("alt", s.value),
                            n.setAttribute("title", c.value)
                        },
                        i = document.createElement("span")
                      i.setAttribute(
                        "aria-label",
                        O.a[t.options.lang].imageURL
                      ),
                        (i.className = "vditor-tooltipped vditor-tooltipped__n")
                      var o = document.createElement("input")
                      i.appendChild(o),
                        (o.className = "vditor-input"),
                        o.setAttribute(
                          "placeholder",
                          O.a[t.options.lang].imageURL
                        ),
                        (o.value = n.getAttribute("src") || ""),
                        (o.oninput = function () {
                          r()
                        })
                      var a = document.createElement("span")
                      a.setAttribute(
                        "aria-label",
                        O.a[t.options.lang].alternateText
                      ),
                        (a.className = "vditor-tooltipped vditor-tooltipped__n")
                      var s = document.createElement("input")
                      a.appendChild(s),
                        (s.className = "vditor-input"),
                        s.setAttribute(
                          "placeholder",
                          O.a[t.options.lang].alternateText
                        ),
                        (s.style.width = "52px"),
                        (s.value = n.getAttribute("alt") || ""),
                        (s.oninput = function () {
                          r()
                        })
                      var l = document.createElement("span")
                      l.setAttribute("aria-label", "Title"),
                        (l.className = "vditor-tooltipped vditor-tooltipped__n")
                      var c = document.createElement("input")
                      l.appendChild(c),
                        (c.className = "vditor-input"),
                        c.setAttribute("placeholder", "Title"),
                        (c.value = n.getAttribute("title") || ""),
                        (c.oninput = function () {
                          r()
                        }),
                        t.wysiwyg.popover.insertAdjacentElement("beforeend", i),
                        t.wysiwyg.popover.insertAdjacentElement("beforeend", a),
                        t.wysiwyg.popover.insertAdjacentElement("beforeend", l),
                        Te(t, n)
                    })(n, e)
                }),
                this.element.addEventListener("keyup", function (n) {
                  if (!n.isComposing && !Object(u.c)(n)) {
                    "Enter" === n.key && Oe(e),
                      ("Backspace" !== n.key && "Delete" !== n.key) ||
                        "" === e.wysiwyg.element.innerHTML ||
                        1 !== e.wysiwyg.element.childNodes.length ||
                        !e.wysiwyg.element.firstElementChild ||
                        "P" !== e.wysiwyg.element.firstElementChild.tagName ||
                        0 !==
                          e.wysiwyg.element.firstElementChild
                            .childElementCount ||
                        ("" !== e.wysiwyg.element.textContent &&
                          "\n" !== e.wysiwyg.element.textContent) ||
                        (e.wysiwyg.element.innerHTML = "")
                    var r = Object(M.b)(t.element)
                    if (
                      ("Backspace" === n.key &&
                        Object(u.d)() &&
                        "\n" === r.startContainer.textContent &&
                        1 === r.startOffset &&
                        (r.startContainer.textContent = ""),
                      he(e, r),
                      Le(e),
                      "ArrowDown" === n.key ||
                        "ArrowRight" === n.key ||
                        "Backspace" === n.key ||
                        "ArrowLeft" === n.key ||
                        "ArrowUp" === n.key)
                    ) {
                      ;("ArrowLeft" !== n.key && "ArrowRight" !== n.key) ||
                        e.hint.render(e)
                      var i = Object(w.e)(
                        r.startContainer,
                        "vditor-wysiwyg__preview"
                      )
                      if (
                        !i &&
                        3 !== r.startContainer.nodeType &&
                        r.startOffset > 0
                      )
                        (a = r.startContainer).classList.contains(
                          "vditor-wysiwyg__block"
                        ) && (i = a.lastElementChild)
                      if (i)
                        if ("none" !== i.previousElementSibling.style.display) {
                          var o = i.previousElementSibling
                          if (
                            ("PRE" === o.tagName && (o = o.firstElementChild),
                            "ArrowDown" === n.key || "ArrowRight" === n.key)
                          ) {
                            var a,
                              s = (function (e) {
                                for (var t = e; t && !t.nextSibling; )
                                  t = t.parentElement
                                return t.nextSibling
                              })((a = i.parentElement))
                            if (s && 3 !== s.nodeType) {
                              var l = s.querySelector(
                                ".vditor-wysiwyg__preview"
                              )
                              if (l) return void Ee(l, e)
                            }
                            if (3 === s.nodeType) {
                              for (
                                ;
                                0 === s.textContent.length && s.nextSibling;

                              )
                                s = s.nextSibling
                              r.setStart(s, 1)
                            } else r.setStart(s.firstChild, 0)
                          } else r.selectNodeContents(o), r.collapse(!1)
                        } else
                          "ArrowDown" === n.key || "ArrowRight" === n.key
                            ? Ee(i, e)
                            : Ee(i, e, !1)
                    }
                  }
                })
            }),
            e
          )
        })(),
        $r = (function () {
          var e = function (t, n) {
            return (e =
              Object.setPrototypeOf ||
              ({
                __proto__: [],
              } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
              })(t, n)
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        Yr = (function (e) {
          function t(t, n) {
            var r = e.call(this) || this
            ;(r.version = a.b),
              "string" == typeof t &&
                (n.cache
                  ? n.cache.id || (n.cache.id = "vditor" + t)
                  : (n.cache = {
                      id: "vditor" + t,
                    }),
                (t = document.getElementById(t)))
            var i = new Gr(n).merge()
            if (!["en_US", "ko_KR", "zh_CN"].includes(i.lang))
              throw new Error(
                "options.lang error, see https://hacpai.com/article/1549638745630#options"
              )
            ;(r.vditor = {
              currentMode: i.mode,
              element: t,
              hint: new ht(),
              lute: void 0,
              options: i,
              originalInnerHTML: t.innerHTML,
              outline: new Et(O.a[i.lang].outline),
              tip: new jt(),
            }),
              (r.vditor.sv = new _t(r.vditor)),
              (r.vditor.undo = new Rn()),
              (r.vditor.wysiwyg = new Qr(r.vditor)),
              (r.vditor.wysiwygUndo = new Pn()),
              (r.vditor.irUndo = new In()),
              (r.vditor.ir = new gt(r.vditor)),
              (r.vditor.toolbar = new Nn(r.vditor)),
              i.resize.enable && (r.vditor.resize = new Tt(r.vditor)),
              r.vditor.toolbar.elements.devtools &&
                (r.vditor.devtools = new d()),
              (i.upload.url || i.upload.handler) && (r.vditor.upload = new j())
            var o = i.cdn + "/dist/js/lute/lute.min.js"
            return (
              Object(c.a)(o, "vditorLuteScript").then(function () {
                ;(r.vditor.lute = Object(yt.a)({
                  autoSpace: r.vditor.options.preview.markdown.autoSpace,
                  chinesePunct: r.vditor.options.preview.markdown.chinesePunct,
                  codeBlockPreview:
                    r.vditor.options.preview.markdown.codeBlockPreview,
                  emojiSite: r.vditor.options.hint.emojiPath,
                  emojis: r.vditor.options.hint.emoji,
                  fixTermTypo: r.vditor.options.preview.markdown.fixTermTypo,
                  footnotes: r.vditor.options.preview.markdown.footnotes,
                  headingAnchor: !1,
                  inlineMathDigit: r.vditor.options.preview.math.inlineDigit,
                  listMarker: r.vditor.options.preview.markdown.listMarker,
                  paragraphBeginningSpace:
                    r.vditor.options.preview.markdown.paragraphBeginningSpace,
                  sanitize: r.vditor.options.preview.markdown.sanitize,
                  setext: r.vditor.options.preview.markdown.setext,
                  toc: r.vditor.options.preview.markdown.toc,
                })),
                  (r.vditor.preview = new kt(r.vditor)),
                  (function (e) {
                    ;(e.element.innerHTML = ""),
                      e.element.classList.add("vditor"),
                      ae(e),
                      Object(oe.a)(
                        e.options.preview.markdown.theme,
                        e.options.cdn
                      ),
                      "number" == typeof e.options.height &&
                        (e.element.style.height = e.options.height + "px"),
                      "number" == typeof e.options.minHeight &&
                        (e.element.style.minHeight =
                          e.options.minHeight + "px"),
                      "number" == typeof e.options.width
                        ? (e.element.style.width = e.options.width + "px")
                        : (e.element.style.width = e.options.width),
                      e.element.appendChild(e.toolbar.element)
                    var t = document.createElement("div")
                    if (
                      ((t.className = "vditor-content"),
                      t.appendChild(e.outline.element),
                      t.appendChild(e.wysiwyg.element.parentElement),
                      t.appendChild(e.sv.element),
                      t.appendChild(e.ir.element.parentElement),
                      t.appendChild(e.preview.element),
                      e.toolbar.elements.devtools &&
                        t.appendChild(e.devtools.element),
                      e.upload && t.appendChild(e.upload.element),
                      e.options.resize.enable &&
                        t.appendChild(e.resize.element),
                      t.appendChild(e.hint.element),
                      t.appendChild(e.tip.element),
                      e.element.appendChild(t),
                      e.toolbar.elements.export &&
                        e.element.insertAdjacentHTML(
                          "beforeend",
                          '<iframe style="width: 100%;height: 0;border: 0"></iframe>'
                        ),
                      ge(e, e.options.mode, ce(e, t)),
                      navigator.userAgent.indexOf("iPhone") > -1 &&
                        void 0 !== window.visualViewport)
                    ) {
                      var n = !1,
                        r = function (t) {
                          n ||
                            ((n = !0),
                            requestAnimationFrame(function () {
                              n = !1
                              var t = e.toolbar.element
                              ;(t.style.transform = "none"),
                                t.getBoundingClientRect().top < 0 &&
                                  (t.style.transform =
                                    "translate(0, " +
                                    -t.getBoundingClientRect().top +
                                    "px)")
                            }))
                        }
                      window.visualViewport.addEventListener("scroll", r),
                        window.visualViewport.addEventListener("resize", r)
                    }
                  })(r.vditor),
                  i.after && i.after()
              }),
              r
            )
          }
          return (
            $r(t, e),
            (t.prototype.setTheme = function (e, t, n) {
              ;(this.vditor.options.theme = e),
                ae(this.vditor),
                t &&
                  ((this.vditor.options.preview.markdown.theme = t),
                  Object(oe.a)(t, this.vditor.options.cdn)),
                n &&
                  ((this.vditor.options.preview.hljs.style = n),
                  Object(Dt.a)(n, this.vditor.options.cdn))
            }),
            (t.prototype.getValue = function () {
              return l(this.vditor)
            }),
            (t.prototype.getCurrentMode = function () {
              return this.vditor.currentMode
            }),
            (t.prototype.focus = function () {
              "sv" === this.vditor.currentMode
                ? this.vditor.sv.element.focus()
                : "wysiwyg" === this.vditor.currentMode
                ? this.vditor.wysiwyg.element.focus()
                : "ir" === this.vditor.currentMode &&
                  this.vditor.ir.element.focus()
            }),
            (t.prototype.blur = function () {
              "sv" === this.vditor.currentMode
                ? this.vditor.sv.element.blur()
                : "wysiwyg" === this.vditor.currentMode
                ? this.vditor.wysiwyg.element.blur()
                : "ir" === this.vditor.currentMode &&
                  this.vditor.ir.element.blur()
            }),
            (t.prototype.disabled = function () {
              m(
                this.vditor.toolbar.elements,
                a.a.EDIT_TOOLBARS.concat([
                  "undo",
                  "redo",
                  "fullscreen",
                  "edit-mode",
                ])
              ),
                this.vditor[this.vditor.currentMode].element.setAttribute(
                  "contenteditable",
                  "false"
                )
            }),
            (t.prototype.enable = function () {
              f(
                this.vditor.toolbar.elements,
                a.a.EDIT_TOOLBARS.concat([
                  "undo",
                  "redo",
                  "fullscreen",
                  "edit-mode",
                ])
              ),
                this.vditor.undo.resetIcon(this.vditor),
                this.vditor.wysiwygUndo.resetIcon(this.vditor),
                this.vditor[this.vditor.currentMode].element.setAttribute(
                  "contenteditable",
                  "true"
                )
            }),
            (t.prototype.setSelection = function (e, t) {
              "sv" !== this.vditor.currentMode
                ? console.error("所见即所得模式暂不支持该方法")
                : Object(M.g)(e, t, this.vditor.sv.element)
            }),
            (t.prototype.getSelection = function () {
              return "wysiwyg" === this.vditor.currentMode
                ? te(this.vditor.wysiwyg.element)
                : "sv" === this.vditor.currentMode
                ? te(this.vditor.sv.element)
                : "ir" === this.vditor.currentMode
                ? te(this.vditor.ir.element)
                : void 0
            }),
            (t.prototype.renderPreview = function (e) {
              this.vditor.preview.render(this.vditor, e)
            }),
            (t.prototype.getCursorPosition = function () {
              return Object(M.a)(this.vditor[this.vditor.currentMode].element)
            }),
            (t.prototype.isUploading = function () {
              return this.vditor.upload.isUploading
            }),
            (t.prototype.clearCache = function () {
              localStorage.removeItem(this.vditor.options.cache.id)
            }),
            (t.prototype.disabledCache = function () {
              this.vditor.options.cache.enable = !1
            }),
            (t.prototype.enableCache = function () {
              if (!this.vditor.options.cache.id)
                throw new Error(
                  "need options.cache.id, see https://hacpai.com/article/1549638745630#options"
                )
              this.vditor.options.cache.enable = !0
            }),
            (t.prototype.html2md = function (e) {
              return ie(this.vditor, e)
            }),
            (t.prototype.getHTML = function () {
              return bt(this.vditor)
            }),
            (t.prototype.tip = function (e, t) {
              this.vditor.tip.show(e, t)
            }),
            (t.prototype.setPreviewMode = function (e) {
              Ct(e, this.vditor)
            }),
            (t.prototype.deleteValue = function () {
              window.getSelection().isCollapsed ||
                ("sv" === this.vditor.currentMode
                  ? L(this.vditor, "", "", !0)
                  : document.execCommand("delete", !1))
            }),
            (t.prototype.updateValue = function (e) {
              "sv" === this.vditor.currentMode
                ? L(this.vditor, e, "", !0)
                : document.execCommand("insertHTML", !1, e)
            }),
            (t.prototype.insertValue = function (e, t) {
              if ((void 0 === t && (t = !0), "sv" === this.vditor.currentMode))
                L(this.vditor, e, "")
              else if ("wysiwyg" === this.vditor.currentMode) {
                Object(M.b)(this.vditor.wysiwyg.element).collapse(!0),
                  (this.vditor.wysiwyg.preventInput = !0),
                  document.execCommand("insertHTML", !1, e),
                  t && Xr(this.vditor, getSelection().getRangeAt(0))
              } else if ("ir" === this.vditor.currentMode) {
                Object(M.b)(this.vditor.ir.element).collapse(!0),
                  (this.vditor.ir.preventInput = !0),
                  document.execCommand("insertHTML", !1, e),
                  t && vt(this.vditor, getSelection().getRangeAt(0), !0)
              }
            }),
            (t.prototype.setValue = function (e) {
              "sv" === this.vditor.currentMode
                ? x(
                    this.vditor,
                    e,
                    {
                      end: e.length,
                      start: e.length,
                    },
                    {
                      enableAddUndoStack: !0,
                      enableHint: !1,
                      enableInput: !1,
                    }
                  )
                : "wysiwyg" === this.vditor.currentMode
                ? de(this.vditor, e, !1)
                : ((this.vditor.ir.element.innerHTML = this.vditor.lute.Md2VditorIRDOM(
                    e
                  )),
                  ct(this.vditor, {
                    enableAddUndoStack: !0,
                    enableHint: !1,
                    enableInput: !1,
                  })),
                this.vditor.outline.render(this.vditor),
                e ||
                  (b(this.vditor, ["emoji", "headings", "submenu", "hint"]),
                  this.vditor.wysiwyg.popover &&
                    (this.vditor.wysiwyg.popover.style.display = "none"),
                  this.clearCache())
            }),
            t
          )
        })(o.default)
      t.default = Yr
    },
  ]).default
})
