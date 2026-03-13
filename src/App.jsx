import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./layouts/header";
import Footer from "./layouts/footer";

import Home from "./components/home/index";
import AboutUs from "./components/about/AboutUs";
import ServicesHero from "./components/services/services";
import ContactUs from "./components/contact/ContactUs";
import EventPage from "./components/events/EventPage";
import Conferences from "./components/events/Conferences";
import Exhibitions from "./components/events/Exhibitions";
import GalaDinners from "./components/events/GalaDinners";
import SalesKickOffs from "./components/events/SalesKickOffs";
import Experiential from "./components/events/Experiential";
import AwardCeremonies from "./components/events/AwardCeremonies";
import IncentiveTravel from "./components/events/IncentiveTravel";
import ProductLaunch from "./components/events/ProductLaunch";
import Accommodation from "./components/events/Accomodation_Transport";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesHero />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/events/conferences" element={<Conferences />} />
        <Route path="/events/exhibitions" element={<Exhibitions />} />
        <Route path="/events/gala-dinners" element={<GalaDinners />} />
        <Route path="/events/sales-kick-offs" element={<SalesKickOffs />} />
        <Route path="/events/experiential" element={<Experiential />} />
        <Route path="/events/awardceremonies" element={<AwardCeremonies />} />
        <Route path="/events/incentivetravel" element={<IncentiveTravel />} />
        <Route path="/events/productlaunch" element={<ProductLaunch />} />
        <Route
          path="/events/accommodation-transport"
          element={<Accommodation />}
        />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
