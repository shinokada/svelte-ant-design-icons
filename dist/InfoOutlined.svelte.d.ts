/** @typedef {typeof __propDef.props}  InfoOutlinedProps */
/** @typedef {typeof __propDef.events}  InfoOutlinedEvents */
/** @typedef {typeof __propDef.slots}  InfoOutlinedSlots */
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
export default class InfoOutlined extends SvelteComponentTyped<{
    [x: string]: any;
    size?: string | undefined;
    role?: string | undefined;
    color?: string | undefined;
    ariaLabel?: string | undefined;
}, {
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
}, {}> {
}
export type InfoOutlinedProps = typeof __propDef.props;
export type InfoOutlinedEvents = typeof __propDef.events;
export type InfoOutlinedSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: string | undefined;
        role?: string | undefined;
        color?: string | undefined;
        ariaLabel?: string | undefined;
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
