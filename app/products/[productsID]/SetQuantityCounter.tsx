'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { addToCart } from './actions';
import styles from './productpage.module.scss';

type Props = {
  productID: number;
};

export default function SetQuantityForm(props: Props) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  return (
    <div>
      <form>
        <select
          value={quantity}
          onChange={(event) => setQuantity(Number(event.currentTarget.value))}
          className={styles.quantity}
          data-test-id="product-quantity"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <button
          data-test-id="product-add-to-cart"
          formAction={async () => {
            router.refresh();
            await addToCart(props.productID, Number(quantity));
          }}
        >
          Add To Cart
        </button>
      </form>
    </div>
  );
}
