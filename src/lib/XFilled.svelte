<script lang="ts">
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
  interface Props extends BaseProps {
    title?: TitleType;
    desc?: DescType;
    ariaLabel?: string;
  }

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    withEvents = ctx.withEvents || false,
    title,
    desc,
    class: classname,
    ariaLabel = 'x filled',
    onclick,
    onkeydown,
    onkeyup,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
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
    {onclick}
    {onkeydown}
    {onkeyup}
  >
    {#if title?.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1" transform="translate(112 112)"
      ><path
        fill="#000"
        d="M711.111 800H88.89C39.8 800 0 760.2 0 711.111V88.89C0 39.8 39.8 0 88.889 0H711.11C760.2 0 800 39.8 800 88.889V711.11C800 760.2 760.2 800 711.111 800"
      /><path
        fill="#FFF"
        fill-rule="nonzero"
        d="M628 623H484.942L174 179h143.058zm-126.012-37.651h56.96L300.013 216.65h-56.96z"
      /><path
        fill="#FFF"
        fill-rule="nonzero"
        d="M219.296885 623 379 437.732409 358.114212 410 174 623z"
      /><path
        fill="#FFF"
        fill-rule="nonzero"
        d="M409 348.387347 429.212986 377 603 177 558.330417 177z"
      /></g
    >
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
    {#if title?.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1" transform="translate(112 112)"
      ><path
        fill="#000"
        d="M711.111 800H88.89C39.8 800 0 760.2 0 711.111V88.89C0 39.8 39.8 0 88.889 0H711.11C760.2 0 800 39.8 800 88.889V711.11C800 760.2 760.2 800 711.111 800"
      /><path
        fill="#FFF"
        fill-rule="nonzero"
        d="M628 623H484.942L174 179h143.058zm-126.012-37.651h56.96L300.013 216.65h-56.96z"
      /><path
        fill="#FFF"
        fill-rule="nonzero"
        d="M219.296885 623 379 437.732409 358.114212 410 174 623z"
      /><path
        fill="#FFF"
        fill-rule="nonzero"
        d="M409 348.387347 429.212986 377 603 177 558.330417 177z"
      /></g
    >
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ant-design-icons.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop withEvents = ctx.withEvents || false
@prop title
@prop desc
@prop class: classname
@prop ariaLabel = 'x filled'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
