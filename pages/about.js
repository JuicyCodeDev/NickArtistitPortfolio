import styles from '../styles/About.module.css'
import { useState } from 'react'
import  { createClient } from 'contentful'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'aboutPage'})

  return {
    props: {
      aboutPageContent: res.items
    }
  }

}

const About = ({ aboutPageContent }) => {

  console.log(aboutPageContent[0].fields.image.fields.file.url)

  const [visible, setVisiblitly] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("read more")

  const show_extendedText = () => {
    setVisiblitly(!visible);
    if (visible === false) {
      setButtonLabel("read less")
    } else {
      setButtonLabel("read more")
    }
  }

  const extendedText_style = {
    display: visible ? "block" : "none",
  }

  return (  
    <div className={styles.main_container}>
      <img className={styles.image} src={'http:' + aboutPageContent[0].fields.image.fields.file.url} alt='Ein Bild von Nikita Schomerus'/>
      <div className={`${styles.about} ${visible ? styles.about_open : ""}`}>
        <div className={styles.heading}>{aboutPageContent[0].fields.heading}</div>
        <div className={styles.introText}>{aboutPageContent[0].fields.introText}</div>
        <div className={styles.extendedText} style={extendedText_style}>{aboutPageContent[0].fields.extendedText}</div>
        <div className={styles.buttonContainer}>
          <div className={styles.button} onClick={show_extendedText}>{buttonLabel}</div>
          <div className={styles.button}><a href={"mailto:mail@nikitaschomerus.de"}>get in touch</a></div>
        </div>
      </div>
    </div> );
}
 
export default About;
