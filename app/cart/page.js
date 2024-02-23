import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getProductsInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import ChangeQuantity from './ChangeQuantity.tsx';
import styles from './page.module.scss';
import RemoveButton from './RemoveButton';

export const metadata = {
  title: { default: 'Cart' },
  description: 'This page is showing all of the apples in the basket',
};

export default async function CartPage() {
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
    <div className={styles.sectionContainer}>
      <div>
        <h1>Your Cart:</h1>
      </div>
      <div className={styles.productContainer}>
        {productsInCart.map((product) => {
          const productSubTotal = () => {
            return Number(product.quantity) * Number(product.price);
          };
          return (
            <div
              key={`products-${product.id}`}
              data-test-id={`cart-product-${Number(product.id)}`}
              className={styles.productItem}
            >
              <Link href={`/products/${product.id}`}>
                <Image
                  src={product.image}
                  width={250}
                  height={250}
                  alt={product.name}
                  className={styles.productImage}
                />
              </Link>
              <div className={styles.productDetails}>
                <div className={styles.headline}>
                  <h2>{product.name}</h2>
                </div>
                <div>
                  <div data-test-id="product-price">
                    Price: EUR {product.price}
                  </div>
                  <div>
                    <ChangeQuantity product={product} />
                  </div>
                  <div>Total Basket of Apples: EUR {productSubTotal()}</div>
                </div>
                <div>
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
        <div className={styles.totalPrice}>
          Total: EUR <span data-test-id="cart-total">{totalPrice}</span>
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
