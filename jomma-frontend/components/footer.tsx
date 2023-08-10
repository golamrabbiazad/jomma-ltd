import Link from "next/link"
import { Facebook, Instagram, LinkedIn, Twitter } from "@/icons"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tl from-teal-700 from-0% to-teal-500 to-75% px-12 pb-2 pt-12  shadow-md">
      {/* main div */}
      <div className="mx-auto flex w-5/6 flex-col">
        <div className="mb-10 flex flex-row justify-between">
          {/* 1st column */}
          <div>
            {/* social icons */}
            <ul className="mb-4 flex space-x-8">
              <li>
                <Link href="#" aria-label="Jomma's Facebook Page">
                  <Facebook />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="Jomma's LinkedIn Page">
                  <LinkedIn />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="Jomma's Twitter Profile">
                  <Twitter />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="Jomma's Instagram Page">
                  <Instagram />
                </Link>
              </li>
            </ul>
            <p className="text-md font-medium text-white">
              <Link href="#" aria-label="Jomma's Privacy Policy">
                Privacy Policy
              </Link>
            </p>
            <p className="text-md font-medium text-white">
              <Link href="#" aria-label="Jomma's Terms & Conditions">
                Terms & Condition
              </Link>
            </p>
          </div>

          {/* 2nd column */}
          <div>
            <ul className="flex flex-col space-y-4">
              <li className="text-md font-medium text-white">
                <Link
                  href="#"
                  aria-label="Invest in Stocks, Bonds, and Mutual Funds with Jomma"
                >
                  Invest
                </Link>
              </li>
              <li className="text-md font-medium text-white">
                <Link href="#" aria-label="Explore the Market">
                  Market
                </Link>
              </li>
              <li className="text-md font-medium text-white">
                <Link
                  href="#"
                  aria-label="Manage Beneficial Owners Account Funds"
                >
                  BO Prefund & Withdraw
                </Link>
              </li>
              <li className="text-md font-medium text-white">
                <Link href="#">Financial Planner</Link>
              </li>
              <li className="text-md font-medium text-white">
                <Link href="#">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* 3rd column */}
          <div>
            <h3 className="text-md font-medium text-white">
              Write to Us with your questions
            </h3>
            <div className="my-2 w-48 rounded-full border-2 border-white p-1 text-center font-medium text-white">
              <Link href="#">Go to Help Page</Link>
            </div>
          </div>
        </div>
        <h3 className="text-md font-medium text-white">
          Jomma is a service of Jomma Limited, a private limited company
          registered under the Companies Act 1994. Trade License: 000223
        </h3>
      </div>
    </footer>
  )
}
