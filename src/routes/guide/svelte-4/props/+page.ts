import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Props - Svelte Ant Design Icons v1',
    description: 'How to use props with Svelte Ant Design Icons v1',
    og: {
      title: 'Props - Svelte Ant Design Icons v1',
      description: 'How to use props with Svelte Ant Design Icons v1'
    },
    twitter: {
      title: 'Props - Svelte Ant Design Icons v1',
      description: 'How to use props with Svelte Ant Design Icons v1'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
