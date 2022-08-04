/* eslint-disable max-len */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { createClient } from 'contentful';
import styles from '../styles/Contact.module.css';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'contactPage' });

  return {
    props: {
      contactPageContent: res.items,
    },
  };
}

const Contact = ({ contactPageContent }) => {
  const { image, title, text } = contactPageContent[0].fields;

  return (
    <div className={styles.main_container}>
      <img className={styles.image} src={`http:${image.fields.file.url}`} alt={image.fields.title} />
      <div className={styles.about}>
        <div className={styles.heading_container}>
          <h1>{title}</h1>
          <div className={styles.icon}>
            <a href="https://www.instagram.com/nikita_schomerus/" target="_blank" rel="noreferrer" label="instagramButton"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
        <p>{text}</p>
        <div className={styles.buttonContainer}>
          <div className={styles.button}><a href="mailto:mail@nikitaschomerus.de">get in touch</a></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
