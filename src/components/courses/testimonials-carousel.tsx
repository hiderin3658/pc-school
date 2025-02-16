'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    content:
      '子供が自分でゲームを作れるようになり、とても喜んでいます。プログラミングを通じて論理的思考力も身についてきたと感じます。',
    author: '小学4年生の保護者',
    role: '半年間受講',
  },
  {
    content:
      '先生方の指導が丁寧で、子供のペースに合わせて教えていただけます。また、少人数制なので質問もしやすい環境です。',
    author: '小学2年生の保護者',
    role: '3ヶ月間受講',
  },
  {
    content:
      'ロボットプログラミングのコースで、子供の興味が一気に広がりました。理科や算数への関心も高まり、学校の成績も上がってきています。',
    author: '小学5年生の保護者',
    role: '1年間受講',
  },
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    )
  }

  const previous = () => {
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h3 className="text-2xl font-bold mb-8 text-center">保護者の声</h3>
      <div className="relative bg-white rounded-xl shadow-lg p-8">
        <Quote className="absolute text-primary/10 w-24 h-24 -top-4 -left-4" />
        <div className="relative z-10">
          <p className="text-lg mb-6">{testimonials[currentIndex].content}</p>
          <div className="text-right">
            <p className="font-semibold">{testimonials[currentIndex].author}</p>
            <p className="text-sm text-gray-500">
              {testimonials[currentIndex].role}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute -left-4 -right-4 top-1/2 -translate-y-1/2 flex justify-between">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white shadow-lg"
            onClick={previous}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white shadow-lg"
            onClick={next}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
