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
		ariaLabel = 'windows outlined,',
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
		d="M120.1 770.6L443 823.2V543.8H120.1v226.8zm63.4-163.5h196.2v141.6l-196.2-31.9V607.1zm340.3 226.5l382 62.2v-352h-382v289.8zm63.4-226.5h255.3v214.4l-255.3-41.6V607.1zm-63.4-415.7v288.8h382V128.1l-382 63.3zm318.7 225.5H587.3V245l255.3-42.3v214.2zm-722.4 63.3H443V201.9l-322.9 53.5v224.8zM183.5 309l196.2-32.5v140.4H183.5V309z"
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
