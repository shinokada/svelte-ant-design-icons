<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let strokeColor = ctx.strokeColor || 'currentColor';
  export let insideColor = ctx.insideColor || '#D9D9D9';
  export let ariaLabel = 'bell';
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
    d="M512 220c-55.6 0-107.8 21.6-147.1 60.9S304 372.4 304 428v340h416V428c0-55.6-21.6-107.8-60.9-147.1S567.6 220 512 220zm280 208c0-141.1-104.3-257.8-240-277.2v.1c135.7 19.4 240 136 240 277.1zM472 150.9v-.1C336.3 170.2 232 286.9 232 428c0-141.1 104.3-257.7 240-277.1z"
  />
  <path
    d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zm208-120H304V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-ant-design-icons.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let strokeColor = ctx.strokeColor || 'currentColor';
@prop export let insideColor = ctx.insideColor || '#D9D9D9';
@prop export let ariaLabel = 'bell';
-->
