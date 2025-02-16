'use server'

import { hashSync } from 'bcrypt-ts-edge'
import { prisma } from '@/db/prisma'

import { signInFormSchema } from '@/lib/validators'
import { signUpFormSchema } from '@/lib/validators'
import { signIn, signOut } from '@/auth'
import { isRedirectError } from 'next/dist/client/components/redirect-error'

// Sign in the user with credientials
export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get('email') as string,
      password: formData.get('password') as string
    })

    await signIn('credentials', user)
    return { success: true, message: 'Signed in successfully' }
  } catch (error) {
    if (isRedirectError(error)) {
      // return { success: false, message: error.message }
      throw error
    }

    return { success: false, message: 'Invalid email or password ' }
  }
}

// Sign user out
export async function signOutUser() {
  await signOut()
}

// Sign up a user
export async function signUpUser(prevState: unknown, formData: FormData) {
  try {
    const user = signUpFormSchema.parse({
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      confirmPassword: formData.get('confirmPassword') as string
    })

    const plainPassword = user.password
    user.password = hashSync(user.password, 12)

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password
      }
    })

    await signIn('credentials', {
      email: user.email,
      password: plainPassword
    })

    return { success: true, message: 'Signed up successfully' }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error
    }

    return { success: false, message: 'User is not registered!' }
  }
}
