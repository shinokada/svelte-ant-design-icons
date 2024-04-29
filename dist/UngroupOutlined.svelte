<script lang='ts'>import { getContext } from "svelte";
const ctx = getContext("iconCtx") ?? {};
let {
  size = ctx.size || "24",
  role = ctx.role || "img",
  color = ctx.color || "currentColor",
  withEvents = ctx.withEvents || false,
  title = {},
  desc = {},
  class: classname,
  ariaLabel = "ungroup outlined",
  onclick,
  onkeydown,
  onkeyup,
  ...restProps
} = $props();
let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
let hasDescription = $state(false);
function updateHasDescription() {
  hasDescription = !!(title.id || desc.id);
}
updateHasDescription();
$effect(() => {
  updateHasDescription();
});
</script>

{#if withEvents}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
    fill={color}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 1024 1024"
    onclick={onclick}
    onkeydown={onkeydown}
    onkeyup={onkeyup}
  >
    {#if title.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
        <path d="M736 550H288c-8.8 0-16 7.2-16 16v176c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16V566c0-8.8-7.2-16-16-16z m-56 136H344v-64h336v64zM888 816c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z m0 96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zM736 266H288c-8.8 0-16 7.2-16 16v176c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16V282c0-8.8-7.2-16-16-16z m-56 136H344v-64h336v64zM888 208c39.8 0 72-32.2 72-72s-32.2-72-72-72-72 32.2-72 72 32.2 72 72 72z m0-96c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zM136 64c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z m0 96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zM136 816c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z m0 96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24z" ></path>
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
    fill={color}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 1024 1024"
  >
    {#if title.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
        <path d="M736 550H288c-8.8 0-16 7.2-16 16v176c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16V566c0-8.8-7.2-16-16-16z m-56 136H344v-64h336v64zM888 816c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z m0 96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zM736 266H288c-8.8 0-16 7.2-16 16v176c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16V282c0-8.8-7.2-16-16-16z m-56 136H344v-64h336v64zM888 208c39.8 0 72-32.2 72-72s-32.2-72-72-72-72 32.2-72 72 32.2 72 72 72z m0-96c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zM136 64c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z m0 96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zM136 816c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z m0 96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24z" ></path>
  </svg>
{/if}
