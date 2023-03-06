/** @typedef {typeof __propDef.props}  EyeInvisibleOutlinedProps */
/** @typedef {typeof __propDef.events}  EyeInvisibleOutlinedEvents */
/** @typedef {typeof __propDef.slots}  EyeInvisibleOutlinedSlots */
export default class EyeInvisibleOutlined extends SvelteComponentTyped<{
    [x: string]: any;
    size?: string | undefined;
    color?: string | undefined;
    ariaLabel?: string | undefined;
}, {
    click: MouseEvent;
    mouseenter: MouseEvent;
    mouseleave: MouseEvent;
    mouseover: MouseEvent;
    mouseout: MouseEvent;
    blur: FocusEvent;
    focus: FocusEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EyeInvisibleOutlinedProps = typeof __propDef.props;
export type EyeInvisibleOutlinedEvents = typeof __propDef.events;
export type EyeInvisibleOutlinedSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
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
