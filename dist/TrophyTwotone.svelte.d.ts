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
export type TrophyTwotoneProps = typeof __propDef.props;
export type TrophyTwotoneEvents = typeof __propDef.events;
export type TrophyTwotoneSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-ant-design-icons.codewithshin.com/)
 * ## Props
 * @props: size?: string;
 * @props:role?: string;
 * @props:color?: string;
 * @props:ariaLabel?: string;
 * @props:class?: string;
 */
export default class TrophyTwotone extends SvelteComponent<TrophyTwotoneProps, TrophyTwotoneEvents, TrophyTwotoneSlots> {
}
export {};
