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
export type ExperimentOutlinedProps = typeof __propDef.props;
export type ExperimentOutlinedEvents = typeof __propDef.events;
export type ExperimentOutlinedSlots = typeof __propDef.slots;
export default class ExperimentOutlined extends SvelteComponent<ExperimentOutlinedProps, ExperimentOutlinedEvents, ExperimentOutlinedSlots> {
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
