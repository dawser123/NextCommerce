import React from "react";
import HeaderActions from "./headerActionsButtons";
import Link from "next/link";
import Container from "./contentWrapper";
import { navLinks } from "@/constants/navLinks";

const Header = () => {
  return (
    <>
      <header className="fixed z-50 w-full bg-primaryColor py-5">
        <Container>
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl uppercase md:text-3xl">
              <Link href={"/"}>Topstore</Link>
            </h1>
            <HeaderActions />
          </nav>
          <ul className="mt-3 flex gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </Container>
      </header>
    </>
  );
};

export default Header;
