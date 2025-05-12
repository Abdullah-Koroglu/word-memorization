"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home, BookOpen, BookText, CheckCircle } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="font-bold text-xl flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          <span>WordMemo</span>
        </Link>

        <div className="flex items-center gap-1">
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
    </nav>
  )
}
