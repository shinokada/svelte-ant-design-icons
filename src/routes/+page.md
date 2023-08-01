# Svelte Ant Design Icons

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-ant-design-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-ant-design-icons" alt="npm" height="25" style="height: 25px !important;"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25" style="height: 25px !important;"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-ant-design-icons" alt="License" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-ant-design-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-ant-design-icons.svg" alt="npm" height="25" style="height: 25px !important;"></a>
</div>

780+ Ant Design SVG Icons v4.2.1 for Svelte.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.

## Repo

[GitHub repo](https://github.com/shinokada/svelte-ant-design-icons)

## Original source

[ant-design/ant-design-icons](https://github.com/ant-design/ant-design-icons)

## License

[Svelte-Ant-Design-Icons License](https://github.com/ant-design/ant-design-icons/LICENSE)

[Ant Design Icons License](https://github.com/ant-design/ant-design-icons/blob/master/LICENSE)

## Installation

```sh
pnpm i -D svelte-ant-design-icons
```

## Usage

In a svelte file:

```html
<script>
  import { Icon, IconTwotone } from 'svelte-ant-design-icons';
</script>

<Icon name="account-book-filled" />
<Icon name="account-book-outlined" />
<IconTwotone name="account-book-twotone" />
```


## Props

### Outlined/Filled

- @prop name;
- @prop width = "24";
- @prop height = "24";
- @prop role = 'img';
- @prop color = 'currentColor'
- @prop ariaLabel='icon name'

### Twotone

- @prop name;
- @prop width = "24";
- @prop height = "24";
- @prop strokeColor = 'currentColor';
- @prop insideColor = '#D9D9D9';
- @prop role = 'img';
- @prop ariaLabel='icon name'

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, props, and events.

## Size

Use the `width` and `height` props to change the size of icons.

```html
<Icon name="account-book-filled" width="100" height="100" />
```

If you are using Tailwind CSS, you can add a custom size using Tailwind CSS by including the desired classes in the class prop. For example:

```html
<Icon name="account-book-filled" class="shrink-0 h-20 w-20" />
```

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<Icon name="account-book-filled" color="#c61515" />
```

## CSS frameworks suport

You can apply CSS framework color and other attributes directly to the icon component or its parent tag using the `class` prop.

Tailwind CSS example:

```html
<Icon name="account-book-filled" class="text-red-700 inline m-1" />
```

Bootstrap examples:

```html
<Icon name="account-book-filled" class="position-absolute top-0 px-1" />
```

## Dark mode

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<Icon name="account-book-filled" class="text-blue-700 dark:text-red-500" />
```

## aria-label

All icons have aria-label. For example `account-book-filled` has `aria-label="account book filled"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<Icon name="account-book-filled" ariaLabel="red account book" color="#c61515"/>
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<Icon name="account-book-filled"  tabindex="-1" />
```

## Events

All icons have the following events:

- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout

## Passing down other attributes

You can pass other attibutes as well.

```html
<Icon name="account-book-filled"  tabindex="0" />
```

## Using svelte:component

```html
<svelte:component this="{Icon}" name="account-book-filled" />
```

## Using onMount

```html
<script>
  import { Icon } from 'svelte-heros-v2';
  import { onMount } from 'svelte';
  const props = {
    name: 'account-book-filled',
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new Icon({ target: document.body, props });
  });
</script>
```

## Import all

Use `import { Icon, icons } from 'svelte-heros-v2';`.

```html
<script>
  import { Icon, icons } from 'svelte-heros-v2';
  function filterIconsByKeyword(icons, keyword) {
    const filteredIcons = {};
    for (const key in icons) {
      if (key.includes(keyword)) {
        filteredIcons[key] = icons[key];
      }
    }
    return filteredIcons;
  }
  const outlinedIcons = filterIconsByKeyword(icons, '-outlined');
</script>

{#each Object.keys(outlinedIcons) as name}
<div class="flex gap-4 items-center text-lg">
  <IconOutline name={name} class="shrink-0"/>
  {name}
</div>
{/each}
```

## Other icons

[Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
