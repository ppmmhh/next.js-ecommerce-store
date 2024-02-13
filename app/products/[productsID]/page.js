import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { getProductInsecure } from '../../../database/products';
import { parseJson } from '../../../util/json';
import { getCookie } from '../../cookies/cookies';
import styles from './productpage.module.scss';
import SetQuantityCounter from './QuantityCounter';

export function generateMetadata(props) {
  const singleProduct = getProductInsecure(props.params.productID);

  return {
    title: singleProduct?.name,
  };
}

export default async function productPage(props) {
  const singleProduct = await getProductInsecure(props.params.productID);

  const productsQuantityCookie = getCookie('quantityCookie');

  const productsQuantity = !productsQuantityCookie
    ? []
    : parseJson(productsQuantityCookie);

  const quantitiesToDisplay = productsQuantity.find((productQuantity) => {
    return productQuantity.id === singleProduct.id;
  });

  if (!singleProduct) {
    notFound();
  }
  return (
    <div className={styles.sectionContainer}>
      <h1 className={styles.h1}>{singleProduct.name}</h1>
      <div className={styles.contentBoxGrid}>
        <div>
          <div className={styles.textHighlight}>
            <div>Origin: {singleProduct.origin}</div>
            <div>Price: EUR {singleProduct.price}</div>
          </div>
          <div className={styles.description}>{singleProduct.description}</div>
        </div>
        <div>
          <Image
            src={singleProduct.image}
            width={499}
            height={494}
            alt={singleProduct.name}
            data-test-id="product-image"
          />
        </div>
      </div>
      <div className={styles.buyNowWrapper}>
        <div>{quantitiesToDisplay?.quantity}</div>
        <SetQuantityCounter productId={singleProduct.id} />
      </div>
    </div>
  );
}
