import 'server-only';
import { cache } from 'react';
import { sql } from './connect';

type Product = {
  id: number;
  name: string;
  origin: string;
  price: string;
  description: string | null;
};

// get all products
export const getProductsInsecure = cache(async () => {
  const products = await sql<Product[]>`
    SELECT
      *
    FROM
      products
  `;
  return products;
});

export const getProductInsecure = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;
  return product;
});
