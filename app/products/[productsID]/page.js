import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct } from '../../../database/products';
import { styles } from './productpage.module.scss';

export function generateMetadata(props) {
  const singleProduct = getProduct(Number(props.params.productID));

  return {
    title: singleProduct?.title,
  };
}

export default function ProductPage(props) {
  const singleProduct = getProduct(Number(props.params.productID));

  if (!singleProduct) {
    notFound();
  }

  return (
    <div className={styles.sectionContainer}>
      <h1 className={styles.h1}>{singleProduct.title}</h1>
      <div className={styles.contentBoxGrid}>
        <div>
          <div className={styles.textBulletpoints}>
            <div>Name: {singleProduct.name}</div>
            <div>Origin: {singleProduct.origin}</div>
            <div>Price: EUR {singleProduct.price}</div>
          </div>
        </div>
        <div>
          <Image
            src={singleProduct.image}
            width={300}
            height={300}
            alt={singleProduct.title}
            data-test-id="product-image"
          />
        </div>
      </div>
    </div>
  );
}
