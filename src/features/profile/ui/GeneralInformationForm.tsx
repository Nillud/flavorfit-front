import { Mail, User, UserCircle } from 'lucide-react'
import { UseFormReturn } from 'react-hook-form'

import { InputLabel } from '@/shared/components/custom-ui/input-label/InputLabel'
import { IProfileForm } from '../types/profile-update.types'
import { AvatarUpload } from './AvatarUpload'

export function GeneralInformationForm({
  form
}: {
  form: UseFormReturn<IProfileForm, unknown, IProfileForm>
}) {
  const { register } = form

  return (
    <div className="rounded-xl border p-6">
      <h2 className="mb-6 text-lg font-semibold">General information</h2>

      <div className="space-y-4">
        <div className='flex items-center gap-4'>
          <AvatarUpload
            onChange={url =>
              form.setValue('avatarUrl', url, { shouldDirty: true })
            }
            value={form.watch('avatarUrl') || undefined}
          />

          <InputLabel
            Icon={User}
            label="Full name"
            placeholder="Full name"
            {...register('fullName')}
          />
        </div>

        <InputLabel
          Icon={Mail}
          label="Email"
          placeholder="Email"
          {...register('email')}
        />

        <InputLabel
          Icon={UserCircle}
          label="Age"
          placeholder="Age"
          {...register('age')}
        />

        <label className="relative block">
          <span className="mb-1 block text-sm opacity-50">Bio</span>
          <textarea
            className="w-full resize-none rounded-md border bg-[#ececec] p-3 font-mono"
            placeholder="Bio"
            {...register('bio')}
          />
        </label>
      </div>
    </div>
  )
}
