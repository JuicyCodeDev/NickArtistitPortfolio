import Head from 'next/head';
import Navbar from './Navbar.jsx';
import CookieConsent from './CookieConsent.jsx';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Nikita Schomerus</title>
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
    <Navbar />
    {children}
    <CookieConsent />
  </>
);

export default Layout;
