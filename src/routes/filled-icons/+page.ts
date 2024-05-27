import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Filled Icons - Svelte Ant Design Icons',
    description: 'Filled Icons',
    og: {
      title: 'Filled Icons - Svelte Ant Design Icons',
      description: 'Filled Icons'
    },
    twitter: {
      title: 'Filled Icons - Svelte Ant Design Icons',
      description: 'Filled Icons'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
