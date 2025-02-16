'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const formSchema = z.object({
  childName: z.string().min(1, '生徒様のお名前を入力してください'),
  childGrade: z.string().min(1, '学年を選択してください'),
  parentName: z.string().min(1, '保護者様のお名前を入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  phone: z.string().min(1, '電話番号を入力してください'),
})

export function TrialForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      childName: '',
      childGrade: '',
      parentName: '',
      email: '',
      phone: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: フォームの送信処理を実装
    console.log(values)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none">
          生徒様のお名前
        </label>
        <Input
          placeholder="山田 太郎"
          {...register('childName')}
          className="w-full"
        />
        {errors.childName && (
          <p className="text-sm font-medium text-red-500">
            {errors.childName.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium leading-none">
          学年
        </label>
        <Select
          onValueChange={(value) => setValue('childGrade', value)}
          defaultValue={getValues('childGrade')}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="学年を選択してください" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">小学1年生</SelectItem>
            <SelectItem value="2">小学2年生</SelectItem>
            <SelectItem value="3">小学3年生</SelectItem>
            <SelectItem value="4">小学4年生</SelectItem>
            <SelectItem value="5">小学5年生</SelectItem>
            <SelectItem value="6">小学6年生</SelectItem>
          </SelectContent>
        </Select>
        {errors.childGrade && (
          <p className="text-sm font-medium text-red-500">
            {errors.childGrade.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium leading-none">
          保護者様のお名前
        </label>
        <Input
          placeholder="山田 花子"
          {...register('parentName')}
          className="w-full"
        />
        {errors.parentName && (
          <p className="text-sm font-medium text-red-500">
            {errors.parentName.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium leading-none">
          メールアドレス
        </label>
        <Input
          type="email"
          placeholder="example@example.com"
          {...register('email')}
          className="w-full"
        />
        <p className="text-sm text-gray-500">
          ご連絡は主にメールで差し上げます
        </p>
        {errors.email && (
          <p className="text-sm font-medium text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium leading-none">
          電話番号
        </label>
        <Input
          type="tel"
          placeholder="090-1234-5678"
          {...register('phone')}
          className="w-full"
        />
        {errors.phone && (
          <p className="text-sm font-medium text-red-500">
            {errors.phone.message}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full">申し込む</Button>
    </form>
  )
}
