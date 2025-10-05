"use client";
import { useState } from "react";
import { Upload, User } from "lucide-react";

export default function ProfileAvatar() {
  const [photo, setPhoto] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPhoto(reader.result as string);
    reader.readAsDataURL(file);
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
        <Upload className="w-4 h-4" /> Upload Photo
        <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
      </label>
    </div>
  );
}
