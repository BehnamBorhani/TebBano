"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./header.scss";
import {Button} from "@/app/_component/button";

export const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      <header className="container absolute left-0 right-0 top-7 z-50 flex items-center justify-between">
        <Image
            src="/images/logo.svg"
            alt="logo"
            width={247}
            height={99}
            className=""
        />

        <nav className="flex items-center justify-center gap-16 text-2xl font-bold">
          <Link href="/" className={`${pathname === "/" && "active"}`}>
            خانه
          </Link>

          <Link
            href="/message"
            className={`${pathname === "/message" && "active"}`}
          >
            مراکز درمانی
          </Link>

          <Link href="/blogs" className={`${pathname === "/blogs" && "active"}`}>
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

        <Link href="/signin">
          <Button variant="outline" color="primary" className="mr-auto font-bold text-xl">
            ثبت‌نام / ورود
            <Image
                src="/images/login.svg"
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
