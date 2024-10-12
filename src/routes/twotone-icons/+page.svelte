<script lang="ts">
  import { IconPage, filterIconsByKeyword } from 'runes-webkit';
  import * as icons from '$lib';
  const keywordsToInclude = 'Twotone';
  const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
</script>

<IconPage
  minSize="16"
  defaultSize="24"
  maxSize="36"
  tab1Class="md:grid-cols-2 lg:grid-cols-3"
  icons={keyIcons}
  threeTabs={false}
  title="Twotone Icons - Svelte Ant Design Icons"
/>
