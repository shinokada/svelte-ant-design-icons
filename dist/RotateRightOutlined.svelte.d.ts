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
export type RotateRightOutlinedProps = typeof __propDef.props;
export type RotateRightOutlinedEvents = typeof __propDef.events;
export type RotateRightOutlinedSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-ant-design-icons.codewithshin.com/)
 * ## Props
 * @props:
 */
export default class RotateRightOutlined extends SvelteComponent<RotateRightOutlinedProps, RotateRightOutlinedEvents, RotateRightOutlinedSlots> {
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
