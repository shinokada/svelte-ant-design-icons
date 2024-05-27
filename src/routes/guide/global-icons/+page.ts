import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Setting Global Icon - Svelte Ant Design Icons',
    description: 'Setting Global Icon using setContext with Svelte Ant Design Icons',
    og: {
      title: 'Setting Global Icon - Svelte Ant Design Icons',
      description: 'Setting Global Icon using setContext with Svelte Ant Design Icons'
    },
    twitter: {
      title: 'Setting Global Icon - Svelte Ant Design Icons',
      description: 'Setting Global Icon using setContext with Svelte Ant Design Icons'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
