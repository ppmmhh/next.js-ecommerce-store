import React from 'react';
import styles from './page.module.scss';

export const metadata = {
  title: 'Thank you',
  description: 'This page confirms the order',
};

export default function thankYouPage() {
  return (
    <main className={styles.sectionContainer}>
      <h1>Thank you!</h1>
      <div className={styles.thankyouText}>
        We're off to the orchard to pick your order!
      </div>
    </main>
  );
}
