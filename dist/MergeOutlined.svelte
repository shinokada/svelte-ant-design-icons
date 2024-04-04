<script lang="ts">import { getContext } from "svelte";
const ctx = getContext("iconCtx") ?? {};
let {
  size = ctx.size || "24",
  role = ctx.role || "img",
  color = ctx.color || "currentColor",
  ariaLabel = "merge outlined,",
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
	<g transform="matrix(1 0 0 -1 172 924)"
		><path d="M76 172H148V660H76z" /><path
			d="M568 61c61.856 0 112 50.144 112 112 0 48.327-30.608 89.505-73.496 105.206l-.018 113.037c-.003 21.932-14.1 41.379-34.944 48.204L136.643 581.85l-22.405-68.425 420.25-137.608.014-95.914C489.009 265.664 456 223.187 456 173c0-61.856 50.144-112 112-112M112 0c61.856 0 112 50.144 112 112s-50.144 112-112 112S0 173.856 0 112 50.144 0 112 0m456 125c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48M112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48m0 536c61.856 0 112 50.144 112 112s-50.144 112-112 112S0 773.856 0 712s50.144-112 112-112m0 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48"
		/></g
	>
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
