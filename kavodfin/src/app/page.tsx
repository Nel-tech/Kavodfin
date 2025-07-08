
import Nav from "../components/(landing)/Nav";
import HeroSection from "@/components/(landing)/HeroSection";
import How_it_works from "@/components/(landing)/How_it_works";
export default function Home() {
  return (
   <div>
   <HeroSection>
    <Nav/>
   </HeroSection>
   <How_it_works/>
   </div>
  );
}
