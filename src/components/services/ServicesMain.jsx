import React from "react";
import { Link } from "react-router-dom";
import Divider from "../../components/home/Divider";
<<<<<<< HEAD
import img1 from "../../assets/wedding9.jpg";
import img2 from "../../assets/wedding10.png";
import img3 from "../../assets/wedding11.jpeg";
import img4 from "../../assets/wedding12.png";
import img5 from "../../assets/wedding13.png";
import img6 from "../../assets/wedding14.png";
=======
import img1 from "../../assets/wed1.jpeg";
import img2 from "../../assets/wed2.jpeg";
import img3 from "../../assets/wed3.jpeg";
import img4 from "../../assets/wed4.jpeg";
import img5 from "../../assets/wed5.jpeg";
>>>>>>> fe4c9d8 (Updated project)
import { motion } from "framer-motion";

const services = [
  {
    title: "Event Management",
    path: "/services/eventmanagement",
    img: img2,
  },
  {
    title: "Event Production",
    path: "/services/eventproduction",
    img: img3,
  },
  {
    title: "Reward & Recognition",
    path: "/services/rewards",
    img: img4,
  },
  {
    title: "Technology Integration",
    path: "/services/techintegration",
    img: img5,
  },
  {
    title: "Entertainment Options",
    path: "/services/entertainOpt",
    img: img1,
  },
];

export default function ServicesMain() {
  return (
    <>
    <section className="bg-[#0B1D3A] py-24 px-8 text-white">
      <h2 className="text-6xl text-center font-bold mt-20 mb-2 text-white">
        Our <span className="gold-shimmer-text">Services</span>
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg">
        We offer a curated range of event management services designed to turn
        your vision into reality.
      </p>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#132C52] rounded-2xl overflow-hidden shadow-xl"
          >
            <img src={service.img} className="h-[250px] w-full object-cover" />

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>

              <Link
                to={service.path}
                className="text-[#CFAF4B] font-semibold hover:underline"
              >
                Explore Service →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    <Divider />
    </>
  );
}
