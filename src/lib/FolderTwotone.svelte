<script>
  export let size = '24';
  export let strokeColor = '#333';
  export let insideColor = '#E6E6E6';
  export let ariaLabel = 'folder';
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
    d="M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"
  />
  <path fill={insideColor} d="M372.5 256H184v512h656V370.4H492.1z" />
</svg>
