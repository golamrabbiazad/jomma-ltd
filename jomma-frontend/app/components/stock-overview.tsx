import { Increase } from "@/icons"

export default function StockAccountOverview() {
  return (
    <section className="bg-grayish-200 w-4/6 px-8 py-4 shadow-md">
      <div className="pl-20">
        <div className="flex flex-row items-center space-x-4">
          <h2 className="text-3xl font-bold tracking-tight">
            Portfolio Value ( Tk )
          </h2>
          <p className="text-3xl font-bold text-teal-700">268.00</p>
        </div>
        <div className="flex flex-row gap-36">
          <h2 className="text-3xl font-bold tracking-tight">Total Units</h2>
          <p className="ml-1 text-3xl font-bold text-teal-700">15</p>
        </div>

        <p className="mt-6 text-sm">since last week</p>

        <div className="mt-1 flex flex-row items-center">
          <p className="text-sm font-semibold text-green-600">0.87 %</p>
          <div className="-ml-2 -mt-4 h-6 w-6">
            <Increase />
          </div>
        </div>
      </div>
    </section>
  )
}
