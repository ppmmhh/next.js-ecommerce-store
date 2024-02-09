import { cookies } from 'next/headers';

export function getCookie(CookiePolicy) {
  const cookie = cookies().get(CookiePolicy);
  if (!cookie) {
    return undefined;
  }
  return cookie.value;
}
