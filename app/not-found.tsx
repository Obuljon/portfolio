import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-xl text-gray-600">Sahifa topilmadi 😔</p>
      <p className="mt-2 text-gray-500">Kechirasiz, siz izlagan sahifa mavjud emas.</p>
      
      <Link 
        href="/" 
        className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}