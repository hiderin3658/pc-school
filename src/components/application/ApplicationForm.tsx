import { useState } from 'react'

interface FormData {
  childName: string
  childAge: string
  parentName: string
  email: string
  phone: string
  preferredCourse: string
  preferredDay: string[]
  message: string
}

export function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    childName: '',
    childAge: '',
    parentName: '',
    email: '',
    phone: '',
    preferredCourse: '',
    preferredDay: [],
    message: '',
  })

  const courses = [
    { id: 'beginner', name: '初級コース（1-2年生）' },
    { id: 'intermediate', name: '中級コース（3-4年生）' },
    { id: 'advanced', name: '上級コース（5-6年生）' },
  ]

  const days = [
    { id: 'monday', label: '月曜日' },
    { id: 'tuesday', label: '火曜日' },
    { id: 'wednesday', label: '水曜日' },
    { id: 'thursday', label: '木曜日' },
    { id: 'friday', label: '金曜日' },
    { id: 'saturday', label: '土曜日' },
    { id: 'sunday', label: '日曜日' },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // ここでフォームデータの送信処理を実装
    console.log('Form submitted:', formData)
  }

  const handleDayChange = (day: string) => {
    setFormData((prev) => ({
      ...prev,
      preferredDay: prev.preferredDay.includes(day)
        ? prev.preferredDay.filter((d) => d !== day)
        : [...prev.preferredDay, day],
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* お子様の情報 */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">お子様の情報</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="childName" className="block text-sm font-medium text-gray-700">
              お名前
            </label>
            <input
              type="text"
              id="childName"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.childName}
              onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="childAge" className="block text-sm font-medium text-gray-700">
              学年
            </label>
            <select
              id="childAge"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.childAge}
              onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
              required
            >
              <option value="">選択してください</option>
              {[1, 2, 3, 4, 5, 6].map((grade) => (
                <option key={grade} value={grade}>
                  {grade}年生
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 保護者様の情報 */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">保護者様の情報</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">
              お名前
            </label>
            <input
              type="text"
              id="parentName"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.parentName}
              onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              電話番号
            </label>
            <input
              type="tel"
              id="phone"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
        </div>
      </div>

      {/* 希望コース */}
      <div>
        <label className="block text-sm font-medium text-gray-700">希望コース</label>
        <div className="mt-2 space-y-2">
          {courses.map((course) => (
            <div key={course.id} className="flex items-center">
              <input
                type="radio"
                id={course.id}
                name="course"
                value={course.id}
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={formData.preferredCourse === course.id}
                onChange={(e) =>
                  setFormData({ ...formData, preferredCourse: e.target.value })
                }
                required
              />
              <label htmlFor={course.id} className="ml-3 block text-sm text-gray-700">
                {course.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* 希望曜日 */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          希望曜日（複数選択可）
        </label>
        <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2">
          {days.map((day) => (
            <div key={day.id} className="flex items-center">
              <input
                type="checkbox"
                id={day.id}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={formData.preferredDay.includes(day.id)}
                onChange={() => handleDayChange(day.id)}
              />
              <label htmlFor={day.id} className="ml-3 block text-sm text-gray-700">
                {day.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* その他ご要望 */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          その他ご要望
        </label>
        <textarea
          id="message"
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      {/* 送信ボタン */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          申し込む
        </button>
      </div>
    </form>
  )
}
