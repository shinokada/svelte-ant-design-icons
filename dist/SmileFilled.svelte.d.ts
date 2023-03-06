/** @typedef {typeof __propDef.props}  SmileFilledProps */
/** @typedef {typeof __propDef.events}  SmileFilledEvents */
/** @typedef {typeof __propDef.slots}  SmileFilledSlots */
export default class SmileFilled extends SvelteComponentTyped<{
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
export type SmileFilledProps = typeof __propDef.props;
export type SmileFilledEvents = typeof __propDef.events;
export type SmileFilledSlots = typeof __propDef.slots;
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
