import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        size?: string | undefined;
        role?: string | undefined;
        color?: string | undefined;
        ariaLabel?: string | undefined;
        class?: string | undefined;
        title: {
            id?: string | undefined;
            title?: string | undefined;
        };
        desc: {
            id?: string | undefined;
            desc?: string | undefined;
        };
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CaretDownFilledProps = typeof __propDef.props;
export type CaretDownFilledEvents = typeof __propDef.events;
export type CaretDownFilledSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-ant-design-icons.codewithshin.com/)
 * ## Props
 * @props: size?: string;
 * @props:role?: string;
 * @props:color?: string;
 * @props:ariaLabel?: string;
 * @props:class?: string;
 * @props:title: TitleType;
 * @props:desc: DescType;
 */
export default class CaretDownFilled extends SvelteComponent<CaretDownFilledProps, CaretDownFilledEvents, CaretDownFilledSlots> {
}
export {};
