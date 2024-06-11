import type { MetaProps } from 'runes-meta-tags';

const title = 'Twotone Icons - Svelte Ant Design Icons'
const description = 'Easily Find & Copy SVG Icon name for Your Project'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-ant-design-icons'


export const load = ({ url }) => {
  const ogUrl = url.href
  const pageMetaTags: MetaProps = {
    title,
    description,
    og: {
      title,
      description,
      image: imgUrl,
      url: ogUrl
    },
    twitter: {
      title,
      description,
      image: imgUrl
    }
  };
  return { pageMetaTags };
};
