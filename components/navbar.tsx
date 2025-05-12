"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home, BookOpen, BookText, CheckCircle, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="border-b sticky top-0 bg-background z-50">
      <div className="container mx-auto flex items-center justify-between h-14 px-4">
        <Link href="/" className="font-bold text-xl flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          <span>WordMemo</span>
        </Link>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-1">
          <Link href="/">
            <Button variant={isActive("/") ? "default" : "ghost"} size="sm">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </Link>
          <Link href="/practice">
            <Button variant={isActive("/practice") ? "default" : "ghost"} size="sm">
              <BookOpen className="h-4 w-4 mr-2" />
              Practice
            </Button>
          </Link>
          <Link href="/lists">
            <Button variant={isActive("/lists") ? "default" : "ghost"} size="sm">
              <BookText className="h-4 w-4 mr-2" />
              Lists
            </Button>
          </Link>
          <Link href="/memorized">
            <Button variant={isActive("/memorized") ? "default" : "ghost"} size="sm">
              <CheckCircle className="h-4 w-4 mr-2" />
              Memorized
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="flex flex-col p-2 space-y-1">
            <Link href="/" onClick={toggleMenu}>
              <Button variant={isActive("/") ? "default" : "ghost"} className="w-full justify-start" size="sm">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
            <Link href="/practice" onClick={toggleMenu}>
              <Button variant={isActive("/practice") ? "default" : "ghost"} className="w-full justify-start" size="sm">
                <BookOpen className="h-4 w-4 mr-2" />
                Practice
              </Button>
            </Link>
            <Link href="/lists" onClick={toggleMenu}>
              <Button variant={isActive("/lists") ? "default" : "ghost"} className="w-full justify-start" size="sm">
                <BookText className="h-4 w-4 mr-2" />
                Lists
              </Button>
            </Link>
            <Link href="/memorized" onClick={toggleMenu}>
              <Button variant={isActive("/memorized") ? "default" : "ghost"} className="w-full justify-start" size="sm">
                <CheckCircle className="h-4 w-4 mr-2" />
                Memorized
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
