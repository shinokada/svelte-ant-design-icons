import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        size?: string | undefined;
        role?: string | undefined;
        color?: string | undefined;
        ariaLabel?: string | undefined;
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type InsertRowBelowOutlinedProps = typeof __propDef.props;
export type InsertRowBelowOutlinedEvents = typeof __propDef.events;
export type InsertRowBelowOutlinedSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-ant-design-icons.codewithshin.com/)
 * ## Props
 * @props: size?: string;
 * @props:role?: string;
 * @props:color?: string;
 * @props:ariaLabel?: string;
 * @props:class?: string;
 */
export default class InsertRowBelowOutlined extends SvelteComponent<InsertRowBelowOutlinedProps, InsertRowBelowOutlinedEvents, InsertRowBelowOutlinedSlots> {
}
export {};
