'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SIGN_UP_DEFAULT_VALUES } from '@/lib/constants'
import { signUpUser } from '@/lib/actions/user-action'

export default function SignUpForm() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'

  const [data, action] = useActionState(signUpUser, {
    success: false,
    message: ''
  })

  return (
    <form action={action}>
      <input type='hidden' name='callbackUrl' value={callbackUrl} />
      <div className='space-y-4'>
        <div>
          <Label htmlFor='name'>Name</Label>
          <Input
            id='name'
            name='name'
            type='text'
            required
            autoComplete='name'
            defaultValue={SIGN_UP_DEFAULT_VALUES.name}
          />
        </div>
        <div>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            name='email'
            type='email'
            required
            autoComplete='email'
            defaultValue={SIGN_UP_DEFAULT_VALUES.email}
          />
        </div>
        <div>
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'
            name='password'
            type='password'
            required
            autoComplete='password'
            defaultValue={SIGN_UP_DEFAULT_VALUES.password}
          />
        </div>
        <div>
          <Label htmlFor='confirmPassword'>Confirm Password</Label>
          <Input
            id='confirmPassword'
            name='confirmPassword'
            type='password'
            required
            autoComplete='confirmPassword'
            defaultValue={SIGN_UP_DEFAULT_VALUES.confirmPassword}
          />
        </div>
        <div>
          <SigningUpButton />
        </div>

        {data && !data.success && (
          <div className='text-center text-destructive'>{data.message}</div>
        )}

        <div className='text-center text-sm text-muted-foreground'>
          Already have an account?{' '}
          <Link href='/sign-in' target='_self' className='text-primary'>
            Sign In
          </Link>
        </div>
      </div>
    </form>
  )
}

function SigningUpButton() {
  const { pending } = useFormStatus()

  return (
    <Button disabled={pending} className='w-full' variant='default'>
      {pending ? 'Submitting...' : 'Sign Up'}
    </Button>
  )
}
