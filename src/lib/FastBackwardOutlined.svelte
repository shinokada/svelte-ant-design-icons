<script lang="ts">
	import { getContext } from 'svelte';
	interface CtxType {
		size?: string;
		role?: string;
		color?: string;
	}
	const ctx: CtxType = getContext('iconCtx') ?? {};
	interface Props {
		size?: string;
		role?: string;
		color?: string;
		ariaLabel?: string;
		class?: string;
	}
	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		color = ctx.color || 'currentColor',
		ariaLabel = 'fast backward outlined,',
		class: classname,
		...restProps
	}: Props = $props();
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
	<path
		d="M517.6 273.5L230.2 499.3a16.14 16.14 0 0 0 0 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm320 0L550.2 499.3a16.14 16.14 0 0 0 0 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm-620-25.5h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z"
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
-->
