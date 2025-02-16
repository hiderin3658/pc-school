import * as React from "react"
import { cn } from "@/lib/utils"

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "destructive"
  title?: string
  description?: string
}

export function Toast({
  className,
  variant = "default",
  title,
  description,
  ...props
}: ToastProps) {
  return (
    <div
      className={cn(
        "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all",
        variant === "default" && "bg-background border",
        variant === "destructive" &&
          "destructive group border-destructive bg-destructive text-destructive-foreground",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-1">
        {title && <div className="text-sm font-semibold">{title}</div>}
        {description && (
          <div className="text-sm opacity-90">{description}</div>
        )}
      </div>
    </div>
  )
}

export function useToast() {
  const [toasts, setToasts] = React.useState<ToastProps[]>([])

  const toast = React.useCallback(
    ({ title, description, variant = "default" }: ToastProps) => {
      setToasts((current) => [
        ...current,
        { title, description, variant },
      ])

      setTimeout(() => {
        setToasts((current) =>
          current.filter(
            (t) =>
              t.title !== title ||
              t.description !== description ||
              t.variant !== variant
          )
        )
      }, 5000)
    },
    []
  )

  return { toast, toasts }
}
