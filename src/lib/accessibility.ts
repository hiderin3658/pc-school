import { useEffect, useCallback, useRef } from 'react'

// フォーカストラップ用フック
export function useFocusTrap(isActive: boolean) {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isActive || !containerRef.current) return

      const focusableElements = containerRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement

      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus()
            event.preventDefault()
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus()
            event.preventDefault()
          }
        }
      }
    },
    [isActive]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return containerRef
}

// スクリーンリーダーのアナウンス用フック
export function useAnnounce() {
  const announce = useCallback((message: string, priority?: 'polite' | 'assertive') => {
    const announcer = document.createElement('div')
    announcer.setAttribute('aria-live', priority || 'polite')
    announcer.setAttribute('aria-atomic', 'true')
    announcer.classList.add('sr-only')
    document.body.appendChild(announcer)

    // 少し遅延させてDOMの更新を確実にする
    setTimeout(() => {
      announcer.textContent = message
    }, 100)

    // メッセージを読み上げた後にクリーンアップ
    setTimeout(() => {
      document.body.removeChild(announcer)
    }, 1000)
  }, [])

  return announce
}

// キーボードユーザー検知用フック
export function useKeyboardUser() {
  useEffect(() => {
    function handleFirstTab(e: KeyboardEvent) {
      if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing')
        window.removeEventListener('keydown', handleFirstTab)
      }
    }

    window.addEventListener('keydown', handleFirstTab)
    return () => window.removeEventListener('keydown', handleFirstTab)
  }, [])
}

// アクセシビリティ属性のヘルパー関数
export const a11y = {
  // ARIA属性
  hidden: (isHidden: boolean) => ({
    'aria-hidden': isHidden,
  }),
  
  expanded: (isExpanded: boolean) => ({
    'aria-expanded': isExpanded,
  }),
  
  selected: (isSelected: boolean) => ({
    'aria-selected': isSelected,
  }),
  
  current: (isCurrent: boolean) => ({
    'aria-current': isCurrent ? 'page' : undefined,
  }),
  
  controls: (id: string) => ({
    'aria-controls': id,
  }),
  
  labelledBy: (id: string) => ({
    'aria-labelledby': id,
  }),
  
  describedBy: (id: string) => ({
    'aria-describedby': id,
  }),

  // ロール属性
  role: (role: string) => ({
    role,
  }),
  
  // タブインデックス
  tabIndex: (index: number) => ({
    tabIndex: index,
  }),
}
