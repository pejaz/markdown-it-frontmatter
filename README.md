# vitepress-plugin-frontmatter

this is a markdown-it plugin,it can extract frontmatter.title to h1 title

## Install

```sh
npm install vitepress-plugin-frontmatter --save
```

## Use

```vite.config.ts
import { titlePlugin } from 'vitepress-plugin-frontmatter'
import { defineConfig } from 'vitepress'

export default defineConfig({
  // other config

  markdown: {
    config(md) {
      md.use(titlePlugin)
    },
  },
})
```

## example

```markdown
---
title: H1 title // only set frontmatter.title
---

++ # H1 title // and auto add it
```

## License

*markdown-it-frontmatter* is distributed under the MIT License - see the [LICENSE](LICENSE) file for details.
