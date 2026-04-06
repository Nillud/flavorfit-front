import { useMutation } from '@apollo/client/react'
import { User } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from '@/shared/components/ui/button'
import { HeadingWithIcon } from '@/shared/components/custom-ui/heading-with-icon/HeadingWithIcon'

import { GetProfileQuery, UpdateProfileDocument } from '@/__generated__/graphql'

import { TProfileForm } from '../types/profile-update.types'
import { getClearData } from '../utils/get-clear-data'
import { BodyMeasurementsForm } from './BodyMeasurementsForm'
import { GeneralInformationForm } from './GeneralInformationForm'

export function ProfileForm({ data }: { data: GetProfileQuery }) {
  const form = useForm<TProfileForm>({
    mode: 'onChange',
    defaultValues: {
      email: data.me.email,
      avatarUrl: data.me.avatarUrl,
      measurement: data.me.measurement,
      profile: data.me.profile
    }
  })

  const [updateProfile, { loading }] = useMutation(UpdateProfileDocument, {
    onCompleted: () => {
      toast.success('Profile updated')
    }
  })

  const submit = form.handleSubmit(data => {
    const cleanData = {
      ...data,
      profile: data.profile ? getClearData(data.profile) : {},
      measurement: data.measurement ? getClearData(data.measurement) : {}
    }

    updateProfile({
      variables: {
        data: cleanData
      }
    })
  })

  return (
    <form
      onSubmit={submit}
      className="space-y-6 rounded-xl bg-white p-5"
    >
      <div className="flex justify-between">
        <HeadingWithIcon Icon={User}>Personal Information</HeadingWithIcon>
        <div className="flex justify-end gap-3">
          <Button
            variant={'outline'}
            type="button"
            onClick={() => form.reset()}
          >
            Cancel
          </Button>
          <Button
            variant={'accent'}
            type="submit"
            disabled={loading}
          >
            Save changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <GeneralInformationForm form={form} />
        <BodyMeasurementsForm form={form} />
      </div>
    </form>
  )
}
