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
    ariaLabel =  "docker outlined" , 
    onclick, 
    onkeydown, 
    onkeyup,
    ...restProps 
  }: Props = $props();

  let ariaDescribedby = `${title.id || ''} ${desc.id || ''}`;
  const hasDescription = $derived(!!(title.id || desc.id));
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
      <path d="M491.877 286.236h-92.612v-82.784h92.612zm0-286.236h-92.612v85.59h92.612zm109.45 203.452h-92.612v82.784h92.612zm-218.9-101.024h-92.612v84.187h92.612zm109.45 0h-92.612v84.187h92.612zm388.688 140.311c-19.645-14.03-67.354-18.24-102.434-11.225-4.21-33.674-23.855-63.14-57.532-89.8l-19.645-12.627-12.628 19.644c-25.258 39.287-32.274 103.83-5.613 145.924-12.63 7.015-36.484 15.434-67.354 15.434H3.56c-12.629 71.56 8.42 164.165 61.741 227.305C117.221 599.131 195.8 630 296.832 630c220.302 0 384.478-101.024 460.25-286.236 29.468 0 95.419 0 127.692-63.14 1.404-2.807 9.823-18.24 11.226-23.853zm-717.038-39.287H70.915v82.784h92.612zm109.45 0h-92.612v82.784h92.612zm109.45 0h-92.612v82.784h92.612zm-109.45-101.024h-92.612v84.187h92.612z" transform="translate(64 202)"/>
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
      <path d="M491.877 286.236h-92.612v-82.784h92.612zm0-286.236h-92.612v85.59h92.612zm109.45 203.452h-92.612v82.784h92.612zm-218.9-101.024h-92.612v84.187h92.612zm109.45 0h-92.612v84.187h92.612zm388.688 140.311c-19.645-14.03-67.354-18.24-102.434-11.225-4.21-33.674-23.855-63.14-57.532-89.8l-19.645-12.627-12.628 19.644c-25.258 39.287-32.274 103.83-5.613 145.924-12.63 7.015-36.484 15.434-67.354 15.434H3.56c-12.629 71.56 8.42 164.165 61.741 227.305C117.221 599.131 195.8 630 296.832 630c220.302 0 384.478-101.024 460.25-286.236 29.468 0 95.419 0 127.692-63.14 1.404-2.807 9.823-18.24 11.226-23.853zm-717.038-39.287H70.915v82.784h92.612zm109.45 0h-92.612v82.784h92.612zm109.45 0h-92.612v82.784h92.612zm-109.45-101.024h-92.612v84.187h92.612z" transform="translate(64 202)"/>
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ant-design-icons.codewithshin.com/)
## Props
@props: 
-->
