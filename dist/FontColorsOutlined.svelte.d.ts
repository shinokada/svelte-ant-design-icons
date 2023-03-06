/** @typedef {typeof __propDef.props}  FontColorsOutlinedProps */
/** @typedef {typeof __propDef.events}  FontColorsOutlinedEvents */
/** @typedef {typeof __propDef.slots}  FontColorsOutlinedSlots */
export default class FontColorsOutlined extends SvelteComponentTyped<{
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
export type FontColorsOutlinedProps = typeof __propDef.props;
export type FontColorsOutlinedEvents = typeof __propDef.events;
export type FontColorsOutlinedSlots = typeof __propDef.slots;
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
