"use client"

import { useContext, useState } from "react"
import { AppContext } from "@/context/StockContext"
import { Add, Decrease, Filter, Increase, Selected } from "@/icons"

import { sortData } from "@/lib/utils"

interface StockProps {
  product_id: number
  product_name: string
  product_code: string
  unit_price: number
  gain_loss: number
  year_to_date: number
  active_status: number
}

export default function StockTable({ data }: { data: StockProps[] }) {
  const [stocks, setStocks] = useState<StockProps[]>(data)
  const [sortConfig, setSortConfig] = useState({ field: "", ascending: true })
  const { selectedItems, setSelectedItems } = useContext(AppContext)

  // prevents from duplicated item that already added
  const handleToSelect = (item: StockProps) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item])
    }
  }

  // resuable sort functionality
  const handleSortClick = (
    field: "product_code" | "unit_price" | "year_to_date"
  ) => {
    const newSortConfig = {
      field,
      ascending: sortConfig.field === field ? !sortConfig.ascending : true,
    }

    const sortedStocks = sortData(stocks, field, newSortConfig.ascending)

    setStocks(sortedStocks)
    setSortConfig(newSortConfig)
  }

  const handleFilterItems = () => {
    // Filter items based on not selected logic
    const notSelectedItems = stocks.filter(
      (stock) =>
        !selectedItems.some((item) => item.product_id === stock.product_id)
    )

    // Combine selected and not selected items
    const combinedItems = [...selectedItems, ...notSelectedItems]

    setStocks(combinedItems)
  }

  return (
    <table className="mt-20 w-5/6">
      <thead className="rounded-full border-b-4 border-teal-700">
        <tr className="mb-4 flex flex-row items-center justify-between">
          <th
            onClick={() => handleSortClick("product_code")}
            className="cursor-pointer"
          >
            <p className="text-teal-700">Stocks</p>
          </th>

          <th
            className="cursor-pointer pl-10"
            onClick={() => handleSortClick("unit_price")}
          >
            <div className="flex flex-col">
              <p className="text-teal-700">Unit Price (Tk) </p>
              <p className="text-teal-700">Gain/ Loss (%)</p>
            </div>
          </th>

          <th
            onClick={() => handleSortClick("year_to_date")}
            className="cursor-pointer"
          >
            <div className="flex flex-col">
              <p className="text-teal-700">Year to Date</p>
              <p className="text-teal-700">(%)</p>
            </div>
          </th>

          <th onClick={handleFilterItems} className="cursor-pointer">
            <div className="flex flex-col items-center">
              <div>
                <Filter />
              </div>
              <p className="text-teal-700">Filter</p>
            </div>
          </th>
        </tr>
      </thead>

      <tbody className=" flex flex-col">
        {stocks.map((item) => (
          <tr
            key={item.product_name}
            className="odd:bg-grayish-200 flex flex-row items-center justify-between"
          >
            <td className="w-1/4 space-y-2 py-4">
              <h3 className="text-2xl font-bold">{item.product_code}</h3>
              <p className="font-semibold">{item.product_name}</p>
            </td>
            <td className="w-1/4">
              <p className="text-2xl font-bold">{item.unit_price}</p>
              <div className="flex flex-row items-center">
                <Decrease />
                <p className="font-semibold text-red-700">{item.gain_loss}%</p>
              </div>
            </td>
            <td className="w-1/4">
              <div className="flex flex-row items-center">
                <Increase />
                <p className="font-semibold text-green-600">
                  {item.year_to_date} %
                </p>
              </div>
            </td>
            <td>
              <div
                className="cursor-pointer"
                onClick={() => handleToSelect(item)}
              >
                {selectedItems.includes(item) ? <Selected /> : <Add />}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
