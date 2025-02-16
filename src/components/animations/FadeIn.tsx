import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
}

export function FadeIn({
  children,
  className,
  direction = 'up',
  delay = 0,
}: FadeInProps) {
  const { targetRef, isIntersecting } = useIntersectionObserver()

  const directionClasses = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
  }

  return (
    <div
      ref={targetRef as any}
      className={cn(
        'opacity-0 transition-all duration-700 ease-out',
        isIntersecting && 'opacity-100 transform-none',
        !isIntersecting && directionClasses[direction],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
