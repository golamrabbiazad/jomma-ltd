export default function Cross({ handleClick }: { handleClick?: () => void }) {
  return (
    <svg
      className="ml-4 h-6 w-6"
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
    >
      <g id="Icon Name" clip-path="url(#clip0_435_8)">
        <path
          id="Vector"
          d="M15 3C8.0875 3 2.5 8.5875 2.5 15.5C2.5 22.4125 8.0875 28 15 28C21.9125 28 27.5 22.4125 27.5 15.5C27.5 8.5875 21.9125 3 15 3ZM15 25.5C9.4875 25.5 5 21.0125 5 15.5C5 9.9875 9.4875 5.5 15 5.5C20.5125 5.5 25 9.9875 25 15.5C25 21.0125 20.5125 25.5 15 25.5ZM19.4875 9.25L15 13.7375L10.5125 9.25L8.75 11.0125L13.2375 15.5L8.75 19.9875L10.5125 21.75L15 17.2625L19.4875 21.75L21.25 19.9875L16.7625 15.5L21.25 11.0125L19.4875 9.25Z"
          fill="#2C7C7A"
        />
      </g>
      <defs>
        <clipPath id="clip0_435_8">
          <rect
            width="30"
            height="30"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
