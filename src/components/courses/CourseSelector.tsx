import { useState } from 'react'

interface Course {
  name: string
  grade: string
  description: string
  recommended: boolean
}

const courses: Course[] = [
  {
    name: '初級コース',
    grade: '1-2年生',
    description: 'Scratchでプログラミングの基礎を学びます',
    recommended: false,
  },
  {
    name: '中級コース',
    grade: '3-4年生',
    description: 'micro:bitでロボットプログラミングを学びます',
    recommended: false,
  },
  {
    name: '上級コース',
    grade: '5-6年生',
    description: 'Pythonでアプリ開発を学びます',
    recommended: false,
  },
]

interface CourseSelectorProps {
  onCourseSelect?: (course: Course) => void
}

export function CourseSelector({ onCourseSelect }: CourseSelectorProps) {
  const [grade, setGrade] = useState<number>(0)
  const [interest, setInterest] = useState<'game' | 'robot' | 'web' | null>(null)

  // 学年とinterestに基づいて最適なコースを推奨
  const recommendCourse = () => {
    if (!grade || !interest) return

    const recommendedCourses = [...courses].map(course => ({
      ...course,
      recommended: false,
    }))

    if (grade <= 2) {
      recommendedCourses[0].recommended = true
    } else if (grade <= 4) {
      if (interest === 'robot') {
        recommendedCourses[1].recommended = true
      } else {
        recommendedCourses[0].recommended = true
      }
    } else {
      if (interest === 'web') {
        recommendedCourses[2].recommended = true
      } else {
        recommendedCourses[1].recommended = true
      }
    }

    return recommendedCourses
  }

  const handleSubmit = () => {
    const recommendedCourses = recommendCourse()
    if (recommendedCourses && onCourseSelect) {
      const recommended = recommendedCourses.find(course => course.recommended)
      if (recommended) {
        onCourseSelect(recommended)
      }
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-6">コース診断</h3>

      {/* 学年選択 */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          学年を選択してください
        </label>
        <select
          value={grade}
          onChange={(e) => setGrade(Number(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value={0}>選択してください</option>
          {[1, 2, 3, 4, 5, 6].map((g) => (
            <option key={g} value={g}>
              {g}年生
            </option>
          ))}
        </select>
      </div>

      {/* 興味分野選択 */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          興味のある分野を選択してください
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { id: 'game', label: 'ゲーム作り', emoji: '🎮' },
            { id: 'robot', label: 'ロボット', emoji: '🤖' },
            { id: 'web', label: 'Webサイト', emoji: '🌐' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setInterest(item.id as 'game' | 'robot' | 'web')}
              className={`p-4 border rounded-lg text-center hover:bg-blue-50 transition-colors ${
                interest === item.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
            >
              <span className="text-2xl mb-2 block">{item.emoji}</span>
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 診断ボタン */}
      <button
        onClick={handleSubmit}
        disabled={!grade || !interest}
        className="w-full py-3 px-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        おすすめコースを診断する
      </button>
    </div>
  )
}
