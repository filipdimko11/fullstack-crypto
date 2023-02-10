import { ThemeProvider } from "@/context/ThemeContext";
import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="grid grid-cols-2 justify-center mx-auto">
      <div>
        <Link href="/">
          <h1>Cryptobase</h1>
        </Link>
      </div>
      <div>
        <ThemeProvider>
          <ThemeToggle />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Navbar;
