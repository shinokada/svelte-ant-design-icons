import { SvelteComponent } from "svelte";
import type { ComponentType } from 'svelte';
declare const __propDef: {
    props: {
        icon: ComponentType;
        size?: number | undefined;
        role?: string | undefined;
        ariaLabel?: string | undefined;
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IconProps = typeof __propDef.props;
export type IconEvents = typeof __propDef.events;
export type IconSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-ant-design-icons.codewithshin.com/)
 * ## Props
 * @props: icon: ComponentType;
 * @props:size?: number;
 * @props:role?: string;
 * @props:ariaLabel?: string;
 * @props:class?: string;
 */
export default class Icon extends SvelteComponent<IconProps, IconEvents, IconSlots> {
}
export {};
