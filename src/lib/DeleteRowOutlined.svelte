<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    title,
    desc,
    ariaLabel = 'delete row outlined',
    ...restProps
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  aria-label={ariaLabel}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 1024 1024"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M819.8 512l102.4-122.9c2.8-3.4 2.4-8.4-1-11.3-1.4-1.2-3.2-1.9-5.1-1.9h-54.7c-2.4 0-4.6 1.1-6.1 2.9L782 466.7l-73.1-87.8c-1.5-1.8-3.8-2.9-6.1-2.9H648c-1.9 0-3.7 0.7-5.1 1.9-3.4 2.8-3.9 7.9-1 11.3L744.2 512 641.8 634.9c-2.8 3.4-2.4 8.4 1 11.3 1.4 1.2 3.2 1.9 5.1 1.9h54.7c2.4 0 4.6-1.1 6.1-2.9l73.1-87.8 73.1 87.8c1.5 1.8 3.8 2.9 6.1 2.9h55c1.9 0 3.7-0.7 5.1-1.9 3.4-2.8 3.9-7.9 1-11.3L819.8 512zM536 464H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h416c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8zM452 668h-60c-3.3 0-6 2.7-6 6v166H136c-3.3 0-6 2.7-6 6v60c0 3.3 2.7 6 6 6h292c16.6 0 30-13.4 30-30V674c0-3.3-2.7-6-6-6zM136 184h250v166c0 3.3 2.7 6 6 6h60c3.3 0 6-2.7 6-6V142c0-16.6-13.4-30-30-30H136c-3.3 0-6 2.7-6 6v60c0 3.3 2.7 6 6 6z"
  ></path>
</svg>

<!--
@component
[Go to docs](https://svelte-ant-design-icons.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop title
@prop desc
@prop ariaLabel = 'delete row outlined'
@prop ...restProps
-->
