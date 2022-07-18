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
background: 'https://source.unsplash.com/1600x900/?nature,water'
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

## Components

### Icons

The following icons are by available in this theme:


**[Rocket](https://iconscout.com/unicons)**
  
```html
<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping m-2" />
```

**[materialdesignicons](https://materialdesignicons.com/)**

```html
<mdi-account-circle class="text-3xl m-2" />
<mdi-account-clock class="text-3xl m-2" />
```

**[Twitter Emoji (Twemoji)](https://github.com/twitter/twemoji)**

See https://emojipedia.org/

```html
<twemoji-cat-with-tears-of-joy class="text-3xl m-2" />
<twemoji-slightly-smiling-face class="text-3xl m-2 " />
<twemoji-fire class="text-3xl m-2" />
```

## Support Classes

You can specify a class on the Front Matter

```
---
class: code_large
---
```

Following classes can be used:

| Class       | Description                      |
| ----------- | -------------------------------- |
| code-small  | Small font for code blocks       |
| code-large  | Large font for code blocks       |
| code-xlarge | Extra large font for code blocks |
| text-center | Center all text                  |

## Tips

You can add a custom style block on your slide.

```html
<style>
  h1 {
    @apply text-3xl mb-3 text-white;
  }
  
  code {
    font-weight: bold;
    font-size: 1.6em;
    line-height: 1.5em;
  }
</style>
```

Position you images

```html
<img src="/my-image.png" class="h-40 rounded-full absolute bottom-20 right-20" />
```

Global style changes (style.css)

```css
/* To change code block font */
code {
  font-weight: 400 !important;
  font-size: 1.3em !important;
  line-height: 1.2em !important;
} 
```
