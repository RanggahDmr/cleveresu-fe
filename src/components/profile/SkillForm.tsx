"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

interface SkillFormProps {
  skills: string[];
  setSkills: (data: string[]) => void;
}

export default function SkillForm({ skills, setSkills }: SkillFormProps) {
  const [newSkill, setNewSkill] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkill.trim()) return;
    setSkills([...skills, newSkill]);
    setNewSkill("");
  };

  const handleDelete = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <section className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
      {/* Judul */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Skills</h2>
      </div>

      {/* Daftar skills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-1 bg-blue-50 text-blue-800 px-3 py-1.5 rounded-full border border-blue-200 shadow-sm hover:bg-blue-100 transition"
            >
              <span className="text-sm font-medium">{skill}</span>
              <button
                type="button"
                onClick={() => handleDelete(index)}
                className="hover:text-red-500 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">No skills added yet</p>
        )}
      </div>

      {/* Input tambah skill */}
      <form
        onSubmit={handleAdd}
        className="flex flex-col md:flex-row gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200"
      >
        <input
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Add a new skill..."
          className="border rounded-md px-3 py-2 flex-1 text-gray-900 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-1 bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 shadow-sm transition"
        >
          <Plus className="w-4 h-4" /> Add
        </button>
      </form>
    </section>
  );
}
