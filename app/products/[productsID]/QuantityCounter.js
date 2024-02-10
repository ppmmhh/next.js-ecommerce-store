'use client';

import React, { useState } from 'react';
import { adaptCookie } from './actions';
import styles from './productpage.module.scss';

export default function SetQuantityCounter(props) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <form>
        <select
          value={quantity}
          onChange={(event) => setQuantity(event.currentTarget.value)}
          className={styles.quantity}
          data-test-id="product-quantity"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button
          formAction={async () => await adaptCookie(props.productID, quantity)}
        >
          Buy Now
        </button>
      </form>
    </div>
  );
}
