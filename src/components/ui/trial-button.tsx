'use client'

import { useRouter } from 'next/navigation'
import { Button, ButtonProps } from '@/components/ui/button'

export function TrialButton({ variant = 'default', className, ...props }: ButtonProps) {
  const router = useRouter()

  return (
    <Button
      size="lg"
      variant={variant}
      className={`text-lg px-8 ${
        variant === 'outline' ? 'bg-white hover:bg-white/90' : 'bg-white text-primary hover:bg-white/90'
      } ${className}`}
      onClick={() => router.push('/trial')}
      {...props}
    >
      無料体験に申し込む
    </Button>
  )
}
