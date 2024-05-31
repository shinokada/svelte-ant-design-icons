<script lang="ts">
  import type { Component } from 'svelte';
  import { IconPage, filterIconsByKeyword } from 'runes-webkit';
  import * as icons from '$lib';
  const keywordsToInclude = 'Twotone';
  const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
</script>

<IconPage
  minSize="16"
  defaultSize="24"
  maxSize="36"
  i_p_div_3="lg:grid-cols-3 md:grid-cols-2 "
  icons={keyIcons as Component}
  threeTabs={false}
  title="Twotone Icons - Svelte Ant Design Icons"
/>
