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

export const dropdownItemsSocial = [
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

        {/* Group 1: Strumenti Testo */}
        <NavbarItem className="items-center">
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light" className="text-sm md:text-base px-2 flex items-center gap-1">
                Strumenti Testo
                <ChevronDown size={16} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Strumenti Testo">
              <DropdownItem href="/carratteri-speciali">Caratteri Speciali</DropdownItem>
              <DropdownItem href="/nomi-speciale">Nomi Speciali</DropdownItem>
              <DropdownItem href="/generatore-testo-corsivo">Testo Corsivo</DropdownItem>
              <DropdownItem href="/font-corsivo">Font Corsivo</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        {/* Group 2: Simboli & Codici */}
        <NavbarItem className="items-center">
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light" className="text-sm md:text-base px-2 flex items-center gap-1">
                Simboli & Codici
                <ChevronDown size={16} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Simboli & Codici">
              <DropdownItem href="/lista-de-atalhos-do-teclado-para">Scorciatoie Alt Code</DropdownItem>
              <DropdownItem href="/special-character-table-in-html">Tabella HTML</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        {/* Group 3: Emoticons & Emoji */}
        <NavbarItem className="items-center">
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light" className="text-sm md:text-base px-2 flex items-center gap-1">
                Emoticons & Emoji
                <ChevronDown size={16} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Emoticons & Emoji">
              <DropdownItem href="/text-characters-emoticons">Emoticons</DropdownItem>
              <DropdownItem href="/emojis">Emojis</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        {/* Group 4: Mezzi Sociali */}
        <NavbarItem className="items-center">
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light" className="text-sm md:text-base px-2 flex items-center gap-1">
                Mezzi Sociali
                <ChevronDown size={16} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Social Character Generators">
              {dropdownItemsSocial.map((item, index) => (
                <DropdownItem key={index} href={item.path}>
                  {item.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu>
        <div className="flex flex-col items-start text-left h-fit text-3xl px-4">
          {/* Strumenti Testo */}
          <NavbarMenuItem>
            <p className="font-bold text-xl mt-4 mb-1">Strumenti Testo</p>
          </NavbarMenuItem>
          {[
            { label: "Caratteri Speciali", path: "/carratteri-speciali" },
            { label: "Nomi Speciali", path: "/nomi-speciale" },
            { label: "Testo Corsivo", path: "/generatore-testo-corsivo" },
            { label: "Font Corsivo", path: "/font-corsivo" },
          ].map((item, index) => (
            <NavbarMenuItem key={`text-${index}`}>
              <Link href={item.path} color="foreground" size="lg" className="font-semibold">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}

          {/* Simboli & Codici */}
          <NavbarMenuItem>
            <p className="font-bold text-xl mt-4 mb-1">Simboli & Codici</p>
          </NavbarMenuItem>
          {[
            { label: "Scorciatoie Alt Code", path: "/lista-de-atalhos-do-teclado-para" },
            { label: "Tabella HTML", path: "/special-character-table-in-html" },
          ].map((item, index) => (
            <NavbarMenuItem key={`code-${index}`}>
              <Link href={item.path} color="foreground" size="lg" className="font-semibold">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}

          {/* Emoticons & Emoji */}
          <NavbarMenuItem>
            <p className="font-bold text-xl mt-4 mb-1">Emoticons & Emoji</p>
          </NavbarMenuItem>
          {[
            { label: "Emoticons", path: "/text-characters-emoticons" },
            { label: "Emojis", path: "/emojis" },
          ].map((item, index) => (
            <NavbarMenuItem key={`emoji-${index}`}>
              <Link href={item.path} color="foreground" size="lg" className="font-semibold">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}

          {/* Mezzi Sociali */}
          <NavbarMenuItem>
            <p className="font-bold text-xl mt-4 mb-1">Mezzi Sociali</p>
          </NavbarMenuItem>
          {dropdownItemsSocial.map((item, index) => (
            <NavbarMenuItem key={`social-${index}`}>
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
