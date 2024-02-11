import 'server-only';
import { cache } from 'react';
import { sql } from './connect';

type Product = {
  id: number;
  name: string | null;
  origin: string | null;
  price: string | null;
  description: string | null;
};

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
