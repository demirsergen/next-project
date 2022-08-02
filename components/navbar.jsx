import React from "react";
import Link from "next/link";

const Navbar = () => {
  const primaryLinks = "text-black font-bold text-xl";
  const linksFlex = "flex justify-between gap-2";
  const navContainer =
    "w-full h-12 mx-auto flex justify-between py-2 px-8 bg-blue-100";
  return (
    <nav className={navContainer}>
      <h1 className="text-2xl">Rent Now!</h1>
      <ul className={linksFlex}>
        <li>
          <Link href="/">
            <a className={primaryLinks}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a className={primaryLinks}>Login</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
