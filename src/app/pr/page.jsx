import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Problem from "./components/Problem";
import Funnel from "./components/Funnel";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Integrations from "./components/Integrations";
import Quote from "./components/Quote";
import Partnership from "./components/Partnership";
import FinalCta from "./components/FinalCta";

export default function Page() {
  return (
    <main>
      <Hero />
      <Intro />
      <Problem />
      <Funnel />
      <Features />
      <Showcase />
      <Integrations />
      <Quote />
      <Partnership />
      <FinalCta />
    </main>
  );
}
