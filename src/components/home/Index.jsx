import React from "react";
import Hero from "./Hero";
import About from "./About";
import Service from "./Service";
import CTA from "./CTA";
import Highlights from "./Highlights";
import Portfolio from "./Portfolio";
import Divider from "./Divider";

export default function Index() {
  return (
    <>
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Service />
      <Divider />
      <CTA />
      <Divider />
      <Highlights />
      <Divider />
      <Portfolio />
      <Divider />
    </>
  );
}