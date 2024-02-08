import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getProductsInsecure } from '../database/database';
import styles from './page.module.scss';

export const metadata = {
  title: 'Products',
  description: 'Discover the whole variety',
};

export default async function ProductsPage() {
  const products = await getProductsInsecure();

  return (
    <div className={styles.sectionContainer}>
      <div>
        <h1>All of our Apples</h1>
      </div>
      <div>
        <div className={styles.productContainer}>
          {products.map((product) => {
            return (
              <div key={`products-${product.id}`}>
                <Link
                  href={`/products/${product.id}`}
                  data-test-id={`product-${product.id}`}
                  className={styles.productItem}
                >
                  <Image
                    src={product.image}
                    width={300}
                    height={300}
                    alt={product.name}
                    className={styles.productImage}
                  />
                  <div className={styles.productDetails}>
                    <div className={styles.headline}>
                      <h2>{product.name}</h2>
                    </div>
                    <div>Origin: {product.origin}</div>
                    <div data-test-id="product-price">
                      Price: EUR {product.price}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
