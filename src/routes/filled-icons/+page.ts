import type { MetaProps } from 'runes-meta-tags';
const title = 'Filled Icons - Svelte Ant Design Icons'
const description = 'Easily Find & Copy Svelte Ant Design Filled SVG Icon name for Your Project.'
const ogUrl = 'http://localhost:4173/filled-icons'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-ant-design-icons?title=Filled Icons'


export const load = () => {
  const pageMetaTags: MetaProps ={
    title,
    description,
    og: {
      title,
      description,
      url: ogUrl,
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
