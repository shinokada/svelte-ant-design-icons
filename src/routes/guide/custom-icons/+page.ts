import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Custom icons example - Svelte Ant Design Icons',
    description: 'How to create a custom icons with Svelte Ant Design Icons',
    og: {
      title: 'Custom icons example - Svelte Ant Design Icons',
      description: 'How to create a custom icons with Svelte Ant Design Icons'
    },
    twitter: {
      title: 'Custom icons example - Svelte Ant Design Icons',
      description: 'How to create a custom icons with Svelte Ant Design Icons'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
