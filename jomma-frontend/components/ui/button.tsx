import { cn } from "@/lib/utils"

export function Button({
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
        "minlg:px-8 minlg:py-4 minlg:text-lg text-md px-8 py-1 text-center font-medium",
        classStyles
      )}
      onClick={handleClick}
    >
      {btnName}
    </button>
  )
}
