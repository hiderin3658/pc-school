import { FadeIn } from '@/components/animations/FadeIn'
import { MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline'

const accessInfo = {
  address: {
    postal: '〒545-0052',
    full: '大阪府大阪市阿倍野区阿倍野筋1-1-43 あべのハルカス23階',
  },
  stations: [
    {
      name: 'Osaka Metro御堂筋線 阿倍野駅',
      exit: '1番出口',
      time: '徒歩1分',
    },
    {
      name: 'JR阪和線 天王寺駅',
      exit: '東口',
      time: '徒歩5分',
    },
    {
      name: '近鉄南大阪線 大阪阿部野橋駅',
      exit: '東改札',
      time: '徒歩3分',
    },
  ],
  hours: {
    weekday: '平日: 14:00 - 21:00',
    weekend: '土日祝: 10:00 - 18:00',
    closed: '休校日: 毎週月曜日',
  },
  contact: {
    phone: '06-XXXX-XXXX',
    email: 'info@example.com',
  },
  parking: '近隣の有料駐車場をご利用ください（あべのハルカス地下駐車場が便利です）',
}

export default function AccessPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* ヘッダー */}
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">アクセス</h1>
            <p className="text-xl text-gray-600">
              大阪市阿倍野区の好アクセスな場所に位置しています
            </p>
          </div>
        </FadeIn>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 地図 */}
            <FadeIn>
              <div className="bg-gray-100 rounded-xl overflow-hidden aspect-square lg:aspect-auto lg:h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.9391846063877!2d135.51340687574547!3d34.64566657276444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000ddf339c80021%3A0x8111f98d886b6ff!2z44GC44G544Gu44OP44Or44Kr44K5!5e0!3m2!1sja!2sjp!4v1707213170240!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="min-h-[400px]"
                ></iframe>
              </div>
            </FadeIn>

            {/* アクセス情報 */}
            <FadeIn delay={200}>
              <div className="space-y-8">
                {/* 住所 */}
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">住所</h3>
                    <p className="text-gray-600 mb-1">{accessInfo.address.postal}</p>
                    <p className="text-gray-600">{accessInfo.address.full}</p>
                  </div>
                </div>

                {/* 最寄り駅 */}
                <div>
                  <h3 className="text-lg font-bold mb-4">最寄り駅</h3>
                  <div className="space-y-4">
                    {accessInfo.stations.map((station) => (
                      <div
                        key={station.name}
                        className="bg-gray-50 rounded-lg p-4 flex items-start space-x-4"
                      >
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-2xl">🚉</span>
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">{station.name}</h4>
                          <p className="text-gray-600">
                            {station.exit}から{station.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 営業時間 */}
                <div className="flex items-start space-x-4">
                  <ClockIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">営業時間</h3>
                    <p className="text-gray-600">{accessInfo.hours.weekday}</p>
                    <p className="text-gray-600">{accessInfo.hours.weekend}</p>
                    <p className="text-gray-600">{accessInfo.hours.closed}</p>
                  </div>
                </div>

                {/* 連絡先 */}
                <div className="flex items-start space-x-4">
                  <PhoneIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">お問い合わせ</h3>
                    <p className="text-gray-600">TEL: {accessInfo.contact.phone}</p>
                    <p className="text-gray-600">Email: {accessInfo.contact.email}</p>
                  </div>
                </div>

                {/* 駐車場 */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-2">駐車場について</h3>
                  <p className="text-gray-600">{accessInfo.parking}</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 周辺施設 */}
          <FadeIn delay={400}>
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-center mb-8">周辺施設</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: 'あべのハルカス',
                    description:
                      '日本一高いビル。展望台や百貨店、レストラン、ホテルなどが入居しています。',
                    distance: '同じビル内',
                  },
                  {
                    name: 'あべのキューズモール',
                    description:
                      'ファッション、グルメ、エンターテイメントが揃う大型商業施設です。',
                    distance: '徒歩3分',
                  },
                  {
                    name: '天王寺公園',
                    description:
                      '緑豊かな公園。てんしば等、休憩スポットとして人気があります。',
                    distance: '徒歩7分',
                  },
                ].map((facility) => (
                  <div
                    key={facility.name}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2">{facility.name}</h3>
                    <p className="text-gray-600 mb-4">{facility.description}</p>
                    <p className="text-sm text-blue-600">約{facility.distance}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
