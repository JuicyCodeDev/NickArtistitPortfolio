import styles from '../styles/InstaSection.module.css';

const InstaSection = ({ instaFeed }) => {
  const instaFeedData = instaFeed.data;
  const instaImageCollection = instaFeedData.filter((image) => image.media_type === 'IMAGE');

  return (
    <>
      <h1 id="insta_section" className={styles.heading}>Intuitive painting on Instagram</h1>
      <p className={styles.description}>
        My paintings represent experiences and impressions as well their emotional realities manifested in motives serving entirely themselves. The objective is a maximal engagement with sentiments and their execution on canvas. As part of this process I rely fully on my imagination and intuition and give space to coincidences.
        {' '}

      </p>
      <div className={styles.insta_container}>
        {
          instaImageCollection && instaImageCollection.map((image) => (
            <div key={image.id} className={styles.insta_image_container}>
              <a href={image.permalink} rel="noreferrer" target="_blank">
                <img src={image.media_url} alt={image.caption} className={styles.insta_image} />
              </a>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default InstaSection;
