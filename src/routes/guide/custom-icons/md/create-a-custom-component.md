<script lang="ts">
  import type { ComponentType } from 'svelte';
  const config = {
    size: 30,
    color: '#FF5733'
  };
  import { Icon } from 'svelte-ant-design-icons';
  export let icon: ComponentType;
</script>

<Icon {...config} {icon} />