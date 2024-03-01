---
layout: mainLayout
---

# Svelte Ant Design Icons

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor"></a>
<a href="https://www.npmjs.com/package/svelte-ant-design-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-ant-design-icons" alt="npm"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-ant-design-icons" alt="License"></a>
<a href="https://www.npmjs.com/package/svelte-ant-design-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-ant-design-icons.svg" alt="npm"></a>
</div>

## Introduction

Svelte Ant Design Icons is a collection of over 780 Ant Design SVG Icons (v4.2.1) for Svelte. This open-source package allows you to easily incorporate these icons into your Svelte projects.

If you find this package useful in your commercial projects, please consider supporting the developer by sponsoring them on [GitHub: Sponsor on GitHub](https://github.com/sponsors/shinokada). Your support helps maintain and enhance this package for the benefit of the community.

## Repo

[GitHub repo](https://github.com/shinokada/svelte-ant-design-icons)

## Installation

You can install Svelte Ant Design Icons using the following command:

```sh
pnpm i -D svelte-ant-design-icons
```

## Usage

In a Svelte file, you can import and use icons like this:

```html
<script>
  import { AccountBookFilled } from 'svelte-ant-design-icons';
</script>

<AccountBookFilled />
```

## Faster compiling

If you only need a few icons from this library in your Svelte app, consider importing them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

For example:

```html
<script>
  import AccountBookFilled from 'svelte-ant-design-icons/AccountBookFilled.svelte';
</script>

<Add />
```

If you are a TypeScript user, install **typescript version 5.0.0 or above**.

```sh
pnpm i -D typescript@latest
```

## Props

### Filled and Outlined

- @prop export let size = ctx.size || '24';
- @prop export let role = ctx.role || 'img';
- @prop export let color = ctx.color || 'currentColor';
- @prop export let ariaLabel = 'icon file name';

### Twotone

- @prop export let size = ctx.size || '24';
- @prop export let role = ctx.role || 'img';
- @prop export let strokeColor = ctx.strokeColor || 'currentColor';
- @prop export let insideColor = ctx.insideColor || '#D9D9D9';
- @prop export let ariaLabel = 'icon file name';

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link and props.

## Variation

Some icons have Filled, Outlined, and Twotone versions. You can find them at the end of filenames.

For example:

```md
AlertFilled.svelte
AlertOutlined.svelte
AlertTwotone.svelte
```

## Size

Use the `size` prop to change the size of icons.

```html
<AlertFilled size="30" />
<AlertFilled size="40" />
<AlertFilled size="50" />
```

If you're using Tailwind CSS, you can customize the size using Tailwind CSS classes:

```html
<AlertFilled class="shrink-0 h-20 w-20" />
```

## Setting Global Icon using setContext

You can establish global icon preferences in your Svelte application using `setContext`. This allows you to configure icon-related properties once and share them across multiple components. Here's how you can do it:

```html
<script>
  import { setContext } from 'svelte';

  // Define your global icon settings
  const iconCtx = {
    size: '100', // Icon size in pixels
    color: '#ff4488', // Icon color in hexadecimal or CSS color name
    role: 'svg icon image' // Accessible role for the icon
  };
  setContext('iconCtx', iconCtx);
</script>
```

The `size`, `color`, and `role` properties are optional, allowing you to fine-tune the appearance and accessibility of your icons as needed.

If you set `size`, icons can be customized with different colors. For example:

```html
<script>
  import { setContext } from 'svelte';
  import { AccountBookFilled } from 'svelte-ant-design-icons';
  const iconCtx = {
    size: '50'
  };
  setContext('iconCtx', iconCtx);
</script>

<AccountBookFilled color="#ff4488" />
```

Remember that you can set only one or two of these properties, allowing you to tailor icon settings to your specific design and accessibility requirements.

Feel free to mix and match these properties as needed to create visually appealing and accessible icons in your Svelte application.

## Creating a Default Icon Setting

You can create a config file, `/src/lib/icon.config.json`.

The `Icon` component serves as a wrapper for svelte:component, allowing you to establish a global default setting or expand the capabilities of a component.

To create a default global icon setting, follow these steps:

### Configuration File

Start by creating a configuration file named `/src/lib/icon.config.json` with the following structure:

```json
{
  "config1": {
    "size": 40,
    "color": "#FF5733"
  },
  "config2": {
    "size": 50,
    "color": "#445533"
  }
}
```

In this JSON file, you can define different configurations (config1 and config2 in this case) for your icons, specifying attributes like size, variation, and color.

### Implementation

In your Svelte page file, make use of the configurations from the JSON file:

```html
<script lang="ts">
  type IconConfig = {
    config1: {
      size: number;
      color: string;
    };
    config2: {
      size: number;
      color: string;
    };
  };
  import config from '$lib/icon.config.json';
  import { Icon, AlertFilled, AntCloudOutlined } from 'svelte-ant-design-icons';

  const iconConfig: IconConfig = config;
  const config1 = iconConfig.config1;
  const config2 = iconConfig.config2;
</script>

<Icon {...config1} icon="{AlertFilled}" />
<Icon {...config2} icon="{AntCloudOutlined}" />
```

We import the configurations from the JSON file and assign them to config1 and config2. We then utilize the Icon component with the spread attributes `{...config1}` and `{...config2}` to apply the respective configurations to each icon.

### Custom Default Icon

If you wish to create a custom default icon, you can follow these steps:

Create a Svelte component named `src/lib/MyIcon.svelte`:

```html
<script lang="ts">
  import type { ComponentType } from 'svelte';
  const config = {
    size: 30,
    color: '#FF5733'
  };
  import { Icon } from 'svelte-ant-design-icons';
  export let icon: ComponentType;
</script>

<Icon {...config} {icon} />
```

This component, `MyIcon.svelte`, accepts an `icon` prop which you can use to pass in the specific icon component you want to display. The default configuration is also applied to the icon.

### Implementation in a Page

To use your custom default icon in a Svelte page, do the following:

```html
<script>
  import MyIcon from '$lib/MyIcon.svelte';
  import { AlertFilled } from 'svelte-ant-design-icons';
</script>

<MyIcon icon="{AlertFilled}" />
```

Here, we import the `MyIcon` component and the `AlertFilled` icon. By passing the `AlertFilled` icon to the `icon` prop of MyIcon, you apply the default configuration to the icon.

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code for Filled and Outlined components.

```html
<AlertFilled color="#ff0000" /> <AlertOutlined color="#00ffd8" />
```

## Twotone icons

Use `strokeColor` and `insideColor` to change colors.

```html
<AlertTwotone size="80" strokeColor="#c61515" insideColor="#84ffc9" />
<BellTwotone size="80" strokeColor="#c61515" insideColor="#cdaaff" />
<VideoCameraTwotone size="80" strokeColor="#c61515" insideColor="#9ec1ff" />
<BookTwotone size="80" strokeColor="#c61515" insideColor="#ef6667" />
<UpSquareTwotone size="80" strokeColor="#657ced" insideColor="#6eed65" />
```

## CSS framework support

Use the `class` prop to change colors and additional CSS.

For example, Tailwind CSS:

```html
<AlertFilled class="text-pink-700 mr-4" />
```

If you use the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<AlertFilled class="text-pink-700 dark:text-blue-300" />
```

Bootstrap example:

```html
<AlertFilled class="position-absolute top-0 px-1" />
```

## aria-label

All icons have aria-label. For example `AcountBook` has `aria-label="account book"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<AcountBook ariaLabel="red acount book" class="text-red-500" />
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<BadgeAr tabindex="-1" />
```

## Passing down other attributes

You can pass other attibutes as well.

```html
<AlertFilled tabindex="0" />
```

## Using svelte:component

```html
<svelte:component this="{AlertFilled}" size="40" />
```

## Import all

Use `import * as Icon from 'svelte-ant-design-icons'`.

```html
<script>
  import * as Icon from 'svelte-ant-design-icons';
</script>

<Icon.AlertFilled size="30" class="text-red-500" />
<Icon.VideoCameraTwotone size="40" class="text-blue-700" />
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

## Original source

[ant-design/ant-design-icons v4.2.1](https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-svg)

## Other icons

[Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)

## License

[Svelte-Ant-Design-Icons License](https://github.com/ant-design/ant-design-icons/LICENSE)

[Ant Design Icons License](https://github.com/ant-design/ant-design-icons/blob/master/LICENSE)
