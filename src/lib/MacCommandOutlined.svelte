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
    ariaLabel =  "mac command outlined" , 
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
        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-40 728H184V184h656v656z" ></path><path d="M370.8 554.4c-54.6 0-98.8 44.2-98.8 98.8s44.2 98.8 98.8 98.8 98.8-44.2 98.8-98.8v-42.4h84.7v42.4c0 54.6 44.2 98.8 98.8 98.8s98.8-44.2 98.8-98.8-44.2-98.8-98.8-98.8h-42.4v-84.7h42.4c54.6 0 98.8-44.2 98.8-98.8 0-54.6-44.2-98.8-98.8-98.8s-98.8 44.2-98.8 98.8v42.4h-84.7v-42.4c0-54.6-44.2-98.8-98.8-98.8S272 316.2 272 370.8s44.2 98.8 98.8 98.8h42.4v84.7h-42.4z m42.4 98.8c0 23.4-19 42.4-42.4 42.4s-42.4-19-42.4-42.4 19-42.4 42.4-42.4h42.4v42.4z m197.6-282.4c0-23.4 19-42.4 42.4-42.4s42.4 19 42.4 42.4-19 42.4-42.4 42.4h-42.4v-42.4z m0 240h42.4c23.4 0 42.4 19 42.4 42.4s-19 42.4-42.4 42.4-42.4-19-42.4-42.4v-42.4zM469.6 469.6h84.7v84.7h-84.7v-84.7z m-98.8-56.4c-23.4 0-42.4-19-42.4-42.4s19-42.4 42.4-42.4 42.4 19 42.4 42.4v42.4h-42.4z" ></path>
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
        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-40 728H184V184h656v656z" ></path><path d="M370.8 554.4c-54.6 0-98.8 44.2-98.8 98.8s44.2 98.8 98.8 98.8 98.8-44.2 98.8-98.8v-42.4h84.7v42.4c0 54.6 44.2 98.8 98.8 98.8s98.8-44.2 98.8-98.8-44.2-98.8-98.8-98.8h-42.4v-84.7h42.4c54.6 0 98.8-44.2 98.8-98.8 0-54.6-44.2-98.8-98.8-98.8s-98.8 44.2-98.8 98.8v42.4h-84.7v-42.4c0-54.6-44.2-98.8-98.8-98.8S272 316.2 272 370.8s44.2 98.8 98.8 98.8h42.4v84.7h-42.4z m42.4 98.8c0 23.4-19 42.4-42.4 42.4s-42.4-19-42.4-42.4 19-42.4 42.4-42.4h42.4v42.4z m197.6-282.4c0-23.4 19-42.4 42.4-42.4s42.4 19 42.4 42.4-19 42.4-42.4 42.4h-42.4v-42.4z m0 240h42.4c23.4 0 42.4 19 42.4 42.4s-19 42.4-42.4 42.4-42.4-19-42.4-42.4v-42.4zM469.6 469.6h84.7v84.7h-84.7v-84.7z m-98.8-56.4c-23.4 0-42.4-19-42.4-42.4s19-42.4 42.4-42.4 42.4 19 42.4 42.4v42.4h-42.4z" ></path>
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ant-design-icons.codewithshin.com/)
## Props
@props: 
-->
