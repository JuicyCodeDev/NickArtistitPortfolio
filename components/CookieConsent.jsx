import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { setCookie, hasCookie } from 'cookies-next';
import styles from '../styles/Consent.module.css';

const CookieConsent = () => {
  const [consent, setConsent] = useState(true);
  useEffect(() => {
    setConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });
    // eslint-disable-next-line no-undef
    gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
    });
  };

  const denyCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 });
  };

  if (consent === true) {
    return null;
  }

  const container = {
    display: consent ? 'hidden' : 'flex',
  };

  return (
    <div style={container} className={styles.container}>
      <div className={styles.text}>
        We use third-party cookies to analyze web traffic.
        <Link href="/"><a className={styles.link}>Read more about cookies.</a></Link>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => denyCookie()}
          className={styles.denyButton}
        >
          Reject
        </button>
        <button
          onClick={() => {
            acceptCookie();
          }}
          className={styles.acceptButton}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
