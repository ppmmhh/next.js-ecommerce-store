import { getCookie } from '../../util/cookies';
import SetQuantityCounter from '../products/[productsID]/SetQuantityCounter';

export default function SetCookiePage() {
  const testCookieValue = getCookie('testCookie');

  return (
    <>
      <div>Cookie Value: {testCookieValue}</div>
      <SetQuantityCounter />
    </>
  );
}
