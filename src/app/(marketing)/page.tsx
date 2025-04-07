import Link from 'next/link'
import { FadeIn } from '@/components/animations/FadeIn'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="w-full h-full object-cover opacity-20"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeIn delay={200}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              プログラミングで<br />
              <span className="text-yellow-400">未来</span>を創ろう
            </h1>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              小学生向けプログラミングスクール
            </p>
          </FadeIn>
          <FadeIn delay={600}>
            <Link
              href="/apply"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-300 transition-colors inline-block"
            >
              無料体験に申し込む
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 3つの特徴 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">スクールの特徴</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 特徴1 */}
            <FadeIn delay={200}>
              <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">👩‍🏫</span>
                </div>
                <h3 className="text-xl font-bold mb-4">現役エンジニアが指導</h3>
                <p className="text-gray-600">
                  第一線で活躍するエンジニアから直接学べます
                </p>
              </div>
            </FadeIn>

            {/* 特徴2 */}
            <FadeIn delay={400}>
              <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🎮</span>
                </div>
                <h3 className="text-xl font-bold mb-4">楽しく学べる</h3>
                <p className="text-gray-600">
                  ゲーム作りを通じてプログラミングの基礎が身につきます
                </p>
              </div>
            </FadeIn>

            {/* 特徴3 */}
            <FadeIn delay={600}>
              <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-4">目標に合わせた学習</h3>
                <p className="text-gray-600">
                  個々の目標や進度に合わせた指導を行います
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 対象学年 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">対象学年</h2>
          </FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['1年生', '2年生', '3年生', '4年生', '5年生', '6年生'].map((grade, index) => (
                <FadeIn key={grade} delay={index * 100}>
                  <div className="bg-white p-4 rounded-lg shadow text-center hover:shadow-lg transition-shadow">
                    <p className="text-xl font-bold text-blue-600">{grade}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 保護者向け説明動画 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">授業の様子</h2>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="max-w-4xl mx-auto aspect-video bg-gray-200 rounded-lg">
              {/* 動画プレースホルダー */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-500">授業紹介動画</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8">まずは無料体験から始めよう！</h2>
          </FadeIn>
          <FadeIn delay={200}>
            <Link
              href="/apply"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-300 transition-colors inline-block"
            >
              無料体験に申し込む
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
