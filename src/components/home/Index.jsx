import React from "react";
import Hero from "./Hero";
import About from "./About";
import Service from "./Service";
import CTA from "./CTA";
import Highlights from "./Highlights";
import Portfolio from "./Portfolio";

export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <CTA />
      <Highlights />
      <Portfolio />
    </>
  );
}