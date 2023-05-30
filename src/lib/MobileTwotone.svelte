<script>
  export let size = '24';
  export let strokeColor = '#333';
  export let insideColor = '#E6E6E6';
  export let ariaLabel = 'mobile';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...$$restProps}
  width={size}
  height={size}
  class={$$props.class}
  aria-label={ariaLabel}
  on:click
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  on:blur
  on:focus
  viewBox="0 0 1024 1024"
>
  <path
    fill={strokeColor}
    d="M744 64H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm-8 824H288V136h448v752z"
  />
  <path
    fill={insideColor}
    d="M288 888h448V136H288v752zm224-142c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z"
  />
  <path fill={strokeColor} d="M472 786a40 40 0 1 0 80 0 40 40 0 1 0-80 0z" />
</svg>

<!--
@component
[Go to Document](https://svelte-ant-design-icons.codewithshin.com/)
## Props
@prop size = '24';
@prop color = 'currentColor';
@prop ariaLabel = 'icon name';
## Event
- on:click
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
- on:blur
- on:focus
-->
