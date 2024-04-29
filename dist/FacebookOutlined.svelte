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
  ariaLabel = "facebook outlined",
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
           <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z"/>  
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
           <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z"/>  
  </svg>
{/if}
