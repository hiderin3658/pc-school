'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'ホーム', href: '/' },
  { name: 'コース紹介', href: '/courses' },
  { name: 'カリキュラム', href: '/curriculum' },
  { name: 'よくある質問', href: '/faq' },
  { name: 'お問い合わせ', href: '/contact' },
]

export function AccessibleNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  // キーボードナビゲーション用のハンドラー
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu()
      }
    },
    [closeMenu]
  )

  // メニューが開いているときはスクロールを無効化
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // キーボードイベントのリスナー
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <nav
      className="relative bg-white"
      role="navigation"
      aria-label="メインナビゲーション"
    >
      {/* デスクトップメニュー */}
      <div className="hidden md:flex items-center space-x-8">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-gray-600 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            aria-current={pathname === item.href ? 'page' : undefined}
          >
            {item.name}
          </Link>
        ))}
        <Button
          variant="outline"
          className="ml-4"
          onClick={() => window.location.href = '/trial'}
        >
          無料体験はこちら
        </Button>
      </div>

      {/* モバイルメニューボタン */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
          className="relative z-50"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* モバイルメニュー */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="メインメニュー"
        className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="relative h-full bg-white">
          <div className="pt-20 px-6">
            <div className="space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-lg font-medium text-gray-900 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
                  onClick={closeMenu}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  closeMenu()
                  window.location.href = '/trial'
                }}
              >
                無料体験はこちら
              </Button>
            </div>
          </div>
        </div>
        {/* オーバーレイ */}
        <div
          className="fixed inset-0 bg-black bg-opacity-25"
          aria-hidden="true"
          onClick={closeMenu}
        />
      </div>
    </nav>
  )
}
