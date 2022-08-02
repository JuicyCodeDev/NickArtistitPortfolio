import Link from 'next/link';
import styles from '../styles/SlidingMenu.module.css'
import useWindowHeight from '../hooks/useWindowHeight'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faPatreon } from '@fortawesome/free-brands-svg-icons'

const SlidingMenu = ({toggleMenu, menuOpen}) => {

  const height = useWindowHeight();

  const showWhenVisable = {
    height: height,
    transform: menuOpen ? 'translateY(1px)' : `translateY(-${height}px)`,
    transition: 'all .75s ease',
  }

  return (
    <div style={showWhenVisable} className={styles.main_container}>
      <Link href="/"><div onClick={toggleMenu} className={styles.menu_item}>Gallery</div></Link>
      <Link href="/latest"><div onClick={toggleMenu} className={styles.menu_item}>Latest</div></Link>
      <Link href="/about"><div onClick={toggleMenu} className={styles.menu_item}>About</div></Link>
      <Link href="/contact"><div onClick={toggleMenu} className={styles.menu_item}>Contact</div></Link>
      <div className={styles.icon_container}>
        <a href="https://www.instagram.com/nikita_schomerus/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.patreon.com/nikita_schomerus" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faPatreon} /></a>
      </div>
      <Link href="/impressumDatenschutz">
        <div onClick={toggleMenu} className={styles.footer}>
          <div>Impressum | Copyright by Nikita Schomerus | Datenschutz</div>
        </div>
      </Link>
    </div>

    );
}
 
export default SlidingMenu;