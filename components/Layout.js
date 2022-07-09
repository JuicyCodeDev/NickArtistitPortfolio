import Navbar from './Navbar'
import Head from 'next/head';

const Layout = ({ children }) => {
  
  return ( 
    <>
      <Head>
        <title>Nikita Schomerus</title>
      </Head>
      <Navbar />
      {children} 
    </>
  )
}
 
export default Layout;