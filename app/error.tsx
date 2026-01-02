// app/error.tsx
"use client";  // Bu muhim! Chunki error handling clientda bo'ladi

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Xatoni log qilish (masalan, Sentry, console yoki boshqa monitoringga)
    console.error("Global error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-red-50">
      <h1 className="text-6xl font-bold text-red-600">Xato yuz berdi 😞</h1>
      <p className="mt-4 text-xl text-gray-700">
        Serverda kutilmagan muammo yuz berdi. Iltimos, keyinroq urinib koʻring.
      </p>
      <p className="mt-2 text-sm text-gray-500">
        Xato: {error.message}
      </p>

      <button
        onClick={() => reset()}  // Sahifani qayta yuklashga urinish
        className="mt-8 rounded-lg bg-red-600 px-6 py-3 text-white hover:bg-red-700 transition"
      >
        Qayta urinish
      </button>
    </div>
  );
}