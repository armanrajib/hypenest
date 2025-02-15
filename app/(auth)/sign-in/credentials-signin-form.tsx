'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SIGN_IN_DEFAULT_VALUES } from '@/lib/constants'

export default function CredentialsSignInForm() {
  return (
    <form>
      <div className='space-y-4'>
        <div>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            name='email'
            type='email'
            required
            autoComplete='email'
            defaultValue={SIGN_IN_DEFAULT_VALUES.email}
          />
        </div>
        <div>
          <Label htmlFor='email'>Password</Label>
          <Input
            id='password'
            name='password'
            type='password'
            required
            autoComplete='password'
            defaultValue={SIGN_IN_DEFAULT_VALUES.password}
          />
        </div>
        <div>
          <Button className='w-full' variant='default'>
            Sign In
          </Button>
        </div>
        <div className='text-center text-sm text-muted-foreground'>
          Don&apos;t have an account?{' '}
          <Link href='/sign-up' target='_self' className='text-primary'>
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  )
}
