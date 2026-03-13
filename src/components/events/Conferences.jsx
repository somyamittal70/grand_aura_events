import React from "react";
import EventPage from "./EventPage";
import img from "../../assets/Conferences.jpeg";

export default function Conferences() {

  return (

    <EventPage
      title="Conferences"
      img={img}
      description="We organize professional conferences with seamless event planning, cutting-edge AV technology, and exceptional guest management to ensure an impactful experience for attendees."
    />

  );

}