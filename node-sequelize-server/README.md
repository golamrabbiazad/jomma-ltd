# Jomma Back-end with Node.js

Jomma is a digital investment marketplace for stocks, bonds and mutual funds. Invest now, secure your future.

## Tech used

- TypeScript
- Express.js
- Oracle 19c
- Sequelize

## Install Dependecies

Node.js (>= v18) should be installed on local machine.

```bash
npm i
```

## Database Configuration

To run this server database configuration properties followed.

```bash
# ORACLE DATABASE CREDENTIALS
DB_HOST="localhost"
DB_NAME="XEPDB1"
DB_PORT="1521"
DB_USER="jomma_admin"
DB_PASSWORD="root6969R"
```

## Creating Tables

At this point, there is no table, Sequelize will create for us.

```bash
npm run seed
```

## Seed Data to DB

once again, we have to run this command to populate or initialize data to DB.

```bash
npm run seed
```

Now, we are ready to run the server.

## Development

To run the server,

```bash
npm run dev
```

The server is running port <http://localhost:8080>

### API Endpoints

- `/api/v1/products` [GET]

- `/api/v1/transactions` [POST]

the payload for transactions,

```json
[
  {
    "unit_price": 23.47,
    "product_id": 2
  },
  {
    "unit_price": 53.47,
    "product_id": 1
  }
]
```

- transaction_id will auto-generated.
- user_id is defaulted to 1.
- created_on is generated with `new Date()` API.

### For Build the project

```bash
npm run build
```

Then to run the project,

```bash
npm run start
```

The production server is running port <http://localhost:8080>
