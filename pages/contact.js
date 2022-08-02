import styles from '../styles/Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {

  return (  
    <div className={styles.main_container}>
      <img className={styles.image} src='/about_image.png' alt='Ein Bild von Nikita Schomerus'/>
      <div className={styles.about}>
        <div className={styles.heading_container}>
          <h1>Get in touch</h1>
          <div className={styles.icon}>
            <a href="https://www.instagram.com/nikita_schomerus/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
        <p>Inquiries sent through this page will be responded to by mail@nikitaschomerus.de. Feel free to reach out via Instagram directly as well.</p>

        <div className={styles.buttonContainer}>
          <div className={styles.button}><a href={"mailto:mail@nikitaschomerus.de"}>get in touch</a></div>
        </div>
      </div>
    </div> )
}
 
export default Contact;
