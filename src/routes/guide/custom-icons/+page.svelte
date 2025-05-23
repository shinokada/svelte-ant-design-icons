<script lang="ts">
  import { HighlightCompo, Code, H2, H3 } from 'runes-webkit';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Custom icons - Svelte Ant Design Icons</h1>

<p>If you wish to create a custom default icon, you can follow these steps:</p>

<H2>Create a custom component</H2>

<p>Create a Svelte component named <Code>src/lib/MyIcon.svelte</Code>:</p>

<H3>Svelte 4</H3>
<HighlightCompo codeLang="ts" code={modules['./md/create-a-custom-component.md'] as string} />

<H3>Svelte 5</H3>
<HighlightCompo codeLang="ts" code={modules['./md/create-a-custom-component-2.md'] as string} />
<p>
  This component, <Code>MyIcon.svelte</Code>, accepts an <Code>icon</Code> prop which you can use to
  pass in the specific icon component you want to display. The default configuration is also applied
  to the icon.
</p>

<H2>Implementation</H2>

<p>To use your custom default icon in a Svelte page, do the following:</p>
<H3>Svelte 4</H3>
<HighlightCompo codeLang="ts" code={modules['./md/implementation.md'] as string} />
<H3>Svelte 5</H3>
<HighlightCompo codeLang="ts" code={modules['./md/implementation-2.md'] as string} />
<p>
  Here, we import the <Code>MyIcon</Code> component and the <Code>AlertFilled</Code> icon. By passing
  the <Code>AlertFilled</Code> icon to the <Code>icon</Code> prop of MyIcon, you apply the default configuration
  to the icon.
</p>
