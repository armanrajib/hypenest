import Image from 'next/image'

import loader from '@/public/images/loader.gif'

export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw'
      }}
    >
      <Image src={loader} alt='Loading...' height={150} width={150} />
    </div>
  )
}
