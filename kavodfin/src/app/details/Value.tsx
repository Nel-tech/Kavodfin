import {values} from '../../helpers/Data'
import { Card, CardContent } from "@/components/ui/card"
import { Users, CheckCircle } from "lucide-react"
function Value() {
  return (
      <div className='container mx-auto px-4 py-12 mt-[8rem]'>
          <div className=" grid lg:grid-cols-2 gap-12 mb-20">
              <div>
                  <h2 className="text-3xl font-montserrat font-bold text-green-800 mb-8 flex items-center">
                     
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
                              <span className="text-slate-700 font-medium font-inter">{item}</span>
                          </div>
                      ))}
                  </div>
              </div>

              <div>
                  <h3 className="text-3xl font-bold font-montserrat text-green-800 mb-8 flex items-center">
                     
                      Perfect For
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                      {values.map((item, i) => (
                          <Card key={i} className="p-4 border-0 shadow-sm bg-gradient-to-br from-white to-green-50">
                              <CardContent className="p-0 text-center">
                                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                      <Users className="h-6 w-6 text-green-600" />
                                  </div>
                                  <h4 className="font-semibold text-slate-800 mb-1 font-montserrat">{item.title}</h4>
                                  <p className="text-sm text-slate-600 font-inter">{item.desc}</p>
                              </CardContent>
                          </Card>
                      ))}
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Value