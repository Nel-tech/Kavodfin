
import SignalChart from "@/components/LiveCharts"
function Signal() {
  return (
      <div className=" mt-[8rem]">
          <h2 className="text-3xl font-bold text-center text-green-800 font-montserrat mb-8">Our Live Signal Example</h2>
          <div className="max-w-4xl mx-auto">
              <SignalChart
                  pair="EUR/USD"
                  type="BUY"
                  entry={1.085}
                  stopLoss={1.082}
                  takeProfit={1.0977}
                  currentPrice={1.0977}
                  pips={127}
                  duration="4.2h"
                  signalId="KF2024-001"
              />
          </div>
      </div>
  )
}

export default Signal