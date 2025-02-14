import { notFound } from 'next/navigation'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import ProductPrice from '@/components/shared/product/product-price'
import ProductImages from '@/components/shared/product/product-images'
import { getProductBySlug } from '@/lib/actions/product-actions'

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  console.log(product)

  if (!product) return notFound()

  return (
    <>
      <section className='grid grid-cols-1 gap-4 md:grid-cols-5'>
        {/* Images column */}
        <div className='md:col-span-2'>
          <ProductImages images={product.images} />
        </div>

        {/* Product details column */}
        <div className='col-span-2 p-5'>
          <div className='flex flex-col gap-6'>
            <p>
              {product.brand} {product.category}
            </p>
            <h1 className='h3-bold'>{product.name}</h1>
            <p>
              {product.rating} of {product.numReviews} Reviews
            </p>
            <div className='flex-flex-col gap-3 sm:flex-row sm:items-center'>
              <ProductPrice
                price={Number(product.price)}
                className='w-24 rounded-full bg-green-100 px-5 py-2 text-green-700'
              />
            </div>
          </div>
          <div className='mt-10'>
            <p className='text-lg font-semibold'>Description</p>
            <p>{product.description}</p>
          </div>
        </div>

        {/* Action column */}
        <div>
          <Card>
            <CardContent className='p-4'>
              <div className='mb-2 flex justify-between'>
                <div>Price</div>
                <div>
                  <ProductPrice price={Number(product.price)} />
                </div>
              </div>

              <div className='mb-2 flex justify-between'>
                <div>Status</div>
                {product.stock > 0 ? (
                  <Badge variant='outline'>In Stock</Badge>
                ) : (
                  <Badge variant='destructive'>Out of Stock</Badge>
                )}
              </div>

              {product.stock > 0 && (
                <div className='flex-center mt-4'>
                  <Button className='w-full'>Add to Cart</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
