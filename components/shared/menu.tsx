import Link from 'next/link'
import { EllipsisVertical, ShoppingCart, UserIcon } from 'lucide-react'

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/shared/mode-toggle'

const Menu = () => {
  return (
    <div className='flex justify-end gap-3'>
      <nav className='hidden w-full max-w-xs gap-2 md:flex'>
        <ModeToggle />
        <Button asChild variant='ghost'>
          <Link href='/cart'>
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href='/sign-in'>
            <UserIcon /> Sign In
          </Link>
        </Button>
      </nav>

      <nav className='md:hidden'>
        <Sheet>
          <SheetTrigger className='align-middle'>
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className='flex flex-col items-start'>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <ModeToggle />
            <Button asChild variant='ghost'>
              <Link href='/cart'>
                <ShoppingCart /> Cart
              </Link>
            </Button>
            <Button asChild>
              <Link href='/sign-in'>
                <UserIcon /> Sign In
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  )
}

export default Menu
