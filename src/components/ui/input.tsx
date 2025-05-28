import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn("px-3 py-2 border rounded w-full", className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"