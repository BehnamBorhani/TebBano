"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./header.scss";
import { Button } from "@/app/_component/button";
import { useState } from "react";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { MyButton } from "../button/MyButton";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { title: "خانه", href: "/" },
    { title: "مراکز درمانی", href: "/message" },
    { title: "مقالات", href: "/blogs" },
    { title: "درباره ما", href: "/about-us" },
    { title: "تماس با ما", href: "/contact-us" },
  ];

  return (
    <>
      {/* <header className="container absolute left-0 right-0 top-4 z-50 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-icon.svg"
            alt="logo"
            width={100}
            height={100}
            className="size-24"
          />
          <Image
            src="/images/brand-logo.png"
            alt="logo"
            width={138}
            height={55}
            className="hidden h-14 w-32 md:block"
          />
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
      </header> */}
      <Navbar
        position="static"
        height="6rem"
        onMenuOpenChange={setIsMenuOpen}
        classNames={{
          base: "bg-[#E6E6EE]",
          wrapper: "!container",
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-[30px]",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-primary",
          ],
        }}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          />
          <NavbarBrand>
            <Image
              src="/images/logo-icon.svg"
              alt="logo"
              width={100}
              height={100}
              className="size-16"
            />
            <Image
              src="/images/brand-logo.png"
              alt="logo"
              width={138}
              height={55}
              className="hidden h-12 w-28 md:block"
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex md:gap-4 lg:gap-8 xl:gap-12"
          justify="center"
        >
          {menuItems.map((item, index) => (
            <NavbarItem
              key={`${item}-${index}`}
              isActive={pathname === item.href}
            >
              <Link color="foreground" href={item.href}>
                {item.title}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/signin">ورود</Link>
          </NavbarItem>
          <NavbarItem>
            <MyButton as={Link} color="primary" href="/signin" variant="flat">
              ثبت‌نام
            </MyButton>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                className="w-full"
                href={item.href}
                size="lg"
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};
