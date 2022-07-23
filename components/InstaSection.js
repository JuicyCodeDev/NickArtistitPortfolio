import styles from '../styles/InstaSection.module.css'

const InstaSection = ({ insta_feed }) => {

  const insta_feed_data = insta_feed.data;  
  const insta_image_collection = insta_feed_data.filter(image => image.media_type === "IMAGE")

  return ( 
    <>
      <div id="insta_section" className={styles.insta_heading}>Painting Meditation on Instagram</div>
      <div className={styles.insta_description}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis quam, scelerisque in velit sed, pellentesque tempor ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      </div>
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
   );
}
 
export default InstaSection;
