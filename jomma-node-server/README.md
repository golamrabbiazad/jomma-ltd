# Jomma Back-end with Node.js

Jomma is a digital investment marketplace for stocks, bonds and mutual funds. Invest now, secure your future.

## Tech used

- TypeScript
- Express.js
- Oracle 19c
- TypeORM

## Usage

Node.js (>= v18) should be installed on local machine.

```bash
# I have test there isn't problem of breaking changes.
npm i --force
npm run seed:data
```

## Database Configuration

To run this server database configuration properties followed to create the .env file

```bash
# ORACLE DATABASE CREDENTIALS
DB_HOST="localhost"
DB_NAME="XEPDB1"
DB_PORT="1521"
DB_USER="jomma_admin"
DB_PASSWORD="root6969R"
```

### Development

To run the server,

```bash
npm run dev
```

The server is running port <http://localhost:8080>

### API End points

- `/api/v1/products` [GET]

- `/api/v1/transactions` [POST]

the payload for transactions,

```json
[
  {
    "unit_price": 99.7,
    "product_id": 3
  },
  {
    "unit_price": 11.11,
    "product_id": 1
  }
]
```

- transaction_id will auto generated.
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
