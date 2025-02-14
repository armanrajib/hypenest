import { APP_NAME } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className='border-t'>
      <div className='flex-center p-5'>
        Copyright &copy; {new Date().getFullYear()} {APP_NAME}. All rights
        reserved.
      </div>
    </footer>
  )
}
