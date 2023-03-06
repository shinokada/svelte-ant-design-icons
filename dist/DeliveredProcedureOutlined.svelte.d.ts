/** @typedef {typeof __propDef.props}  DeliveredProcedureOutlinedProps */
/** @typedef {typeof __propDef.events}  DeliveredProcedureOutlinedEvents */
/** @typedef {typeof __propDef.slots}  DeliveredProcedureOutlinedSlots */
export default class DeliveredProcedureOutlined extends SvelteComponentTyped<{
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
export type DeliveredProcedureOutlinedProps = typeof __propDef.props;
export type DeliveredProcedureOutlinedEvents = typeof __propDef.events;
export type DeliveredProcedureOutlinedSlots = typeof __propDef.slots;
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
