<script>
  import { AccountBookFilled } from 'svelte-ant-design-icons';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new AccountBookFilled({ target: document.body, props });
  });
</script>
