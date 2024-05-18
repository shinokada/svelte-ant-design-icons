import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Outlined Icons - Svelte Ant Design Icons',
    description: 'Outlined Icons from Ant-Design-Icons for Svelte',
    og: {
      title: 'Outlined Icons - Svelte Ant Design Icons',
      description: 'Outlined Icons from Ant-Design-Icons for Svelte'
    },
    twitter: {
      title: 'Outlined Icons - Svelte Ant Design Icons',
      description: 'Outlined Icons from Ant-Design-Icons for Svelte'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
