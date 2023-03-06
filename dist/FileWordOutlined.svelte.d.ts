/** @typedef {typeof __propDef.props}  FileWordOutlinedProps */
/** @typedef {typeof __propDef.events}  FileWordOutlinedEvents */
/** @typedef {typeof __propDef.slots}  FileWordOutlinedSlots */
export default class FileWordOutlined extends SvelteComponentTyped<{
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
export type FileWordOutlinedProps = typeof __propDef.props;
export type FileWordOutlinedEvents = typeof __propDef.events;
export type FileWordOutlinedSlots = typeof __propDef.slots;
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
