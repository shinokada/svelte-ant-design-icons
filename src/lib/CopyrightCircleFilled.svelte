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
    ariaLabel =  "copyright circle filled" , 
    onclick, 
    onkeydown, 
    onkeyup,
    ...restProps 
  }: Props = $props();

  let ariaDescribedby = `${title.id || ''} ${desc.id || ''}`;
  const hasDescription = $derived(!!(title.id || desc.id));
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
           <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm5.4 670c-110 0-173.4-73.2-173.4-194.9v-52.3C344 364.2 407.4 290 517.3 290c94.3 0 162.7 60.7 162.7 147.4 0 2.6-2.1 4.7-4.7 4.7h-56.7c-4.2 0-7.6-3.2-8-7.4-4-49.5-40-83.4-93-83.4-65.3 0-102.1 48.5-102.1 135.5v52.6c0 85.7 36.9 133.6 102.1 133.6 52.8 0 88.7-31.7 93-77.8.4-4.1 3.8-7.3 8-7.3h56.8c2.6 0 4.7 2.1 4.7 4.7 0 82.6-68.7 141.4-162.7 141.4z"/>  
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
           <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm5.4 670c-110 0-173.4-73.2-173.4-194.9v-52.3C344 364.2 407.4 290 517.3 290c94.3 0 162.7 60.7 162.7 147.4 0 2.6-2.1 4.7-4.7 4.7h-56.7c-4.2 0-7.6-3.2-8-7.4-4-49.5-40-83.4-93-83.4-65.3 0-102.1 48.5-102.1 135.5v52.6c0 85.7 36.9 133.6 102.1 133.6 52.8 0 88.7-31.7 93-77.8.4-4.1 3.8-7.3 8-7.3h56.8c2.6 0 4.7 2.1 4.7 4.7 0 82.6-68.7 141.4-162.7 141.4z"/>  
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ant-design-icons.codewithshin.com/)
## Props
@props: 
-->
