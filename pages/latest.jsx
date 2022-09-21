// import Link from 'next/link';
// test comment
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import InstaSection from '../components/InstaSection.jsx';
import styles from '../styles/Latest.module.css';

export const getStaticProps = async () => {
  // Insta API call
  // const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTA_TOKEN}`;
  // const data = await fetch(url);
  // const feed = await data.json();

  // Contentful API call
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'latestPage' });

  return {
    props: {
      latestPageContent: res.items,
    },
  };
};

const Latest = ({ latestPageContent }) => {
  const {
    image, mobileImage, textTitle, text,
  } = latestPageContent[0].fields;

  return (
    <>
      <div className={styles.main_container}>
        {/* Image */}
        <div className={styles.image_container}>
          <img className={styles.image} src={`http:${image.fields.file.url}`} alt={image.fields.title} />
          <img className={styles.image_mobile} src={`http:${mobileImage.fields.file.url}`} alt={image.fields.title} />
        </div>
        {/* Text */}
        <div className={styles.text_container}>
          <h1 className={styles.heading}>{textTitle}</h1>
          <div className={styles.text}>
            {documentToReactComponents(text)}
          </div>
        </div>
      </div>
      {/* <Link href="#insta_section"><a><div className={styles.more_button}>more</div></a></Link>
      <InstaSection instaFeed={feed} /> */}
    </>
  );
};

export default Latest;
