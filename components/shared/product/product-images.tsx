'use client'

import { useState } from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

export default function ProductImages({ images }: { images: string[] }) {
  const [current, setCurrent] = useState<number>(0)

  return (
    <div className='space-y-4'>
      <Image
        src={images[current]}
        width={1000}
        height={1000}
        alt='Product image'
        className='min-h-[300px] object-cover object-center'
      />

      <div className='flex'>
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={cn(
              'mr-2 cursor-pointer border hover:border-orange-600',
              current === index && 'border-orange-500'
            )}
          >
            <Image
              src={image}
              width={100}
              height={100}
              alt='Image'
              className='object-cover object-center'
            />
          </div>
        ))}
      </div>
    </div>
  )
}
