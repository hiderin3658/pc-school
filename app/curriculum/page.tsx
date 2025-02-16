import { CurriculumTimeline } from '@/components/courses/curriculum-timeline'
import { Button } from '@/components/ui/button'

export default function CurriculumPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              カリキュラム
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              体系的に学べる、段階的なプログラミング学習
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <CurriculumTimeline />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            カリキュラムの特徴
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">段階的な学習</h3>
              <p className="text-gray-600">
                基礎から応用まで、お子様のペースに合わせて段階的に学習を進めていきます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">実践的なプロジェクト</h3>
              <p className="text-gray-600">
                学んだ内容を活かして、実際のプロジェクトを作成します。成功体験を通じて学習意欲を高めます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">個別サポート</h3>
              <p className="text-gray-600">
                経験豊富な講師が、お子様一人一人の理解度に合わせてきめ細かくサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            まずは無料体験から始めましょう
          </h2>
          <p className="text-white/90 text-xl mb-8">
            実際の授業を体験して、カリキュラムの良さを実感してください。
          </p>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 bg-white hover:bg-white/90"
          >
            無料体験に申し込む
          </Button>
        </div>
      </section>
    </div>
  )
}
