"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Water Solutions
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link href="#products" className="text-gray-700 hover:text-blue-600">
              Products
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

