const projects = [
  {
    id: 1,
    title: 'スペースシューティングゲーム',
    student: '鈴木さん（6年生）',
    description: 'Scratchで作った初めてのゲーム作品です。',
    category: 'game',
    image: '/images/project1.jpg',
    technologies: ['Scratch'],
  },
  {
    id: 2,
    title: '温度センサーロボット',
    student: '田中さん（5年生）',
    description: 'micro:bitを使って、温度を測定するロボットを作りました。',
    category: 'robot',
    image: '/images/project2.jpg',
    technologies: ['micro:bit', 'MakeCode'],
  },
  {
    id: 3,
    title: '天気予報アプリ',
    student: '佐藤さん（6年生）',
    description: 'PythonとAPIを使って、天気予報を表示するWebアプリを作成しました。',
    category: 'web',
    image: '/images/project3.jpg',
    technologies: ['Python', 'HTML', 'CSS'],
  },
]

export default function GalleryPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* ヘッダー */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">生徒作品ギャラリー</h1>
          <p className="text-xl text-gray-600">
            生徒たちが制作した素晴らしい作品をご紹介します
          </p>
        </div>

        {/* フィルター */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 p-1">
            {['すべて', 'ゲーム', 'ロボット', 'Webアプリ'].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* プロジェクトグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* 画像 */}
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-4xl">🎮</span>
                </div>
              </div>

              {/* コンテンツ */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-blue-600 text-sm mb-4">{project.student}</p>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* 使用技術 */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* アクション */}
              <div className="p-4 bg-gray-50 flex justify-between">
                <button className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  作品を見る
                </button>
                <button className="py-2 px-4 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors">
                  コードを見る
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* もっと見る */}
        <div className="text-center mt-12">
          <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            もっと作品を見る
          </button>
        </div>

        {/* 作品募集 */}
        <div className="mt-20 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">あなたの作品も掲載しませんか？</h2>
          <p className="text-gray-600 mb-8">
            生徒の皆さんが作った素晴らしい作品を募集しています。
            あなたの作品をみんなに見てもらいましょう！
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            作品を投稿する
          </button>
        </div>
      </div>
    </div>
  )
}
