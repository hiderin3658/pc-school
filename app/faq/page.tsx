'use client'

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/hooks/useLanguage'
import Link from 'next/link'

export default function FAQPage() {
  const { t } = useLanguage()
  
  const faqs = [
    {
      question: t('faqAge'),
      answer: t('faqAgeAnswer'),
    },
    {
      question: t('faqBeginner'),
      answer: t('faqBeginnerAnswer'),
    },
    {
      question: t('faqFrequency'),
      answer: t('faqFrequencyAnswer'),
    },
    {
      question: t('faqBreak'),
      answer: t('faqBreakAnswer'),
    },
    {
      question: t('faqTrial'),
      answer: t('faqTrialAnswer'),
    },
    {
      question: t('faqMaterials'),
      answer: t('faqMaterialsAnswer'),
    },
    {
      question: t('faqTransport'),
      answer: t('faqTransportAnswer'),
    },
    {
      question: t('faqMakeup'),
      answer: t('faqMakeupAnswer'),
    },
  ]
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('faqPageTitle')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('faqSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t('otherQuestions')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('contactInfo')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="default">
                {t('contactForm')}
              </Button>
            </Link>
            <a href={`tel:${t('phoneNumber')}`}>
              <Button size="lg" variant="outline">
                {t('phoneNumber')}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
