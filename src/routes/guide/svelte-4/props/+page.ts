import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Svelte 4 Props example - Svelte Ant Design Icons',
    description: 'Svelte 4 Props example',
    og: {
      title: 'Svelte 4 Props example - Svelte Ant Design Icons',
      description: 'Svelte 4 Props example',
    },
    twitter: {
      title: 'Svelte 4 Props example - Svelte Ant Design Icons',
      description: 'Svelte 4 Props example',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
