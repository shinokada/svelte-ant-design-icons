<script lang='ts'>
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
  interface BaseProps extends SVGAttributes<SVGElement>{
    size?: string;
    role?: string;
    color?: string;
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
    title, 
    desc, 
    class: classname, 
    ariaLabel =  "bug twotone" , 
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
    <title id="{title.id}">{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id="{desc.id}">{desc.desc}</desc>
  {/if}
       <path d="M308 412v268c0 36.779 9.678 71.962 27.805 102.907a205.39 205.39 0 0 0 73.288 73.288C440.038 874.322 475.22 884 512 884c36.779 0 71.962-9.678 102.907-27.805a205.39 205.39 0 0 0 73.288-73.288C706.322 751.962 716 716.78 716 680V412H308zm484 172v96c0 6.503-.222 12.954-.658 19.346C859.931 728.636 908 796.705 908 876a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8c0-44.24-23.94-82.888-59.57-103.697a278.635 278.635 0 0 1-22.658 49.018 281.39 281.39 0 0 1-100.45 100.45C611.84 946.072 563.546 960 512 960s-99.84-13.929-141.321-38.228a281.39 281.39 0 0 1-100.45-100.45 278.635 278.635 0 0 1-22.658-49.019C211.94 793.113 188 831.76 188 876a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8c0-79.295 48.07-147.363 116.658-176.654A284.122 284.122 0 0 1 232 680v-96H84a8 8 0 0 1-8-8v-56a8 8 0 0 1 8-8h148V412c-76.768 0-139-62.232-139-139a8 8 0 0 1 8-8h60a8 8 0 0 1 8 8c0 34.794 28.206 63 63 63h560c34.794 0 63-28.206 63-63a8 8 0 0 1 8-8h60a8 8 0 0 1 8 8c0 76.768-62.232 139-139 139v100h148a8 8 0 0 1 8 8v56a8 8 0 0 1-8 8H792zM368 272a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8c0-40.039 8.779-76.746 25.9-108.068 17.235-31.526 42.506-56.797 74.032-74.031C427.254 72.779 463.962 64 504 64h16c40.039 0 76.746 8.779 108.068 25.9 31.526 17.235 56.797 42.506 74.031 74.032C719.221 195.254 728 231.962 728 272a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8c0-28.326-5.938-53.154-17.077-73.531-10.625-19.437-25.955-34.767-45.392-45.392C573.154 141.937 548.326 136 520 136h-16c-28.326 0-53.154 5.938-73.531 17.077-19.437 10.625-34.767 25.955-45.392 45.392C373.937 218.846 368 243.674 368 272z"/>   <path d="M308 412v268c0 36.779 9.678 71.962 27.805 102.907a205.39 205.39 0 0 0 73.288 73.288C440.038 874.322 475.22 884 512 884c36.779 0 71.962-9.678 102.907-27.805a205.39 205.39 0 0 0 73.288-73.288C706.322 751.962 716 716.78 716 680V412H308z" fill="#E6E6E6"/> 
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
@prop ariaLabel =  "bug twotone"
@prop ...restProps
-->
