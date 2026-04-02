import React from 'react'
import { cn } from '../../lib/utils'

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Base: White background, Slate-200 border, Slate-900 text
        'bg-white text-slate-900 border-slate-200 h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-sm transition-all outline-none md:text-sm',

        // Placeholder & Selection: Professional muted gray and blue selection
        'placeholder:text-slate-400 selection:bg-blue-100 selection:text-blue-900',

        // File Input Styles: Matching blue theme
        'file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-slate-900',

        // Focus State: Clean blue ring and border
        'focus-visible:border-blue-600 focus-visible:ring-blue-600/20 focus-visible:ring-[3px]',

        // Disabled State
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',

        // Invalid State (keeping red for errors)
        'aria-invalid:ring-red-600/20 aria-invalid:border-red-600',

        className,
      )}
      {...props}
    />
  )
}

export { Input }