<script>
  import { setContext } from 'svelte';
  import { AccountBookFilled } from 'svelte-ant-design-icons';
  const iconCtx = {
    size: '50'
  };
  setContext('iconCtx', iconCtx);
</script>

<AccountBookFilled color="#ff4488" />