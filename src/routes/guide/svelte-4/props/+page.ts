import type { MetaProps } from 'runes-meta-tags';
const title = 'Props - Svelte Ant Design Icons v1'
const description = 'How to use Svelte Ant Design Icons v1 props'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-ant-design-icons'

export const load = () => {
  const pageMetaTags = Object.freeze({
    title,
    description,
    og: {
      title,
      description,
      image: imgUrl
    },
    twitter: {
      title,
      description,
      image: imgUrl
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
