// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
interface ContactItem {
  name: string;
  path: string;
  icon: string;
}

interface NavItem {
  name: string;
  path: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const dev_name: string = "Obul Rakhim";
  const nav_list: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];

  const cantact_list: ContactItem[] = [
    { name: "GitHub", path: " ", icon: " " },
    { name: "LinkedIn", path: " ", icon: " " },
    { name: "Telegram", path: " ", icon: " " },
    { name: "Email", path: " ", icon: " " },
  ];

  return (
    <nav className="bg-white shadow p-4">
      <div><h1>{dev_name}</h1></div>
      <ul className="flex gap-6">
        {nav_list.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={
                pathname === item.path
                  ? "text-blue-600 font-bold"
                  : "text-gray-600"
              }
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex gap-6 mt-4">
        {cantact_list.map((item) => (
          <li key={item.name}>
            <Link
              href={item.path}
              className="text-gray-600 hover:text-blue-600"
            >
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
