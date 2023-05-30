<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'code';
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
    d="M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 0 0 308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 0 0-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"
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
