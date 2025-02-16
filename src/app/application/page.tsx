import { FadeIn } from '@/components/animations/FadeIn'
import { ApplicationForm } from '@/components/application/ApplicationForm'

export default function ApplicationPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* ヘッダー */}
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">お申し込み</h1>
            <p className="text-xl text-gray-600">
              以下のフォームに必要事項をご記入ください
            </p>
          </div>
        </FadeIn>

        {/* 申し込みの流れ */}
        <FadeIn>
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">お申し込みの流れ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: 'フォーム入力',
                  description: '必要事項を入力して送信してください',
                },
                {
                  step: 2,
                  title: '事務局から連絡',
                  description: '1-2営業日以内にご連絡いたします',
                },
                {
                  step: 3,
                  title: '無料体験授業',
                  description: '実際の授業を体験していただきます',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white rounded-lg p-6 text-center relative shadow-lg"
                >
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* 申し込みフォーム */}
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <ApplicationForm />
            </div>
          </FadeIn>
        </div>

        {/* 注意事項 */}
        <FadeIn>
          <div className="max-w-2xl mx-auto mt-16">
            <h3 className="text-xl font-bold mb-4 text-center">お申し込みにあたって</h3>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <p className="text-sm text-gray-600">
                ・お申し込み後、1-2営業日以内に事務局からご連絡いたします。
              </p>
              <p className="text-sm text-gray-600">
                ・無料体験授業は、お子様の学年やご希望に合わせて日程を調整いたします。
              </p>
              <p className="text-sm text-gray-600">
                ・定員に達している場合は、キャンセル待ちとなることがございます。
              </p>
              <p className="text-sm text-gray-600">
                ・ご不明な点がございましたら、お気軽にお問い合わせください。
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
