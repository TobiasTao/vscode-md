# Headers

```markdown
# H1

## H2

### H3

#### H4

##### H5

###### H6

Alternatively, for H1 and H2, an underline-ish style:

# Alt-H1

## Alt-H2
```

# H1

## H2

### H3

#### H4

##### H5

###### H6

Alternatively, for H1 and H2, an underline-ish style:

# Alt-H1

## Alt-H2

# Emphasis

```markdown
Emphasis, aka italics, with _asterisks_ or _underscores_.
Strong emphasis, aka bold, with **asterisks** or **underscores**.
Combined emphasis with **asterisks and _underscores_**.
Strikethrough uses two tildes. ~~Scratch this.~~
```

Emphasis, aka italics, with _asterisks_ or _underscores_.
Strong emphasis, aka bold, with **asterisks** or **underscores**.
Combined emphasis with **asterisks and _underscores_**.
Strikethrough uses two tildes. ~~Scratch this.~~

# Lists

```
1. First ordered list item
2. Another item
  * Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.

   Some text that should be aligned with the above item.

* Unordered list can use asterisks
- Or minuses
+ Or pluses
```

1. First ordered list item
2. Another item

- Unordered sub-list.

1. Actual numbers don't matter, just that it's a number
2. Ordered sub-list
3. And another item.

   Some text that should be aligned with the above item.

- Unordered list can use asterisks
* Or minuses

- Or pluses

# Links

There are two ways to create links.

```
[I'm an inline-style link](https://www.google.com)

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself]

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
```

[I'm an inline-style link](https://www.google.com)

[I'm a reference-style link][arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself]

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or [http://www.example.com](http://www.example.com) and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

# Images

Here's our logo (hover to see the title text):

```
Here's our logo:

Inline-style:
![alt text](../vscode-md.png)

Reference-style:
![alt text][logo]

[logo]: ../vscode-md.png
```

Here's our logo (hover to see the title text):

Inline-style:
![alt text](../vscode-md.png)

Reference-style:
![alt text](../vscode-md.png)

# Code and Syntax Highlighting

Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers -- like Github's and Markdown Here -- support syntax highlighting. Markdown Here supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); to see the complete list, and how to write the language names, see the highlight.js demo page.

```
Inline `code` has `back-ticks around` it.
```

Inline code has back-ticks around it.

Blocks of code are either fenced by lines with three back-ticks ```, or are indented with four spaces. I recommend only using the fenced code blocks -- they're easier and only they support syntax highlighting.

````
var s = "JavaScript syntax highlighting";
alert(s);
````

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

````
```javascript
var s = 'JavaScript syntax highlighting';
alert(s);
```
````

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

# Tables

Tables aren't part of the core Markdown spec, but they are part of GFM and Markdown Here supports them. They are an easy way of adding tables to your email -- a task that would otherwise require copy-pasting from another application.

```
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
```

Colons can be used to align columns.


| Tables | Are | Cool |
| - | :-: | -: |
| col 3 is | right-aligned | \$1600 |
| col 2 is | centered | \$12 |
| zebra stripes | are neat | \$1 |

There must be at least 3 dashes separating each header cell.

The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.


| Markdown | Less | Pretty |
| - | - | - |
| _Still_ | `renders` | **nicely** |
| 1 | 2 | 3 |

# Blockquotes

```markdown
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.
```

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_**Markdown** into a blockquote.

# Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well.

```markdown
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```

# Horizontal Rule

```markdown
UnderscoresUnderscoresThree or more...

---

Hyphens

---

Asterisks

---

Underscores
```

UnderscoresUnderscoresThree or more...

---

Hyphens

---

Asterisks

---

Underscores

# Using emoji

You can add emoji to your writing by typing :EMOJICODE:.

```
@octocat :+1: This PR looks great - it's ready to merge! :shipit:
```

s@octocat 👍 This PR looks great - it's ready to merge! :shipit:

Typing : will bring up a list of suggested emoji. The list will filter as you type, so once you find the emoji you're looking for, press Tab or Enter to complete the highlighted result.For a full list of available emoji and codes, check out emoji-cheat-sheet.com.UnderscoresLine Breaks

My basic recommendation for learning how line breaks work is to experiment and discover -- hit <enter> once (i.e., insert one newline), then hit it twice (i.e., insert two newlines), see what happens. You'll soon learn to get what you want. "Markdown Toggle" is your friend.
