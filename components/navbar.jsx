import React from "react";
import Link from "next/link";

const Navbar = () => {
  const primaryLinks = "text-red-500";
  const linksFlex = "flex justify-between gap-2";
  const navContainer = "w-3/4 h-12 mx-auto border-2 flex justify-between p-2";
  return (
    <nav className={navContainer}>
      <h1>Nextjs App</h1>
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
