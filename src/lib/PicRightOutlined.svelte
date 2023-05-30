<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'pic right';
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
    d="M952 792H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-632H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-24 500c8.8 0 16-7.2 16-16V380c0-8.8-7.2-16-16-16H416c-8.8 0-16 7.2-16 16v264c0 8.8 7.2 16 16 16h512zM472 436h400v152H472V436zM80 646c0 4.4 3.6 8 8 8h224c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H88c-4.4 0-8 3.6-8 8v56zm8-204h224c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H88c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z"
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
