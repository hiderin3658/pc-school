import { useEffect, useState } from 'react'

// Intersection Observerを使用した遅延読み込み用フック
export function useIntersectionObserver(
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = {
    threshold: 0,
    root: null,
    rootMargin: '0px',
  }
): boolean {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [ref, options])

  return isIntersecting
}

// デバウンス関数
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// メモ化されたコンポーネントのプロパティ比較
export function shallowEqual(objA: Record<string, unknown>, objB: Record<string, unknown>): boolean {
  if (objA === objB) {
    return true
  }

  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false
  }

  const keysA = Object.keys(objA)
  const keysB = Object.keys(objB)

  if (keysA.length !== keysB.length) {
    return false
  }

  for (let i = 0; i < keysA.length; i++) {
    if (
      !Object.prototype.hasOwnProperty.call(objB, keysA[i]) ||
      objA[keysA[i]] !== objB[keysA[i]]
    ) {
      return false
    }
  }

  return true
}

// キャッシュ制御
export const cacheControl = {
  public: 'public',
  private: 'private',
  noCache: 'no-cache',
  noStore: 'no-store',
  maxAge: (seconds: number) => `max-age=${seconds}`,
  sMaxAge: (seconds: number) => `s-maxage=${seconds}`,
  staleWhileRevalidate: (seconds: number) =>
    `stale-while-revalidate=${seconds}`,
}

// 画像のプリロード
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

// リソースのプリフェッチ
export async function prefetchResources(urls: string[]): Promise<void> {
  const link = document.createElement('link')
  link.rel = 'prefetch'
  link.as = 'image'

  urls.forEach((url) => {
    link.href = url
    document.head.appendChild(link.cloneNode())
  })
}
