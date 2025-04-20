import { describe, test, expect } from "vitest";
import MarkdownIt from "markdown-it";
import { titlePlugin } from "./index.js";
import fs from "node:fs";
import path from "node:path";
import { frontmatterPlugin } from "@mdit-vue/plugin-frontmatter";

describe('use titlePlugin in MarkdownIt', () => {
  const md = MarkdownIt()
    .use(frontmatterPlugin)
    .use(titlePlugin)

  test('auto extract frontmatter to h1', () => {
    const aMdStr = fs.readFileSync(path.resolve(__dirname, './fixtures/a.md'), 'utf-8')
    expect(md.render(aMdStr)).toContain('<h1>testH1</h1>')
  })

  test('if content has h1Header,should continue', () => {
    const bMdStr = fs.readFileSync(path.resolve(__dirname, './fixtures/b.md'), 'utf-8')
    expect(md.render(bMdStr)).not.toContain('<h1>testH2</h1>')
    expect(md.render(bMdStr)).toContain('<h1>Here is title</h1>')
  })

  test('if has remark or code scope token,should continue', () => {
    const cMdStr = fs.readFileSync(path.resolve(__dirname, './fixtures/c.md'), 'utf-8')
    expect(md.render(cMdStr)).not.toContain('<h1>is remark</h1>')
    expect(md.render(cMdStr)).not.toContain('<h1> is not h1 header</h1>')
    expect(md.render(cMdStr)).toContain('<h1>testH3</h1>')
  })
})