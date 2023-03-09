import { useState } from 'react';
import { createClient } from 'contentful';
import styles from '../styles/About.module.css';

export async function getServerSideProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'aboutPage' });

  return {
    props: {
      aboutPageContent: res.items,
    },
  };
}

const About = ({ aboutPageContent }) => {
  const {
    image, heading, introText, extendedText,
  } = aboutPageContent[0].fields;

  const [visible, setVisiblitly] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('read more');

  const showExtendedText = () => {
    setVisiblitly(!visible);
    if (visible === false) {
      setButtonLabel('read less');
    } else {
      setButtonLabel('read more');
    }
  };

  const extendedTextStyle = {
    display: visible ? 'block' : 'none',
    marginTop: '50px',
  };

  return (
    <div className={styles.main_container}>
      <img className={styles.image} src={`https:${image.fields.file.url}`} alt={image.fields.title} />
      <div className={`${styles.text_container} ${visible ? styles.text_open : ''}`}>
        <h1 className={styles.heading}>{heading}</h1>
        <p>{introText}</p>
        <p className={styles.extended_text} style={extendedTextStyle}>{extendedText}</p>
        <div className={styles.button_container}>
          <div className={styles.button} onClick={showExtendedText}>{buttonLabel}</div>
          <div className={styles.button}><a href="mailto:mail@nikitaschomerus.de">get in touch</a></div>
        </div>
      </div>
    </div>
  );
};

export default About;
