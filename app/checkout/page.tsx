import React from 'react';
import CheckoutPage from './checkoutPage';
import styles from './checkoutPage.module.scss';
import OrderSummary from './orderSummary';

export default function checkout() {
  return (
    <div className={styles.pageContainer}>
      <CheckoutPage />
      <OrderSummary />
    </div>
  );
}
