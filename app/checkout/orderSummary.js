import Link from 'next/link';
import React from 'react';
import { getProductsInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './checkoutPage.module.scss';

export default async function OrderSummary() {
  const products = await getProductsInsecure();

  // get the cookies
  const cookie = getCookie('cart');
  const productCookies = !cookie ? [] : parseJson(cookie);

  // check which workshops are in cookies
  const productsWithCookies = products.map((product) => {
    const productFromCookies = productCookies.find(
      (productCookie) => product.id === productCookie.id,
    );
    return { ...product, quantity: productFromCookies?.quantity };
  });

  // new variable with all products with quantity
  const productsInCart = productsWithCookies.filter(
    (product) => product.quantity,
  );

  const totalPrice = productsInCart.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0,
  );
  return (
    <div className={styles.orderSummary}>
      <div className={styles.orderContainer}>
        <h2 className={styles.headline}>Your Order Summary:</h2>
        <div>
          {productsInCart.map((product) => {
            return (
              <div
                key={`products-${product.id}`}
                data-test-id={`cart-product-${product.id}`}
              >
                <Link
                  href={`/products/${product.id}`}
                  data-test-id={`product-${product.id}`}
                >
                  <div className={styles.summaryWrapper}>
                    <div className={styles.headline}>
                      <h2>{product.name}</h2>
                    </div>
                    <div className={styles.productDetails}>
                      <div data-test-id="product-price">
                        Price: EUR {product.price}
                      </div>
                      <div data-test-id={`cart-product-quantity-${product.id}`}>
                        Quantity: {product.quantity}
                      </div>
                      <div>
                        Subtotal: EUR {product.price * product.quantity}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className={styles.totalPrice}>
          <div data-test-id="cart-total">Total: EUR {totalPrice}</div>
        </div>
      </div>
    </div>
  );
}
