<script lang="ts">
	import { getContext } from 'svelte';
	interface CtxType {
		size?: string;
		role?: string;
		color?: string;
	}

	type TitleType = {
		id?: string;
		title?: string;
	};

	type DescType = {
		id?: string;
		desc?: string;
	};

	const ctx: CtxType = getContext('iconCtx') ?? {};
	interface Props {
		size?: string;
		role?: string;
		color?: string;
		ariaLabel?: string;
		class?: string;
		title: TitleType;
		desc: DescType;
	}

	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		color = ctx.color || 'currentColor',
		ariaLabel = 'play circle twotone,',
		class: classname,
		title = {},
		desc = {},
		...restProps
	}: Props = $props();

	const ariaDescribedby = `${title.id || ''} ${desc.id || ''}`;
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
		fill="#333"
		d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
	/>
	<path
		fill="#E6E6E6"
		d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm164.1 378.2L457.7 677.1a8.02 8.02 0 0 1-12.7-6.5V353a8 8 0 0 1 12.7-6.5l218.4 158.8a7.9 7.9 0 0 1 0 12.9z"
	/>
	<path
		fill="#333"
		d="M676.1 505.3L457.7 346.5A8 8 0 0 0 445 353v317.6a8.02 8.02 0 0 0 12.7 6.5l218.4-158.9a7.9 7.9 0 0 0 0-12.9z"
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
