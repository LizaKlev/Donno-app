'use client'

import * as React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'
import { cn } from 'donno-app/lib/utils'

/* ──────────────────────────────────────────────
   Base Drawer Components
────────────────────────────────────────────── */

function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot='drawer' {...props} />
}

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot='drawer-trigger' {...props} />
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot='drawer-portal' {...props} />
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot='drawer-close' {...props} />
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot='drawer-overlay'
      className={cn(
        'fixed inset-0 z-50 bg-black/50 transition-opacity',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
        className
      )}
      {...props}
    />
  )
}

/* ──────────────────────────────────────────────
   Drawer Content (with variant support)
────────────────────────────────────────────── */

type DrawerVariant = 'recommendation' | 'film' | 'folder' | 'me'

function DrawerContent({
  className,
  children,
  variant = 'recommendation',
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content> & {
  variant?: DrawerVariant
}) {
  const variantStyles: Record<DrawerVariant, string> = {
    recommendation: 'bg-white-80 text-white backdrop-blur-sm',
    film: 'bg-white-80 text-white backdrop-blur-sm',
    folder: 'bg-white-80 text-white backdrop-blur-sm',
    me: 'bg-white-80 text-white backdrop-blur-sm',
  }

  const variantLayout: Record<DrawerVariant, string> = {
    recommendation: 'rounded-b-[2rem] p-8',
    film: 'p-0 overflow-hidden rounded-t-2xl',
    folder: 'p-6 shadow-xl rounded-t-3xl',
    me: 'p-8 border-t-2 border-blue-300 rounded-t-3xl',
  }

  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot='drawer-content'
        className={cn(
          'group/drawer-content fixed z-50 flex flex-col shadow-lg transition-all',
          'data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:max-h-[85vh]',
          variantStyles[variant],
          variantLayout[variant],
          className
        )}
        {...props}
      >
        {/* drag handle for mobile */}
        {/* <div className='mx-auto mt-2 h-1.5 w-[60px] rounded-full bg-white/30 group-data-[vaul-drawer-direction=top]/drawer-content:block' /> */}
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

/* ──────────────────────────────────────────────
   Drawer Layout Helpers
────────────────────────────────────────────── */

function DrawerHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='drawer-header'
      className={cn(
        'flex flex-col gap-1 p-4 text-center md:text-left',
        className
      )}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='drawer-footer'
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  )
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot='drawer-title'
      className={cn('font-semibold text-foreground', className)}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot='drawer-description'
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
}

/* ──────────────────────────────────────────────
   Named Variants (Optional Semantic Imports)
────────────────────────────────────────────── */

export function RecommendationDrawer(
  props: React.ComponentProps<typeof DrawerContent>
) {
  return <DrawerContent variant='recommendation' {...props} />
}

export function FilmDrawer(props: React.ComponentProps<typeof DrawerContent>) {
  return <DrawerContent variant='film' {...props} />
}

export function FolderDrawer(
  props: React.ComponentProps<typeof DrawerContent>
) {
  return <DrawerContent variant='folder' {...props} />
}

export function MeDrawer(props: React.ComponentProps<typeof DrawerContent>) {
  return <DrawerContent variant='me' {...props} />
}

/* ──────────────────────────────────────────────
   Exports
────────────────────────────────────────────── */

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
