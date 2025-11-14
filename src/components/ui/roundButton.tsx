import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { ChevronLeft, Menu, User, Heart, CheckIcon } from 'lucide-react'

import { cn } from 'donno-app/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all backdrop-blur-[40px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary: 'bg-white-4 text-white-40 hover:bg-white-12',
        secondary: 'text-button-white border border-white-12 hover:bg-white-4',
        tertiary: 'bg-white text-black hover:bg-white/80',

        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'py-3 px-4 has-[>svg]:px-3',
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
  }
)

function RoundButton({
  className,
  variant,
  size,
  asChild = false,
  icon,
  href,
  children,
  ...props
}: (React.ComponentProps<'button'> | React.ComponentProps<'a'>) &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    icon?: 'chevron-left' | 'hamburger' | 'user' | 'heart' | 'check'
    href?: string
  }) {
  const renderIcon = () => {
    if (icon === 'chevron-left') {
      return <ChevronLeft />
    }
    if (icon === 'hamburger') {
      return <Menu />
    }
    if (icon === 'user') {
      return <User />
    }
    if (icon === 'heart') {
      return <Heart />
    }
    if (icon === 'check') {
      return <CheckIcon />
    }
    return null
  }

  if (asChild) {
    const Comp = Slot
    return (
      <Comp
        data-slot='button'
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {renderIcon()}
        {children}
      </Comp>
    )
  }

  if (href) {
    return (
      <a
        data-slot='button'
        href={href}
        className={cn(buttonVariants({ variant, size, className }))}
        {...(props as React.ComponentProps<'a'>)}
      >
        {renderIcon()}
        {children}
      </a>
    )
  }

  return (
    <button
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...(props as React.ComponentProps<'button'>)}
    >
      {renderIcon()}
      {children}
    </button>
  )
}

export { RoundButton, buttonVariants }
