'use server';

import { cookies } from 'next/headers';
import { parseJson } from '../../../util/json';
import { getCookie } from '../../cookies/cookies';

export async function addToCart(productID, quantity) {
  const productsQuantityCookie = getCookie('cart');

  const productsQuantity = !productsQuantityCookie
    ? []
    : parseJson(productsQuantityCookie);

  const productToAdd = productsQuantity.find((productQuantity) => {
    return productQuantity.id === productID;
  });

  if (!productToAdd) {
    productsQuantity.push({ id: productID, quantity: quantity });
  } else {
    productToAdd.quantity = quantity;
  }

  await cookies().set('cart', JSON.stringify(productsQuantity));
}
