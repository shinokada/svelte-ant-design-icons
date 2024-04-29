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
  ariaLabel = "left square outlined",
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
           <path d="M365.3 518.5l246 178c5.3 3.8 12.7 0 12.7-6.5v-46.9c0-10.2-4.9-19.9-13.2-25.9L465.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5l-246 178a8.05 8.05 0 0 0 0 13z"/>   <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"/>  
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
           <path d="M365.3 518.5l246 178c5.3 3.8 12.7 0 12.7-6.5v-46.9c0-10.2-4.9-19.9-13.2-25.9L465.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5l-246 178a8.05 8.05 0 0 0 0 13z"/>   <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"/>  
  </svg>
{/if}
