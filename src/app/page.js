import Hero from "./components/hero";
import Problem from "./components/problem";
import Offer from "./components/offer";
import Services from "./components/services";
import Process from "./components/process";
import System from "./components/system";
import Benefits from "./components/benefits";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Offer />
      <Services />
      <System />
      <Benefits />
      <CTA />
      <FAQ />
    </>
  );
}