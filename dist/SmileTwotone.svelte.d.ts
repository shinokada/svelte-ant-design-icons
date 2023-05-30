/** @typedef {typeof __propDef.props}  SmileTwotoneProps */
/** @typedef {typeof __propDef.events}  SmileTwotoneEvents */
/** @typedef {typeof __propDef.slots}  SmileTwotoneSlots */
/**
 * [Go to Document](https://svelte-ant-design-icons.codewithshin.com/)
 * ## Props
 * @prop size = '24';
 * @prop color = 'currentColor';
 * @prop ariaLabel = 'icon name';
 * ## Event
 * - on:click
 * - on:mouseenter
 * - on:mouseleave
 * - on:mouseover
 * - on:mouseout
 * - on:blur
 * - on:focus
 */
export default class SmileTwotone extends SvelteComponentTyped<
  {
    [x: string]: any;
    size?: string | undefined;
    ariaLabel?: string | undefined;
    strokeColor?: string | undefined;
    insideColor?: string | undefined;
  },
  {
    click: MouseEvent;
    mouseenter: MouseEvent;
    mouseleave: MouseEvent;
    mouseover: MouseEvent;
    mouseout: MouseEvent;
    blur: FocusEvent;
    focus: FocusEvent;
  } & {
    [evt: string]: CustomEvent<any>;
  },
  {}
> {}
export type SmileTwotoneProps = typeof __propDef.props;
export type SmileTwotoneEvents = typeof __propDef.events;
export type SmileTwotoneSlots = typeof __propDef.slots;
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
    mouseenter: MouseEvent;
    mouseleave: MouseEvent;
    mouseover: MouseEvent;
    mouseout: MouseEvent;
    blur: FocusEvent;
    focus: FocusEvent;
  } & {
    [evt: string]: CustomEvent<any>;
  };
  slots: {};
};
export {};
