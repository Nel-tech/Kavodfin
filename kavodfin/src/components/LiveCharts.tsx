import { SignalChartProps } from "@/types/type"

export default function SignalChart({
    pair,
    type,
    entry,
    stopLoss,
    takeProfit,
    currentPrice,
    pips,
    duration,
    signalId,
}: SignalChartProps) {
    const isBuy = type === "BUY"
    const isProfit = pips > 0

    // Calculate price range for chart
    const prices = [entry, stopLoss, takeProfit, currentPrice]
    const minPrice = Math.min(...prices) - 0.01
    const maxPrice = Math.max(...prices) + 0.01
    const priceRange = maxPrice - minPrice

    // Calculate positions on chart (0-100%)
    const getPosition = (price: number) => {
        return ((maxPrice - price) / priceRange) * 100
    }

    const entryPos = getPosition(entry)
    const slPos = getPosition(stopLoss)
    const tpPos = getPosition(takeProfit)
    const currentPos = getPosition(currentPrice)

    return (
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div
                className={`p-6 text-white ${isBuy ? "bg-gradient-to-r from-green-600 to-emerald-700" : "bg-gradient-to-r from-red-600 to-orange-600"}`}
            >
                <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center space-x-3 mb-2">
                            <div className={`w-3 h-3 rounded-full ${isBuy ? "bg-green-300" : "bg-red-300"}`}></div>
                            <h3 className="text-2xl font-bold font-montserrat">
                                {pair} - {type}
                            </h3>
                        </div>
                        <p className="text-sm opacity-90 font-inter">Signal ID: {signalId}</p>
                        <p className="text-sm opacity-75 font-inter">Duration: {duration}</p>
                    </div>
                    <div className="text-right">
                        <div className={`text-3xl font-inter font-bold ${isProfit ? "text-yellow-300" : "text-red-300"}`}>
                            {pips > 0 ? "+" : ""}
                            {pips} Pips
                        </div>
                        <div className="text-sm opacity-90">{isProfit ? "PROFIT ✅" : "LOSS ❌"}</div>
                    </div>
                </div>
            </div>

            {/* Chart Area */}
            <div className="p-6">
                <div className="relative h-80 bg-slate-900 rounded-xl overflow-hidden">
                    {/* Grid Lines */}
                    <div className="absolute inset-0">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-full border-t border-slate-700 opacity-30"
                                style={{ top: `${i * 25}%` }}
                            ></div>
                        ))}
                        {[...Array(9)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute h-full border-l border-slate-700 opacity-20"
                                style={{ left: `${(i + 1) * 10}%` }}
                            ></div>
                        ))}
                    </div>

                    {/* Price Chart Line */}
                    <svg className="absolute inset-0 w-full h-full">
                        <defs>
                            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor={isBuy ? "#10b981" : "#ef4444"} stopOpacity="0.8" />
                                <stop offset="50%" stopColor={isBuy ? "#059669" : "#dc2626"} stopOpacity="0.6" />
                                <stop offset="100%" stopColor={isBuy ? "#047857" : "#b91c1c"} stopOpacity="0.9" />
                            </linearGradient>
                        </defs>

                        {/* Main trend line */}
                        <path
                            d={`M 50 ${entryPos}% Q 200 ${(entryPos + currentPos) / 2}% 350 ${currentPos}%`}
                            stroke="url(#chartGradient)"
                            strokeWidth="3"
                            fill="none"
                            className="drop-shadow-lg"
                        />

                        {/* Entry point */}
                        <circle cx="50" cy={`${entryPos}%`} r="6" fill="#3b82f6" className="drop-shadow-lg" />

                        {/* Current price point */}
                        <circle
                            cx="350"
                            cy={`${currentPos}%`}
                            r="8"
                            fill={isProfit ? "#10b981" : "#ef4444"}
                            className="drop-shadow-lg animate-pulse"
                        />
                    </svg>

                    {/* Price Levels */}
                    <div className="absolute inset-0">
                        {/* Take Profit Line */}
                        <div className="absolute w-full flex items-center" style={{ top: `${tpPos}%` }}>
                            <div className="w-full border-t-2 border-dashed border-green-400"></div>
                            <div className="absolute font-inter right-4 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                                TP: {takeProfit.toFixed(isBuy ? 4 : 2)}
                            </div>
                        </div>

                        {/* Entry Line */}
                        <div className="absolute w-full flex items-center" style={{ top: `${entryPos}%` }}>
                            <div className="w-full border-t-2 border-blue-400"></div>
                            <div className="absolute  font-inter right-4 bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">
                                Entry: {entry.toFixed(isBuy ? 4 : 2)}
                            </div>
                        </div>

                        {/* Stop Loss Line */}
                        <div className="absolute w-full flex items-center" style={{ top: `${slPos}%` }}>
                            <div className="w-full border-t-2 border-dashed border-red-400"></div>
                            <div className="absolute font-inter right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                                SL: {stopLoss.toFixed(isBuy ? 4 : 2)}
                            </div>
                        </div>

                        {/* Current Price Line */}
                        <div className="absolute w-full flex items-center" style={{ top: `${currentPos}%` }}>
                            <div className={`w-full border-t-2 ${isProfit ? "border-green-400" : "border-red-400"}`}></div>
                            <div
                                className={`absolute font-inter right-4 ${isProfit ? "bg-green-500" : "bg-red-500"} text-white px-2 py-1 rounded text-xs font-bold animate-pulse`}
                            >
                                Current: {currentPrice.toFixed(isBuy ? 4 : 2)}
                            </div>
                        </div>
                    </div>

                    {/* Time axis */}
                    <div className="absolute font-inter bottom-2 left-4 right-4 flex justify-between text-xs text-slate-400">
                        <span>Entry Time</span>
                        <span>Current Time</span>
                    </div>
                </div>

                {/* Trade Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                        <div className="text-2xl font-bold text-blue-700 font-inter">{entry.toFixed(isBuy ? 4 : 2)}</div>
                        <div className="text-sm text-slate-600 font-inter">Entry Price</div>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-xl">
                        <div className="text-2xl font-bold text-red-600 font-inter">{stopLoss.toFixed(isBuy ? 4 : 2)}</div>
                        <div className="text-sm text-slate-600 font-inter">Stop Loss</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-xl">
                        <div className="text-2xl font-bold text-green-600 font-inter">{takeProfit.toFixed(isBuy ? 4 : 2)}</div>
                        <div className="text-sm text-slate-600 font-inter">Take Profit</div>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-xl">
                        <div className="text-2xl font-bold text-yellow-600 font-inter">{duration}</div>
                        <div className="text-sm text-slate-600 font-inter">Duration</div>
                    </div>
                </div>

                {/* Analysis */}
                <div className={`mt-6 p-4 rounded-xl ${isProfit ? "bg-green-50" : "bg-red-50"}`}>
                    <div className="flex items-center space-x-2 mb-2">
                        <div className={`w-3 h-3 rounded-full font-inter ${isProfit ? "bg-green-500" : "bg-red-500"}`}></div>
                        <span className={`font-semibold font-inter ${isProfit ? "text-green-800" : "text-red-800"}`}>Trade Analysis</span>
                    </div>
                    <p className={`text-sm font-inter ${isProfit ? "text-green-700" : "text-red-700"}`}>
                        {isProfit
                            ? `Excellent execution! Price moved in our favor and hit the take profit target, delivering ${pips} pips profit.`
                            : `Price moved against us and hit the stop loss level, resulting in a ${Math.abs(pips)} pip loss. Risk management protected capital.`}
                    </p>
                </div>
            </div>
        </div>
    )
}
