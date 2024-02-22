import './globals.scss';
import './header.scss';
import React from 'react';

export default function Header() {
  return (
    <div>
      <img className="heroimages" src="/images/apple02.jpeg" alt="apples" />
      <div>
        <h1 className="text-on-image">munch munch crunch crunch</h1>
      </div>
    </div>
  );
}
