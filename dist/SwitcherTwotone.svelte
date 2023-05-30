<script>
  export let size = '24';
  export let strokeColor = 'currentColor';
  export let insideColor = '#D9D9D9';
  export let ariaLabel = 'switcher';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...$$restProps}
  width={size}
  height={size}
  fill={strokeColor}
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
  <path fill={insideColor} d="M184 840h528V312H184v528zm116-290h296v64H300v-64z" />
  <path
    d="M880 112H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h576v576c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32z"
  />
  <path
    d="M752 240H144c-17.7 0-32 14.3-32 32v608c0 17.7 14.3 32 32 32h608c17.7 0 32-14.3 32-32V272c0-17.7-14.3-32-32-32zm-40 600H184V312h528v528z"
  />
  <path d="M300 550h296v64H300z" />
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
