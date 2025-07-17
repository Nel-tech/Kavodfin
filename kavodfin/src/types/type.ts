import { ReactNode } from "react";

export interface HeroProps{
    children:ReactNode
}

export interface SignalChartProps {
    pair: string
    type: "BUY" | "SELL"
    entry: number
    stopLoss: number
    takeProfit: number
    currentPrice: number
    pips: number
    duration: string
    signalId: string
}