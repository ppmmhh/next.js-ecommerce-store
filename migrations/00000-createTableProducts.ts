import { Sql } from 'postgres';

export type Product = {
  id: number;
  name: string;
  origin: string;
  image: string;
  price: number;
  description: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
      id integer PRIMARY key generated always AS identity,
      name varchar(40) NOT NULL,
      origin varchar(40) NOT NULL,
      image varchar NOT NULL,
      price integer NOT NULL,
      description varchar NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE products`;
}
