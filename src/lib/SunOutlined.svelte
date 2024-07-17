<script lang="ts">
  import { getContext } from 'svelte';
  import type { SVGAttributes } from 'svelte/elements';

  type TitleType = {
    id?: string;
    title?: string;
  };
  type DescType = {
    id?: string;
    desc?: string;
  };
  interface BaseProps extends SVGAttributes<SVGElement> {
    size?: string;
    role?: string;
    color?: string;
  }
  interface CtxType extends BaseProps {}
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props extends BaseProps {
    title?: TitleType;
    desc?: DescType;
    ariaLabel?: string;
  }

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    title,
    desc,
    ariaLabel = 'sun outlined',
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
    d="M548 818v126c0 8.837-7.163 16-16 16h-40c-8.837 0-16-7.163-16-16V818c15.845 1.643 27.845 2.464 36 2.464 8.155 0 20.155-.821 36-2.464m205.251-115.66 89.096 89.095c6.248 6.248 6.248 16.38 0 22.627l-28.285 28.285c-6.248 6.248-16.379 6.248-22.627 0L702.34 753.25c12.365-10.043 21.431-17.947 27.198-23.713 5.766-5.767 13.67-14.833 23.713-27.198m-482.502 0c10.043 12.365 17.947 21.431 23.713 27.198 5.767 5.766 14.833 13.67 27.198 23.713l-89.095 89.096c-6.248 6.248-16.38 6.248-22.627 0l-28.285-28.285c-6.248-6.248-6.248-16.379 0-22.627zM512 278c129.235 0 234 104.765 234 234S641.235 746 512 746 278 641.235 278 512s104.765-234 234-234m0 72c-89.47 0-162 72.53-162 162s72.53 162 162 162 162-72.53 162-162-72.53-162-162-162M206 476c-1.643 15.845-2.464 27.845-2.464 36 0 8.155.821 20.155 2.464 36H80c-8.837 0-16-7.163-16-16v-40c0-8.837 7.163-16 16-16zm738 0c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H818c1.643-15.845 2.464-27.845 2.464-36 0-8.155-.821-20.155-2.464-36ZM814.062 180.653l28.285 28.285c6.248 6.248 6.248 16.379 0 22.627L753.25 320.66c-10.043-12.365-17.947-21.431-23.713-27.198-5.767-5.766-14.833-13.67-27.198-23.713l89.095-89.096c6.248-6.248 16.38-6.248 22.627 0m-581.497 0 89.095 89.096c-12.365 10.043-21.431 17.947-27.198 23.713-5.766 5.767-13.67 14.833-23.713 27.198l-89.096-89.095c-6.248-6.248-6.248-16.38 0-22.627l28.285-28.285c6.248-6.248 16.379-6.248 22.627 0M532 64c8.837 0 16 7.163 16 16v126c-15.845-1.643-27.845-2.464-36-2.464-8.155 0-20.155.821-36 2.464V80c0-8.837 7.163-16 16-16z"
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
@prop ariaLabel = 'sun outlined'
@prop ...restProps
-->
