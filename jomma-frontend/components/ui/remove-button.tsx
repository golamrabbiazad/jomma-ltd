import Cross from "@/icons/cross"

import { cn } from "@/lib/utils"

export function RemoveButton({
  btnName,
  classStyles,
  handleClick,
}: {
  btnName: React.ReactNode
  classStyles: string
  handleClick?: () => void
}) {
  return (
    <button
      type="button"
      className={cn(
        "minlg:px-8 minlg:py-4 minlg:text-lg text-md flex flex-row items-center px-8 py-2 text-center font-medium",
        classStyles
      )}
    >
      {btnName}
      <Cross handleClick={handleClick} />
    </button>
  )
}
