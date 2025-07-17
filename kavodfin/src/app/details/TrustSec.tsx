
import {Lock,Shield } from "lucide-react"
function TrustSec() {
  return (
    <div>
          <div className="mb-12 text-center mt-[8rem]">
              <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg border border-green-100">
                  <Shield className="h-6 w-6 text-green-600" />
                  <span className="text-green-700 text-lg font-semibold">100% Trusted • 100% Results</span>
                  <Lock className="h-5 w-5 text-yellow-500" />
              </div>
              <p className="text-slate-600 mt-4 text-lg">We don&lsquo;t just give signals – we help you grow and succeed.</p>
          </div>
    </div>
  )
}

export default TrustSec