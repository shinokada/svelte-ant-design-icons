import type { MetaProps } from 'runes-meta-tags';

const title = 'Getting Started - Svelte Ant Design Icons v2';
const description = 'How to get started with Svelte Ant Design Icons v2';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-ant-design-icons';

export const load = () => {
  const pageMetaTags: MetaProps = {
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
  };
  return { pageMetaTags };
};
