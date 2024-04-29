<script lang='ts'>
  import { getContext } from 'svelte';
  type TitleType = {
    id?: string;
    title?: string;
  };
  type DescType = {
    id?: string;
    desc?: string;
  };
  interface BaseProps {
    size?: string;
    role?: string;
    color?: string;
    withEvents?: boolean;
    onclick?: (event: MouseEvent) => void;
    onkeydown?: (event: KeyboardEvent) => void;
    onkeyup?: (event: KeyboardEvent) => void;
    class?: string;
  }
  interface CtxType extends BaseProps {}
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props extends BaseProps{
    title?: TitleType;
    desc?: DescType;
    ariaLabel?: string;
  }

  let { 
    size = ctx.size || '24', 
    role = ctx.role || 'img', 
    color = ctx.color || 'currentColor', 
    withEvents = ctx.withEvents || false, 
    title = {}, 
    desc = {}, 
    class: classname, 
    ariaLabel =  "moon outlined" , 
    onclick, 
    onkeydown, 
    onkeyup,
    ...restProps 
  }: Props = $props();

  let ariaDescribedby = `${title.id || ''} ${desc.id || ''}`;
  let hasDescription = $state(false);

  function updateHasDescription() {
    // Double negation converts truthy values to true, falsy to false
    hasDescription = !!(title.id || desc.id); 
  }
  updateHasDescription();

  $effect(() => {
    updateHasDescription();
  })
</script>

{#if withEvents}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
    fill={color}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 1024 1024"
    onclick={onclick}
    onkeydown={onkeydown}
    onkeyup={onkeyup}
  >
    {#if title.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <path d="M489.493 111.658c30.658-1.792 45.991 36.44 22.59 56.329C457.831 214.095 426 281.423 426 354c0 134.757 109.243 244 244 244 72.577 0 139.905-31.832 186.014-86.084 19.868-23.377 58.064-8.102 56.332 22.53C900.4 745.823 725.141 912 512.5 912 291.31 912 112 732.69 112 511.5c0-211.39 164.287-386.024 374.198-399.649l.206-.013zm-81.143 79.75-4.112 1.362C271.1 237.943 176 364.092 176 511.5 176 697.344 326.656 848 512.5 848c148.28 0 274.938-96.192 319.453-230.41l.625-1.934-.11.071c-47.18 29.331-102.126 45.755-159.723 46.26L670 662c-170.104 0-308-137.896-308-308 0-58.595 16.476-114.54 46.273-162.467z"/>
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
    fill={color}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 1024 1024"
  >
    {#if title.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <path d="M489.493 111.658c30.658-1.792 45.991 36.44 22.59 56.329C457.831 214.095 426 281.423 426 354c0 134.757 109.243 244 244 244 72.577 0 139.905-31.832 186.014-86.084 19.868-23.377 58.064-8.102 56.332 22.53C900.4 745.823 725.141 912 512.5 912 291.31 912 112 732.69 112 511.5c0-211.39 164.287-386.024 374.198-399.649l.206-.013zm-81.143 79.75-4.112 1.362C271.1 237.943 176 364.092 176 511.5 176 697.344 326.656 848 512.5 848c148.28 0 274.938-96.192 319.453-230.41l.625-1.934-.11.071c-47.18 29.331-102.126 45.755-159.723 46.26L670 662c-170.104 0-308-137.896-308-308 0-58.595 16.476-114.54 46.273-162.467z"/>
  </svg>
{/if}
