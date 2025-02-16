import { Button } from '@/components/ui/button'

const faqs = [
  {
    question: '何歳から受講できますか？',
    answer:
      '小学1年生から受講可能です。お子様の発達段階に合わせて、適切な教材とペースで指導いたします。',
  },
  {
    question: '初心者でも大丈夫ですか？',
    answer:
      'はい、プログラミングが初めてのお子様でも安心して学べます。基礎から丁寧に指導し、徐々にステップアップしていきます。',
  },
  {
    question: '授業の頻度はどのくらいですか？',
    answer:
      '基本的には週1回、90分の授業です。ただし、お子様の予定や目標に応じて、週2回などの柔軟な対応も可能です。',
  },
  {
    question: '途中で休会することはできますか？',
    answer:
      'はい、可能です。長期休暇や学校行事などで一時的に休会が必要な場合は、お気軽にご相談ください。',
  },
  {
    question: '体験授業はありますか？',
    answer:
      'はい、無料の体験授業をご用意しています。実際の授業の雰囲気を体験していただけます。',
  },
  {
    question: '教材は必要ですか？',
    answer:
      '基本的な教材は当スクールで用意いたします。ただし、自宅での復習用にノートパソコンがあると望ましいです。',
  },
  {
    question: '送迎は必要ですか？',
    answer:
      '基本的には保護者様での送迎をお願いしております。教室は駅から徒歩5分の場所にあり、駐車場も完備しています。',
  },
  {
    question: '授業を欠席した場合の振替はできますか？',
    answer:
      'はい、月2回まで振替授業を受けることができます。前日までにご連絡いただければ調整いたします。',
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              よくある質問
            </h1>
            <p className="text-xl text-gray-600">
              プログラミングスクールに関する疑問にお答えします
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            その他のご質問はお気軽にお問い合わせください
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            メールやお電話でのお問い合わせを受け付けております
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default">
              お問い合わせフォーム
            </Button>
            <Button size="lg" variant="outline">
              03-1234-5678
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
