<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'runes-webkit';
  import { A, P } from 'flowbite-svelte';
  import { AppstoreAddOutlined } from '$lib';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Props - Svelte Ant Design Icons v2</h1>

<H2>Props</H2>

<P>
  All icons are extended <A
    href="https://github.com/sveltejs/svelte/blob/main/packages/svelte/elements.d.ts"
    >SVGAttributes from svelte/elements</A
  >.
</P>

<HighlightCompo codeLang="ts" code={modules['./md/props.md'] as string} />

<H2>Types</H2>

<HighlightCompo codeLang="ts" code={modules['./md/types.md'] as string} />

<H2>Size</H2>

<p>
  To change the size of an icon, use the <Code>size</Code> prop and specify the desired size. For example:
</p>
<HighlightCompo codeLang="ts" code={modules['./md/size.md'] as string} />

<p>
  You can add a custom size using Tailwind CSS by including the desired classes in the <Code
    >class</Code
  > prop. For example:
</p>

<HighlightCompo codeLang="ts" code={modules['./md/size-2.md'] as string} />

<H2>CSS HEX Colors</H2>

<p>Use the color attribute to change colors with HEX color code:</p>

<HighlightCompo codeLang="ts" code={modules['./md/css-hex-color.md'] as string} />

<H2>CSS framework</H2>

<p>
  You can apply CSS framework color and other attributes directly to the icon component or its
  parent tag using the <Code>class</Code> prop.
</p>

<H3>Tailwind CSS</H3>

<HighlightCompo codeLang="ts" code={modules['./md/tailwind-css.md'] as string} />

<H3>Bootstrap</H3>

<HighlightCompo codeLang="ts" code={modules['./md/bootstrap.md'] as string} />

<H2>Dark mode</H2>

<p>Your website with Tailwind CSS, add your dark mode class to the <Code>class</Code> prop.</p>

<HighlightCompo codeLang="ts" code={modules['./md/dark-mode.md'] as string} />

<H2>A11y</H2>

<p>
  All icons have aria-label. For example <Code>AddressBookSolid</Code> has <Code
    >aria-label="addressbook solid"</Code
  >. Use <Code>ariaLabel</Code> prop to modify the <Code>aria-label</Code> value.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/a11y.md'] as string} />

<p>
  Use <Code>title</Code>, <Code>desc</Code>, and <Code>ariaLabel</Code> props to make your icons accessible.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/a11y-2.md'] as string} />

<CodeWrapper>
  <AppstoreAddOutlined
    title={{ id: 'my-title', title: 'Red heart' }}
    desc={{ id: 'my-descrip', desc: 'The shape of a red heart' }}
    ariaLabel="red heart"
    color="red"
  />
</CodeWrapper>

<H2>Passing down other attributes</H2>

<P>
  As default all icons are extended <A
    href="https://github.com/sveltejs/svelte/blob/svelte%405.0.0-next.182/packages/svelte/elements.d.ts"
    >SVGAttributes SVGElement</A
  > interface. This means you can add any standard SVG attribute or event listener to our icon components.
</P>

<CodeWrapper>
  <AppstoreAddOutlined
    id="my-svg"
    transform="rotate(45)"
    class="hover:cursor-pointer dark:text-white"
    onclick={() => alert('hello')}
  />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/passing-down-other-attributes.md'] as string} />
