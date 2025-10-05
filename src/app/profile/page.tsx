"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProfileAvatar from "@/components/profile/ProfileAvatar";
import ProfileForm from "@/components/profile/ProfileForm";
import ExperienceSection from "@/components/profile/ExperienceForm";
import SkillForm from "@/components/profile/SkillForm";
import { User, Briefcase, Lightbulb } from "lucide-react";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    fullName: "Budi Santoso",
    city: "Jakarta",
    postalCode: "57452",
    address: "Jl. Contoh No. 10",
    gender: "male",
    email: "budi@gmail.com",
    phone: "089623346123",
    birthdate:"1234"
  });
  

  const [skills, setSkills] = useState<string[]>([
    "JavaScript",
    "React",
    "Tailwind CSS",
  ]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />

      <main className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Account Profile
        </h1>

        {/* Profile Section */}
        <section className="bg-white shadow-lg rounded-2xl p-8 md:p-10 mb-10 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-800">
              Personal Information
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="md:w-1/3 flex flex-col items-center">
              <ProfileAvatar />
            </div>
            <div className="md:w-2/3">
              <ProfileForm profile={profile} setProfile={setProfile} />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-white shadow-lg rounded-2xl p-8 md:p-10 mb-10 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-800">
              Work Experience
            </h2>
          </div>
          <ExperienceSection />
        </section>

        {/* Skill Section */}
        <section className="bg-white shadow-lg rounded-2xl p-8 md:p-10 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
          </div>
          <SkillForm skills={skills} setSkills={setSkills} />
        </section>
      </main>
    </div>
  );
}
