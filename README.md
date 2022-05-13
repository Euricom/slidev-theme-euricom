# slidev-theme-euricom

[![NPM version](https://img.shields.io/npm/v/slidev-theme-euricom?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-theme-euricom)

A Euricom theme for [Slidev](https://github.com/slidevjs/slidev).

> Note: This is work in progress. More to come later...

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

```
---
theme: <b>euricom</b>
---
```

Learn more about [how to use a theme](https://sli.dev/themes/use).

## Layouts

This theme provides the following layouts:

### Default

This is the default slide layout. 

```md
---
layout: default # you don't have to specify this
---

# This will be the heading

And this can be used as test below it

- We can have a list.
- With a few items.
```

Supports multi columns

```md
---
cols: 1-1 # Other values: 2-1 or 1-2, as well as any valid grid-cols-* class from windiwcss
---

This will go in the left column

:::right:::

This will go into the right column
```

Two colored header

```md
# This will be `the heading`

And this can be used as test below it

- We can have a list.
- With a few items.
```

You can also combine this with the separate titleRow:

```md
---
slideTitle: Lets make this work
titleRow: true
---

This content can now be styled/positioned independent of the title, because it will be in a separate grid cell.
```

### Section

```
---
layout: section
---

# Chapter one

## How to make something of your life
```

### Cover

A Cover slide for the Talk 

```md
---
layout: cover
author: John Doe
location: Belgium, Antwerp
date: 2020-01-01
hideInToc: true
---

# The best of it

## Is to make it work for everyone
```

And also with a full screen background image

```md
---
layout: cover
background: 'https://source.unsplash.com/1600x900/?nature,water'
---

# The best of it

## Is to make it work for everyone
```

### Big Points

This slide type is much like the default slide, the main difference is that the content font-size is bigger and the content in centered. Useful for slides that just contain a few points or sentences.

```md
---
layout: big-points
titleRow: true
---

# Need to make a few big points?

- Increased font size...
- ...and centered content
- help stressing a few points
```

### Image left/right

image-left

```md
---
layout: image-left
image: https://source.unsplash.com/collection/94734566/1920x1080
---
```

image-right

```md
---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---
```

### Quote

```
---
layout: quote
author: Linus Borg (2021)
---

Big quotes make your thing
```


### Outro

```
---
layout: outro
author: Linus Borg (2021)
---

Big quotes make your thing
```
