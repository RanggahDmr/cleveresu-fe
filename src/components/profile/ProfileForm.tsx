"use client";

import { useState } from "react";
import { Pencil, Check } from "lucide-react";

type Profile = {
  fullName: string;
  city: string;
  postalCode: string;
  address: string;
  gender: string;
  email: string;
  phone: string;
  birthdate: string;
};

interface Props {
  profile: Profile;
  setProfile: React.Dispatch<React.SetStateAction<Profile>>;
}

export default function ProfileForm({ profile, setProfile }: Props) {
  const [editingField, setEditingField] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState("");

  const handleEdit = (field: string) => {
    setEditingField(field);
    setTempValue(profile[field as keyof Profile]);
  };

  const handleSave = (field: string) => {
    setProfile({ ...profile, [field]: tempValue });
    setEditingField(null);
  };

  return (
    <div className="space-y-5">
      {Object.entries(profile).map(([key, value]) => (
        <div key={key} className="flex flex-col gap-1 group">
          <label className="text-sm font-medium text-gray-600 capitalize">
            {key.replace(/([A-Z])/g, " $1")}
          </label>

          <div className="flex items-center gap-2">
            {/* Jika sedang diedit */}
            {editingField === key ? (
              <>
                <input
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  className="flex-1 border rounded-lg px-3 py-2 text-gray-900 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  autoFocus
                />
                <button
                  onClick={() => handleSave(key)}
                  className="text-green-600 hover:text-green-700 transition"
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
      ))}
    </div>
  );
}




// "use client";

// import React from "react";

// type Profile = {
//   fullName: string;
//   city: string;
//   postalCode: string;
//   address: string;
//   email: string;
//   phone: string;
//   date : string
// };

// interface Props {
//   profile: Profile;
//   setProfile: React.Dispatch<React.SetStateAction<Profile>>;
// }

// export default function ProfileForm({ profile, setProfile }: Props) {
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   const handleSave = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Profile tersimpan:", profile);
//     alert("Profile tersimpan (cek console)");
//   };

//   return (
//     <form onSubmit={handleSave} className="space-y-5">
//       {Object.entries(profile).map(([key, value]) => (
//         <div key={key}>
//           <label className="block text-sm font-medium text-gray-700 capitalize mb-1">
//             {key.replace(/([A-Z])/g, " $1")}
//           </label>
//           <input
//             name={key}
//             value={value}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-3 py-2 text-gray-900 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
//           />
//         </div>
//       ))}

//       <div className="pt-4 flex justify-end">
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 shadow-sm transition"
//         >
//           Save
//         </button>
//       </div>
//     </form>
//   );
// }
