import './globals.scss';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: {
    default: 'Home | The Apple Store',
    template: '%s | The Apple Store',
  },
  description: 'fresh from the orchard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div>
            {/* <add Cookies /> */}
            <nav>
              <a href="/">
                <img src="./images/logo.png" alt="Logo" className="logo" />
              </a>

              <Link href="/" className="navText">
                Home
              </Link>

              <Link href="/products" className="navText">
                Products
              </Link>

              <Link href="/about" className="navText">
                About
              </Link>

              <div className="cart-icon">
                <Link to="/cart">
                  <img src="./images/shoppingcart.png" alt="shoppingcart" />
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <main>{children}</main>

        <footer>Hello Footer</footer>
      </body>
    </html>
  );
}
