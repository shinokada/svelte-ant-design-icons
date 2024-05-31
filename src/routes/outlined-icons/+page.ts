import type { MetaProps } from 'runes-meta-tags';
const title = 'Outlined Icons - Svelte Ant Design Icons'
const description = 'Easily Find & Copy Svelte Ant Design Outlined SVG Icon name for Your Project.'
const ogUrl = 'http://localhost:4173/outlined-icons'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-ant-design-icons?title=Outlined Icons'


export const load = () => {
  const pageMetaTags = Object.freeze({
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
  }) satisfies MetaProps;
  return { pageMetaTags };
};
