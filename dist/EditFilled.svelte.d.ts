/** @typedef {typeof __propDef.props}  EditFilledProps */
/** @typedef {typeof __propDef.events}  EditFilledEvents */
/** @typedef {typeof __propDef.slots}  EditFilledSlots */
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
export default class EditFilled extends SvelteComponentTyped<
  {
    [x: string]: any;
    size?: string | undefined;
    color?: string | undefined;
    ariaLabel?: string | undefined;
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
export type EditFilledProps = typeof __propDef.props;
export type EditFilledEvents = typeof __propDef.events;
export type EditFilledSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
  props: {
    [x: string]: any;
    size?: string | undefined;
    color?: string | undefined;
    ariaLabel?: string | undefined;
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
