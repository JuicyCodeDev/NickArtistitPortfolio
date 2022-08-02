import Head from 'next/head';
import Navbar from './Navbar.jsx';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Nikita Schomerus</title>
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
    <Navbar />
    {children}
  </>
);

export default Layout;
