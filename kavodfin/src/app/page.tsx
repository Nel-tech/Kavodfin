
import Banner from "@/components/(landing)/Banner";
import Nav from "../components/(landing)/Nav";
import HeroSection from "@/components/(landing)/HeroSection";
 import WhatToDoNow from "@/components/(landing)/WhatToDoNow";
 import WhatYoullLearn from "@/components/(landing)/WhatYoullLearn";
import Testimonials from "@/components/(landing)/Testimonials";
import Footer from "@/components/(landing)/Footer";
export default function Home() {
  return (
   <div>
   <HeroSection>
    <Nav/>
   </HeroSection>
   <Banner/>
    <WhatYoullLearn/> 
      <WhatToDoNow />
   <Testimonials/> 
   <Footer/>
   </div>
  );
}
