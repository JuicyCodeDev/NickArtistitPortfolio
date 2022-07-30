import Layout from '../components/Layout'
import '../styles/globals.css'
import { motion } from 'framer-motion'
import { config as fontawesomeConfig } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

fontawesomeConfig.autoAddCss = false;

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <motion.div key={router.route} initial='pageInitial' animate='pageAnimate' transition={{ ease: "easeIn", duration: 0.4 }} variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        }
      }}>
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  )
}

export default MyApp
