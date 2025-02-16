import { CheckCircle } from 'lucide-react'

const timelineData = [
  {
    title: '基礎学習フェーズ',
    duration: '2ヶ月',
    items: [
      'プログラミングの基本概念',
      '論理的思考の育成',
      'ブロックプログラミング入門',
    ],
  },
  {
    title: '実践学習フェーズ',
    duration: '3ヶ月',
    items: [
      '実際のプログラミング言語に触れる',
      '簡単なプログラムの作成',
      'デバッグの基礎',
    ],
  },
  {
    title: 'プロジェクトフェーズ',
    duration: '3ヶ月',
    items: [
      'オリジナルプロジェクトの計画',
      'チーム作業の基礎',
      '成果物の作成と発表',
    ],
  },
]

export function CurriculumTimeline() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h3 className="text-2xl font-bold mb-8 text-center">学習の流れ</h3>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />

        {/* Timeline items */}
        <div className="space-y-12">
          {timelineData.map((phase, index) => (
            <div key={index} className="relative pl-12">
              {/* Timeline dot */}
              <div className="absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>

              {/* Content */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-semibold">{phase.title}</h4>
                  <span className="text-sm text-gray-500">{phase.duration}</span>
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
