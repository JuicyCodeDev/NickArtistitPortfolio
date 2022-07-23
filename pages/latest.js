import styles from '../styles/Latest.module.css'
import Link from 'next/link';
import InstaSection from '../components/InstaSection';

const Latest = ({ feed }) => {

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
    <InstaSection insta_feed={feed} />
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