import type { Metadata } from 'next'

import sampleData from '@/db/sample-data'
import ProductList from '@/components/shared/product/product-list'

export const metadata: Metadata = {
  title: 'Home'
}

export default function Home() {
  return (
    <div>
      <ProductList
        products={sampleData.products}
        title='Newest Arrivals'
        limit={4}
      />
    </div>
  )
}
