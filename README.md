# slidev-theme-euricom

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

<pre><code>
---
theme: <b>euricom</b>
---
</code></pre>

## Layouts

> Note: we are still in the process of adding more slide variations.

This theme provides the following layouts:

 - Default (improved w/grid)
 - Cover (T.B.D)
 - Section (T.B.D)

### Default

The default slide has a few tricks up it's sleeve.

It an of course be used as-is:

```
---

# This will be the heading

And this can be used as test below it

-  We can have a list.
- With a few items.

---

```

But it can also have the title in a special row:

```
---
title: This will now be the heading
titleRow: true
---

This content can now be styled/positioned independent of the title,
because it will be in a separate grid cell.

---
```

We can also do a quick column:

```
---
cols: 1-1 
---

This will go in the left column

:::right:::

This will go into the right column

---
```

Other cols values: 2-1 or 1-2, as well as any valid grid-cols-* class from windiwcss

You can also combine this with the separate titleRow:

```
---
title: This will span both columns
titleRow: true
cols: 2-1
---

This will be in the wider, left column

::right::

This will be in the smaller, right column

```

### Cover

A Cover slide for the Talk Title & Subtitle

### Section

This slide can be used to split your talks into sections. It's meant to only have a single heading.

### Quote

T.B.D


## Resources

- https://github.com/LinusBorg/slidev-theme-vuetiful
- https://github.com/slidevjs/themes