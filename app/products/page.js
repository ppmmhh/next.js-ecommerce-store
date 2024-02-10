import Image from 'next/image';
import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';
import styles from './page.module.scss';

export const metadata = {
  title: 'Products',
  description: 'Choose from our variety of products',
};

export default async function ProductsPage() {
  const products = await getProductsInsecure();

  return (
    <div className={styles.sectionContainer}>
      <div>
        <h1>Freshly picked for you</h1>
      </div>
      <div className={styles.productContainer}>
        {products.map((product) => (
          <div key={`product-${product.id}`} className={styles.productItem}>
            <Link
              href={`/products/${product.id}`}
              data-test-id={`product-${product.id}`}
              className={styles.productItem}
            >
              <Image
                src={product.image}
                width={400}
                height={400}
                alt={product.name}
                className={styles.productImage}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
