'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { useLanguage } from '@/lib/hooks/useLanguage'

const formSchema = z.object({
  name: z.string().min(1, 'お名前を入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  message: z.string().min(1, 'お問い合わせ内容を入力してください'),
})

export function ContactForm() {
  const { t, language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setIsSuccess(false)
    setIsError(false)
    
    try {
      // メール送信の処理
      const response = await fetch('/api/contact', {
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
  const successLabel = language === 'ja' ? 'お問い合わせを受け付けました。担当者からの返信をお待ちください。' : 'Your inquiry has been received. Please wait for a response from our staff.'
  const submitLabel = language === 'ja' ? '送信する' : 'Submit'
  
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
          {language === 'ja' ? 'お名前' : 'Name'}
        </label>
        <Input
          placeholder={language === 'ja' ? '山田 太郎' : 'John Doe'}
          {...register('name')}
          className="w-full"
        />
        {errors.name && (
          <p className="text-sm font-medium text-red-500">
            {errors.name.message}
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
        {errors.email && (
          <p className="text-sm font-medium text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium leading-none">
          {language === 'ja' ? 'お問い合わせ内容' : 'Message'}
        </label>
        <Textarea
          placeholder={language === 'ja' ? 'お問い合わせ内容をご記入ください' : 'Please enter your message'}
          {...register('message')}
          className="w-full min-h-[150px]"
        />
        {errors.message && (
          <p className="text-sm font-medium text-red-500">
            {errors.message.message}
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