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
    ariaLabel =  "java script outlined" , 
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
      <g><path d="M353 16H192.545v425.615c0 105.313-36.166 134.718-99.104 134.718-29.494 0-56.055-5.05-76.718-12.144L0 688.784C29.484 698.924 74.73 705 110.126 705 254.631 705 353 637.16 353 442.658zM702.49 0C547.26 0 449 88.126 449 204.609c0 100.313 75.67 163.12 185.696 203.629 79.577 28.358 111.03 53.695 111.03 95.218 0 45.579-36.358 74.96-105.13 74.96-63.868 0-121.849-21.311-161.146-42.573v-.042L449 662.427C486.361 683.735 556.12 705 631.741 705 813.52 705 898 607.753 898 493.293c0-97.243-54.036-160.035-170.937-204.627-86.47-34.432-122.813-53.669-122.813-97.227 0-34.45 31.446-65.834 96.3-65.834 63.834 0 107.728 21.445 133.307 34.632L872.193 32.05C832.103 14.461 778.109 0 702.49 0" transform="translate(63 160)"/></g>
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
      <g><path d="M353 16H192.545v425.615c0 105.313-36.166 134.718-99.104 134.718-29.494 0-56.055-5.05-76.718-12.144L0 688.784C29.484 698.924 74.73 705 110.126 705 254.631 705 353 637.16 353 442.658zM702.49 0C547.26 0 449 88.126 449 204.609c0 100.313 75.67 163.12 185.696 203.629 79.577 28.358 111.03 53.695 111.03 95.218 0 45.579-36.358 74.96-105.13 74.96-63.868 0-121.849-21.311-161.146-42.573v-.042L449 662.427C486.361 683.735 556.12 705 631.741 705 813.52 705 898 607.753 898 493.293c0-97.243-54.036-160.035-170.937-204.627-86.47-34.432-122.813-53.669-122.813-97.227 0-34.45 31.446-65.834 96.3-65.834 63.834 0 107.728 21.445 133.307 34.632L872.193 32.05C832.103 14.461 778.109 0 702.49 0" transform="translate(63 160)"/></g>
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ant-design-icons.codewithshin.com/)
## Props
@props: 
-->
