<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'ci circle';
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
    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-63.6 656c-103 0-162.4-68.6-162.4-182.6v-49C286 373.5 345.4 304 448.3 304c88.3 0 152.3 56.9 152.3 138.1 0 2.4-2 4.4-4.4 4.4h-52.6c-4.2 0-7.6-3.2-8-7.4-4-46.1-37.6-77.6-87-77.6-61.1 0-95.6 45.4-95.6 126.9v49.3c0 80.3 34.5 125.1 95.6 125.1 49.3 0 82.8-29.5 87-72.4.4-4.1 3.8-7.3 8-7.3h52.7c2.4 0 4.4 2 4.4 4.4 0 77.4-64.3 132.5-152.3 132.5zM738 704.1c0 4.4-3.6 8-8 8h-50.4c-4.4 0-8-3.6-8-8V319.9c0-4.4 3.6-8 8-8H730c4.4 0 8 3.6 8 8v384.2z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-ant-design-icons.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'ci circle';
-->
