<script lang="ts">
  import type { Component } from 'svelte';
  import { IconPage, filterIconsByKeyword } from 'runes-webkit';
  import * as icons from '$lib';
  const keywordsToInclude = 'Filled';
  const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
</script>

<IconPage
  icons={keyIcons}
  title="Filled Icons - Svelte Ant Design Icons"
  div1Class="lg:grid-cols-3"
/>
