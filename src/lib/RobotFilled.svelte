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
		ariaLabel = 'robot filled,',
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
	<defs><style type="text/css"></style></defs><path
		d="M852 64H172c-17.7 0-32 14.3-32 32v660c0 17.7 14.3 32 32 32h680c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM300 328c0-33.1 26.9-60 60-60s60 26.9 60 60-26.9 60-60 60-60-26.9-60-60z m372 248c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-60c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8v60z m-8-188c-33.1 0-60-26.9-60-60s26.9-60 60-60 60 26.9 60 60-26.9 60-60 60zM799 864H225c-13.8 0-25 14.3-25 32v56c0 4.4 2.8 8 6.2 8h611.5c3.4 0 6.2-3.6 6.2-8v-56c0.1-17.7-11.1-32-24.9-32z"
	></path>
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
