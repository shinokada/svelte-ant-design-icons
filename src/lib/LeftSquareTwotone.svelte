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
    class?: string;
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
    class: classname,
    ariaLabel = 'left square twotone',
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
  class={classname}
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
    d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"
  />
  <path
    fill="#E6E6E6"
    d="M184 840h656V184H184v656zm181.3-334.5l246-178c5.3-3.8 12.7 0 12.7 6.5v46.9c0 10.3-4.9 19.9-13.2 25.9L465.4 512l145.4 105.2c8.3 6 13.2 15.7 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.4l-246-178a7.95 7.95 0 0 1 0-12.9z"
  />
  <path
    fill="#333"
    d="M365.3 518.4l246 178c5.3 3.9 12.7.1 12.7-6.4v-46.9c0-10.2-4.9-19.9-13.2-25.9L465.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5l-246 178a7.95 7.95 0 0 0 0 12.9z"
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
@prop class: classname
@prop ariaLabel = 'left square twotone'
@prop ...restProps
-->
