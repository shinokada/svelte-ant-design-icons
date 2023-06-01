/** @typedef {typeof __propDef.props}  SlidersTwotoneProps */
/** @typedef {typeof __propDef.events}  SlidersTwotoneEvents */
/** @typedef {typeof __propDef.slots}  SlidersTwotoneSlots */
/**
 * [Go to Document](https://svelte-ant-design-icons.codewithshin.com/)
 * ## Props
 * @prop size = '24';
 * @prop color = 'currentColor';
 * @prop ariaLabel = 'icon name';
 * ## Event
 * - on:click
 * - on:keydown
 * - on:keyup
 * - on:focus
 * - on:blur
 * - on:mouseenter
 * - on:mouseleave
 * - on:mouseover
 * - on:mouseout
 */
export default class SlidersTwotone extends SvelteComponentTyped<
  {
    [x: string]: any;
    size?: string | undefined;
    ariaLabel?: string | undefined;
    strokeColor?: string | undefined;
    insideColor?: string | undefined;
  },
  {
    click: MouseEvent;
    keydown: KeyboardEvent;
    keyup: KeyboardEvent;
    focus: FocusEvent;
    blur: FocusEvent;
    mouseenter: MouseEvent;
    mouseleave: MouseEvent;
    mouseover: MouseEvent;
    mouseout: MouseEvent;
  } & {
    [evt: string]: CustomEvent<any>;
  },
  {}
> {}
export type SlidersTwotoneProps = typeof __propDef.props;
export type SlidersTwotoneEvents = typeof __propDef.events;
export type SlidersTwotoneSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
  props: {
    [x: string]: any;
    size?: string | undefined;
    ariaLabel?: string | undefined;
    strokeColor?: string | undefined;
    insideColor?: string | undefined;
  };
  events: {
    click: MouseEvent;
    keydown: KeyboardEvent;
    keyup: KeyboardEvent;
    focus: FocusEvent;
    blur: FocusEvent;
    mouseenter: MouseEvent;
    mouseleave: MouseEvent;
    mouseover: MouseEvent;
    mouseout: MouseEvent;
  } & {
    [evt: string]: CustomEvent<any>;
  };
  slots: {};
};
export {};
