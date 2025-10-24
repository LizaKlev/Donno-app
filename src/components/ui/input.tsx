import * as React from 'react'

import { cn } from 'donno-app/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'file:text-foreground bg-input-bg placeholder:text-muted-foreground selection:text-primary-foreground dark:bg-input/30 h-9 w-full min-w-0 rounded-full px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'pl-10',
        'focus-visible:border-button-secondary-border focus-visible:ring-[1px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  )
}

export { Input }

// import * as React from 'react'
// import { SearchOutlinedIcon } from '../ui/icons/ant-design-search-outlined'
// import { cn } from 'donno-app/lib/utils'

// function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
//   return (
//     <div className='relative'>
//       <span className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground'>
//         <SearchOutlinedIcon aria-hidden />
//       </span>
//       <input
//         type={type}
//         data-slot='input'
//         className={cn(
//           'file:text-foreground bg-input-bg placeholder:text-muted-foreground selection:text-primary-foreground dark:bg-input/30 h-9 w-full min-w-0 rounded-full px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
//           'pl-10',
//           'focus-visible:border-button-secondary-border focus-visible:ring-[1px]',
//           'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
//           className
//         )}
//         {...props}
//       />
//     </div>
//   )
// }

// export { Input }
