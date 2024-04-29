import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        size?: string | undefined;
        role?: string | undefined;
        color?: string | undefined;
        withEvents?: boolean | undefined;
        onclick?: ((event: MouseEvent) => void) | undefined;
        onkeydown?: ((event: KeyboardEvent) => void) | undefined;
        onkeyup?: ((event: KeyboardEvent) => void) | undefined;
        class?: string | undefined;
        title?: {
            id?: string | undefined;
            title?: string | undefined;
        } | undefined;
        desc?: {
            id?: string | undefined;
            desc?: string | undefined;
        } | undefined;
        ariaLabel?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MonitorOutlinedProps = typeof __propDef.props;
export type MonitorOutlinedEvents = typeof __propDef.events;
export type MonitorOutlinedSlots = typeof __propDef.slots;
export default class MonitorOutlined extends SvelteComponent<MonitorOutlinedProps, MonitorOutlinedEvents, MonitorOutlinedSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        size?: string | undefined;
        role?: string | undefined;
        color?: string | undefined;
        withEvents?: boolean | undefined;
        onclick?: ((event: MouseEvent) => void) | undefined;
        onkeydown?: ((event: KeyboardEvent) => void) | undefined;
        onkeyup?: ((event: KeyboardEvent) => void) | undefined;
        class?: string | undefined;
        title?: {
            id?: string | undefined;
            title?: string | undefined;
        } | undefined;
        desc?: {
            id?: string | undefined;
            desc?: string | undefined;
        } | undefined;
        ariaLabel?: string | undefined;
    }>);
}
export {};
