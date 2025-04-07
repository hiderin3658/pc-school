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
import { useState } from 'react'
import { useLanguage } from '@/lib/hooks/useLanguage'

const formSchema = z.object({
  childName: z.string().min(1, '生徒様のお名前を入力してください'),
  childGrade: z.string().min(1, '学年を選択してください'),
  parentName: z.string().min(1, '保護者様のお名前を入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  phone: z.string().min(1, '電話番号を入力してください'),
})

export function TrialForm() {
  const { language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    reset,
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setIsSuccess(false)
    setIsError(false)
    
    try {
      // APIを呼び出してメール送信
      const response = await fetch('/api/trial', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      
      if (response.ok) {
        setIsSuccess(true)
        reset()
      } else {
        setIsError(true)
      }
    } catch (error) {
      setIsError(true)
      console.error('送信エラー:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const errorLabel = language === 'ja' ? 'エラーが発生しました。後ほど再度お試しください。' : 'An error occurred. Please try again later.'
  const successLabel = language === 'ja' ? 'お申し込みを受け付けました。担当者からの連絡をお待ちください。' : 'Your application has been received. Please wait for our staff to contact you.'
  const submitLabel = language === 'ja' ? '申し込む' : 'Apply'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {isSuccess && (
        <div className="p-4 bg-green-50 text-green-700 rounded-md">
          {successLabel}
        </div>
      )}
      
      {isError && (
        <div className="p-4 bg-red-50 text-red-700 rounded-md">
          {errorLabel}
        </div>
      )}
      
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none">
          {language === 'ja' ? '生徒様のお名前' : 'Child\'s Name'}
        </label>
        <Input
          placeholder={language === 'ja' ? '山田 太郎' : 'John Doe'}
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
          {language === 'ja' ? '学年' : 'Grade'}
        </label>
        <Select
          onValueChange={(value) => setValue('childGrade', value)}
          defaultValue={getValues('childGrade')}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder={language === 'ja' ? '学年を選択してください' : 'Select a grade'} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">{language === 'ja' ? '小学1年生' : '1st Grade'}</SelectItem>
            <SelectItem value="2">{language === 'ja' ? '小学2年生' : '2nd Grade'}</SelectItem>
            <SelectItem value="3">{language === 'ja' ? '小学3年生' : '3rd Grade'}</SelectItem>
            <SelectItem value="4">{language === 'ja' ? '小学4年生' : '4th Grade'}</SelectItem>
            <SelectItem value="5">{language === 'ja' ? '小学5年生' : '5th Grade'}</SelectItem>
            <SelectItem value="6">{language === 'ja' ? '小学6年生' : '6th Grade'}</SelectItem>
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
          {language === 'ja' ? '保護者様のお名前' : 'Parent\'s Name'}
        </label>
        <Input
          placeholder={language === 'ja' ? '山田 花子' : 'Jane Doe'}
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
          {language === 'ja' ? 'メールアドレス' : 'Email'}
        </label>
        <Input
          type="email"
          placeholder="example@example.com"
          {...register('email')}
          className="w-full"
        />
        <p className="text-sm text-gray-500">
          {language === 'ja' ? 'ご連絡は主にメールで差し上げます' : 'We will mainly contact you by email'}
        </p>
        {errors.email && (
          <p className="text-sm font-medium text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium leading-none">
          {language === 'ja' ? '電話番号' : 'Phone Number'}
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

      <Button 
        type="submit" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          language === 'ja' ? '送信中...' : 'Sending...'
        ) : (
          submitLabel
        )}
      </Button>
    </form>
  )
}
