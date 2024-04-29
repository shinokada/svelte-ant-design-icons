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
  ariaLabel = "fast backward filled",
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
           <path d="M517.6 273.5L230.2 499.3a16.14 16.14 0 0 0 0 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm320 0L550.2 499.3a16.14 16.14 0 0 0 0 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm-620-25.5h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z"/>  
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
           <path d="M517.6 273.5L230.2 499.3a16.14 16.14 0 0 0 0 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm320 0L550.2 499.3a16.14 16.14 0 0 0 0 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm-620-25.5h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z"/>  
  </svg>
{/if}
