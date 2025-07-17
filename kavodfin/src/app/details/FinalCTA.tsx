import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

function FinalCTA() {
  return (
    <div>
          <div className="text-center bg-black p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">📲 Ready to Start Winning?</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed font-inter">
                  Tap the button below to join our VIP WhatsApp Group now and receive your first free signal!
                  <span className="block mt-2 font-semibold font-inter">Limited Slots Available - Act Fast!</span>
              </p>
              <a href="https://chat.whatsapp.com/FEZGuJbpOof60XCaerA9zo" target="_blank" rel="noopener noreferrer">
                  <Button
                      size="lg"
                      className="bg-yellow-400 hover:bg-yellow-500 text-black font-inter px-8 py-10 text-xl rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 group transform hover:scale-105"
                  >
                      Join Now on WhatsApp
                  </Button>
              </a>
              <p className="text-white text-sm mt-6 font-medium font-inter"> Only for serious traders ready to take action</p>
          </div>
    </div>
  )
}

export default FinalCTA