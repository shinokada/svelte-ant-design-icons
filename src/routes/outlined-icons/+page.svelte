<script lang="ts">
  import { IconPage, filterIconsByKeyword } from 'runes-webkit';
  import * as icons from '$lib';

  const keywordsToInclude = 'Outlined';
  const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
</script>

<IconPage
  icons={keyIcons}
  title="Outlined Icons - Svelte Ant Design Icons"
  tab1Class="md:grid-cols-2 lg:grid-cols-3"
/>
