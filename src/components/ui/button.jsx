import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from '../../lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-blue-600 focus-visible:ring-blue-600/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        // Primary: Professional Blue
        default: 'bg-blue-600 text-white shadow-sm hover:bg-blue-700 active:scale-[0.98]',

        destructive:
          'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600/20',

        // Outline: Blue tint on hover
        outline:
          'border border-slate-200 bg-white shadow-xs hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200',

        // Secondary: Soft Blue background
        secondary:
          'bg-blue-50 text-blue-700 hover:bg-blue-100',

        // Ghost: Subtle blue hover
        ghost:
          'text-slate-600 hover:bg-blue-50 hover:text-blue-600',

        // Link: Blue text
        link: 'text-blue-600 underline-offset-4 hover:underline',
      },
      size: {
        // NO CHANGES to sizes as per your instruction
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }