"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./header.scss";
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
import { menuItems } from "@/data/menu-items";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <Navbar
        position="static"
        height="6rem"
        onMenuOpenChange={setIsMenuOpen}
        classNames={{
          base: "bg-transparent",
          wrapper: "!container md:px-0",
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
              <Link className="w-full" href={item.href} size="lg">
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};
