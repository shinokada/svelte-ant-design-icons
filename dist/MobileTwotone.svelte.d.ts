/** @typedef {typeof __propDef.props}  MobileTwotoneProps */
/** @typedef {typeof __propDef.events}  MobileTwotoneEvents */
/** @typedef {typeof __propDef.slots}  MobileTwotoneSlots */
export default class MobileTwotone extends SvelteComponentTyped<{
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
export type MobileTwotoneProps = typeof __propDef.props;
export type MobileTwotoneEvents = typeof __propDef.events;
export type MobileTwotoneSlots = typeof __propDef.slots;
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
