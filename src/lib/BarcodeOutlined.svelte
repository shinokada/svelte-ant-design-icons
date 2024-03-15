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
		ariaLabel = 'barcode outlined,',
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
		d="M120 160H72c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zm833 0h-48c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zM200 736h112c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8H200c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm321 0h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm126 0h178c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8H647c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm-255 0h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm-79 64H201c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm257 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm256 0H648c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h178c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-385 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"
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
