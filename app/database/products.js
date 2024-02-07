// import 'server-only';

const products = [
  {
    id: 1,
    name: 'Baya Marisa',
    origin: 'string',
    image: `/images/bayamarisa.jpeg`,
    price: 89,
    currency: '€',
    description: `
 Color: dark red with striking red flesh
 Taste: extra tangy, very juicy
 Shape: medium to large, round fruit
 Ripeness: End of August
 Use: very attractive in appearance, therefore great for baking
 Storability: until December`,
  },
  {
    id: 2,
    name: 'Kronprinz Rudolf',
    origin: 'string',
    image: `/images/kronprinzrudolf.jpeg`,
    price: 99,
    currency: '€',
    description: `
 Color: attractively yellow-red
 Taste: very juicy, balanced and sweet-winey
 Shape: rather flattened - saturn-shaped with a short stem
 Ripeness: October-November
 Use: raw or as applesauce
 Storability: until February`,
  },
  {
    id: 3,
    name: 'Granny Smith',
    origin: 'string',
    image: `/images/grannysmith.jpeg`,
    price: 109,
    currency: '€',
    description: `
 Color: grass green, sometimes blush pink
 Taste: crisp, fruity, sour
 Shape: medium to large, round
 Ripeness: End of October
 Use: excellent as a snack or in salads; for cooking and baking (does not turn mushy when baked
 Storability: until April or even longer`,
  },
  {
    id: 4,
    name: 'Pinova',
    origin: 'string',
    image: `/images/pinova.jpeg`,
    price: 39,
    currency: '€',
    description: `
 Color: Yellow base color, orange-red blush
 Taste: Sweet-tart, aromatic, and spicy
 Shape: Small to medium-sized, round
 Ripeness: Early to mid-October
 Use: Excellent for snacking, also suitable for cooking and baking
 Storability: Chilled, lasts until about March`,
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}
