"use client";
import { useState } from "react";
import { Pencil, Check } from "lucide-react";
import api from "@/lib/axios";

type Profile = {
  full_name: string;
  address: string;
  gender: string;
  email: string;
  desc: string;
  birthdate: string;
  photo_profile: string;
};

interface Props {
  profile: Profile;
  setProfile: React.Dispatch<React.SetStateAction<Profile>>;
}

export default function ProfileForm({ profile, setProfile }: Props) {
  const [editingField, setEditingField] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEdit = (field: string) => {
    setEditingField(field);
    setTempValue(profile[field as keyof Profile]);
  };

  const handleSave = async (field: string) => {
    const updatedProfile = { ...profile, [field]: tempValue };
    setProfile(updatedProfile);
    setEditingField(null);
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const res = await api.patch(
        "/profile",
        {
          full_name: updatedProfile.full_name,
          address: updatedProfile.address,
          gender: updatedProfile.gender,
          desc: updatedProfile.desc,
          birthdate: updatedProfile.birthdate
            ? new Date(updatedProfile.birthdate).toISOString()
            : null,
          photo_profile: updatedProfile.photo_profile, 
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log(" Profil berhasil diperbarui:", res.data);
    } catch (err: any) {
      console.error(" Gagal update profil:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-5">
      {Object.entries(profile).map(([key, value]) =>
        key === "photo_profile" ? null : (
          <div key={key} className="flex flex-col gap-1 group">
            <label className="text-sm font-medium text-gray-600 capitalize">
              {key.replace(/_/g, " ")}
            </label>

            <div className="flex items-center gap-2">
              {editingField === key ? (
                <>
                  <input
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    disabled={loading}
                    className="flex-1 border rounded-lg px-3 py-2 text-gray-900 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    autoFocus
                    type={key === "birthdate" ? "date" : "text"}
                  />
                  <button
                    onClick={() => handleSave(key)}
                    disabled={loading}
                    className="text-green-600 hover:text-green-700 transition disabled:opacity-50"
                  >
                    <Check className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <>
                  <p className="flex-1 text-gray-800 bg-gray-50 border rounded-lg px-3 py-2 hover:bg-gray-100 transition">
                    {value || <span className="text-gray-400 italic">Empty</span>}
                  </p>
                  <button
                    onClick={() => handleEdit(key)}
                    className="opacity-0 group-hover:opacity-100 text-blue-600 hover:text-blue-700 transition"
                  >
                    <Pencil className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}
