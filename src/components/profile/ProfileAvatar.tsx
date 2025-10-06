"use client";
import { useState } from "react";
import { Upload, User } from "lucide-react";
import api from "@/lib/axios";

interface Props {
  photo: string;
  setPhoto: (url: string) => void;
}

export default function ProfileAvatar({ photo, setPhoto }: Props) {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Preview dulu
    const reader = new FileReader();
    reader.onload = () => setPhoto(reader.result as string);
    reader.readAsDataURL(file);

    // Upload ke backend
    const formData = new FormData();
    formData.append("photo_profile", file);

    try {
      setUploading(true);
      const token = localStorage.getItem("token");
      const res = await api.patch("/profile", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(" Foto berhasil diupload:", res.data);
      if (res.data?.data?.photo_profile) {
        setPhoto(res.data.data.photo_profile); // Update state global
      }
    } catch (err: any) {
      console.error(" Upload gagal:", err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex justify-center items-center shadow-inner mb-3">
        {photo ? (
          <img src={photo} alt="Profile" className="object-cover w-full h-full" />
        ) : (
          <User className="w-12 h-12 text-gray-400" />
        )}
      </div>
      <label className="cursor-pointer bg-blue-600 text-white text-sm px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
        <Upload className="w-4 h-4" />
        {uploading ? "Uploading..." : "Upload Photo"}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleUpload}
          disabled={uploading}
        />
      </label>
    </div>
  );
}
