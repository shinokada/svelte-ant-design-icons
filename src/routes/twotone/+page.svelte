<script>
  import Label from 'flowbite-svelte/Label.svelte';
  import Range from 'flowbite-svelte/Range.svelte';
  import TableSearch from 'flowbite-svelte/TableSearch.svelte';
  import IconTwotone from '$lib/IconTwotone.svelte';
  import icons from '$lib/icons.js';
  import { filterIconsByKeyword } from '../utils.js'

  const twotoneIcons = filterIconsByKeyword(icons, '-twotone');
  
  const contentClass = 'rounded-lg dark:bg-sky-950 mt-4';
  let searchTerm = '';

  $: filteredIconNames = Object.keys(twotoneIcons).filter(name => {
    return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  });
  let size="24"
</script>
<h1>Svelte Ant Design Icons: Twotone</h1>
<TableSearch
  placeholder="Search by icon name"
  hoverable={true}
  bind:inputValue={searchTerm}
  divClass='relative overflow-x-auto'
>
<div class="xl:w-1/3 lg:w-2/5 md:w-1/2 sm:w-3/4 w-full p-4">
  <Label class="text-lg py-4 ">Icon size: {size}</Label>
  <Range id="range1" min="20" max="50" bind:value={size} />
</div>

<span slot="title" class="text-lg">Mono</span>
<div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white mt-8">
  {#each filteredIconNames as iconName, i}
  <div class="flex gap-4 items-center text-lg">
    <IconTwotone name={iconName} bind:width={size} bind:height={size} class="shrink-0"/>
    {iconName}
  </div>
  {/each}
</div>

</TableSearch>
