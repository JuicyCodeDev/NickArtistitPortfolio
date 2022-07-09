import { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import BurgerMenuIcon from './BurgerMenuIcon';
import SlidingMenu from './SlidingMenu'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return ( 
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.name}>NIKITA SCHOMERUS</div>
          <BurgerMenuIcon toggleMenu={toggleMenu} menuOpen={menuOpen} /> 
        </div>
      </nav>
      <SlidingMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
    </>
    );
}
 
export default Navbar;