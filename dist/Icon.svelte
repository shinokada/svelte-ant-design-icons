<script lang="ts">let { icon, size = 24, role = "img", ariaLabel = "Icon", class: classname, ...restProps } = $props();
</script>

<svelte:component 
  {...restProps} 
  {role}
  this={icon} 
  {size} 
  class={classname} 
  aria-label={ariaLabel}
/>