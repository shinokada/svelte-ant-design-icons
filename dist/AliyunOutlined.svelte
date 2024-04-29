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
  ariaLabel = "aliyun outlined",
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
           <path d="M959.2 383.9c-.3-82.1-66.9-148.6-149.1-148.6H575.9l21.6 85.2 201 43.7a42.58 42.58 0 0 1 32.9 39.7c.1.5.1 216.1 0 216.6a42.58 42.58 0 0 1-32.9 39.7l-201 43.7-21.6 85.3h234.2c82.1 0 148.8-66.5 149.1-148.6V383.9zM225.5 660.4a42.58 42.58 0 0 1-32.9-39.7c-.1-.6-.1-216.1 0-216.6.8-19.4 14.6-35.5 32.9-39.7l201-43.7 21.6-85.2H213.8c-82.1 0-148.8 66.4-149.1 148.6V641c.3 82.1 67 148.6 149.1 148.6H448l-21.6-85.3-200.9-43.9zm200.9-158.8h171v21.3h-171z"/>  
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
           <path d="M959.2 383.9c-.3-82.1-66.9-148.6-149.1-148.6H575.9l21.6 85.2 201 43.7a42.58 42.58 0 0 1 32.9 39.7c.1.5.1 216.1 0 216.6a42.58 42.58 0 0 1-32.9 39.7l-201 43.7-21.6 85.3h234.2c82.1 0 148.8-66.5 149.1-148.6V383.9zM225.5 660.4a42.58 42.58 0 0 1-32.9-39.7c-.1-.6-.1-216.1 0-216.6.8-19.4 14.6-35.5 32.9-39.7l201-43.7 21.6-85.2H213.8c-82.1 0-148.8 66.4-149.1 148.6V641c.3 82.1 67 148.6 149.1 148.6H448l-21.6-85.3-200.9-43.9zm200.9-158.8h171v21.3h-171z"/>  
  </svg>
{/if}
