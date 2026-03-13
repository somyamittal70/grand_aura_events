import React from "react";
import { motion } from "framer-motion";

export default function EventPage({ title, description, img }) {

  return (

    <div className="bg-[#0B1D3A] min-h-screen text-white mb-5">

      {/* HERO */}
      <div className="relative h-[650px] flex items-center  bg-white justify-center">

        <img
          src={img}
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0"></div>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-8xl font-bold text-center"
        >
          {title}
        </motion.h1>

      </div>


      {/* CONTENT */}
      <div className="max-w-8xl mx-auto py-20 px-6">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl text-center leading-relaxed text-gray-300"
        >
          {description}
        </motion.p>


        {/* IMAGE GALLERY */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 mb-5">

          {[1,2,3].map((i)=>(
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={img}
                className="w-full h-[450px] object-cover"
              />
            </motion.div>
          ))}

        </div>

      </div>

    </div>

  );
}