import React, { useEffect, useState } from "react";
import { Trash2, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactLeads() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("leads")) || [];
    setLeads(data);
  }, []);

  const deleteLead = (id) => {
    const updated = leads.filter((l) => l.id !== id);
    setLeads(updated);
    localStorage.setItem("leads", JSON.stringify(updated));
  };

  const filteredLeads = leads.filter((l) =>
    l.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-8 py-6 relative">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.06),transparent_70%)]"></div>

      <h1 className="text-2xl sm:text-3xl font-semibold mb-6 relative z-10">
        Contact Leads
      </h1>

      {/* Search */}
      <div className="mb-6 relative z-10">
        <Search className="absolute left-3 top-3 text-yellow-500" size={16} />
        <input
          type="text"
          placeholder="Search leads..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 p-2.5 rounded-lg bg-black/40 border border-yellow-500/20 outline-none"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto relative z-10">
        <table className="w-full min-w-[600px] border border-yellow-500/20 rounded-xl">
          <thead className="bg-[#111] text-yellow-400">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
               <th className="p-3">Service</th>
              <th className="p-3">Event</th>
              <th className="p-3">Message</th>
              <th className="p-3">Date</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredLeads.map((lead) => (
              <motion.tr
                key={lead.id}
                whileHover={{ backgroundColor: "#1a1a1a" }}
                className="border-t border-yellow-500/10 text-center"
              >
                <td className="p-3">{lead.name}</td>
                <td className="p-3">{lead.email}</td>
                <td className="p-3">{lead.message}</td>
                <td className="p-3 text-xs">{lead.date}</td>

                <td className="p-3">
                  <button
                    onClick={() => deleteLead(lead.id)}
                    className="text-red-400"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}