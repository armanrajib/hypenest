import type { Metadata } from 'next'

import sampleData from '@/db/sample-data'
import { Button } from '@/components/ui/button'
import ProductList from '@/components/shared/product/product-list'

export const metadata: Metadata = {
  title: 'Home'
}

export default function Home() {
  return (
    <>
      <h1 className='h1-bold mb-4'>HypeNest</h1>
      <ProductList
        products={sampleData.products}
        title='Featured Products'
        limit={4}
      />
      <Button>Click me</Button>
    </>
  )
}
