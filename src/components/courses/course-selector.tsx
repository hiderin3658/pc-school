'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface CourseSelector {
  grade: number
  interest: 'game' | 'robot' | 'web'
}

const recommendCourse = (selector: CourseSelector) => {
  const recommendations = {
    1: {
      game: 'ブロックプログラミング入門',
      robot: 'ロボット制御基礎',
      web: 'HTML入門',
    },
    2: {
      game: 'Scratch基礎',
      robot: 'センサー制御入門',
      web: 'CSS基礎',
    },
    3: {
      game: 'Scratch応用',
      robot: 'ロボットプログラミング基礎',
      web: 'JavaScript入門',
    },
    4: {
      game: 'Python基礎',
      robot: 'Arduino入門',
      web: 'Webアプリ入門',
    },
    5: {
      game: 'Unity入門',
      robot: 'Arduino応用',
      web: 'React入門',
    },
    6: {
      game: 'Unity応用',
      robot: 'ロボットプロジェクト',
      web: 'フルスタック開発',
    },
  }

  return recommendations[selector.grade as keyof typeof recommendations][selector.interest]
}

export function CourseSelector() {
  const [grade, setGrade] = useState<number>(1)
  const [interest, setInterest] = useState<'game' | 'robot' | 'web'>('game')

  const recommendation = recommendCourse({ grade, interest })

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6">コース選択シミュレーター</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">学年を選択</label>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[1, 2, 3, 4, 5, 6].map((g) => (
              <Button
                key={g}
                variant={grade === g ? "default" : "outline"}
                onClick={() => setGrade(g)}
              >
                {g}年生
              </Button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">興味分野を選択</label>
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant={interest === 'game' ? "default" : "outline"}
              onClick={() => setInterest('game')}
            >
              ゲーム開発
            </Button>
            <Button
              variant={interest === 'robot' ? "default" : "outline"}
              onClick={() => setInterest('robot')}
            >
              ロボット
            </Button>
            <Button
              variant={interest === 'web' ? "default" : "outline"}
              onClick={() => setInterest('web')}
            >
              Web開発
            </Button>
          </div>
        </div>

        <div className="mt-8 p-4 bg-primary/5 rounded-lg">
          <h4 className="text-lg font-semibold mb-2">おすすめのコース</h4>
          <p className="text-xl font-bold text-primary">{recommendation}</p>
        </div>
      </div>
    </div>
  )
}
