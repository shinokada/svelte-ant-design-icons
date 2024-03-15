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
  let { size = ctx.size || '24', role = ctx.role || 'img', color = ctx.color || 'currentColor', ariaLabel =  "arrow right outlined," , class: classname, ...restProps }: Props = $props();
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
       <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"/>  
  </svg
>
