
import { Card } from "@/components/ui/card"
import { testimonials } from "@/helpers/Data"

function Testimonials() {
  return (
    <div>
          <div className=" container mx-auto mt-[8rem]">
              <h2 className="text-3xl font-bold text-center text-green-800 mb-12 font-montserrat"> Success Stories</h2>
              <div className="grid md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, i) => (
                      <Card key={i} className="p-6 border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
                         
                          <p className="text-slate-700 mb-6 italic leading-relaxed font-inter">&ldquo;{testimonial.text}&rdquo;</p>

                          <div className="flex items-center justify-between">
                              <div>
                                  <div className="font-bold text-slate-800 font-inter">{testimonial.name}</div>
                                  <div className="text-sm text-slate-500 font-inter">{testimonial.role}</div>
                              </div>
                             
                          </div>
                      </Card>
                  ))}
              </div>
          </div>
    </div>
  )
}

export default Testimonials