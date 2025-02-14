import type { Metadata } from 'next'

import ProductList from '@/components/shared/product/product-list'
import { getLatestProducts } from '@/lib/actions/product-actions'

export const metadata: Metadata = {
  title: 'Home'
}

export default async function Home() {
  const latestProducts = await getLatestProducts()

  return (
    <div>
      <ProductList
        products={latestProducts}
        title='Newest Arrivals'
        limit={4}
      />
    </div>
  )
}
