<script>
  export let size = '24';
  export let role = 'img';
  export let strokeColor = '#333';
  export let insideColor = '#E6E6E6';
  export let ariaLabel = 'tablet';
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
    fill={strokeColor}
    d="M800 64H224c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm-8 824H232V136h560v752z"
  />
  <path
    fill={insideColor}
    d="M232 888h560V136H232v752zm280-144c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z"
  />
  <path fill={strokeColor} d="M472 784a40 40 0 1 0 80 0 40 40 0 1 0-80 0z" />
</svg>

<!--
@component
[Go to docs](https://svelte-ant-design-icons.vercel.app/)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let strokeColor = '#333';
@prop export let insideColor = '#E6E6E6';
@prop export let ariaLabel = 'tablet';
-->
