# Svelte-Ant-Design-Icons

<p align="center">
<a href="https://shinokada.github.io/svelte-ant-design-icons/" rel="nofollow">Svelte-Ant-Design-Icons</a>
</p>

<p align="center">
<a href="https://www.npmjs.com/package/svelte-ant-design-icons" rel="nofollow"><img src="https://img.shields.io/npm/v/svelte-ant-design-icons" alt="npm"></a>
<a href="https://twitter.com/shinokada" rel="nofollow"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada"></a>
<a href="http://www.apache.org/licenses/" rel="nofollow"><img src="https://img.shields.io/github/license/shinokada/svelte-ant-design-icons" alt="License"></a>
<a href="https://www.npmjs.com/package/svelte-ant-design-icons" rel="nofollow"><img src="https://img.shields.io/npm/dw/svelte-ant-design-icons.svg" alt="npm"></a>
</p>

Ant Design SVG Icons v4.2.1 for Svelte. Svelte-Ant-Design-Icons support major CSS framework. You can add additional CSS using the `class` props.

<p align="center">
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-ant-design-icons/main/static/images/svelte-ant-1.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-ant-design-icons/main/static/images/svelte-ant-2.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-ant-design-icons/main/static/images/svelte-ant-3.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-ant-design-icons/main/static/images/svelte-ant-4.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-ant-design-icons/main/static/images/svelte-ant-5.webp" />
</p>

## Installation

```sh
npm i -D svelte-ant-design-icons
```

To update

```sh
npm i -D svelte-ant-design-icons@latest
```

## REPL

[REPL 1](https://svelte.dev/repl/375c734a6ec74f44adfe4aa76b117ab9?version=3.50.1)

[REPL 2](https://svelte.dev/repl/38a6fcd635c14255b7a30c1a7d4b05c2?version=3.50.1)

## Usage

```html
<script>
  import {
    AlertFilled,
    AlertOutlined,
    AlertTwotone,
    BookTwotone,
    BellTwotone,
    VideoCameraTwotone,
    UpSquareTwotone
  } from 'svelte-ant-design-icons';
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

## List of icons

[Icon names](https://github.com/shinokada/svelte-ant-design-icons/blob/main/docs/icon-list.md)

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
