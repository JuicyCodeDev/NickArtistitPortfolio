import '../styles/globals.css';
import { motion } from 'framer-motion';
import { config as fontawesomeConfig } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { getCookie } from 'cookies-next';
import Script from 'next/script';
import Layout from '../components/Layout.jsx';

fontawesomeConfig.autoAddCss = false;

const MyApp = ({ Component, pageProps, router }) => {
  const consent = getCookie('localConsent');
  return (
    <>
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}

              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied'
              });

              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-NX7TLV2');`,
        }}
      />

      {consent === true && (
      <Script
        id="consupd"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                  gtag('consent', 'update', {
                    'ad_storage': 'granted',
                    'analytics_storage': 'granted'
                  });
                `,
        }}
      />
      )}
      <Layout>

        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          transition={{ ease: 'easeIn', duration: 0.4 }}
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </>
  );
};

export default MyApp;
