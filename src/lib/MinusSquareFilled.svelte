<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'minus square';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...$$restProps}
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
    d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM704 536c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"
  />
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
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
-->
