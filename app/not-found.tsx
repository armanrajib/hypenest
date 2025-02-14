import Image from 'next/image'
import Link from 'next/link'

import { APP_NAME } from '@/lib/constants'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className='flex-center min-h-screen flex-col'>
      <Image
        src='/images/logo.svg'
        alt={`${APP_NAME} logo`}
        height={48}
        width={48}
        priority={true}
      />

      <div className='round-lg w-1/3 p-6 text-center shadow-md'>
        <h1 className='mb-4 text-3xl font-bold'>Not Found</h1>
        <p className='text-destructive'>Could not find the requested page</p>
        <Button variant='outline' className='mt-4'>
          <Link href='/'>Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}
