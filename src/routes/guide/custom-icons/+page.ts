import type { MetaProps } from 'runes-meta-tags';

const title = 'Custom icons - Svelte Ant Design Icons';
const description = 'How to create a custom icons with Svelte Ant Design Icons';
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
