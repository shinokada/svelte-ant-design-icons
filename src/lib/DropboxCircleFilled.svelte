<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'dropbox circle';
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
    d="M663.8 455.5zm-151.5-93.8l-151.8 93.8 151.8 93.9 151.5-93.9zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm151.2 595.5L512.6 750l-151-90.5v-33.1l45.4 29.4 105.6-87.7 105.6 87.7 45.1-29.4v33.1zm-45.6-22.4l-105.3-87.7L407 637.1l-151-99.2 104.5-82.4L256 371.2 407 274l105.3 87.7L617.6 274 768 372.1l-104.2 83.5L768 539l-150.4 98.1z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-ant-design-icons.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'dropbox circle';
-->
