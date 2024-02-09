import Image from 'next/image';
import Link from 'next/link';
import { getProductsInsecure } from '../../database/database';

export const metadata = {
  title: {
    default: 'Products',
  },
  description: 'Choose from our variety of apples',
};

export default async function ProductPage() {
  const products = await getProductsInsecure();

  return (
    <>
      <div>Freshly picked for you:</div>
      {products.map((product) => {
        return (
          <div key={`products-${product.id}`}>
            <Link href={`/products/${product.id}`}>
              <h1>{product.name}</h1>

              <Image
                src={`/images/${product.name}.png`}
                alt="Alt text"
                width={400}
                height={400}
              />
            </Link>
          </div>
        );
      })}
    </>
  );
}
