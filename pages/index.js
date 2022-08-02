import Gallery from '../components/Gallery'
import  { createClient } from 'contentful'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'painting'})

  return {
    props: {
      painting_data: res.items
    }
  }

}

const Home = ({ painting_data }) => {
  return (  
    <>
      <Gallery paintings={painting_data} />
    </> );
}
 
export default Home;
