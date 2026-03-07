'use client'

import { useMutation } from '@apollo/client/react'
import { Turnstile } from '@marsidev/react-turnstile'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'

import { PAGES } from '@/shared/config/page.config'

import { ResetPasswordDocument } from '@/__generated__/graphql'

interface FormData {
  password: string
}

export function ResetPassword() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const token = searchParams.get('token')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const [resetPassword, { loading }] = useMutation(ResetPasswordDocument, {
    onCompleted: () => {
      toast.success('Password successfully changed')
      router.replace(PAGES.LOGIN)
    },
    onError: () => {
      toast.error('Invalid or expired link')
    }
  })

  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const onSumbit = (data: FormData) => {
    if (!captchaToken) {
      toast.error('Please complete the CAPTCHA challenge', {
        id: 'captcha-error'
      })
      return
    }

    if (!token) return

    resetPassword({
      variables: {
        data: {
          token,
          newPassword: data.password
        }
      },
      context: {
        headers: {
          'cf-turnstile-token': captchaToken
        }
      }
    })
  }

  return (
    <div className="flex h-screen">
      <div className="relative m-auto w-sm rounded-lg bg-linear-to-tr from-[#8062ee] to-[#a088fc] p-10 text-white shadow-lg">
        <h1 className="mb-5 text-center text-[2.3rem] font-bold">
          Reset Password
        </h1>
        <form
          onSubmit={handleSubmit(onSumbit)}
          className="space-y-3"
        >
          <Input
            {...register('password', {
              required: true,
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              }
            })}
            type="password"
            placeholder="Enter password"
            aria-invalid={!!errors.password}
          />

          {errors.password && (
            <p className="text-destructive -mt-3 block text-xs">
              {errors.password.message}
            </p>
          )}

          <div className="flex scale-85 justify-center pt-2">
            <Turnstile
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              onSuccess={token => setCaptchaToken(token)}
              onExpire={() => setCaptchaToken(null)}
              options={{
                theme: 'light'
              }}
            />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              variant="secondary"
              disabled={loading}
            >
              Reset
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
