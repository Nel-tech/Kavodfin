import Link from "next/link"
import { ArrowRight, Star, TrendingUp, Users, Award, CheckCircle, Lock, Target, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function BridgePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-bold bg-gradient-to-r from-green-700 to-yellow-500 bg-clip-text text-transparent tracking-wide hover:opacity-90 transition"
          >
            KavodFin
          </Link>
          <div className="hidden md:flex items-center space-x-2 text-green-700">
            <Lock className="h-4 w-4" />
            <span className="text-sm font-medium">Trusted Platform</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              <span>Join 2,500+ Successful Traders</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Why Smart Traders Choose{" "}
              <span className="bg-gradient-to-r from-green-700 to-yellow-500 bg-clip-text text-transparent">
                KavodFin
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of traders getting real results daily with high-accuracy Forex signals, expert support &
              total freedom.
            </p>
          </div>

          {/* Value Proposition Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-8 flex items-center">
                <Zap className="h-8 w-8 text-yellow-500 mr-3" />
                What You&lsquo;ll Get
              </h2>
              <div className="space-y-4">
                {[
                  "90%+ Accurate Forex Signals",
                  "Daily High-Pip Trade Alerts",
                  "VIP Mentorship & Strategy Guides",
                  "Risk Management Tips",
                  "Lifetime Access to Trading Community",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm border border-green-100"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-800 mb-8 flex items-center">
                <Target className="h-8 w-8 text-yellow-500 mr-3" />
                Perfect For
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Beginners", desc: "New to Forex trading" },
                  { title: "Busy People", desc: "Limited time to analyze" },
                  { title: "Tired Traders", desc: "Frustrated with losses" },
                  { title: "Growth Seekers", desc: "Want financial freedom" },
                ].map((item, i) => (
                  <Card key={i} className="p-4 border-0 shadow-sm bg-gradient-to-br from-white to-green-50">
                    <CardContent className="p-0 text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Signal Example */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-8">📊 Live Signal Example</h2>
            <Card className="overflow-hidden shadow-2xl border-0 max-w-4xl mx-auto">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-green-600 via-green-700 to-yellow-500 p-8 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Premium Signal Preview</h3>
                      <p className="text-green-100">See exactly what you&lsquo;ll receive in your WhatsApp</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">+127</div>
                      <div className="text-green-100">Pips Profit</div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="bg-slate-100 rounded-2xl p-6 mb-6">
                    <img
                      src="/placeholder.svg?height=300&width=600"
                      alt="Forex signal example showing entry, stop loss, and take profit levels"
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-xl">
                      <div className="text-2xl font-bold text-green-700">GBP/USD</div>
                      <div className="text-sm text-slate-600">Currency Pair</div>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-xl">
                      <div className="text-2xl font-bold text-yellow-600">SELL</div>
                      <div className="text-sm text-slate-600">Signal Type</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-xl">
                      <div className="text-2xl font-bold text-green-700">+127</div>
                      <div className="text-sm text-slate-600">Pips Profit</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-xl">
                      <div className="text-2xl font-bold text-slate-800">4.2h</div>
                      <div className="text-sm text-slate-600">Duration</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Stats */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-12">📈 Proven Track Record</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8 border-0 shadow-xl bg-gradient-to-br from-white to-green-50 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <div className="text-4xl font-bold text-green-700 mb-2">350+</div>
                <div className="text-slate-600 font-medium">Pips Last Month</div>
                <div className="text-sm text-green-600 mt-2">↗️ +23% from previous</div>
              </Card>

              <Card className="text-center p-8 border-0 shadow-xl bg-gradient-to-br from-white to-yellow-50 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-green-700 mb-2">2–5</div>
                <div className="text-slate-600 font-medium">Signals Per Day</div>
                <div className="text-sm text-green-600 mt-2">🎯 Quality over quantity</div>
              </Card>

              <Card className="text-center p-8 border-0 shadow-xl bg-gradient-to-br from-white to-green-50 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-yellow-600" />
                </div>
                <div className="text-4xl font-bold text-green-700 mb-2">90%</div>
                <div className="text-slate-600 font-medium">Win Rate</div>
                <div className="text-sm text-green-600 mt-2">🔥 Industry leading</div>
              </Card>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-12">💬 Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Emmanuel T.",
                  role: "Day Trader",
                  text: "I doubled my account in 2 weeks with your signals! The accuracy is unbelievable.",
                  profit: "+$4,200",
                },
                {
                  name: "Grace A.",
                  role: "Part-time Trader",
                  text: "Best decision I've made in Forex. No more guessing games or sleepless nights.",
                  profit: "+$2,800",
                },
                {
                  name: "Chuks I.",
                  role: "Professional Trader",
                  text: "KavodFin changed my trading journey forever. Consistent profits every month.",
                  profit: "+$6,500",
                },
              ].map((testimonial, i) => (
                <Card key={i} className="p-6 border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 italic leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-800">{testimonial.name}</div>
                      <div className="text-sm text-slate-500">{testimonial.role}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{testimonial.profit}</div>
                      <div className="text-xs text-slate-500">Monthly profit</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Trust Section */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg border border-green-100">
              <Shield className="h-6 w-6 text-green-600" />
              <span className="text-green-700 text-lg font-semibold">100% Trusted • 100% Results</span>
              <Lock className="h-5 w-5 text-yellow-500" />
            </div>
            <p className="text-slate-600 mt-4 text-lg">We don&lsquo;t just give signals – we help you grow and succeed.</p>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-green-500 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">📲 Ready to Start Winning?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Tap the button below to join our VIP WhatsApp Group now and receive your first free signal!
              <span className="block mt-2 font-semibold">🔥 Limited Slots Available - Act Fast!</span>
            </p>
            <a href="https://chat.whatsapp.com/FEZGuJbpOof60XCaerA9zo" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-green-700 hover:bg-green-800 text-white px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group transform hover:scale-105"
              >
                Join Now on WhatsApp
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </a>
            <p className="text-green-900 text-sm mt-6 font-medium">⚡ Only for serious traders ready to take action</p>
          </div>
        </div>
      </main>
    </div>
  )
}
