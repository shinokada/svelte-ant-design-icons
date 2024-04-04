<script lang="ts">import { getContext } from "svelte";
const ctx = getContext("iconCtx") ?? {};
let {
  size = ctx.size || "24",
  role = ctx.role || "img",
  color = ctx.color || "currentColor",
  ariaLabel = "build twotone,",
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
	<path fill="#D9D9D9" d="M144 546h200v200H144zm268-268h200v200H412z" />
	<path
		d="M916 210H376c-17.7 0-32 14.3-32 32v236H108c-17.7 0-32 14.3-32 32v272c0 17.7 14.3 32 32 32h540c17.7 0 32-14.3 32-32V546h236c17.7 0 32-14.3 32-32V242c0-17.7-14.3-32-32-32zM344 746H144V546h200v200zm268 0H412V546h200v200zm0-268H412V278h200v200zm268 0H680V278h200v200z"
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
