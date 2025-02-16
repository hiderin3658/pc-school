import Image from 'next/image'

const tools = [
  {
    name: 'Scratch',
    description: 'ビジュアルプログラミング言語',
    logo: '/tools/scratch.png',
  },
  {
    name: 'Python',
    description: '初心者に優しい本格プログラミング言語',
    logo: '/tools/python.png',
  },
  {
    name: 'HTML/CSS',
    description: 'Web制作の基礎',
    logo: '/tools/html-css.png',
  },
  {
    name: 'JavaScript',
    description: 'インタラクティブなWeb開発',
    logo: '/tools/javascript.png',
  },
  {
    name: 'Unity',
    description: 'ゲーム開発エンジン',
    logo: '/tools/unity.png',
  },
  {
    name: 'Arduino',
    description: 'ロボット・電子工作プラットフォーム',
    logo: '/tools/arduino.png',
  },
]

export function ToolsGrid() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h3 className="text-2xl font-bold mb-8 text-center">使用ツール</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="aspect-square relative mb-4">
              <Image
                src={tool.logo}
                alt={`${tool.name}のロゴ`}
                fill
                className="object-contain p-2"
              />
            </div>
            <h4 className="font-semibold text-center mb-2">{tool.name}</h4>
            <p className="text-sm text-gray-600 text-center">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
