import Link from "next/link"
import { SearchTablePaginationSelector } from "@/components"
import { Invest } from "@/icons"

import { AccountOverview, StockAccountOverview } from "./components"

async function fetchTableData() {
  const response = await fetch("http://localhost:8080/api/v1/products", {
    next: { revalidate: 1 },
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return await response.json()
}

export default async function Home() {
  const data = await fetchTableData()

  return (
    <div className="mt-24">
      <section className="h-full w-full">
        <AccountOverview />
      </section>

      <section className="mx-16 my-8 flex items-center">
        <div>
          <Invest />
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-orange-700">
          Invest
        </h2>
      </section>

      <section className="flex flex-col items-center">
        <ul className="my-16 flex gap-36">
          <li className="border-b-4 border-orange-700 font-bold text-orange-700">
            <Link href="#" aria-label="Stocks Information">
              Stocks
            </Link>
          </li>
          <li>
            <Link href="#" aria-label="Bonds Information">
              Bonds
            </Link>
          </li>
          <li>
            <Link href="#" aria-label="Mutual Funds Information">
              Mutual Funds
            </Link>
          </li>
        </ul>

        <StockAccountOverview />

        <div aria-label="Buy, Sell Reqeust Section for Stocks">
          <ul className="my-20 flex space-x-6">
            <li className="border-b-4 border-orange-700 font-bold text-orange-700">
              <Link href="#" aria-label="Buy Requests">
                Buy Requests
              </Link>
            </li>
            <li>
              <Link href="#" aria-label="Sell Requests">
                Sell Requests
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col">
        <SearchTablePaginationSelector stocks={data} />
      </section>
    </div>
  )
}
