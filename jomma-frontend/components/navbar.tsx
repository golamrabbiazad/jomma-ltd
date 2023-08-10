import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/logo.svg"
import { Menu, User } from "@/icons"

export default function Navbar() {
  return (
    <nav className="fixed z-10 h-24 w-full border-b border-gray-300 bg-white p-6 shadow-md">
      {/* nav main */}
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="mt-2 flex">
            <Menu />
          </div>

          {/* logo and name */}
          <div className="flex">
            <Link href="/" aria-label="Jomma Homepage" className="flex">
              <Image src={logo} alt="Jomma Limited" width={28} height={28} />
              <p className="text-3xl font-normal leading-6">Jomma</p>
            </Link>
          </div>
        </div>

        {/* visiting links */}
        <div className="flex flex-row items-center">
          <ul className="flex flex-row items-center space-x-6">
            <li>
              <Link
                href="#"
                aria-label="Invest in Stocks, Bonds, and Mutual Funds with Jomma"
              >
                Invest
              </Link>
            </li>
            <li>
              <Link href="#" aria-label="Explore the Market">
                Market
              </Link>
            </li>
            <li>
              <Link
                href="#"
                aria-label="Manage Beneficial Owners Account Funds"
              >
                BO Prefund & Withdraw
              </Link>
            </li>
          </ul>
        </div>

        {/* user and logout */}
        <div className="flex flex-row items-center space-x-8">
          <User className="cursor-pointer" />
          <Link
            href="#"
            aria-label="Logout from the jomma app"
            className="w-32 rounded-full border-2 border-teal-700 p-2 text-center font-medium text-teal-700"
          >
            Log Out
          </Link>
        </div>
      </div>
    </nav>
  )
}
