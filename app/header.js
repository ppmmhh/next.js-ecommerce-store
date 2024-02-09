import './globals.scss';
import './header.scss';
import React from 'react';

export default function Header() {
  return (
    <div>
      <div className="simpleSlides">
        <img
          className="slides animate-left"
          src="/images/apple02.jpeg"
          alt="apples"
        />
        <img
          className="slides animate-left"
          src="/images/apple01.webp"
          alt="apples in vase"
        />
        <img
          className="slides animate-left"
          src="/images/apple03.jpeg"
          alt="green apple"
        />
      </div>
      <div>
        <h1 className="text-on-image">
          there's gonna be a slideshow (eventually)
        </h1>
      </div>
    </div>
  );
}
