
import Banner from "@/components/(landing)/Banner";
import Nav from "../components/(landing)/Nav";
import HeroSection from "@/components/(landing)/HeroSection";
import About from "@/components/(landing)/About";
import How_it_works from "@/components/(landing)/How_it_works";
import MoreInfo from "@/components/(landing)/MoreInfo";
import Footer from "@/components/(landing)/Footer";
export default function Home() {
  return (
   <div>
   <HeroSection>
    <Nav/>
   </HeroSection>
      <About />
   <How_it_works/>
   <MoreInfo/>
   <Banner/>
   <Footer/>
   </div>
  );
}
