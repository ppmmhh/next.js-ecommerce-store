import { cache } from 'react';
import { Product } from '../migrations/00000-createTableProducts';
import { sql } from './connect';

export const getProductsInsecure = cache(async () => {
  const products = await sql<Product[]>`
    SELECT
      *
    FROM
      products
  `;

  return products;
});

export const getProductInsecure = cache(async () => {
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
      products
  `;

  return product;
});
