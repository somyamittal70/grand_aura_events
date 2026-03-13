import React from "react";
import EventPage from "./EventPage";
import img from "../../assets/ProductLaunch.jpeg";

export default function ProductLaunch() {

  return (

    <EventPage
      title="Product Launch"
      img={img}
      description="GrandAura creates luxurious gala dinners with elegant décor, premium catering, and unforgettable entertainment experiences."
    />

  );

}