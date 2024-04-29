<script>
  import { setContext } from 'svelte';

  const iconCtx = {
    size: '100', // Icon size in pixels
    color: '#ff4488', // Icon color in hexadecimal or CSS color name
  };
  setContext('iconCtx', iconCtx);
</script>