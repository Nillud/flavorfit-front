'use client'

import { useMutation, useQuery } from '@apollo/client/react'
import { User } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from '@/shared/components/ui/button'
import { HeadingWithIcon } from '@/shared/components/ui/heading-with-icon/HeadingWithIcon'

import {
  GetProfileDocument,
  UpdateProfileDocument
} from '@/__generated__/graphql'

import { IProfileForm } from '../types/profile-update.types'
import { BodyMeasurementsForm } from './BodyMeasurementsForm'
import { GeneralInformationForm } from './GeneralInformationForm'

export function Profile() {
  const { data } = useQuery(GetProfileDocument)

  const form = useForm<IProfileForm>({
    mode: 'onChange'
  })

  useEffect(() => {
    if (!data?.me) return

    form.reset({
      fullName: data.me.profile?.fullName || '',
      email: data.me.email || '',
      age: data.me.profile?.age || undefined,
      bio: data.me.profile?.bio || undefined,
      avatarUrl: data.me.avatarUrl || '',
      heightCm: data.me.measurement?.heightCm || undefined,
      weightKg: data.me.measurement?.weightKg || undefined,
      goalWeightKg: data.me.measurement?.goalWeightKg || undefined,
      chestCm: data.me.measurement?.chestCm || undefined,
      waistCm: data.me.measurement?.waistCm || undefined,
      thighCm: data.me.measurement?.thighCm || undefined,
      armCm: data.me.measurement?.armCm || undefined,
      activityLevel: data.me.measurement?.activityLevel || undefined,
      nutritionGoal: data.me.measurement?.nutritionGoal || undefined
    })
  }, [data, form])

  const [updateProfile, { loading }] = useMutation(UpdateProfileDocument, {
    onCompleted: () => {
      toast.success('Profile updated')
    }
  })

  const submit = form.handleSubmit(data => {
    updateProfile({
      variables: {
        data: {
          profile: {
            fullName: data.fullName,
            gender: data.gender,
            age: data.age,
            bio: data.bio
          },
          measurement: {
            heightCm: data.heightCm,
            weightKg: data.weightKg,
            goalWeightKg: data.goalWeightKg,
            chestCm: data.heightCm,
            waistCm: data.heightCm,
            thighCm: data.heightCm,
            armCm: data.heightCm,
            activityLevel: data.activityLevel,
            nutritionGoal: data.nutritionGoal
          }
        }
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
