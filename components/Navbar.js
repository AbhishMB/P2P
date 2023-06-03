import React from "react";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="p-3">
      <ul className="text-lg nav-font text-right bg-slate-100 rounded-md p-2">
        <Link href="/" className="absolute left-0 top-0  px-5 ">
          <Image src="/p2p.png" alt="et" width="70" height="70" />
        </Link>
        <Link href="/Detail" className="px-5">
          Events
        </Link>
        <Link href="/Blogs" className="px-5">
          Blogs
        </Link>
        <Link href="/Admin" className="px-5">
          Admin
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
