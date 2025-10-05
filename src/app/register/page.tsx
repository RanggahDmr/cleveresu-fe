

"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets:["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function LoginPage() {
  return (
   
    <div className="min-h-screen flex font-jakarta">
      {/* Kiri */}
      <div className="hidden md:flex w-1/2 bg-green-200 flex-col items-center justify-center p-10">
        <Image
          src="/next.svg" // ganti dengan file logo/ilustrasi kamu di /public
          alt="Lovebirds"
          width={300}
          height={300}
        />
        <h2 className="text-2xl font-bold mt-6 text-black">Lorem ipsum dolor sit.</h2>
        <p className="text-gray-700 text-center mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, autem.
        </p>
      </div>

      {/* Kanan */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 bg-white text-black">
        <h1 className="text-3xl font-bold mb-2 text-black">Welcome to CleveResu - ganti logo</h1>
        <p className="text-gray-500 mb-6">Sign in to continue</p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            {/* <div className="text-right mt-1">
              <Link href="#" className="text-sm text-green-600">
                Forgot password?
              </Link>
            </div> */}
          </div>
          

          <button
            type="submit"
            className="w-full bg-gray-800 text-white rounded-md py-2 font-semibold hover:bg-gray-700"
          >
            Sign in
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-2 text-gray-400">or</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          New Cleveresu{" "}
          <Link href="/register" className="text-green-600 font-medium">
            Create Account
          </Link>
        </p>
      </div>
    </div>
    
  );
}
