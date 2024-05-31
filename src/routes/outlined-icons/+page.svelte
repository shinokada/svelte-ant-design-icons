<script lang="ts">
  import type { Component } from 'svelte';
  import { IconPage, filterIconsByKeyword } from 'runes-webkit';
  import * as icons from '$lib';

  const keywordsToInclude = 'Outlined';
  const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
</script>

<IconPage
  icons={keyIcons as Component}
  title="Outlined Icons - Svelte Ant Design Icons"
  i_p_tabitem_div_1="lg:grid-cols-3"
/>
