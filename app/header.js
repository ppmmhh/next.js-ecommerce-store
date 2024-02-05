import './globals.scss';
import './header.scss';
import React from 'react';

export default function Header() {
  return (
    <div>
      <img src="/images/apples_hero.jpeg" alt="apples in basket" />
      <h1 className="text-on-image">Welcome to the app store</h1>
    </div>
  );
}
