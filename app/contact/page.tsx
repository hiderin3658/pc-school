'use client'

import { ContactForm } from '@/components/forms/contact-form'
import { useLanguage } from '@/lib/hooks/useLanguage'

export default function ContactPage() {
  const { language } = useLanguage()
  
  const pageTitle = language === 'ja' ? 'お問い合わせ' : 'Contact Us'
  const pageSubtitle = language === 'ja' 
    ? 'ご質問やご相談がございましたら、お気軽にお問い合わせください。' 
    : 'If you have any questions or inquiries, please feel free to contact us.'
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {pageTitle}
            </h1>
            <p className="text-xl text-gray-600">
              {pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-8 text-center">
                {language === 'ja' ? 'お問い合わせフォーム' : 'Contact Form'}
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              {language === 'ja' ? 'その他の連絡先' : 'Other Contact Information'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  {language === 'ja' ? '電話でのお問い合わせ' : 'Contact by Phone'}
                </h3>
                <p className="text-gray-600 mb-2">
                  03-1234-5678
                </p>
                <p className="text-gray-500 text-sm">
                  {language === 'ja' ? '受付時間: 平日 10:00-18:00' : 'Business Hours: Weekdays 10:00-18:00'}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  {language === 'ja' ? 'メールでのお問い合わせ' : 'Contact by Email'}
                </h3>
                <p className="text-gray-600 mb-2">
                  contact@techkids.jp
                </p>
                <p className="text-gray-500 text-sm">
                  {language === 'ja' ? '24時間受付中（返信は営業時間内）' : 'Available 24/7 (Replies during business hours)'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 