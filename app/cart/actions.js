'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default async function removeItem(product) {
  const cookie = getCookie('cart');
  const productCookies = !cookie ? [] : parseJson(cookie);

  const removeProduct = productCookies.filter((productCookie) => {
    return product.id !== productCookie.id;
  });

  await cookies().set('cart', JSON.stringify(removeProduct));
}

export async function reduceQuantity(product) {
  const cookie = getCookie('cart');
  const productCookies = !cookie ? [] : parseJson(cookie);

  const decreaseProduct = productCookies?.find((productCookie) => {
    return product.id === productCookie.id;
  });

  if (decreaseProduct.quantity > 1) {
    decreaseProduct.quantity -= 1;
  } else {
    decreaseProduct.quantity = 1;
  }

  await cookies().set('cart', JSON.stringify(productCookies));
}

export async function addQuantity(product) {
  const cookie = getCookie('cart');
  const productCookies = !cookie ? [] : parseJson(cookie);

  const increaseProduct = productCookies?.find((productCookie) => {
    return product.id === productCookie.id;
  });

  increaseProduct.quantity += 1;

  await cookies().set('cart', JSON.stringify(productCookies));
}
