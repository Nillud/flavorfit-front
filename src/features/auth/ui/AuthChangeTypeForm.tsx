import Link from 'next/link'

import { PAGES } from '@/shared/config/page.config'

interface Props {
  isLogin: boolean
}

export function AuthChangeTypeForm({ isLogin }: Props) {
  return (
    <div className="mt-4 text-center text-sm">
      {isLogin ? (
        <>
          <div>
            Don&apos;t have an account?{' '}
            <Link
              className="link-simple"
              href={PAGES.REGISTER}
            >
              Register
            </Link>
          </div>

          <div className="mt-2">
            <Link
              href={PAGES.FORGOT_PASSWORD}
              className="link-simple"
            >
              Forgot password?
            </Link>
          </div>
        </>
      ) : (
        <div>
          Already have an account?{' '}
          <Link
            className="link-simple"
            href={PAGES.LOGIN}
          >
            Login
          </Link>
        </div>
      )}
    </div>
  )
}
