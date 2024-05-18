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
    ariaLabel = 'shake outlined',
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
    <path
      d="M324 666a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm616.7-309.6L667.6 83.2C655.2 70.9 638.7 64 621.1 64s-34.1 6.8-46.5 19.2L83.3 574.5a65.85 65.85 0 0 0 0 93.1l273.2 273.2c12.3 12.3 28.9 19.2 46.5 19.2s34.1-6.8 46.5-19.2l491.3-491.3c25.6-25.7 25.6-67.5-.1-93.1zM403 880.1L143.9 621l477.2-477.2 259 259.2L403 880.1zM152.8 373.7a7.9 7.9 0 0 0 11.2 0L373.7 164a7.9 7.9 0 0 0 0-11.2l-38.4-38.4a7.9 7.9 0 0 0-11.2 0L114.3 323.9a7.9 7.9 0 0 0 0 11.2l38.5 38.6zm718.6 276.6a7.9 7.9 0 0 0-11.2 0L650.3 860.1a7.9 7.9 0 0 0 0 11.2l38.4 38.4a7.9 7.9 0 0 0 11.2 0L909.7 700a7.9 7.9 0 0 0 0-11.2l-38.3-38.5z"
    />
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
    <path
      d="M324 666a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm616.7-309.6L667.6 83.2C655.2 70.9 638.7 64 621.1 64s-34.1 6.8-46.5 19.2L83.3 574.5a65.85 65.85 0 0 0 0 93.1l273.2 273.2c12.3 12.3 28.9 19.2 46.5 19.2s34.1-6.8 46.5-19.2l491.3-491.3c25.6-25.7 25.6-67.5-.1-93.1zM403 880.1L143.9 621l477.2-477.2 259 259.2L403 880.1zM152.8 373.7a7.9 7.9 0 0 0 11.2 0L373.7 164a7.9 7.9 0 0 0 0-11.2l-38.4-38.4a7.9 7.9 0 0 0-11.2 0L114.3 323.9a7.9 7.9 0 0 0 0 11.2l38.5 38.6zm718.6 276.6a7.9 7.9 0 0 0-11.2 0L650.3 860.1a7.9 7.9 0 0 0 0 11.2l38.4 38.4a7.9 7.9 0 0 0 11.2 0L909.7 700a7.9 7.9 0 0 0 0-11.2l-38.3-38.5z"
    />
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
@prop ariaLabel = 'shake outlined'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
