<script lang="ts">
  import type { ComponentType } from 'svelte';
  export let icon: ComponentType;
  export let size: number = 24;
  export let color: string = '';
  export let role: string = 'img';
  export let ariaLabel: string = 'Icon';
</script>

<svelte:component
  this={icon}
  {...$$restProps}
  {role}
  {size}
  {color}
  class={$$props.class}
  aria-label={ariaLabel}
/>
