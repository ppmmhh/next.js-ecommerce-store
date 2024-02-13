'use server';

import { cookies } from 'next/headers';
import { parseJson } from '../../util/json';
import { getCookie } from '../cookies/cookies';

export default async function removeItem(product) {
  const cookie = getCookie('cart');
  const productCookies = !cookie ? [] : parseJson(cookie);

  const removeProduct = productCookies.filter((productCookie) => {
    return product.id !== productCookie.id;
  });

  await cookies().set('cart', JSON.stringify(removeProduct));
}
