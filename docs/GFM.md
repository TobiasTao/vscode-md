### Headings

To create a heading, add one to six `#` symbols before your heading text. The number of `#` you use will determine the size of the heading.

```uage-clean
# The largest heading
## The second largest heading
###### The smallest heading
```

![Rendered H1, H2, and H6 headings](https://help.github.com/assets/images/help/writing/headings-rendered.png)

### Styling text

You can indicate emphasis with bold, italic, or strikethrough text.


| Style | Syntax | Keyboard shortcut | Example | Output |
| - | - | - | - | - |
| Bold | `** **` or `__ __` | command/control + b | `**This is bold text**` | **This is bold text** |
| Italic | `* *` or `_ _` | command/control + i | `*This text is italicized*` | *This text is italicized* |
| Strikethrough | `~~ ~~` |   | `~~This was mistaken text~~` | ~This was mistaken text~ |
| Bold and nested italic | `** **` and `_ _` |   | `**This text is _extremely_ important**` | **This text is *extremely* important** |
| All bold and italic | `*** ***` |   | `***All this text is important***` | ***All this text is important*** |

### Quoting text

You can quote text with a `>`.

```uage-applescript
In the words of Abraham Lincoln:

> Pardon my French
```

![Rendered quoted text](https://help.github.com/assets/images/help/writing/quoted-text-rendered.png)

### Quoting code

You can call out code or a command within a sentence with single backticks. The text within the backticks will not be formatted.

```uage-sql
Use `git status` to list all new or modified files that haven't yet been committed.
```

![Rendered inline code block](https://help.github.com/assets/images/help/writing/inline-code-rendered.png)

To format code or text into its own distinct block, use triple backticks.

<pre>Some basic Git commands are:
```
git status
git add
git commit
```
</pre>

![Rendered code block](https://help.github.com/assets/images/help/writing/code-block-rendered.png)

You can add an optional language identifier to enable syntax highlighting in your fenced code block.

For example, to syntax highlight Ruby code:

```uage-autohotkey
```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

![Rendered code block with Ruby syntax highlighting](https://help.github.com/assets/images/help/writing/code-block-syntax-highlighting-rendered.png)

### Links

You can create an inline link by wrapping link text in brackets `[ ]`, and then wrapping the URL in parentheses `( )`.

`This site was built using [GitHub Pages](https://pages.github.com/).`

![Rendered link](https://help.github.com/assets/images/help/writing/link-rendered.png)

### Section links

You can link directly to a section in a rendered file by hovering over the section heading to expose the link:

![Section link within the README file for the github/scientist repository](https://help.github.com/assets/images/help/repository/readme-links.png)

### Relative links

You can define relative links and image paths in your rendered files to help readers navigate to other files in your repository.

A relative link is a link that is relative to the current file. For example, if you have a README file in root of your repository, and you have another file in *docs/CONTRIBUTING.md*, the relative link to *CONTRIBUTING.md* in your README might look like this:

```uage-markdown
[Contribution guidelines for this project](docs/CONTRIBUTING.md)
```

GitHub will automatically transform your relative link or image path based on whatever branch you're currently on, so that the link or path always works. You can use all relative link operands, such as `.` and `..`.

Relative links are easier for users who clone your repository. Absolute links may not work in clones of your repository - we recommend using relative links to refer to other files within your repository.

### Lists

You can make an unordered list by preceding one or more lines of text with `-` or `*`.

```uage-asciidoc
- George Washington
- John Adams
- Thomas Jefferson
```

![Rendered unordered list](https://help.github.com/assets/images/help/writing/unordered-list-rendered.png)

To order your list, precede each line with a number.

```uage-graphql
1. James Madison
2. James Monroe
3. John Quincy Adams
```

![Rendered ordered list](https://help.github.com/assets/images/help/writing/ordered-list-rendered.png)

#### Nested Lists

You can create a nested list by indenting one or more list items below another item.

To create a nested list using the web editor on GitHub or a text editor that uses a monospaced font, like [Atom](https://atom.io/), you can align your list visually. Type space characters in front of your nested list item, until the list marker character (`-` or `*`) lies directly below the first character of the text in the item above it.

```uage-applescript
1. First list item
   - First nested list item
     - Second nested list item
```

![Nested list with alignment highlighted](https://help.github.com/assets/images/help/writing/nested-list-alignment.png)

![List with two levels of nested items](https://help.github.com/assets/images/help/writing/nested-list-example-1.png)

### Task lists

To create a task list, preface list items with a regular space character followed by `[ ]`. To mark a task as complete, use `[x]`.

- [ ]

```uage-inform7
- [x] Finish my changes
- [ ] Push my commits to GitHub
- [ ] Open a pull request
```

![Rendered task list](https://help.github.com/assets/images/help/writing/task-list-rendered.png)

If a task list item description begins with a parenthesis, you'll need to escape it with `\`:

`- [ ] \(Optional) Open a followup issu`

Using emoji

You can add emoji to your writing by typing `:EMOJICODE:`.

`@octocat :+1: This PR looks great - it's ready to merge! :shipit:`

![Rendered emoji](https://help.github.com/assets/images/help/writing/emoji-rendered.png)

Typing `:` will bring up a list of suggested emoji. The list will filter as you type, so once you find the emoji you're looking for, press **Tab** or **Enter** to complete the highlighted result.

For a full list of available emoji and codes, check out [emoji-cheat-sheet.com](http://emoji-cheat-sheet.com/).~~~~
