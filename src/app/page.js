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
import ClientLogos from "./components/clientlogos";
import Team from "./components/team";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <ClientLogos />
      <FunnelModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Problem />
      <Offer />
      {/* <Team /> */}
      <Services />
      <System />
      <Benefits />
      <CTA />
      <FAQ />
    </>
  );
}
