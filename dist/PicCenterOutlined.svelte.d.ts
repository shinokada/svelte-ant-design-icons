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
export type PicCenterOutlinedProps = typeof __propDef.props;
export type PicCenterOutlinedEvents = typeof __propDef.events;
export type PicCenterOutlinedSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-ant-design-icons.codewithshin.com/)
 * ## Props
 * @props: size?: string;
 * @props:role?: string;
 * @props:color?: string;
 * @props:ariaLabel?: string;
 * @props:class?: string;
 */
export default class PicCenterOutlined extends SvelteComponent<PicCenterOutlinedProps, PicCenterOutlinedEvents, PicCenterOutlinedSlots> {
}
export {};