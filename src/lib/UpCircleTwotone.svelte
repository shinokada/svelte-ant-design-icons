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
    ariaLabel = 'up circle twotone',
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
    fill="#E6E6E6"
    d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm178 479h-46.9c-10.2 0-19.9-4.9-25.9-13.2L512 460.4 406.8 605.8c-6 8.3-15.6 13.2-25.9 13.2H334c-6.5 0-10.3-7.4-6.5-12.7l178-246c3.2-4.4 9.7-4.4 12.9 0l178 246c3.9 5.3.1 12.7-6.4 12.7z"
  />
  <path
    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
  />
  <path
    fill="#333"
    d="M518.4 360.3a7.95 7.95 0 0 0-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7h46.9c10.3 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.7 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.4-12.7l-178-246z"
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
@prop ariaLabel = 'up circle twotone'
@prop ...restProps
-->
