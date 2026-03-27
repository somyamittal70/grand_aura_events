import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Pencil, Search, RefreshCcw } from "lucide-react";

export default function ManageEvents() {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState("");
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  const defaultEvents = [
    { id: 1, name: "Conferences" },
    { id: 2, name: "Exhibitions" },
    { id: 3, name: "Gala Dinners" },
    { id: 4, name: "Experiential" },
    { id: 5, name: "Sales Kick Offs" },
    { id: 6, name: "Award Ceremonies" },
    { id: 7, name: "Incentive Travel" },
    { id: 8, name: "Product Launch" },
    { id: 9, name: "Accommodation & Transportation" },
  ];

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events"));

    if (!savedEvents || savedEvents.length === 0) {
      localStorage.setItem("events", JSON.stringify(defaultEvents));
      setEvents(defaultEvents);
    } else {
      setEvents(savedEvents);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleSubmit = () => {
    if (!newEvent.trim()) return;

    if (editId) {
      setEvents(
        events.map((e) =>
          e.id === editId ? { ...e, name: newEvent } : e
        )
      );
    } else {
      setEvents([...events, { id: Date.now(), name: newEvent }]);
    }

    setNewEvent("");
    setEditId(null);
    setShowModal(false);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  const editEvent = (event) => {
    setNewEvent(event.name);
    setEditId(event.id);
    setShowModal(true);
  };

  const filteredEvents = events.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  const resetEvents = () => {
    localStorage.removeItem("events");
    setEvents(defaultEvents);
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-8 py-6 relative">

      {/* ✨ Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.06),transparent_70%)]"></div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 relative z-10">
        <h1 className="text-2xl sm:text-3xl font-semibold">Manage Events</h1>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={resetEvents}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg border border-yellow-500/30 text-yellow-400 text-sm sm:text-base"
          >
            <RefreshCcw size={14} /> Reset
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              setShowModal(true);
              setEditId(null);
              setNewEvent("");
            }}
            className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold text-sm sm:text-base"
          >
            <Plus size={16} /> Add Event
          </motion.button>
        </div>
      </div>

      {/* 🔍 Search */}
      <div className="mb-6 relative z-10">
        <Search className="absolute left-3 top-3 text-yellow-500" size={16} />
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 p-2.5 sm:p-3 rounded-lg bg-black/40 border border-yellow-500/20 outline-none text-sm sm:text-base"
        />
      </div>

      {/* 📊 Table */}
      <div className="relative z-10 overflow-x-auto">
        <table className="w-full min-w-[500px] border border-yellow-500/20 rounded-xl">
          <thead className="bg-[#111] text-yellow-400 text-sm sm:text-base">
            <tr>
              <th className="p-3 sm:p-4 text-left">Event Name</th>
              <th className="p-3 sm:p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredEvents.map((event) => (
              <motion.tr
                key={event.id}
                whileHover={{ backgroundColor: "#1a1a1a" }}
                className="border-t border-yellow-500/10 text-sm sm:text-base"
              >
                <td className="p-3 sm:p-4">{event.name}</td>

                <td className="p-3 sm:p-4 flex flex-wrap gap-3">
                  <button
                    onClick={() => editEvent(event)}
                    className="flex items-center gap-1 text-yellow-400"
                  >
                    <Pencil size={14} /> Edit
                  </button>

                  <button
                    onClick={() => deleteEvent(event.id)}
                    className="flex items-center gap-1 text-red-400"
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#0f0f0f] border border-yellow-500/20 p-5 sm:p-6 rounded-xl w-full max-w-sm"
          >
            <h2 className="text-lg sm:text-xl mb-4 text-yellow-400">
              {editId ? "Edit Event" : "Add Event"}
            </h2>

            <input
              value={newEvent}
              onChange={(e) => setNewEvent(e.target.value)}
              placeholder="Event Name"
              className="w-full p-2.5 sm:p-3 mb-4 rounded-lg bg-black/40 border border-yellow-500/20 outline-none text-sm sm:text-base"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 text-sm sm:text-base"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold text-sm sm:text-base"
              >
                {editId ? "Update" : "Add"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}