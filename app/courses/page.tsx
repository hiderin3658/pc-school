'use client'

import Image from 'next/image'
import { CourseSelector } from '@/components/courses/course-selector'
import { TestimonialsCarousel } from '@/components/courses/testimonials-carousel'
import { ToolsGrid } from '@/components/courses/tools-grid'
import { TrialButton } from '@/components/ui/trial-button'
import { useLanguage } from '@/lib/hooks/useLanguage'

export default function CoursesPage() {
  const { t } = useLanguage()
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?w=1200&h=800&q=80"
            alt="プログラミング教室の様子"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('coursesHeroTitle').split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t('coursesHeroTitle').split('\n').length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              {t('coursesHeroSubtitle').split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t('coursesHeroSubtitle').split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
            <TrialButton />
          </div>
        </div>
      </section>

      {/* Course Selector */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('courseSelection')}
          </h2>
          <CourseSelector />
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ToolsGrid />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('testimonials')}
          </h2>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {t('trialCTA')}
          </h2>
          <p className="text-white/90 text-xl mb-8">
            {t('trialCTADesc')}
          </p>
          <TrialButton variant="outline" />
        </div>
      </section>
    </div>
  )
}
