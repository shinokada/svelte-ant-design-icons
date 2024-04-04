<script lang="ts">import { getContext } from "svelte";
const ctx = getContext("iconCtx") ?? {};
let {
  size = ctx.size || "24",
  role = ctx.role || "img",
  color = ctx.color || "currentColor",
  ariaLabel = "thunderbolt twotone,",
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
	<path fill="#D9D9D9" d="M695.4 164.1H470.8L281.2 491.5h157.4l-60.3 241 319.8-305.1h-211z" />
	<path
		d="M848.1 359.3H627.8L825.9 109c4.1-5.3.4-13-6.3-13H436.1c-2.8 0-5.5 1.5-6.9 4L170.1 547.5c-3.1 5.3.7 12 6.9 12h174.4L262 917.1c-1.9 7.8 7.5 13.3 13.3 7.7L853.6 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.3 732.5l60.3-241H281.2l189.6-327.4h224.6L487.1 427.4h211L378.3 732.5z"
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
