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
  div1Class="lg:grid-cols-3"
/>
