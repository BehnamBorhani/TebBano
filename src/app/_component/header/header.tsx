"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./header.scss";

export const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      <header className="container absolute left-0 right-0 top-7 z-50 flex items-center justify-between">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={47.27}
          height={60}
          className=""
        />

        <nav className="bg-gray-50 text-accent relative flex h-[60px] w-[700px] items-center justify-center gap-24 rounded-[50px] py-5 text-xl font-medium">
          <Link href="/" className={`${pathname === "/" && "active"}`}>
            Home
          </Link>
          <Link href="/blog" className={`${pathname === "/blog" && "active"}`}>
            Blog
          </Link>
          <Link
            href="/contact-us"
            className={`${pathname === "/contact-us" && "active"}`}
          >
            Contact Us
          </Link>
          <Link href="/help" className={`${pathname === "/help" && "active"}`}>
            Help
          </Link>

          <span id="indicator"></span>
        </nav>

        <Image
          src="/images/logo.svg"
          alt="logo"
          width={47.27}
          height={60}
          className=""
        />
      </header>
    </>
  );
};
