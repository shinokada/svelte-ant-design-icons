<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'node expand';
</script>

<svg
  t="1569683374330"
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
    d="M952 612c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H298c-14.2-35.2-48.7-60-89-60-53 0-96 43-96 96s43 96 96 96c40.3 0 74.8-24.8 89-60h150.3v152c0 55.2 44.8 100 100 100H952c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H548.3c-15.5 0-28-12.5-28-28V612H952zM456 344h264v98.2c0 8.1 9.5 12.8 15.8 7.7l172.5-136.2c5-3.9 5-11.4 0-15.3L735.8 162.1c-6.4-5.1-15.8-0.5-15.8 7.7V268H456c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8z"
  ></path></svg
>

<!--
@component
[Go to docs](https://svelte-ant-design-icons.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'node expand';
-->
