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
    ariaLabel = 'vertical left outlined',
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
    d="M762 164h-64c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V172c0-4.4-3.6-8-8-8zm-508 0v72.4c0 9.5 4.2 18.4 11.4 24.5L564.6 512 265.4 763.1c-7.2 6.1-11.4 15-11.4 24.5V860c0 6.8 7.9 10.5 13.1 6.1L689 512 267.1 157.9A7.95 7.95 0 0 0 254 164z"
  />
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
@prop ariaLabel = 'vertical left outlined'
@prop ...restProps
-->
