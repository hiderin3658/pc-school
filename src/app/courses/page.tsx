import { CheckIcon } from '@heroicons/react/24/solid'
import { CourseSelector } from '@/components/courses/CourseSelector'
import { FadeIn } from '@/components/animations/FadeIn'

const courses = [
  {
    name: '初級コース',
    grade: '1-2年生',
    price: '15,000円/月',
    features: [
      'Scratchでプログラミングの基礎を学ぶ',
      '簡単なゲーム作成',
      '論理的思考の育成',
      '月2回の個別指導',
    ],
  },
  {
    name: '中級コース',
    grade: '3-4年生',
    price: '18,000円/月',
    features: [
      'micro:bitでIoT基礎',
      'ロボットプログラミング',
      'アルゴリズム思考の育成',
      '月3回の個別指導',
    ],
  },
  {
    name: '上級コース',
    grade: '5-6年生',
    price: '22,000円/月',
    features: [
      'Pythonプログラミング',
      'Webアプリ開発',
      'プロジェクト型学習',
      '月4回の個別指導',
    ],
  },
]

export default function CoursesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* ヘッダー */}
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">コース紹介</h1>
            <p className="text-xl text-gray-600">
              お子様の年齢や目標に合わせて最適なコースをお選びいただけます
            </p>
          </div>
        </FadeIn>

        {/* コース診断 */}
        <div className="max-w-2xl mx-auto mb-20">
          <FadeIn>
            <CourseSelector
              onCourseSelect={(course) => {
                // スクロール処理などを追加予定
                console.log('Selected course:', course)
              }}
            />
          </FadeIn>
        </div>

        {/* コース比較表 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <FadeIn key={course.name} delay={index * 200}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-center mb-4">{course.name}</h3>
                  <p className="text-gray-600 text-center mb-6">対象：{course.grade}</p>
                  <p className="text-3xl font-bold text-center text-blue-600 mb-8">
                    {course.price}
                  </p>
                  <ul className="space-y-4">
                    {course.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-gray-50">
                  <button className="w-full py-3 px-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                    詳細を見る
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 学習の流れ */}
        <div className="mt-20">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">学習の流れ</h2>
          </FadeIn>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* タイムライン */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200" />
              
              {/* ステップ */}
              {[
                { title: '無料体験', description: '実際の授業を体験してみましょう' },
                { title: 'カウンセリング', description: '目標や興味に合わせてコースを決定' },
                { title: '定期授業', description: '週1回の対面授業で着実に成長' },
                { title: '作品制作', description: '学んだ内容を活かして作品を作る' },
                { title: '発表会', description: '半年に1回、成果を発表する機会があります' },
              ].map((step, index) => (
                <FadeIn key={step.title} delay={index * 200}>
                  <div className="relative mb-8">
                    <div className="flex items-center">
                      <div className="w-1/2 pr-8 text-right">
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                          {index + 1}
                        </div>
                      </div>
                      <div className="w-1/2 pl-8" />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
