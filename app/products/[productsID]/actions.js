'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function adaptCookie(productID, quantity) {
  const productsQuantityCookie = getCookie('productsQuantity');

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

  await cookies().set('productsQuantity', JSON.stringify(productsQuantity));
}
