import SetQuantityCounter from '../products/[productsID]/QuantityCounter';
import { getCookie } from './cookies';

export default function SetCookiePage() {
  const testCookieValue = getCookie('testCookie');

  return (
    <>
      <div>Cookie Value: {testCookieValue}</div>
      <SetQuantityCounter />
    </>
  );
}
