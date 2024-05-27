import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Props - Svelte Ant Design Icons v2',
    description: 'How to use props with Svelte Ant Design Icons v2',
    og: {
      title: 'Props - Svelte Ant Design Icons v2',
      description: 'How to use props with Svelte Ant Design Icons v2'
    },
    twitter: {
      title: 'Props - Svelte Ant Design Icons v2',
      description: 'How to use props with Svelte Ant Design Icons v2'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
