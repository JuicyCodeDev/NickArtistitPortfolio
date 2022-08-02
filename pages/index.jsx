import { createClient } from 'contentful';
import Gallery from '../components/Gallery.jsx';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'painting' });

  return {
    props: {
      paintingData: res.items,
    },
  };
}

const Home = ({ paintingData }) => (
  <Gallery paintings={paintingData} />
);

export default Home;
