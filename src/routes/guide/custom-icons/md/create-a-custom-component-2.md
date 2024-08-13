<script lang="ts">
  import { Icon as AntIcon } from 'svelte-ant-design-icons';
  import { type Component } from 'svelte';
  const config: { size: AntIcon['Props']['size'], color: string, ariaLabel: string } = {
    size: "30",
    color: '#88FF33',
    ariaLabel: "my custom icon",
  };
  interface Props {
    Icon: Component
  }

  let { Icon }: Props = $props();
</script>
<AntIcon {...config} {Icon} />
