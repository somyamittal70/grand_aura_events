import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./layouts/header";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./layouts/footer";

// normal pages
import Home from "./components/home/Index";
import AboutUs from "./components/about/AboutUs";
import ServicesMain from "./components/services/ServicesMain";
import ServicesOverview from "./components/services/ServicesOverview";
import EntertainOpt from "./components/services/EntertainOpt";
import EventManagement from "./components/services/EventManagement";
import EventProduction from "./components/services/EventProduction";
import Reward from "./components/services/Reward";
import TechIntegration from "./components/services/TechIntegration";
import ContactUs from "./components/contact/ContactUs";
import EventPage from "./components/events/EventPage";
import UpcomingEvents from "./components/events/UpcomingEvents";
import Conferences from "./components/events/Conferences";
import Exhibitions from "./components/events/Exhibitions";
import GalaDinners from "./components/events/GalaDinners";
import SalesKickOffs from "./components/events/SalesKickOffs";
import Experiential from "./components/events/Experiential";
import AwardCeremonies from "./components/events/AwardCeremonies";
import IncentiveTravel from "./components/events/IncentiveTravel";
import ProductLaunch from "./components/events/ProductLaunch";
import Accommodation from "./components/events/Accomodation_Transport";
import WhatWeOffer from "./components/whatweoffer/Offer";
import ClientPage from "./components/clients/ClientPage";
import HealthCare from "./components/clients/HealthCare";
import CaseStudies from "./components/clients/CaseStudies";

// admin
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import ManageEvents from "./components/admin/ManageEvents";
import AdminRoute from "./components/admin/AdminRoute";
import ContactLeads from "./components/admin/ContactLeads";
import AllPhotos from "./components/gallery/AllPhotos";
<<<<<<< HEAD
=======
import GalleryAdmin from "./components/admin/GalleryAdmin";
import BannerManagement from "./components/admin/BannerManagement";
>>>>>>> fe4c9d8 (Updated project)

function App() {
  const location = useLocation();

  // check admin route
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      <ScrollToTop />

      <Routes>
        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/our-gallery" element={<AllPhotos />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesMain />} />
        <Route
          path="/services/servicesoverview"
          element={<ServicesOverview />}
        />
        <Route path="/services/entertainopt" element={<EntertainOpt />} />
        <Route path="/services/eventmanagement" element={<EventManagement />} />
        <Route path="/services/eventproduction" element={<EventProduction />} />
        <Route path="/services/rewards" element={<Reward />} />
        <Route path="/services/techintegration" element={<TechIntegration />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/events/upcoming" element={<UpcomingEvents />} />
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
        <Route path="/clients" element={<ClientPage />} />
        <Route path="/clients/healthcare" element={<HealthCare />} />
        <Route path="/clients/casestudies" element={<CaseStudies />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/offer" element={<WhatWeOffer />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/events"
          element={
            <AdminRoute>
              <ManageEvents />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/leads"
          element={
            <AdminRoute>
              <ContactLeads />
            </AdminRoute>
          }
        />
<<<<<<< HEAD
      </Routes>

=======

        <Route
          path="/admin/gallery"
          element={
            <AdminRoute>
              <GalleryAdmin/>
            </AdminRoute>
          }
        />
        <Route path="/admin/banners" element={<BannerManagement />} />
      </Routes>



>>>>>>> fe4c9d8 (Updated project)
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
