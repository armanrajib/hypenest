import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { APP_NAME } from '@/lib/constants'
import SignUpForm from './sign-up-form'
import { auth } from '@/auth'

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Sign up as a new user'
}

export default async function Page({
  searchParams
}: {
  searchParams: Promise<{ callbackUrl: string }>
}) {
  const { callbackUrl } = await searchParams
  const session = await auth()

  if (session) {
    return redirect(callbackUrl || '/')
  }

  return (
    <div className='mx-auto w-full max-w-md'>
      <Card>
        <CardHeader className='space-y-4'>
          <Link href='/' className='flex-center'>
            <Image
              src='/images/logo.svg'
              alt={`${APP_NAME} logo`}
              width={100}
              height={100}
              priority={true}
            />
          </Link>
          <CardTitle className='text-center'>Create Account</CardTitle>
          <CardDescription className='text-center'>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  )
}
