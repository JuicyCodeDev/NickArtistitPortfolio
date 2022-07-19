import styles from '../styles/Latest.module.css'
import { useState } from 'react';

const Latest = () => {

  return (  
    <div className={styles.main_container}>
      <img className={styles.image} src='/paintings/Soldat.png'/>
      <div className={styles.about}>
        <div className={styles.heading}>Serie “Krieg”</div>
        <div className={styles.introText}>
        Zur Zeit arbeite ich an einer Serie, angelehnt an die Form der Sinfonie in der klassischen Musik. Die Serie lässt sich, wie eine Sinfonie (meistens) in 4 Sätze einteilen:
        <br/>
        <br/>
          I. Satz
          Größte thematische Dichte - Ouvertüre, Vorstellung der Thematik und einzelner Motive.
        <br/>
        <br/>
          II. Satz
          Langsame und intime Bearbeitung. Einzelschicksale. An diese Stelle kommt ein Diptychon an dem ich zur Zeit arbeite.
        <br/>
        <br/>
          III. Satz
          Ein kleines Intermezzo. Etwas erheiternd.
        <br/>
        <br/>
          IV. Satz
          &quot;Großes&quot; Finale. Allumfassender Abschluss.
        </div>
      </div>
    </div> );
}
 
export default Latest;