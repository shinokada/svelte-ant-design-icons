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
		ariaLabel = 'file image filled,',
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
		d="M854.6 288.7L639.4 73.4c-6-6-14.2-9.4-22.7-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.6-9.4-22.6zM400 402c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm296 294H328c-6.7 0-10.4-7.7-6.3-12.9l99.8-127.2a8 8 0 0 1 12.6 0l41.1 52.4 77.8-99.2a8 8 0 0 1 12.6 0l136.5 174c4.3 5.2.5 12.9-6.1 12.9zm-94-370V137.8L790.2 326H602z"
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
