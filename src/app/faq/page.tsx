import { FadeIn } from '@/components/animations/FadeIn'
import { Accordion } from '@/components/faq/Accordion'

const faqs = [
  {
    category: '授業について',
    items: [
      {
        title: '体験授業はありますか？',
        content:
          '体験授業を無料で実施しています。実際の授業の雰囲気を体験していただけます。お気軽にお申し込みください。',
      },
      {
        title: '授業の頻度はどのくらいですか？',
        content:
          '基本的に週1回、90分の授業を行っています。お子様の予定や目標に合わせて、週2回のコースもご用意しています。',
      },
      {
        title: '途中でコース変更は可能ですか？',
        content:
          'はい、可能です。お子様の進度や興味に合わせて、適宜コース変更のご相談を承っています。',
      },
    ],
  },
  {
    category: '料金について',
    items: [
      {
        title: '料金の支払い方法は？',
        content:
          'クレジットカード、銀行振込、口座引き落としに対応しています。お支払いは月単位となります。',
      },
      {
        title: '教材費は別途かかりますか？',
        content:
          '基本的な教材費は月謝に含まれています。ただし、一部の特別なプロジェクトでは追加の教材費が必要な場合があります。',
      },
      {
        title: '兄弟割引はありますか？',
        content:
          'はい、兄弟姉妹で通われる場合は、2人目以降の月謝を20%割引させていただきます。',
      },
    ],
  },
  {
    category: '学習環境について',
    items: [
      {
        title: 'パソコンは必要ですか？',
        content:
          '授業ではスクールのパソコンを使用しますので、ご自宅にパソコンがなくても問題ありません。ただし、復習のために自宅でもパソコンが使える環境があると望ましいです。',
      },
      {
        title: 'オンライン授業は実施していますか？',
        content:
          'はい、オンライン授業も実施しています。Zoomを使用して、対面授業と同様の内容を学んでいただけます。',
      },
      {
        title: '何人のクラス編成ですか？',
        content:
          '基本的に4-6人の少人数制で実施しています。講師1人に対して最大6人までとし、一人一人に目が行き届く環境を整えています。',
      },
    ],
  },
  {
    category: '進路・資格について',
    items: [
      {
        title: '資格取得のサポートはありますか？',
        content:
          'はい、各種プログラミング検定の受験対策を行っています。また、資格試験の受験料の補助制度もございます。',
      },
      {
        title: '中学・高校の進路相談はできますか？',
        content:
          '専門のキャリアアドバイザーが、プログラミングスキルを活かした進路相談に対応しています。',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* ヘッダー */}
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">よくある質問</h1>
            <p className="text-xl text-gray-600">
              授業や料金について、よくいただくご質問をまとめました
            </p>
          </div>
        </FadeIn>

        {/* FAQ一覧 */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((category, index) => (
            <FadeIn key={category.category} delay={index * 200}>
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <Accordion
                      key={item.title}
                      title={item.title}
                      content={item.content}
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* お問い合わせセクション */}
        <FadeIn>
          <div className="mt-20 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              お探しの質問が見つかりませんでしたか？
            </h2>
            <p className="text-gray-600 mb-8">
              お気軽にお問い合わせください。スタッフが丁寧にご回答いたします。
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                お問い合わせ
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                資料請求
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
