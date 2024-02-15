import { Sql } from 'postgres';

export type Product = {
  id: number;
  name: string;
  origin: string;
  image: string;
  price: string;
  description: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
      id integer PRIMARY key generated always AS identity,
      name varchar(40) NOT NULL,
      origin varchar(40) NOT NULL,
      price varchar(10) NOT NULL,
      description varchar NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE products`;
}
