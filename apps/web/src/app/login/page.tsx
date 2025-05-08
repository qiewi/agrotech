'use client';

import Image from 'next/image';

const loginHeader = (
  <div className="w-full px-6 pt-8 flex flex-col items-center">
    <Image
      src="/bg-login.png"
      alt="AgroTech Header"
      width={1000}
      height={700}
      className="w-full h-auto"
      priority
    />
  </div>
);

const loginForm = (
  <form className="mt-8 px-6 w-full space-y-4">
    <div>
      <h2 className="text-2xl font-bold text-green-700">Halo! <br />Silakan masuk</h2>
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="w-full px-4 py-2 bg-green-20 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Masukkan email"
      />
    </div>

    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
        Password
      </label>
      <input
        type="password"
        id="password"
        className="w-full px-4 py-2 bg-green-20 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Masukkan password"
      />
    </div>

    <button
      type="submit"
      className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-md shadow font-semibold text-lg"
    >
      Masuk
    </button>
  </form>
);

export default function LoginPage() {
  return (
    <>
      {loginHeader}
      {loginForm}
    </>
  );
}
