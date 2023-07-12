# Svelte Ant Design Icons

<div class="flex justify-center gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" height="25" style="height: 25px !important;"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank"><img src="https://img.shields.io/badge/PWA-enabled-brightgreen" alt="PWA Shield" height="25" style="height: 25px !important;">
</a>
<a href="https://www.npmjs.com/package/svelte-ant-design-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-ant-design-icons" alt="npm" height="25" style="height: 25px !important;"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25" style="height: 25px !important;"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-ant-design-icons" alt="License" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-ant-design-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-ant-design-icons.svg" alt="npm" height="25" style="height: 25px !important;"></a>
</div>

Ant Design SVG Icons v4.2.1 for Svelte. Svelte-Ant-Design-Icons support major CSS framework. You can add additional CSS using the `class` props.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.

## Installation

```sh
pnpm i -D svelte-ant-design-icons
```

## Usage

In a svelte file:

```html
<script>
  import { AccountBookFilled } from 'svelte-ant-design-icons';
</script>

<AccountBookFilled />
```

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

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

To avoid any complaints from the editor, add `node16` or `nodenext` to `moduleResolution` in your tsconfig.json file.

```json
{
  //...
  "compilerOptions": {
    // ...
    "moduleResolution": "nodenext"
  }
}
```


## Props

| Name                    | Default              |
| ----------------------- | -------------------- |
| size                    | 24                   |
| class                   |                      |
| role                    | img                  |
| ariaLabel               | file name            |
| strokeColor for twotone | currentColor or #333 |
| insideColor for twotone | #E6E6E6 or #D9D9D9   |

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, props, and events.


## Variation

Some icons have Filled, Outlined, and Twotone. You can find them at the end of filenames.

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

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)

## PWA: Fast & Offline

This website can be downloaded and installed on your device for offline access as a Progressive Web App.

To install a PWA, look for the "Add to Home Screen" option in the browser's menu or settings. On most mobile devices, this option can be found by visiting the website, then selecting the "Options" or "Menu" button in the browser, and looking for the "Add to Home Screen" option. On some desktop browsers, right-click on the page and select "Install".
