import Link from 'next/link';
import styles from '../styles/SlidingMenu.module.css'
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const SlidingMenu = ({toggleMenu, menuOpen}) => {

  const [height, setHeight] = useState(null);

  useEffect(() => {
    setHeight(window.innerHeight);
  },[]);

  const showWhenVisable = {
    transform: menuOpen ? 'translateY(0px)' : `translateY(-${height}px)`,
    height: height,
    transition: 'all .75s ease',
    backdropFilter: 'blur(45px)',
  }

  return (
    <div style={showWhenVisable} className={styles.slidingMenu}>
      <Link href="/"><div onClick={toggleMenu}>Gallery</div></Link>
      <Link href="/about"><div onClick={toggleMenu}>About</div></Link>
      <Link href="/latest"><div onClick={toggleMenu}>Latest</div></Link>
      <Link href="/contact"><div onClick={toggleMenu}>Contact</div></Link>
      <div className={styles.fontAwesomeIcon}>
        <FontAwesomeIcon icon={faInstagram} />
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