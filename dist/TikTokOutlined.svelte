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
  ariaLabel = "tik tok outlined",
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
      <path d="M365.014.667C408.68 0 452.011.333 495.342 0c2.667 51 21 102.999 58.33 138.998 37.332 37 89.997 54 141.328 59.666v134.332c-47.998-1.667-96.33-11.667-139.994-32.333-19-8.667-36.665-19.667-53.998-31-.333 97.332.334 194.665-.666 291.663-2.667 46.666-18 93-44.998 131.332-43.665 64-119.328 105.665-196.992 106.999-47.664 2.666-95.329-10.334-135.994-34.333C55.028 725.658 7.696 652.992.697 574.993c-.667-16.667-1-33.333-.334-49.666 6-63.333 37.332-123.999 85.997-165.332 55.33-47.999 132.66-70.999 204.99-57.332.667 49.333-1.332 98.665-1.332 147.998-33-10.667-71.664-7.667-100.663 12.333-20.999 13.667-36.998 34.666-45.331 58.333-7 17-5 35.666-4.667 53.666 8 54.666 60.664 100.665 116.662 95.665 37.332-.333 72.997-22 92.33-53.666 6.332-11 13.332-22.333 13.665-35.333 3.334-59.666 2-118.998 2.334-178.664.333-134.332-.334-268.33.666-402.328" transform="translate(165 112)"/>
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
      <path d="M365.014.667C408.68 0 452.011.333 495.342 0c2.667 51 21 102.999 58.33 138.998 37.332 37 89.997 54 141.328 59.666v134.332c-47.998-1.667-96.33-11.667-139.994-32.333-19-8.667-36.665-19.667-53.998-31-.333 97.332.334 194.665-.666 291.663-2.667 46.666-18 93-44.998 131.332-43.665 64-119.328 105.665-196.992 106.999-47.664 2.666-95.329-10.334-135.994-34.333C55.028 725.658 7.696 652.992.697 574.993c-.667-16.667-1-33.333-.334-49.666 6-63.333 37.332-123.999 85.997-165.332 55.33-47.999 132.66-70.999 204.99-57.332.667 49.333-1.332 98.665-1.332 147.998-33-10.667-71.664-7.667-100.663 12.333-20.999 13.667-36.998 34.666-45.331 58.333-7 17-5 35.666-4.667 53.666 8 54.666 60.664 100.665 116.662 95.665 37.332-.333 72.997-22 92.33-53.666 6.332-11 13.332-22.333 13.665-35.333 3.334-59.666 2-118.998 2.334-178.664.333-134.332-.334-268.33.666-402.328" transform="translate(165 112)"/>
  </svg>
{/if}
