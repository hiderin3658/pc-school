'use client'

import { useState } from 'react'
import { FadeIn } from '@/components/animations/FadeIn'
import { Modal } from '@/components/ui/Modal'
import { TeacherDetail } from '@/components/teachers/TeacherDetail'

interface Teacher {
  id: number
  name: string
  role: string
  specialties: string[]
  experience: string
  message: string
  image: string
  education: string[]
  achievements: string[]
  schedule: string[]
}

const teachers: Teacher[] = [
  {
    id: 1,
    name: '山田 太郎',
    role: '主任講師',
    specialties: ['Webアプリ開発', 'Python', 'ゲーム開発'],
    experience: '10年',
    message: '子どもたちの「できた！」という瞬間が私の喜びです。一緒にプログラミングの楽しさを見つけていきましょう！',
    image: '/images/teacher1.jpg',
    education: [
      '東京工業大学 情報工学科 卒業',
      '教員免許（情報）',
      'Python3エンジニア認定基礎試験',
    ],
    achievements: [
      '全国小学生プログラミングコンテスト審査員',
      '教育用プログラミング言語の開発に参加',
      '著書「楽しく学ぶジュニアプログラミング」出版',
    ],
    schedule: ['月曜 15:00-19:00', '水曜 15:00-19:00', '土曜 10:00-17:00'],
  },
  {
    id: 2,
    name: '佐藤 花子',
    role: 'Scratch専門講師',
    specialties: ['Scratch', 'ビジュアルプログラミング', '教育工学'],
    experience: '5年',
    message: '失敗を恐れずチャレンジする気持ちを大切に、創造力を育んでいきます。',
    image: '/images/teacher2.jpg',
    education: [
      '大阪大学 工学部 卒業',
      'STEM教育指導者認定',
    ],
    achievements: [
      'ロボットプログラミング教材の開発',
      '教育ICTカンファレンス登壇',
    ],
    schedule: ['火曜 15:00-19:00', '木曜 15:00-19:00', '土曜 13:00-17:00'],
  },
  {
    id: 3,
    name: '鈴木 一郎',
    role: 'ロボット工学講師',
    specialties: ['ロボットプログラミング', 'micro:bit', 'Arduino'],
    experience: '7年',
    message: 'ものづくりの楽しさをプログラミングを通じて伝えていきたいと思います。',
    image: '/images/teacher3.jpg',
    education: [
      '京都大学 情報学科 卒業',
      'AWS認定デベロッパー',
    ],
    achievements: [
      'プログラミングスクール立ち上げに参画',
      '企業向けWeb開発研修の講師経験多数',
    ],
    schedule: ['水曜 15:00-19:00', '金曜 15:00-19:00', '日曜 10:00-17:00'],
  },
]

export default function TeachersPage() {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null)

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* ヘッダー */}
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">講師紹介</h1>
            <p className="text-xl text-gray-600">
              現役エンジニアによる丁寧な指導で、確かな技術が身につきます
            </p>
          </div>
        </FadeIn>

        {/* 講師一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teachers.map((teacher, index) => (
            <FadeIn key={teacher.id} delay={index * 200}>
              <div
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedTeacher(teacher)}
              >
                <div className="relative aspect-square bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400 text-6xl">👨‍🏫</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-sm font-medium text-blue-600 mb-1">{teacher.role}</h4>
                  <h3 className="text-xl font-bold mb-2">{teacher.name}</h3>
                  <p className="text-gray-600 mb-4">経験年数：{teacher.experience}</p>
                  <div className="flex flex-wrap gap-2">
                    {teacher.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 講師募集セクション */}
        <FadeIn>
          <div className="mt-20 max-w-4xl mx-auto bg-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">講師募集</h2>
            <p className="text-gray-600 text-center mb-6">
              私たちと一緒に、次世代のプログラマーを育てませんか？
              現役エンジニアの方のご応募をお待ちしています。
            </p>
            <div className="text-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                応募する
              </button>
            </div>
          </div>
        </FadeIn>

        {/* 講師詳細モーダル */}
        {selectedTeacher && (
          <Modal
            isOpen={!!selectedTeacher}
            onClose={() => setSelectedTeacher(null)}
            title="講師プロフィール"
          >
            <TeacherDetail teacher={selectedTeacher} />
          </Modal>
        )}
      </div>
    </div>
  )
}
