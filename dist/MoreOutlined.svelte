<script>import { getContext } from "svelte";
const ctx = getContext("iconCtx") ?? {};
let {
  size = ctx.size || "24",
  role = ctx.role || "img",
  color = ctx.color || "currentColor",
  ariaLabel = "more outlined,",
  class: classname,
  ...restProps
} = $props();
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
		fill="#333"
		d="M456 231a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"
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
