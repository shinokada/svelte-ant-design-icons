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
    ariaLabel =  "alert filled" , 
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
           <path d="M512 244c176.18 0 319 142.82 319 319v233a32 32 0 0 1-32 32H225a32 32 0 0 1-32-32V563c0-176.18 142.82-319 319-319zM484 68h56a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V76a8 8 0 0 1 8-8zM177.25 191.66a8 8 0 0 1 11.32 0l67.88 67.88a8 8 0 0 1 0 11.31l-39.6 39.6a8 8 0 0 1-11.31 0l-67.88-67.88a8 8 0 0 1 0-11.31l39.6-39.6zm669.6 0l39.6 39.6a8 8 0 0 1 0 11.3l-67.88 67.9a8 8 0 0 1-11.32 0l-39.6-39.6a8 8 0 0 1 0-11.32l67.89-67.88a8 8 0 0 1 11.31 0zM192 892h640a32 32 0 0 1 32 32v24a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8v-24a32 32 0 0 1 32-32zm148-317v253h64V575h-64z"/>  
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
           <path d="M512 244c176.18 0 319 142.82 319 319v233a32 32 0 0 1-32 32H225a32 32 0 0 1-32-32V563c0-176.18 142.82-319 319-319zM484 68h56a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V76a8 8 0 0 1 8-8zM177.25 191.66a8 8 0 0 1 11.32 0l67.88 67.88a8 8 0 0 1 0 11.31l-39.6 39.6a8 8 0 0 1-11.31 0l-67.88-67.88a8 8 0 0 1 0-11.31l39.6-39.6zm669.6 0l39.6 39.6a8 8 0 0 1 0 11.3l-67.88 67.9a8 8 0 0 1-11.32 0l-39.6-39.6a8 8 0 0 1 0-11.32l67.89-67.88a8 8 0 0 1 11.31 0zM192 892h640a32 32 0 0 1 32 32v24a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8v-24a32 32 0 0 1 32-32zm148-317v253h64V575h-64z"/>  
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ant-design-icons.codewithshin.com/)
## Props
@props: 
-->
