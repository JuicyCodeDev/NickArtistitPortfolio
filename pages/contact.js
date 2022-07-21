import styles from '../styles/Contact.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

  return (  
    <div className={styles.main_container}>
      <img className={styles.image} src='/about_image.png'/>
      <div className={styles.about}>
        <div className={styles.heading_container}>
          <div className={styles.heading}>Get in touch</div>
          <div className={styles.fontAwesomeIcon}>
            <a href="https://www.instagram.com/nikita_schomerus/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
        <div className={styles.introText}>Inquiries sent through this page will be responded to by mail@nikitaschomerus.de. Feel free to reach out via Instagram directly as well.</div>

        <div className={styles.buttonContainer}>
          <div className={styles.button}><a href={"mailto:mail@nikitaschomerus.de"}>get in touch</a></div>
        </div>
      </div>
    </div> );
}
 
export default Contact;