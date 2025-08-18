<script lang="ts">
	import { Icon as AntIcon } from '$lib';
	import { type Component } from 'svelte';
	const config: { size: string; color: string; ariaLabel: string; class: string } = {
		size: '30',
		color: '#88FF33',
		ariaLabel: 'my custom icon',
		class: 'mx-4'
	};
	interface Props {
		Icon: Component;
	}

	let { Icon }: Props = $props();
</script>

<AntIcon {...config} {Icon} />
