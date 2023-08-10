import { Dispatch, SetStateAction } from "react"

export default function Menu({
  isOpen,
  setIsOpen,
}: {
  isOpen?: boolean
  setIsOpen?: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <svg
      className="-mt-2 h-10 w-10"
      viewBox="0 0 61 60"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_411_87)">
        <rect
          x="7.94806"
          y="17"
          width="46"
          height="7.88571"
          rx="3.94286"
          fill="#2C7C7A"
        />
        <rect
          x="7.94806"
          y="35"
          width="35.9252"
          height="8"
          rx="4"
          fill="#2C7C7A"
        />
      </g>
      <defs>
        <clipPath id="clip0_411_87">
          <rect
            width="59.8753"
            height="60"
            fill="white"
            transform="translate(0.962585)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
