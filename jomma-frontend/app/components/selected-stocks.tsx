import { useContext } from "react"
import { AppContext } from "@/context/StockContext"

import { RemoveButton } from "@/components/ui/remove-button"

interface StockProps {
  product_id: number
  product_name: string
  product_code: string
  unit_price: number
  gain_loss: number
  year_to_date: number
  active_status: number
}

export default function SelectedStocks({ items }: { items: StockProps[] }) {
  const { selectedItems, setSelectedItems } = useContext(AppContext)

  const handleRemoveItem = (item: StockProps) => {
    const filteredItems = selectedItems.filter(
      (selectedItem) => selectedItem.product_id !== item.product_id
    )
    setSelectedItems(filteredItems)
  }

  return (
    <div className="flex flex-row flex-wrap gap-6">
      {items.map((item) => (
        <RemoveButton
          key={item.product_name}
          btnName={item.product_name}
          classStyles="rounded-full border-2 border-teal-700 text-teal-700"
          handleClick={() => handleRemoveItem(item)}
        />
      ))}
    </div>
  )
}
