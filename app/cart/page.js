import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getProductsInsecure } from '../../database/products';
import { parseJson } from '../../util/json';
import { getCookie } from '../cookies/cookies';
import styles from './page.module.scss';
import RemoveButton from './RemoveButton';

export const metadata = {
  title: { default: 'Cart' },
  description: 'All of the apples in the basket',
};

export default async function CartPage() {
  const products = await getProductsInsecure();

  const cookie = getCookie('cart');
  const productCookies = !cookie ? [] : parseJson(cookie);

  const productsWithCookies = products.map((product) => {
    const productFromCookies = productCookies.find(
      (productCookie) => product.id === productCookie.id,
    );
    return { ...product, quantity: productFromCookies?.quantity };
  });

  const productsInCart = productsWithCookies.filter(
    (product) => product.quantity,
  );

  const totalPrice = productsInCart.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0,
  );

  return (
    <div className={styles.sectionContainer}>
      <div>
        <h1>Your Cart:</h1>
      </div>
      <div className={styles.productContainer}>
        {productsInCart.map((product) => {
          return (
            <div
              key={`products-${product.id}`}
              data-test-id={`cart-product-${product.id}`}
              className={styles.productItem}
            >
              <Link
                href={`/products/${product.id}`}
                data-test-id={`product-${product.id}`}
              >
                <Image
                  src={product.image}
                  width={250}
                  height={300}
                  alt={product.name}
                  className={styles.productImage}
                />
              </Link>
              <div className={styles.productDetails}>
                <div className={styles.headline}>
                  <h2>{product.name}</h2>
                </div>
                <div>
                  <div>Origin: {product.origin}</div>
                  <div data-test-id="product-price">
                    Price: EUR {product.price}
                  </div>
                  <div data-test-id={`cart-product-quantity-${product.id}`}>
                    Quantity: {product.quantity}
                  </div>
                  <div>Total: EUR {product.price * product.quantity}</div>
                </div>
                <div data-test-id={`cart-product-remove-${product.id}`}>
                  <RemoveButton product={product} />
                </div>
                <br />
              </div>
              {/* </Link> */}
            </div>
          );
        })}
      </div>
      <div className={styles.line} />
      <div className={styles.sectionCheckout}>
        <div className={styles.totalPrice} data-test-id="cart-total">
          Total: EUR {totalPrice}
        </div>
        <div>
          <Link
            href="/checkout"
            type="button"
            data-test-id="cart-checkout"
            className={styles.checkoutButton}
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
