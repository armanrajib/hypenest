type Product = {
  name: string
  slug: string
  category: string
  description: string
  images: string[]
  price: number
  brand: string
  rating: number
  numReviews: number
  stock: number
  isFeatured: boolean
  banner: string | null
}

export default function ProductList({
  products,
  title,
  limit
}: {
  products: Product[]
  title?: string
  limit?: number
}) {
  const limitedProducts = limit ? products.slice(0, limit) : products

  return (
    <div className='my-10'>
      <h2 className='h2-bold mb-4'>{title}</h2>

      {products.length > 0 ? (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {limitedProducts.map(product => (
            <div key={product.slug}>{product.name}</div>
          ))}
        </div>
      ) : (
        <div className='text-center'>No products found</div>
      )}
    </div>
  )
}
