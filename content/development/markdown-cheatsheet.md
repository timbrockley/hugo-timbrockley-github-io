---
title: "Markdown Cheatsheet"
description: "A quick guide to markdown which is used for Hugo content."
image: "/images/development/markdown-cheatsheet/markdown_logo_200x200.png"
categories: [ "development", "hugo" ]
tags: [ "development", "documentation", "hugo", "markdown" ]
date: 2020-08-10T16:31:32+01:00
draft: false
---

## Headings
```
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6


##
## Lists
```
* Item 1
* Item 2
  * Sub Item 1
  * Sub Item 2

1. Item 1
2. Item 2
3. Item 3
```
* Item 1
* Item 2
  * Sub Item 1
  * Sub Item 2

1. Item 1
2. Item 2
3. Item 3


##
## Emphasis
```
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__
*You **can** combine them*
```
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__
*You **can** combine them*


##
## Images
```
![Hugo Logo](/images/development/markdown-cheatsheet/hugo_logo_200x55.png)
```
![Hugo Logo](/images/development/markdown-cheatsheet/hugo_logo_200x55.png)


##
## Links
```
[Link](#)
```
[link](#)


##
## Code Blocks

\`\`\`javascript

var a1='test';

\`\`\`
```javascript
var a1='test';
```

##
## Blockquotes
```
> This is some text.
> More text.
```
> This is some text.
> More text.


##
## Escape With Backslashes
```
\*
```
\*


##
## Task Lists
```
- [x] this is a complete item
- [ ] this is an incomplete item
- [x] @mentions, #refs, [links](),
**formatting**, and <del>tags</del>
supported
- [x] list syntax required (any
unordered or ordered list
supported)
```

- [x] this is a complete item
- [ ] this is an incomplete item
- [x] @mentions, #refs, [links](),
**formatting**, and <del>tags</del>
supported
- [x] list syntax required (any
unordered or ordered list
supported)

##
## Tables
```
| Left Alignment | Right Alignment | Centered |
|:---------------|----------------:|:--------:|
| Item 11        | Item 12         | Item 13  |
| Item 21        | Item 22         | Item 23  |
```
| Left Alignment | Right Alignment | Centered |
|:---------------|----------------:|:--------:|
| Item 11        | Item 12         | Item 13  |
| Item 21        | Item 22         | Item 23  |

The default text alignment is is centered and can be defined by places a colon on the left, right or both sides of the minus sign(s) in the table definition.

##
## Emojis
GitHub and other sites support Emojis.
```
:+1: :sparkles: :camel: :tada:
:rocket: :metal: :octocat:
```
![GitHub Emojis](/images/development/markdown-cheatsheet/github_emojis.png)
