"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

export default function ExperienceSection() {
  const [experiences, setExperiences] = useState([
    { company: "PT Dumbways Indonesia", position: "Frontend Developer", years: "2023 - 2024" },
  ]);

  const [newExp, setNewExp] = useState({ company: "", position: "", years: "" });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExp.company || !newExp.position || !newExp.years) return;
    setExperiences([...experiences, newExp]);
    setNewExp({ company: "", position: "", years: "" });
  };

  const handleDelete = (index: number) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-gray-800">Experience</h2>
      </div>

      <form
        onSubmit={handleAdd}
        className="flex flex-col md:flex-row gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6"
      >
        <input
          placeholder="Company"
          value={newExp.company}
          onChange={(e) => setNewExp({ ...newExp, company: e.target.value })}
          className="border rounded-md px-3 py-2 flex-1 text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          placeholder="Position"
          value={newExp.position}
          onChange={(e) => setNewExp({ ...newExp, position: e.target.value })}
          className="border rounded-md px-3 py-2 flex-1 text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          placeholder="Years"
          value={newExp.years}
          onChange={(e) => setNewExp({ ...newExp, years: e.target.value })}
          className="border rounded-md px-3 py-2 flex-1 text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          <Plus className="w-4 h-4" /> Add
        </button>
      </form>

      <ul className="space-y-3">
        {experiences.map((exp, index) => (
          <li
            key={index}
            className="p-4 bg-white rounded-lg shadow border border-gray-100 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold text-gray-800">{exp.company}</p>
              <p className="text-sm text-gray-600">{exp.position}</p>
              <p className="text-xs text-gray-500">{exp.years}</p>
            </div>
            <button
              onClick={() => handleDelete(index)}
              className="text-red-600 hover:text-red-800 flex items-center gap-1"
            >
              <Trash2 className="w-4 h-4" /> Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
