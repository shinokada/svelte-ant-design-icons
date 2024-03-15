<script>let {
  icon,
  size = 24,
  role = "img",
  ariaLabel = "Icon",
  class: classname,
  ...restProps
} = $props();
</script>

<svelte:component
	this={icon}
	{...restProps}
	{role}
	{size}
	class={classname}
	aria-label={ariaLabel}
/>

<!--
@component
[Go to docs](https://svelte-ant-design-icons.codewithshin.com/)
## Props
@props: icon: ComponentType;
@props:size?: number;
@props:role?: string;
@props:ariaLabel?: string;
@props:class?: string;
-->
