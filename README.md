<h1>Next.js ecommerce store</h1>

<h2>About</h2>
This is an UpLeveled project, where I planned and created a full stack ecommerce website using next.js.

<h2>Technologies </h2>

- javascript
- next.js
- react
- typescript
- sass
- postgres

<h2>Screenshots</h2>

tba

<h2>Setup </h2>

1. Clone the repository

```
git clone https://github.com/julessre/nextjs-ecommerce-store.git
cd next-ecommerce-store
```

2. Install dependencies using

```
pnpm install
```

3. Setup postgres database

Create a file called .env in the project root directory and paste the following, changing to your own username, password and database:

```
PGHOST=localhost
PGUSERNAME=<your username>
PGPASSWORD=<your password>
PGDATABASE=<your database>
```

4. Connect to postgres database and run either:

```
psql -U <user name> <database name> on windows and macOS
sudo -u <user name> psql -U <user name> <database name> on Linux
```

5. Run application

```
pnpm dev
```

Open http://localhost:3000 on browser
