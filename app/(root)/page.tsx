import type { Metadata } from 'next'

import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Home'
}

export default function Home() {
  return (
    <>
      <h1 className='h1-bold mb-4'>HypeNest</h1>
      <Button>Click me</Button>
    </>
  )
}
