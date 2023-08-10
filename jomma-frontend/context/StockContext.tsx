"use client"

import { createContext, Dispatch, SetStateAction, useState } from "react"

interface StockProps {
  product_id: number
  product_name: string
  product_code: string
  unit_price: number
  gain_loss: number
  year_to_date: number
  active_status: number
}

interface AppContextProps {
  selectedItems: StockProps[]
  setSelectedItems: Dispatch<SetStateAction<StockProps[]>>
  createTransaction: (orderItems: StockProps[]) => void
  orderMessage: string
  setOrderMessage: Dispatch<SetStateAction<string>>
}

export const AppContext = createContext<AppContextProps>({
  selectedItems: [],
  setSelectedItems: () => {},
  createTransaction: () => {},
  orderMessage: "",
  setOrderMessage: () => {},
})

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedItems, setSelectedItems] = useState<StockProps[]>([])
  const [orderMessage, setOrderMessage] = useState("")

  const createTransaction = async (orderItems: StockProps[]) => {
    const response = await fetch("http://localhost:8080/api/v1/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderItems),
    })
    const data = await response.json()
    setOrderMessage(data.message)
    setSelectedItems([])
  }

  return (
    <>
      <AppContext.Provider
        value={{
          selectedItems,
          setSelectedItems,
          createTransaction,
          orderMessage,
          setOrderMessage,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  )
}
