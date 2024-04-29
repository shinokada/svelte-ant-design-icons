import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Three Tabs example - Svelte Ant Design Icons',
    description: 'Three Tabs example',
    og: {
      title: 'Three Tabs example - Svelte Ant Design Icons',
      description: 'Three Tabs example',
    },
    twitter: {
      title: 'Three Tabs example - Svelte Ant Design Icons',
      description: 'Three Tabs example',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
