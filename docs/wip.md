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

### Intro

A Intro slide for the Talk 
- title
- optional sub title
- author

![](./docs//mages//title.png)

![](./docs//mages//title-dark.png)

### Section

This slide can be used to split your talks into sections. It's meant to only have a single heading.

![](./docs//mages//section.png)

### Default slide (content slide)

2 columns

![](./docs//mages/2columns.png)

2 columns

![](./docs//mages/3columns.png)

table

![](./docs//mages/table.png)
![](./docs//mages/table-dark.png)

### Image

![](./docs//mages/image-left.png)
![](./docs//mages/image-left-dark.png)

> Question: do we need a image right?

### Quote

![](./docs//mages//quote.png)

### Closing

![](./docs//mages//end.png)
![](./docs//mages//end2.png)

### Bullet points (optional)

![](./docs//mages/bullet-points.png)

### Table of content (optional)

![](./docs//mages/image-right.png)

> Question: Maybe better to provide image left en right and make no different between inner page and TOC

## Resources

- [Euricom Branding](https://euricom.sharepoint.com/SitePages/Euricom-Branding.aspx)
- https://github.com/LinusBorg/slidev-theme-vuetiful
- https://github.com/slidevjs/themes
