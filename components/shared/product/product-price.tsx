import { cn } from '@/lib/utils'

export default function ProductPrice({
  price,
  className
}: {
  price: number
  className?: string
}) {
  // Format price to 2 decimal places
  const priceString = price.toFixed(2)

  // Get Integer and Decimal parts
  const [intValue, floatValue] = priceString.split('.')

  return (
    <p className={cn('text-2xl', className)}>
      <span className='align-super text-xs'>$</span>
      <span>{intValue}</span>
      <span className='align-super text-xs'>.{floatValue}</span>
    </p>
  )
}
