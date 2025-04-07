'use client'

import Image from "next/image"
import { TrialButton } from '@/components/ui/trial-button'
import { useLanguage } from "@/lib/hooks/useLanguage"
import { curriculumTranslationMap } from "@/lib/i18n"

export default function Home() {
  const { t, language } = useLanguage()
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen">
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
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t('heroTitle').split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < t('heroTitle').split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h1>
              <p className="text-xl mb-8">
                {t('heroSubtitle').split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < t('heroSubtitle').split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
              <TrialButton />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('featuresTitle')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('creativity')}</h3>
              <p className="text-gray-600">
                {t('creativityDesc')}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('logicalThinking')}</h3>
              <p className="text-gray-600">
                {t('logicalThinkingDesc')}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">{t('problemSolving')}</h3>
              <p className="text-gray-600">
                {t('problemSolvingDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Chart */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('curriculumTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((grade) => (
              <div
                key={grade}
                className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-center mb-2">
                  {grade}{t('grade')}
                </h3>
                <ul className="text-sm space-y-2">
                  {getCurriculum(grade).map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      {language === 'ja' ? item : t(curriculumTranslationMap[item])}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Video */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('forParents')}
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <p className="text-lg mb-4">
                {t('forParentsP1')}
              </p>
              <p className="text-lg mb-4">
                {t('forParentsP2')}
              </p>
              <p className="text-lg">
                {t('forParentsP3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <div className="fixed bottom-4 right-4 z-50">
        <TrialButton variant="outline" />
      </div>
    </div>
  )
}

function getCurriculum(grade: number) {
  const curriculums = {
    1: ["ブロックプログラミング", "基本的な考え方", "簡単なゲーム作り"],
    2: ["アルゴリズムの基礎", "Scratch入門", "簡単なアニメーション"],
    3: ["Scratch応用", "基本的な制御構造", "オリジナルゲーム制作"],
    4: ["Python入門", "基本的なプログラミング", "データ構造の基礎"],
    5: ["Webプログラミング入門", "HTML/CSS基礎", "簡単なWebページ制作"],
    6: ["JavaScript入門", "インタラクティブなWeb開発", "総合プロジェクト"],
  }
  return curriculums[grade as keyof typeof curriculums]
}
