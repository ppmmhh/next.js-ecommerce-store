import 'server-only';
import { cache } from 'react';
import { sql } from './connect';

export const getProductsInsecure = cache(async () => {
  const products = await sql<
    {
      id: number;
      name: string;
      origin: string;
      image: string;
      price: number;
      description: string;
    }[]
  >`
    SELECT
      *
    FROM
      products
  `;

  return products;
});

export const getProductInsecure = cache(async () => {
  const [product] = await sql<
    {
      id: number;
      name: string;
      origin: string;
      image: string;
      price: number;
      description: string;
    }[]
  >`
    SELECT
      *
    FROM
      products
  `;

  return product;
});
