<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'sisternode';
</script>

<svg
  t="1569683586275"
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
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  ><defs><style type="text/css"></style></defs><path
    d="M672 432c-120.3 0-219.9 88.5-237.3 204H320c-15.5 0-28-12.5-28-28V244h291c14.2 35.2 48.7 60 89 60 53 0 96-43 96-96s-43-96-96-96c-40.3 0-74.8 24.8-89 60H112v72h108v364c0 55.2 44.8 100 100 100h114.7c17.4 115.5 117 204 237.3 204 132.5 0 240-107.5 240-240S804.5 432 672 432z m128 266c0 4.4-3.6 8-8 8h-86v86c0 4.4-3.6 8-8 8h-52c-4.4 0-8-3.6-8-8v-86h-86c-4.4 0-8-3.6-8-8v-52c0-4.4 3.6-8 8-8h86v-86c0-4.4 3.6-8 8-8h52c4.4 0 8 3.6 8 8v86h86c4.4 0 8 3.6 8 8v52z"
  ></path></svg
>

<!--
@component
[Go to docs](https://svelte-ant-design-icons.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'sisternode';
-->
