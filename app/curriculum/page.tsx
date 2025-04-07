'use client'

import { CurriculumTimeline } from '@/components/courses/curriculum-timeline'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/hooks/useLanguage'

export default function CurriculumPage() {
  const { t } = useLanguage()
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('curriculumPageTitle')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('curriculumSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <CurriculumTimeline />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('curriculumFeatures')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{t('stepByStep')}</h3>
              <p className="text-gray-600">
                {t('stepByStepDesc')}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{t('practicalProjects')}</h3>
              <p className="text-gray-600">
                {t('practicalProjectsDesc')}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{t('individualSupport')}</h3>
              <p className="text-gray-600">
                {t('individualSupportDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {t('curriculumTrialCTA')}
          </h2>
          <p className="text-white/90 text-xl mb-8">
            {t('curriculumTrialDesc')}
          </p>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 bg-white hover:bg-white/90"
          >
            {t('applyForTrial')}
          </Button>
        </div>
      </section>
    </div>
  )
}
