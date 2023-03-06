<h1 align="center">Svelte Ant Design Icons</h1>
<p align="center">
<a href="https://svelte-ant-design-icons.codewithshin.com/" rel="nofollow">Svelte-Ant-Design-Icons</a>
</p>

<p align="center">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" height="25"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank"><img src="https://img.shields.io/badge/PWA-enabled-brightgreen" alt="PWA Shield" height="25">
</a>
<a href="https://www.npmjs.com/package/svelte-ant-design-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-ant-design-icons" alt="npm" height="25"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-ant-design-icons" alt="License" height="25"></a>
<a href="https://www.npmjs.com/package/svelte-ant-design-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-ant-design-icons.svg" alt="npm" height="25"></a>
</p>

Ant Design SVG Icons v4.2.1 for Svelte. Svelte-Ant-Design-Icons support major CSS framework. You can add additional CSS using the `class` props.

<p align="center">
<img width="650" src="/static/images/ant-optimized-650-1050.png" />
</p>

## Installation

```sh
npm i -D svelte-ant-design-icons
```

To update

```sh
npm i -D svelte-ant-design-icons@latest
```

If you are a TypeScript user, Add `"moduleResolution": "bundler"` to `tsconfig.json`:

```
{
	//...
	"compilerOptions": {
		// ...
		"moduleResolution": "bundler"
	}
}
```

## REPL

[REPL 1](https://svelte.dev/repl/375c734a6ec74f44adfe4aa76b117ab9)

[REPL 2](https://svelte.dev/repl/38a6fcd635c14255b7a30c1a7d4b05c2)

## Usage

```html
<script>
  import { AlertFilled } from 'svelte-ant-design-icons';
</script>

<AlertFilled />
```

## Faster compiling

**This require `"typescript": "^5.0.0"`.**

For faster compilation, you can import the icon directly.

```html
<script>
  import AlertFilled from 'svelte-ant-design-icons/AlertFilled.svelte';
</script>

<AlertFilled />
```

## Props

| Name                    | Default              |
| ----------------------- | -------------------- |
| size                    | 24                   |
| class                   |                      |
| ariaLabel               | file name            |
| strokeColor for twotone | currentColor or #333 |
| insideColor for twotone | #E6E6E6 or #D9D9D9   |

## Icon names

[Icon names](/icon-list.md)

## Icon images

[Icon images](/icon-images.md)

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

```md
on:click
on:mouseenter
on:mouseleave
on:mouseover
on:mouseout
on:blur
on:focus
```

## Original source

[ant-design/ant-design-icons v4.2.1](https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-svg)

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)

## PWA: Fast & Offline

This website can be downloaded and installed on your device for offline access as a Progressive Web App.

To install a PWA, look for the "Add to Home Screen" option in the browser's menu or settings. On most mobile devices, this option can be found by visiting the website, then selecting the "Options" or "Menu" button in the browser, and looking for the "Add to Home Screen" option. On some desktop browsers, right-click on the page and select "Install".
