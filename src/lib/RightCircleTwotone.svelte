<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let strokeColor = ctx.strokeColor || '#333';
  export let insideColor = ctx.insideColor || '#E6E6E6';
  export let ariaLabel = 'right circle';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...$$restProps}
  {role}
  width={size}
  height={size}
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
    d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm154.7 378.4l-246 178c-5.3 3.8-12.7 0-12.7-6.5V643c0-10.2 4.9-19.9 13.2-25.9L566.6 512 421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.7 0 12.9z"
  />
  <path
    fill={strokeColor}
    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
  />
  <path
    fill={strokeColor}
    d="M666.7 505.5l-246-178c-5.3-3.8-12.7 0-12.7 6.5v46.9c0 10.3 4.9 19.9 13.2 25.9L566.6 512 421.2 617.1c-8.3 6-13.2 15.7-13.2 25.9v46.9c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.7 0-12.9z"
  />
</svg>
