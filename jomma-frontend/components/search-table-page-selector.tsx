"use client"

import { useContext } from "react"
import { AppContext } from "@/context/StockContext"
import { NextActive, PreviousInactive } from "@/icons"

import { SelectedStocks, StockTable } from "@/app/components"

import { Button } from "./ui/button"

interface StockProps {
  product_id: number
  product_name: string
  product_code: string
  unit_price: number
  gain_loss: number
  year_to_date: number
  active_status: number
}

export default function SearchTablePaginationSelector({
  stocks,
}: {
  stocks: StockProps[]
}) {
  const { selectedItems, createTransaction, orderMessage } =
    useContext(AppContext)

  return (
    <>
      <div className="flex flex-row items-center justify-center space-x-6">
        <label htmlFor="stock" className="w-[550px]">
          <input
            type="text"
            name="stock"
            id="stock"
            placeholder="Select Stock"
            className="w-full rounded-full border-2 border-teal-700 p-6 focus:border-2 focus:border-teal-700 focus:outline-none"
          />
        </label>
        <div>
          <Button
            btnName="Clear"
            classStyles="border-2 border-teal-700 rounded-full bg-teal-700 text-white"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <StockTable data={stocks} />
      </div>

      <div className="flex flex-col items-center">
        <div className="my-10 flex items-center space-x-6">
          <PreviousInactive />
          <ul className="flex space-x-6">
            <li className="border-b-4 border-orange-700 font-semibold text-orange-700">
              1-10
            </li>
            <li>11-20</li>
            <li>21-30</li>
            <li>31-40</li>
          </ul>
          <NextActive />
        </div>
      </div>

      {selectedItems.length > 0 && (
        <>
          <section className="flex flex-col items-center bg-orange-200 p-12">
            <SelectedStocks items={selectedItems} />
          </section>

          <div className="flex flex-col items-center">
            <div className="my-10 flex items-center space-x-6">
              <Button
                btnName="Next"
                classStyles="border-2 border-teal-700 rounded-full bg-teal-700 text-white"
                handleClick={() => createTransaction(selectedItems)}
              />
            </div>
          </div>
        </>
      )}

      {orderMessage && (
        <div className="flex flex-col items-center">
          <div className="my-10 flex items-center space-x-6">
            <p className="text-2xl font-bold text-orange-700">{orderMessage}</p>
          </div>
        </div>
      )}
    </>
  )
}
