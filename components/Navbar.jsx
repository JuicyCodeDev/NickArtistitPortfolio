import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import BurgerMenuIcon from './BurgerMenuIcon.jsx';
import SlidingMenu from './SlidingMenu';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/"><a><div className={styles.name_logo}>NIKITA SCHOMERUS</div></a></Link>
          <BurgerMenuIcon toggleMenu={toggleMenu} menuOpen={menuOpen} />
        </div>
      </nav>
      <SlidingMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
    </>
  );
};

export default Navbar;
