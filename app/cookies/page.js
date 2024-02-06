import { getCookie } from '../../util/cookies.js';
import SetCookieForm from './SetCookieForm.js';

export default function SetCookiePage() {
  const testCookieValue = getCookie('testCookie');

  return (
    <>
      <div>Cookie Value: {testCookieValue}</div>
      <SetCookieForm />
    </>
  );
}
