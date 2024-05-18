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
    ariaLabel = 'node collapse outlined',
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
      d="M952 612c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H298c-14.2-35.2-48.7-60-89-60-53 0-96 43-96 96s43 96 96 96c40.3 0 74.8-24.8 89-60h150.3v152c0 55.2 44.8 100 100 100H952c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H548.3c-15.5 0-28-12.5-28-28V612H952zM451.7 313.7l172.5 136.2c6.3 5.1 15.8 0.5 15.8-7.7V344h264c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H640v-98.2c0-8.1-9.4-12.8-15.8-7.7L451.7 298.3c-4.9 3.9-4.9 11.5 0 15.4z"
    ></path>
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
      d="M952 612c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H298c-14.2-35.2-48.7-60-89-60-53 0-96 43-96 96s43 96 96 96c40.3 0 74.8-24.8 89-60h150.3v152c0 55.2 44.8 100 100 100H952c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H548.3c-15.5 0-28-12.5-28-28V612H952zM451.7 313.7l172.5 136.2c6.3 5.1 15.8 0.5 15.8-7.7V344h264c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H640v-98.2c0-8.1-9.4-12.8-15.8-7.7L451.7 298.3c-4.9 3.9-4.9 11.5 0 15.4z"
    ></path>
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
@prop ariaLabel = 'node collapse outlined'
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
