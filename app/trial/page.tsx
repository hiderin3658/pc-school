import Image from 'next/image'
import { TrialForm } from '@/components/forms/trial-form'

export default function TrialPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?w=1200&h=800&q=80"
            alt="プログラミング教室の様子"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              無料体験に申し込む
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              実際の授業を体験して、プログラミング学習の楽しさを実感してください
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-8 text-center">
                無料体験のお申し込み
              </h2>
              <TrialForm />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            無料体験でできること
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                実際の授業を体験
              </h3>
              <p className="text-gray-600">
                実際の授業と同じ環境で、プログラミングの楽しさを体験できます。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                個別カウンセリング
              </h3>
              <p className="text-gray-600">
                お子様の興味や適性を確認し、最適なコースをご提案します。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                質問・相談
              </h3>
              <p className="text-gray-600">
                カリキュラムや料金など、気になることを何でもご相談いただけます。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
