import { getCookie } from './cookies';
import SetCookieForm from './SetCookieForm';

export default function SetCookiePage() {
  const testCookieValue = getCookie('testCookie');

  return (
    <>
      <div>Cookie Value: {testCookieValue}</div>
      <SetCookieForm />
    </>
  );
}
