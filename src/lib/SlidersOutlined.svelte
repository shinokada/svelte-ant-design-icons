<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'sliders';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...$$restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  class={$$props.class}
  aria-label={ariaLabel}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  viewBox="0 0 1024 1024"
>
  <path
    d="M320 224h-66v-56c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v56h-66c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8h66v56c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-56h66c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8zm-60 508h-80V292h80v440zm644-436h-66v-96c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v96h-66c-4.4 0-8 3.6-8 8v416c0 4.4 3.6 8 8 8h66v96c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-96h66c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8zm-60 364h-80V364h80v296zM612 404h-66V232c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v172h-66c-4.4 0-8 3.6-8 8v200c0 4.4 3.6 8 8 8h66v172c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V620h66c4.4 0 8-3.6 8-8V412c0-4.4-3.6-8-8-8zm-60 145a3 3 0 0 1-3 3h-74a3 3 0 0 1-3-3v-74a3 3 0 0 1 3-3h74a3 3 0 0 1 3 3v74z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-ant-design-icons.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'sliders';
-->
