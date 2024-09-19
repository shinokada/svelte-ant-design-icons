<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'runes-webkit';
  import { A } from 'svelte-5-ui-lib';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Getting Started - Svelte Ant Design Icons v2</h1>

<div class="my-8 flex gap-2">
  <a href="https://github.com/sponsors/shinokada" target="_blank" aria-label="Sponsor @shinokada"
    ><img
      src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86"
      alt="sponsor"
    /></a
  >
  <a href="https://www.npmjs.com/package/svelte-ant-design-icons" rel="nofollow" target="_blank" aria-label="npm svelte-ant-design-icons"
    ><img src="https://img.shields.io/npm/v/svelte-ant-design-icons/next" alt="npm" /></a
  >
  <a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank" aria-label="MIT License"
    ><img
      src="https://img.shields.io/github/license/shinokada/svelte-ant-design-icons"
      alt="License"
    /></a
  >
  <a href="https://www.npmjs.com/package/svelte-ant-design-icons" rel="nofollow" target="_blank" aria-label="npm svelte-ant-design-icons"
    ><img src="https://img.shields.io/npm/dw/svelte-ant-design-icons.svg" alt="npm" /></a
  >
</div>

<H2>Requirements</H2>

<HighlightCompo codeLang="ts" code={modules['./md/requirement.md'] as string} />

<H2>Installation</H2>

<p>Install Svelte and <Code>svelte-ant-design-icons v2</Code>:</p>

<HighlightCompo codeLang="ts" code={modules['./md/installation.md'] as string} />

<p>Enable Runes in svelte.config.js:</p>

<HighlightCompo codeLang="ts" code={modules['./md/runes.md'] as string} />

<H2>Basic Usage</H2>

<p>In a svelte file:</p>

<HighlightCompo codeLang="ts" code={modules['./md/basic-usage.md'] as string} />

<H2>A11y friendly</H2>

<p>
  Use <Code>title</Code>, <Code>desc</Code>, and <Code>ariaLabel</Code> props to make your icons accessible.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/a11y-friendly.md'] as string} />

<H2>Faster compiling</H2>

<p>
  If you need only a few icons from this library in your Svelte app, import them directly. This can
  optimize compilation speed and improve performance by reducing the amount of code processed during
  compilation.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/faster-compiling.md'] as string} />

<H2>Passing down other attributes</H2>

<p>Since all icons have <Code>...restProps</Code>, you can pass other attibutes as well.</p>

<HighlightCompo codeLang="ts" code={modules['./md/passing-down-other-attributes.md'] as string} />

<H2>Using onMount</H2>
<HighlightCompo codeLang="ts" code={modules['./md/using-onmount.md'] as string} />

<H2>Import all</H2>

<p>Use <Code>import * as Icon from 'svelte-ant-design-icons</Code>.</p>

<HighlightCompo codeLang="ts" code={modules['./md/import-all.md'] as string} />
