import { Sql } from 'postgres';

const products = [
  {
    id: 1,
    name: 'Baya Marisa',
    origin: 'Bavaria',
    image: `/images/baya-marisa.jpeg`,
    price: 89,
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
    origin: 'Styria',
    image: `/images/kronprinz-rudolf.jpeg`,
    price: 99,
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
    origin: 'Burgenland',
    image: `/images/granny-smith.jpeg`,
    price: 109,
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
    origin: 'South Tyrol',
    image: `/images/pinova.jpeg`,
    price: 39,
    description: `
Color: Yellow base color, orange-red blush
Taste: Sweet-tart, aromatic, and spicy
Shape: Small to medium-sized, round
Ripeness: Early to mid-October
Use: Excellent for snacking, also suitable for cooking and baking
Storability: Chilled, lasts until about March`,
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
      INSERT INTO
        products (
          name,
          origin,
          image,
          price,
          description
        )
      VALUES
        (
          ${product.name},
          ${product.origin},
          ${product.image},
          ${product.price},
          ${product.description}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM products
      WHERE
        id = ${product.id}
    `;
  }
}
