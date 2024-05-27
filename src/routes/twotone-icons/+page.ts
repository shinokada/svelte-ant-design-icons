import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Twotone Icons - Svelte Ant Design Icons',
    description: 'Twotone Icons',
    og: {
      title: 'Twotone Icons - Svelte Ant Design Icons',
      description: 'Twotone Icons'
    },
    twitter: {
      title: 'Twotone Icons - Svelte Ant Design Icons',
      description: 'Twotone Icons'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
