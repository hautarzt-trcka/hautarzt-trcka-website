'use client';

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from "@nextui-org/navbar";
import Image from "next/image";
import {Link} from "@nextui-org/link";
import {usePathname} from "next/navigation";
import React from "react";

export default function AppNavbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Startseite",
        "Impressum",
        "Datenschutz"
    ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent className="sm:hidden">
        <NavbarContent justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}/>
        </NavbarContent>
        <NavbarContent className="flex gap-2" justify="center">
          <NavbarBrand>
            <Image
                src="/favicon.png"
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
            />
            <p className="font-bold text-inherit">TRCKA</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="end"></NavbarContent>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-2" justify="start">
        <NavbarBrand>
          <Image
              src="/favicon.png"
              alt="Vercel Logo"
              width={24}
              height={24}
              priority
          />
          <p className="font-bold text-inherit">TRCKA</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === '/'}>
          <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}
                color={pathname !== '/' ? 'foreground' : undefined}>
            Startseite
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/impressum'}>
          <Link href="/impressum" aria-current={pathname === '/impressum' ? 'page' : undefined}
                color={pathname !== '/impressum' ? 'foreground' : undefined}>
            Impressum
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/datenschutz'}>
          <Link href="/datenschutz" aria-current={pathname === '/datenschutz' ? 'page' : undefined}
                color={pathname !== '/datenschutz' ? 'foreground' : undefined}>
            Datenschutz
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end"></NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} isActive={pathname === (index === 0 ? '/' : `/${item.toLowerCase()}`)}>
            <Link
              color={pathname !== (index === 0 ? '/' : `/${item.toLowerCase()}`) ? 'foreground' : undefined}
              aria-current={pathname === (index === 0 ? '/' : `/${item.toLowerCase()}`) ? 'page' : undefined}
              className="w-full"
              href={index === 0 ? '/' : `/${item.toLowerCase()}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
