"use client";
import Hero from "./components/hero";
import Problem from "./components/problem";
import Offer from "./components/offer";
import Services from "./components/services";
import Process from "./components/process";
import System from "./components/system";
import Benefits from "./components/benefits";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import FunnelModal from "./components/funnelmodal";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Hero onOpenModal={() => setIsModalOpen(true)} />

      <FunnelModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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
