import './globals.scss';
import Link from 'next/link';
import React from 'react';
import CartBadge from './cart/CartBadge';

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
            <nav className="nav">
              <a href="/">
                <img src="./images/logo.png" alt="Logo" className="logo" />
              </a>

              <Link href="/" className="navText">
                Home
              </Link>

              <Link
                href="/products"
                className="navText"
                data-test-id="products-link"
              >
                Products
              </Link>

              <Link href="/about" className="navText">
                About
              </Link>

              <div className="cart-icon" data-test-id="cart-link">
                <a href="/cart">
                  <CartBadge />
                  <img
                    src="./images/shoppingcart.png"
                    alt="shoppingcart"
                    height={30}
                    width={30}
                  />
                </a>
              </div>
            </nav>
          </div>
        </header>
        <main>{children}</main>

        <footer>© The Apple Store 2024</footer>
      </body>
    </html>
  );
}
