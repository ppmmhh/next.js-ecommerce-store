const apples = [
  {
    id: 1,
    title: 'Baya Marisa',
    origin: 'string',
    image: `/images/bayamarisa.jpeg`,
    price: 89,
    currency: '€',
    soldOut: false,
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
    title: 'Kronprinz Rudol',
    origin: 'string',
    image: `/images/kronprinzrudolf.jpeg`,
    price: 89,
    currency: '€',
    soldOut: false,
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
    title: 'Granny Smith',
    origin: 'string',
    image: `/images/grannysmith.jpeg`,
    price: 109,
    currency: '€',
    soldOut: false,
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
    title: 'Pinova',
    origin: 'string',
    image: `/images/pinova.jpeg`,
    price: 39,
    currency: '€',
    soldOut: false,
    description: `
    Color: Yellow base color, orange-red blush
    Taste: Sweet-tart, aromatic, and spicy
    Shape: Small to medium-sized, round
    Ripeness: Early to mid-October
    Use: Excellent for snacking, also suitable for cooking and baking
    Storability: Chilled, lasts until about March`,
  },
];

export function getApples() {
  return apples;
}

export function getApple(id) {
  return apples.find((apple) => apple.id === id);
}
