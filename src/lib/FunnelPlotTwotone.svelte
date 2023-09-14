<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let strokeColor = ctx.strokeColor || 'currentColor';
  export let insideColor = ctx.insideColor || '#D9D9D9';
  export let ariaLabel = 'funnel plot';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...$$restProps}
  {role}
  width={size}
  height={size}
  fill={strokeColor}
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
    fill={insideColor}
    d="M420.6 798h182.9V650H420.6zM297.7 374h428.6l85-148H212.7zm113.2 197.4l8.4 14.6h185.3l8.4-14.6L689.6 438H334.4z"
  />
  <path
    d="M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 607.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V607.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.5 798H420.6V650h182.9v148zm9.5-226.6l-8.4 14.6H419.3l-8.4-14.6L334.4 438h355.2L613 571.4zM726.3 374H297.7l-85-148h598.6l-85 148z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-ant-design-icons.vercel.app/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let strokeColor = ctx.strokeColor || 'currentColor';
@prop export let insideColor = ctx.insideColor || '#D9D9D9';
@prop export let ariaLabel = 'funnel plot';
-->
