import styles from '../styles/InstaSection.module.css'

const InstaSection = ({ insta_feed }) => {

  const insta_feed_data = insta_feed.data;  
  const insta_image_collection = insta_feed_data.filter(image => image.media_type === "IMAGE")
  console.log(insta_feed.data)

  return ( 
    <>
      <h1 id="insta_section" className={styles.heading}>Intuitive painting on Instagram</h1>
      <p className={styles.description}>
      My paintings represent experiences and impressions as well their emotional realities manifested in motives serving entirely themselves. The objective is a maximal engagement with sentiments and their execution on canvas. As part of this process I rely fully on my imagination and intuition and give space to coincidences.      </p>
      <div className={styles.insta_container}>
        {
          insta_image_collection && insta_image_collection.map((image) => (
            <div key={image.id} className={styles.insta_image_container}>
              <a href={image.permalink} rel="noreferrer" target="_blank">
                <img src={image.media_url} alt={image.caption} className={styles.insta_image} />
              </a>
            </div>
          ))
        }
      </div>
    </>
   )
}
 
export default InstaSection
