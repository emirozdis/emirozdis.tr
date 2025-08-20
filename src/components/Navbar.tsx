"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { useRouter } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/#hero" },
  { name: "Projects", href: "/#projects" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const isHomePage = pathname === "/";
    const targetId = href.substring(1);

    if (isHomePage) {
      lenis?.scrollTo(targetId, { offset: -80 });
    } else {
      router.push("/");
      setTimeout(() => {
        lenis?.scrollTo(targetId, { offset: -80 });
      }, 50);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <nav>
          <ul className="flex justify-center space-x-6 font-grotesk sm:space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-base text-primary transition-all hover:font-bold ${
                      isActive ? "font-bold" : "font-normal"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}