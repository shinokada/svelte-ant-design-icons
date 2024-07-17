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
    ariaLabel = 'yahoo filled',
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
    d="M937.3 231H824.7c-15.5 0-27.7 12.6-27.1 28.1l13.1 366h84.4l65.4-366.4c2.7-15.2-7.8-27.7-23.2-27.7zm-77.4 450.4h-14.1c-27.1 0-49.2 22.2-49.2 49.3v14.1c0 27.1 22.2 49.3 49.2 49.3h14.1c27.1 0 49.2-22.2 49.2-49.3v-14.1c0-27.1-22.2-49.3-49.2-49.3zM402.6 231C216.2 231 65 357 65 512.5S216.2 794 402.6 794s337.6-126 337.6-281.5S589.1 231 402.6 231zm225.2 225.2h-65.3L458.9 559.8v65.3h84.4v56.3H318.2v-56.3h84.4v-65.3L242.9 399.9h-37v-56.3h168.5v56.3h-37l93.4 93.5 28.1-28.1V400h168.8v56.2z"
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
@prop ariaLabel = 'yahoo filled'
@prop ...restProps
-->
