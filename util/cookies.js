import { cookies } from 'next/headers';

export function getCookie(name) {
  const cookie = cookies().get(name);
  if (!cookie) {
    return undefined;
  }
  return cookie.value;
}
