import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { getProductInsecure } from '../../../database/products';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import styles from './productpage.module.scss';
import SetQuantityCounter from './SetQuantityCounter.tsx';

export async function generateMetadata(props) {
  const singleProduct = await getProductInsecure(props.params.productID);

  return {
    title: singleProduct?.name,
  };
}

export default async function productPage(props) {
  const singleProduct = await getProductInsecure(
    Number(props.params.productID),
  );

  if (!singleProduct) {
    notFound();
  }

  // get cookie and parse it
  const productsQuantityCookie = getCookie('quantityCookie');

  const productsQuantity = !productsQuantityCookie
    ? []
    : parseJson(productsQuantityCookie);

  const quantitiesToDisplay = productsQuantity.find((productQuantity) => {
    return productQuantity.id === singleProduct.id;
  });

  return (
    <div className={styles.sectionContainer}>
      <h1 className={styles.h1}>{singleProduct.name}</h1>
      <div className={styles.contentBoxGrid}>
        <div>
          <div className={styles.textHighlight}>
            <div>Origin: {singleProduct.origin}</div>
            <div>
              Price:{' '}
              <span data-test-id="product-price">{singleProduct.price}</span>{' '}
              EUR
            </div>
          </div>
          <div className={styles.description}>{singleProduct.description}</div>
        </div>
        <div>
          <Image
            src={singleProduct.image}
            width={250}
            height={300}
            alt={singleProduct.name}
            data-test-id="product-image"
          />
        </div>
      </div>
      <div className={styles.buyNowWrapper}>
        <div>{quantitiesToDisplay?.quantity}</div>
        <SetQuantityCounter productID={singleProduct.id} />
      </div>
    </div>
  );
}
