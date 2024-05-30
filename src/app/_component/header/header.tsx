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
        <nav className="flex h-[60px] w-[700px] items-center justify-center gap-16 text-2xl font-bold">
          <Link href="/" className={`${pathname === "/" && "active"}`}>
            خانه
          </Link>

          <Link
            href="/message"
            className={`${pathname === "/message" && "active"}`}
          >
            پیامک ناشناس
          </Link>

          <Link href="/help" className={`${pathname === "/help" && "active"}`}>
            راهنما
          </Link>

          <Link
            href="/about-us"
            className={`${pathname === "/about-us" && "active"}`}
          >
            درباره ما
          </Link>
        </nav>

        <Image
          src="/images/logo dark.svg"
          alt="logo"
          width={47.27}
          height={60}
          className=""
        />
      </header>
    </>
  );
};
