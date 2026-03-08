import { Activity, Goal, Ruler, Weight } from 'lucide-react'
import Image from 'next/image'
import { Controller, UseFormReturn, useWatch } from 'react-hook-form'

import { InputLabel } from '@/shared/components/custom-ui/with-label/InputLabel'
import { SelectLabel } from '@/shared/components/custom-ui/with-label/SelectLabel'

import { ActivityLevel, Gender, NutritionGoal } from '@/__generated__/graphql'

import { TProfileForm } from '../types/profile-update.types'

export function BodyMeasurementsForm({
  form
}: {
  form: UseFormReturn<TProfileForm, unknown, TProfileForm>
}) {
  const { register } = form

  const gender = useWatch({
    control: form.control,
    name: 'profile.gender'
  })
  const imageSrc =
    !gender || gender === Gender.Male || gender === null
      ? '/images/Male.svg'
      : '/images/Female.svg'

  return (
    <div className="flex items-start gap-12 rounded-xl border p-6">
      <Image
        src={imageSrc}
        alt="gender image"
        width={300}
        height={1000}
        className="w-40 h-auto"
      />

      <div>
        <h2 className="mb-6 text-lg font-semibold">Body measurements</h2>

        <div className="grid grid-cols-2 gap-4">
          <InputLabel
            Icon={Ruler}
            label="Height cm"
            placeholder="Height cm"
            type="number"
            {...register('measurement.heightCm', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />

          <InputLabel
            Icon={Weight}
            label="Weight kg"
            placeholder="Weight kg"
            type="number"
            {...register('measurement.weightKg', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />

          <InputLabel
            Icon={Weight}
            label="Goal weight"
            placeholder="Goal weight"
            type="number"
            {...register('measurement.goalWeightKg', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />

          <InputLabel
            Icon={Ruler}
            label="Chest cm"
            placeholder="Chest cm"
            type="number"
            {...register('measurement.chestCm', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />
          <InputLabel
            Icon={Ruler}
            label="Waist cm"
            placeholder="Waist cm"
            type="number"
            {...register('measurement.waistCm', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />
          <InputLabel
            Icon={Ruler}
            label="Thigh cm"
            placeholder="Thigh cm"
            type="number"
            {...register('measurement.thighCm', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />
          <InputLabel
            Icon={Ruler}
            label="Arm cm"
            placeholder="Arm cm"
            type="number"
            {...register('measurement.armCm', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />
          <Controller
            control={form.control}
            name="measurement.nutritionGoal"
            render={({ field }) => (
              <SelectLabel
                Icon={Goal}
                label="Set your nutrition goal"
                value={field.value}
                onChange={field.onChange}
                options={[
                  {
                    label: 'Maintenance',
                    value: NutritionGoal.Maintenance
                  },
                  {
                    label: 'Muscle Gain',
                    value: NutritionGoal.MuscleGain
                  },
                  {
                    label: 'Weight Loss',
                    value: NutritionGoal.WeightLoss
                  }
                ]}
              />
            )}
          />
          <Controller
            control={form.control}
            name="measurement.activityLevel"
            render={({ field }) => (
              <SelectLabel
                Icon={Activity}
                label="Define your activity level"
                value={field.value}
                onChange={field.onChange}
                options={[
                  {
                    label: 'Active',
                    value: ActivityLevel.Active
                  },
                  {
                    label: 'Light',
                    value: ActivityLevel.Light
                  },
                  {
                    label: 'Moderate',
                    value: ActivityLevel.Moderate
                  },
                  {
                    label: 'Sedentary',
                    value: ActivityLevel.Sedentary
                  },
                  {
                    label: 'Very Active',
                    value: ActivityLevel.VeryActive
                  }
                ]}
              />
            )}
          />
        </div>
      </div>
    </div>
  )
}
