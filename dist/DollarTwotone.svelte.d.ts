/** @typedef {typeof __propDef.props}  DollarTwotoneProps */
/** @typedef {typeof __propDef.events}  DollarTwotoneEvents */
/** @typedef {typeof __propDef.slots}  DollarTwotoneSlots */
export default class DollarTwotone extends SvelteComponentTyped<{
    [x: string]: any;
    size?: string | undefined;
    ariaLabel?: string | undefined;
    strokeColor?: string | undefined;
    insideColor?: string | undefined;
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
export type DollarTwotoneProps = typeof __propDef.props;
export type DollarTwotoneEvents = typeof __propDef.events;
export type DollarTwotoneSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
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
