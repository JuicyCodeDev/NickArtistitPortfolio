import styles from '../styles/Latest.module.css'
import Link from 'next/link';

const Latest = ({ feed }) => {
  const insta_images = feed.data;
  console.log(insta_images)
  
  const insta_test_collection = insta_images.filter(image => image.media_type === "IMAGE")


  return (  
    <>
    <div className={styles.main_container}>
      <div className={styles.image_container}>
        <img className={styles.image} src='/paintings/Soldat.png' alt='Ein Soldat'/>
        <div className={styles.image_title}>
          Mama, Papa, Bruder 200x130cm (2020)  
          <br/>
          II. Satz Teil 1. Diptychon aus der Serie &quot;Krieg&quot;
        </div>
      </div>
      <div className={styles.text_container}>
        <div className={styles.heading}>Serie “Krieg”</div>
        <div className={styles.text}>
        Zur Zeit arbeite ich an einer Serie, angelehnt an die Form der Sinfonie in der klassischen Musik. Die Serie lässt sich, wie eine Sinfonie (meistens) in 4 Sätze einteilen:
        <br/>
        <br/>
          <b>I. Satz</b>
        <br/>
          Größte thematische Dichte - Ouvertüre, Vorstellung der Thematik und einzelner Motive.
        <br/>
        <br/>
          <b>II. Satz</b>
        <br/>
          Langsame und intime Bearbeitung. Einzelschicksale. An diese Stelle kommt ein Diptychon an dem ich zur Zeit arbeite.
        <br/>
        <br/>
          <b>III. Satz</b>
        <br/>
          Ein kleines Intermezzo. Etwas erheiternd.
        <br/>
        <br/>
          <b>VI. Satz</b>
        <br/>
          &quot;Großes&quot; Finale. Allumfassender Abschluss.
        <br/>
        </div>
      </div>
    </div> 
    <Link href="#insta_section"><a><div className={styles.more_button}>more</div></a></Link>
    <div id="insta_section" className={styles.insta_heading}>Painting Meditation on Instagram</div>
    <div className={styles.insta_description}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis quam, scelerisque in velit sed, pellentesque tempor ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    </div>
    <div className={styles.insta_container}>
      {
        insta_test_collection && insta_test_collection.map((image) => (
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
 
export default Latest;

export const getStaticProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTA_TOKEN}`;
  const data = await fetch(url);
  const feed = await data.json();

  return {
    props: {
      feed,
    }
  }
}
