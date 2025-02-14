import Image from 'next/image'
import Link from 'next/link'

import { Product } from '@/types'
import ProductPrice from '@/components/shared/product/product-price'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader className='items-center p-0'>
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={300}
            height={300}
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent className='grid gap-4 p-4'>
        <div className='text-xs'>{product.brand}</div>
        <Link href={`/products/${product.slug}`}>
          <h2 className='text-sm font-medium'>{product.name}</h2>
        </Link>
        <div className='flex-between gap-4'>
          <p>{product.rating} Stars</p>
          {product.stock > 0 ? (
            <ProductPrice price={Number(product.price)} />
          ) : (
            <p className='text-destructive'>Out of stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
