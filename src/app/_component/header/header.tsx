"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./header.scss";
import { Button } from "@/app/_component/button";

export const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      <header className="container absolute left-0 right-0 top-4 z-50 flex items-center justify-between">
        <Link href="/">
          <Image src="/images/logo.svg" alt="logo" width={247} height={99} />
        </Link>

        <nav className="hidden items-center justify-center gap-16 text-2xl font-bold md:flex">
          <Link href="/" className={`${pathname === "/" && "active"}`}>
            خانه
          </Link>

          <Link
            href="/message"
            className={`${pathname === "/message" && "active"}`}
          >
            مراکز درمانی
          </Link>

          <Link
            href="/blogs"
            className={`${pathname === "/blogs" && "active"}`}
          >
            مقالات
          </Link>

          <Link
            href="/about-us"
            className={`${pathname === "/about-us" && "active"}`}
          >
            درباره ما
          </Link>

          <Link
            href="/contact-us"
            className={`${pathname === "/contact-us" && "active"}`}
          >
            تماس با ما
          </Link>
        </nav>

        <Link href="/signin" className="hidden md:inline-block">
          <Button
            variant="outline"
            color="primary"
            className="mr-auto text-xl font-bold text-icon-500"
          >
            ثبت‌نام / ورود
            <Image
              src="/images/icons/login.svg"
              alt="logo"
              width={35}
              height={35}
            />
          </Button>
        </Link>
      </header>
    </>
  );
};
