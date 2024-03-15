<script lang='ts'>
  import { getContext } from 'svelte';
  interface CtxType {
		size?: string;
		role?: string;
    color?: string;
	}
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props{
    size?: string;
    role?: string;
    color?: string;
    ariaLabel?: string;
    class?: string;
  }
  let { size = ctx.size || '24', role = ctx.role || 'img', color = ctx.color || 'currentColor', ariaLabel =  "caret left outlined," , class: classname, ...restProps }: Props = $props();
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
       <path d="M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z"/>  
  </svg
>
