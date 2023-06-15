/** @typedef {typeof __propDef.props}  CompassTwotoneProps */
/** @typedef {typeof __propDef.events}  CompassTwotoneEvents */
/** @typedef {typeof __propDef.slots}  CompassTwotoneSlots */
/**
 * [Go to Document](https://svelte-ant-design-icons.codewithshin.com/)
 * ## Props
 * @prop size = '24';
 * @prop role = 'img';
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
export default class CompassTwotone extends SvelteComponentTyped<
  {
    [x: string]: any;
    size?: string | undefined;
    role?: string | undefined;
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
export type CompassTwotoneProps = typeof __propDef.props;
export type CompassTwotoneEvents = typeof __propDef.events;
export type CompassTwotoneSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
  props: {
    [x: string]: any;
    size?: string | undefined;
    role?: string | undefined;
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
