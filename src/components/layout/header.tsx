'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        {/* Emergency Banner */}
        <div className="bg-yellow-100 text-yellow-800 text-sm text-center py-1">
          新型コロナウイルス感染症対策として、オンライン授業を実施しています。
        </div>

        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            TechKids
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/courses" className="text-gray-600 hover:text-primary">
              コース紹介
            </Link>
            <Link href="/curriculum" className="text-gray-600 hover:text-primary">
              カリキュラム
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-primary">
              よくある質問
            </Link>
            <Button variant="outline" className="ml-4">
              無料体験はこちら
            </Button>
            <button className="text-gray-600 hover:text-primary">
              EN
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/courses"
                className="text-gray-600 hover:text-primary px-4"
              >
                コース紹介
              </Link>
              <Link
                href="/curriculum"
                className="text-gray-600 hover:text-primary px-4"
              >
                カリキュラム
              </Link>
              <Link
                href="/faq"
                className="text-gray-600 hover:text-primary px-4"
              >
                よくある質問
              </Link>
              <Button variant="outline" className="mx-4">
                無料体験はこちら
              </Button>
              <button className="text-gray-600 hover:text-primary px-4">
                EN
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
