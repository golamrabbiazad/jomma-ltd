import { IncreaseValue } from "@/icons"

import { Button } from "@/components/ui/button"

export default function AccountOverview() {
  return (
    <div className="bg-gradient-to-tr from-teal-700 from-0% to-teal-500 to-75% p-12 shadow-md">
      <div className="mx-auto flex w-2/3 flex-col space-y-4">
        <p className="text-sm tracking-tight text-white">since last week</p>

        <div className="flex flex-col">
          <h2 className="text-md font-bold text-white">Portfolio Value</h2>
          <div className="flex">
            <p className="mx-4 text-2xl font-extrabold text-white">৳ 5.00</p>
            <div className="-ml-4 h-6 w-6">
              <IncreaseValue />
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-md font-bold text-white">
              BO A/C Balance(Cash)
            </h2>
            <p className="text-normal mx-2 font-semibold text-white">
              ৳ 50000.00
            </p>
          </div>

          <Button
            btnName="Prefund Now"
            classStyles="border-teal-700 rounded-full bg-white text-teal-700"
          />
        </div>
      </div>
    </div>
  )
}
