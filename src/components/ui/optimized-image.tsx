import Image, { ImageProps } from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends Omit<ImageProps, 'onError' | 'onLoad'> {
  fallbackSrc?: string
}

export function OptimizedImage({
  alt,
  src,
  fallbackSrc = '/images/placeholder.jpg',
  className,
  ...props
}: OptimizedImageProps) {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        className={cn(
          'duration-700 ease-in-out',
          loading ? 'scale-110 blur-2xl' : 'scale-100 blur-0'
        )}
        onError={() => setError(true)}
        onLoad={() => setLoading(false)}
        {...props}
      />
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 bg-gray-200 transition-opacity',
          loading ? 'opacity-100' : 'opacity-0'
        )}
      />
      {/* Screen reader text */}
      <span className="sr-only">
        {loading ? `${alt}を読み込み中` : alt}
      </span>
    </div>
  )
}
