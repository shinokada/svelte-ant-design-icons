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
export type DribbbleSquareOutlinedProps = typeof __propDef.props;
export type DribbbleSquareOutlinedEvents = typeof __propDef.events;
export type DribbbleSquareOutlinedSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-ant-design-icons.codewithshin.com/)
 * ## Props
 * @props: size?: string;
 * @props:role?: string;
 * @props:color?: string;
 * @props:ariaLabel?: string;
 * @props:class?: string;
 */
export default class DribbbleSquareOutlined extends SvelteComponent<DribbbleSquareOutlinedProps, DribbbleSquareOutlinedEvents, DribbbleSquareOutlinedSlots> {
}
export {};
