import { Button } from "@/components/ui/button"
import Image from "next/image"
import { TrialButton } from '@/components/ui/trial-button'

export default function Home() {
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
                楽しみながら学ぶ
                <br />
                プログラミングの世界
              </h1>
              <p className="text-xl mb-8">
                小学1年生から6年生まで、年齢に合わせた
                <br />
                カリキュラムで楽しく学べます
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
            TechKidsの3つの特徴
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">創造力</h3>
              <p className="text-gray-600">
                自分のアイデアをプログラミングで形にする経験を通じて、創造力を育みます。オリジナルのゲームやアプリケーションを作ることで、想像力が広がります。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">論理的思考力</h3>
              <p className="text-gray-600">
                プログラミングの基本概念を学ぶことで、論理的に考える力を養います。問題を分解し、順序立てて解決する能力が身につきます。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">問題解決力</h3>
              <p className="text-gray-600">
                エラーの解決やデバッグを通じて、問題解決能力を身につけます。試行錯誤しながら、最適な解決策を見つける力が育ちます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Chart */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            学年別カリキュラム
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((grade) => (
              <div
                key={grade}
                className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-center mb-2">
                  {grade}年生
                </h3>
                <ul className="text-sm space-y-2">
                  {getCurriculum(grade).map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      {item}
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
            保護者の方へ
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="プログラミング教育の重要性"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              />
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
