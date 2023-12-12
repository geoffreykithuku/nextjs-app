"use client";

import Link from "next/link";
import "./index.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const navLinks = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about",
      label: "About",
    },

    {
      href: "/profile",
      label: "Profile",
    },
  ];

  return (
    <html lang="en">
      <body>
        <nav className="flex gap-6 w-full text-blue-400">
          {navLinks.map((link) => {
            const isActive = pathname == link.href

            return (
              <Link
                className={isActive ? "underline" : ""}
                href={link.href}
                key={link.label}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        {children}
      </body>
    </html>
  );
}
