<script lang="ts">import { getContext } from "svelte";
const ctx = getContext("iconCtx") ?? {};
let {
  size = ctx.size || "24",
  role = ctx.role || "img",
  color = ctx.color || "currentColor",
  ariaLabel = "google plus circle filled,",
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
		d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm36.5 558.8c-43.9 61.8-132.1 79.8-200.9 53.3-69-26.3-118-99.2-112.1-173.5 1.5-90.9 85.2-170.6 176.1-167.5 43.6-2 84.6 16.9 118 43.6-14.3 16.2-29 31.8-44.8 46.3-40.1-27.7-97.2-35.6-137.3-3.6-57.4 39.7-60 133.4-4.8 176.1 53.7 48.7 155.2 24.5 170.1-50.1-33.6-.5-67.4 0-101-1.1-.1-20.1-.2-40.1-.1-60.2 56.2-.2 112.5-.3 168.8.2 3.3 47.3-3 97.5-32 136.5zM791 536.5c-16.8.2-33.6.3-50.4.4-.2 16.8-.3 33.6-.3 50.4H690c-.2-16.8-.2-33.5-.3-50.3-16.8-.2-33.6-.3-50.4-.5v-50.1c16.8-.2 33.6-.3 50.4-.3.1-16.8.3-33.6.4-50.4h50.2l.3 50.4c16.8.2 33.6.2 50.4.3v50.1z"
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
