<script lang="ts">
  import { HighlightCompo, Code, H2 } from 'runes-webkit';
  import { GitHubSponsor, type GitHubSponsorPropsType,  NpmVersion, type NpmVersionPropsType, License, type LicensePropsType, NpmDownload, type NpmDownloadPropsType } from 'svelte-shields';

  const sponsor: GitHubSponsorPropsType = {
    user: 'shinokada',
    logo:'github',
  };
  const npmversion: NpmVersionPropsType = {
    packageName: 'svelte-ant-design-icons',
    tag:'v1-latest',
    logo:'svelte'
  };
  const license: LicensePropsType = {
    source: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-ant-design-icons'
  };
  const downloads: NpmDownloadPropsType = {
    packageName: 'svelte-ant-design-icons'
  };

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Getting Started - Svelte Ant Design Icons v1</h1>

<div class="my-8 flex gap-2">
  <GitHubSponsor {...sponsor} />
  <NpmVersion {...npmversion} />
  <License {...license} />
  <NpmDownload {...downloads} />
</div>

<H2>Requirements</H2>

<HighlightCompo codeLang="ts" code={modules['./md/requirement.md'] as string} />

<H2>Installation</H2>

<p>Install Svelte and Svelte Ant Design Icons:</p>

<HighlightCompo codeLang="ts" code={modules['./md/installation.md'] as string} />

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

<p>Since all icons have <Code>...$$restProps</Code>, you can pass other attibutes as well.</p>

<HighlightCompo codeLang="ts" code={modules['./md/passing-down-other-attributes.md'] as string} />

<H2>Using svelte:component</H2>

<HighlightCompo codeLang="ts" code={modules['./md/using-svelte-component.md'] as string} />

<H2>Using onMount</H2>
<HighlightCompo codeLang="ts" code={modules['./md/using-onmount.md'] as string} />

<H2>Import all</H2>

<p>Use <Code>import * as Icon from 'svelte-ant-design-icons</Code>.</p>

<HighlightCompo codeLang="ts" code={modules['./md/import-all.md'] as string} />
