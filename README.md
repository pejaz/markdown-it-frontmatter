# vitepress-plugin-frontmatter

this is a markdown-it plugin,it can extract frontmatter.title to h1 title

## install

```sh
npm install vitepress-plugin-frontmatter --save
```

## use

```vite.config.ts
import { fmTitlePlugin } from 'vitepress-plugin-frontmatter'
import { defineConfig } from 'vitepress'

export default defineConfig({
  // other config

  markdown: {
    config(md) {
      md.use(fmTitlePlugin)
    },
  },
})
```

## example

```markdown
// x.md
---
title: H1 title // only set frontmatter.title
---

++ # H1 title // and auto add it

<!-- other content -->
```

## License

*vitepress-plugin-frontmatter* is distributed under the MIT License - see the [LICENSE](LICENSE) file for details.
