interface TeacherDetailProps {
  teacher: {
    id: number
    name: string
    role: string
    specialties: string[]
    experience: string
    message: string
    image: string
    education?: string[]
    achievements?: string[]
    schedule?: string[]
  }
}

export function TeacherDetail({ teacher }: TeacherDetailProps) {
  return (
    <div className="space-y-6">
      {/* プロフィール画像と基本情報 */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <div className="relative aspect-square rounded-lg bg-gray-200 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-400 text-6xl">👨‍🏫</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h4 className="text-sm font-medium text-blue-600 mb-1">{teacher.role}</h4>
          <h3 className="text-2xl font-bold mb-2">{teacher.name}</h3>
          <p className="text-gray-600 mb-4">経験年数：{teacher.experience}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {teacher.specialties.map((specialty) => (
              <span
                key={specialty}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {specialty}
              </span>
            ))}
          </div>
          <p className="text-gray-700 italic">{teacher.message}</p>
        </div>
      </div>

      {/* 詳細情報 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 学歴・資格 */}
        {teacher.education && (
          <div>
            <h4 className="text-lg font-semibold mb-3">学歴・資格</h4>
            <ul className="space-y-2">
              {teacher.education.map((edu, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>{edu}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 実績 */}
        {teacher.achievements && (
          <div>
            <h4 className="text-lg font-semibold mb-3">実績</h4>
            <ul className="space-y-2">
              {teacher.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 担当可能時間 */}
      {teacher.schedule && (
        <div>
          <h4 className="text-lg font-semibold mb-3">担当可能時間</h4>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {teacher.schedule.map((time, index) => (
                <li key={index} className="text-gray-600">
                  {time}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
