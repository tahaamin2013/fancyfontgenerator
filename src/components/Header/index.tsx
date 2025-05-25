"use client"

import React from "react"
import { Link } from "@nextui-org/link"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar"
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react"
import { ChevronDown } from "lucide-react"
import Logo from "./Logo"

export interface MenuItem {
  id: string
  label: string
  path: string
}

export const mymenuitems: MenuItem[] = [
  { id: "carratteri-speciali", label: "Caratteri Speciali", path: "/carratteri-speciali" },
  { id: "lista-de-atalhos-do-teclado-para", label: "Scorciatoie Alt Code", path: "/lista-de-atalhos-do-teclado-para" },
  { id: "text-characters-emoticons", label: "Emoticons", path: "/text-characters-emoticons" },
  { id: "special-character-table-in-html", label: "HTML Table", path: "/special-character-table-in-html" },
  { id: "nomi-speciale", label: "Nomi Speciali", path: "/nomi-speciale" },
  { id: "generatore-testo-corsivo", label: "Testo Corsivo", path: "/generatore-testo-corsivo" },
  { id: "emojis", label: "Emojis", path: "/emojis" },
  { id: "font-corsivo", label: "Font Corsivo", path: "/font-corsivo" },
]

export const dropdownItems = [
  { label: "WhatsApp", path: "/social/generatore-di-caratteri-per-whatsapp" },
  { label: "Twitter", path: "/social/generatore-di-caratteri-per-twitter" },
  { label: "Tumblr", path: "/social/generatore-di-caratteri-per-tumblr" },
  { label: "Instagram", path: "/social/generatore-di-caratteri-per-instagram" },
  { label: "Facebook", path: "/social/generatore-di-caratteri-per-facebook" },
  { label: "Nickname", path: "/social/generatore-di-caratteri-per-nickname" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
      className="w-full"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand className="gap-3">
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-2 md:gap-4 items-center" justify="end">
        <NavbarBrand className="gap-3">
          <Logo />
        </NavbarBrand>

        <div className="flex overflow-x-auto hide-scrollbar items-center">
          {mymenuitems.map((item: MenuItem, index: number) => (
            <NavbarItem key={index}>
              <Link
                href={item.path}
                color="foreground"
                size="lg"
                className="text-sm md:text-base whitespace-nowrap px-2"
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}

          {/* Dropdown for Social Generators */}
          <NavbarItem className="items-center">
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="light"
                  className="text-sm md:text-base px-2 flex items-center gap-1"
                >
                  Social Media
                  <ChevronDown size={16} />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Social Character Generators">
                {dropdownItems.map((item, index) => (
                  <DropdownItem key={index} href={item.path}>
                    {item.label}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarMenu>
        <div className="flex flex-col items-start text-left h-fit text-3xl px-4">
          {mymenuitems.map((item: MenuItem, index: number) => (
            <NavbarMenuItem key={index}>
              <Link href={item.path} color="foreground" size="lg" className="font-semibold">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}

          {/* Dropdown section in mobile menu */}
          <NavbarMenuItem>
            <p className="font-bold text-xl mt-4 mb-1">Social Media</p>
          </NavbarMenuItem>
          {dropdownItems.map((item, index) => (
            <NavbarMenuItem key={`dropdown-${index}`}>
              <Link href={item.path} color="foreground" size="lg" className="font-semibold">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  )
}
