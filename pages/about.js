import styles from '../styles/About.module.css'
import { useState } from 'react';

const About = () => {

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
      <img className={styles.image} src='/about_image.png' alt='Ein Bild von Nikita Schomerus'/>
      <div className={`${styles.about} ${visible ? styles.about_open : ""}`}>
        <div className={styles.heading}>Intuitive Paintings inspired by classical music</div>
        <div className={styles.introText}>Für die Umsetzungen benutze ich nur wenige Skizzen für ein Grundgerüst und grundsätzlich keine Fotografien. In meinen Augen beraubt jegliches Abzeichnen von Momentaufnahmen das Bild an Dynamik und Wirklichkeit. Ich kratze das Bild aus dem Kopf auf die Leinwand. In diesem Prozess ändert sich Vieles, durch Zufall oder neue Einfälle – am Ende dient alles dem Motiv und seiner emotionalen Welt.</div>
        <div className={styles.extendedText} style={extendedText_style}>Geboren wurde ich im russischen Sankt Petersburg, lebe jedoch seit meinem zehnten Lebensjahr in Berlin. Bereits als kleiner Junge zeichnete und malte ich leidenschaftlich gerne. Meine Mutter war bemüht diese Leidenschaft früh zu fördern und meldete mich zu verschiedenen Kursen und Zirkeln an. Leider konnte ich weder in Russland noch in Berlin einen Zugang zu den Veranstaltungen finden. Mich dem Malen anhand von vorgegebenen Aufgabenstellungen und Richtlinien zu nähern, hat sich für mich als Einschränkung der freien Entfaltung meiner Kreativität angefühlt und ließ mich nach und nach den Spaß an der Sache verlieren.

Es folgten emotionale Jahre der Pubertät geprägt von Selbstfindung und Rebellion. Künstlerisch identifizierte ich mich mit verschiedenen Strömungen der Streetart. Der Bruch mit gesellschaftlich akzeptierten künstlerischen Normen, sowie das ständige Streben nach Innovation, waren Aspekte die mich faszinierten. Ich durchlebte sowohl persönlich als auch künstlerisch eine intensive Jugend.

Mit Anfang 20 zog es mich mit dem Auszug aus dem Elternhaus zurück zu „klassischeren“ Methoden. Ich entdecke die Ölmalerei für mich und begann plötzlich eine Leinwand nach der anderen zu bemalen.
Einhergehend mit der neu erweckten Leidenschaft entwickelte ich ein tiefes Interesse für das Schaffen alter Meister. Die Dramatik der Chiaroscuro-Malerei, sowie die Seriosität sakraler Malerei hinterließen einen immensen Eindruck auf mich.

Den größten Einfluss auf meine Bilder hat jedoch die klassische Musik. Als junger Erwachsener stieß ich zufällig auf ein Stück, das ich aus meiner Kindheit kannte. Das Hörerlebnis hinterließ in mir ein emotionales Empfinden, welches mir in seiner Vehemenz vorher in Verbindung mit jeglicher Art von Kunst unbekannt war. Es entwickelte sich zu meiner bedeutendsten Inspirationsquelle und manifestierte sich in dem Anspruch, bei der Fertigstellung eines Werkes ein Gefühl mit der selben Intensität zu spüren.</div>
        <div className={styles.buttonContainer}>
          <div className={styles.button} onClick={show_extendedText}>{buttonLabel}</div>
          <div className={styles.button}><a href={"mailto:mail@nikitaschomerus.de"}>get in touch</a></div>
        </div>
      </div>
    </div> );
}
 
export default About;