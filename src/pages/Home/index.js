import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Prices from "./components/Prices";
import Team from "./components/Team";
import WorkingTime from "./components/WorkingTime";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Services/>
      <Prices/>
      <Team/>
      <WorkingTime/>
    </>
  )
}
