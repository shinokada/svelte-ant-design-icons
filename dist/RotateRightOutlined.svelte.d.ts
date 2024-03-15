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
export type RotateRightOutlinedProps = typeof __propDef.props;
export type RotateRightOutlinedEvents = typeof __propDef.events;
export type RotateRightOutlinedSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-ant-design-icons.codewithshin.com/)
 * ## Props
 * @props: size?: string;
 * @props:role?: string;
 * @props:color?: string;
 * @props:ariaLabel?: string;
 * @props:class?: string;
 */
export default class RotateRightOutlined extends SvelteComponent<RotateRightOutlinedProps, RotateRightOutlinedEvents, RotateRightOutlinedSlots> {
}
export {};
