'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export type ProductCookie = {
  id: number;
  quantity: number;
};

export async function addToCart(productID: number, quantity: number) {
  const productsQuantityCookie = getCookie('cart');

  const productsQuantity = !productsQuantityCookie
    ? []
    : parseJson(productsQuantityCookie);

  const productToAdd = productsQuantity.find(
    (productQuantity: ProductCookie) => {
      return productQuantity.id === productID;
    },
  );

  if (!productToAdd) {
    productsQuantity.push({ id: productID, quantity: quantity });
  } else {
    productToAdd.quantity = Number(productToAdd.quantity) + Number(quantity);
  }

  await cookies().set('cart', JSON.stringify(productsQuantity));
}
