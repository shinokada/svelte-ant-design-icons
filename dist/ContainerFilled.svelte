<script lang="ts">import { getContext } from "svelte";
const ctx = getContext("iconCtx") ?? {};
let {
  size = ctx.size || "24",
  role = ctx.role || "img",
  color = ctx.color || "currentColor",
  ariaLabel = "container filled,",
  class: classname,
  title = {},
  desc = {},
  ...restProps
} = $props();
const ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
let hasDescription = $state(false);
$effect(() => {
  if (title.id || desc.id) {
    hasDescription = true;
  } else {
    hasDescription = false;
  }
});
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{...restProps}
	{role}
	width={size}
	height={size}
	fill={color}
	class={classname}
	aria-label={ariaLabel}
	viewBox="0 0 1024 1024"
>
	{#if title.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M832 64H192c-17.7 0-32 14.3-32 32v529c0-.6.4-1 1-1h219.3l5.2 24.7C397.6 708.5 450.8 752 512 752s114.4-43.5 126.4-103.3l5.2-24.7H863c.6 0 1 .4 1 1V96c0-17.7-14.3-32-32-32zM712 493c0 4.4-3.6 8-8 8H320c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h384c4.4 0 8 3.6 8 8v48zm0-160c0 4.4-3.6 8-8 8H320c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h384c4.4 0 8 3.6 8 8v48zm151 354H694.1c-11.6 32.8-32 62.3-59.1 84.7-34.5 28.6-78.2 44.3-123 44.3s-88.5-15.8-123-44.3a194.02 194.02 0 0 1-59.1-84.7H161c-.6 0-1-.4-1-1v242c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V686c0 .6-.4 1-1 1z"
	/>
</svg>

<!--
@component
[Go to docs](https://svelte-ant-design-icons.codewithshin.com/)
## Props
@props: size?: string;
@props:role?: string;
@props:color?: string;
@props:ariaLabel?: string;
@props:class?: string;
@props:title: TitleType;
@props:desc: DescType;
-->
