import Link from 'next/link';

export default function RootNotFound() {
  return (
    <div>
      It looks like the page doesn't exist.
      <Link href="/">Take me back!</Link>
    </div>
  );
}
