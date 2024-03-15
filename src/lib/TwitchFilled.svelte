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
		ariaLabel = 'twitch filled,',
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
	viewBox="0 0 1042 1042"
>
	<defs
		><filter
			id="a"
			width="102.3%"
			height="102.3%"
			x="-1.2%"
			y="-1.2%"
			filterUnits="objectBoundingBox"
			><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur
				in="shadowOffsetOuter1"
				result="shadowBlurOuter1"
				stdDeviation="2"
			/><feColorMatrix
				in="shadowBlurOuter1"
				result="shadowMatrixOuter1"
				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
			/><feMerge><feMergeNode in="shadowMatrixOuter1" /><feMergeNode in="SourceGraphic" /></feMerge
			></filter
		></defs
	><g filter="url(#a)" transform="translate(9 9)"
		><path
			d="M57.143 0 0 142.857v542.857h171.429V800h114.285L400 685.714h142.857l200-200V0zm314.286 428.571h-85.715V198.214h85.715zm200 0h-85.715V198.214h85.715z"
			transform="translate(128 112)"
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
-->
