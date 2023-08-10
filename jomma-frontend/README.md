# Jomma Front-end

Jomma is a digital investment marketplace for stocks, bonds and mutual funds. Invest now, secure your future.

## Usage

Node.js (>= v18) should be installed on local machine.

```bash
npm i
npm run build && npm run start
```

project running on port <http://localhost:3000>.

## Tech used

- TypeScript
- Next.js
- Tailwind CSS
- Tailwind CSS class sorting, merging and linting.
- Eslint

## Task Details

- ✅ The dataTable in the design should be populated from the table 'products' with items that have active_status=1
- ✅ The dataTable must have filter functionality and sorting functionality.
- ✅ The products (stocks) in the dataTable can be select by clicking (+) icon on the right, once selected, the icon will change to selected status (Tick mark) (as per design)

- ✅ All the selected items should be stacked below the dataTable as shown in the design.
- ✅ After pressing 'Next' button the selected items will be posted to an API, the API will insert the selected items into the 'transaction' table.
- ✅ Make the design of the page as close as possible to the given design.

- ✅ The user_id for all transaction will be 1.
