<script lang="ts">
  import type { ComponentType } from 'svelte';
  import { IconPage, filterIconsByKeyword } from 'runes-webkit'
  import * as icons from '$lib'
  const keywordsToInclude = 'Filled';
  const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
</script>

<IconPage icons={keyIcons as ComponentType} title="Filled Icons: Svelte Ant Design Icons" i_p_tabitem_div_1='lg:grid-cols-3'/>