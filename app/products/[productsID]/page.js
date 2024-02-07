import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import { styles } from './productpage.module.scss';
import SetQuantityForm from './QuantityForm';

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
      <h1 className={styles.h1}>{singleProduct.title}</h1>
      <div className={styles.contentBoxGrid}>
        <div>
          <div className={styles.textHighlight}>
            <div>Name: {singleProduct.name}</div>
            <div>Origin: {singleProduct.origin}</div>
            <div>Price: {singleProduct.price}</div>
          </div>
          <div className={styles.description}>{singleProduct.description}</div>
        </div>
        <div>
          <Image
            src={singleProduct.image}
            width={250}
            height={300}
            alt={singleProduct.title}
            data-test-id="product-image"
          />
        </div>
      </div>
      <div>{quantitiesToDisplay?.quantity}</div>
      <SetQuantityForm productID={singleProduct.id} />
    </div>
  );
}
