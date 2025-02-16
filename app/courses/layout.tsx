import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'コース紹介 | プログラミングスクール',
  description:
    '小学生向けプログラミングスクールのコース紹介ページです。ゲーム開発、ロボット制作、Web開発など、お子様の興味や学年に合わせた最適なコースをご紹介します。',
  keywords:
    '小学生, プログラミング, スクール, コース, ゲーム開発, ロボット, Web開発, STEM教育',
  openGraph: {
    title: 'コース紹介 | プログラミングスクール',
    description:
      '小学生向けプログラミングスクールのコース紹介ページです。ゲーム開発、ロボット制作、Web開発など、お子様の興味や学年に合わせた最適なコースをご紹介します。',
    url: 'https://example.com/courses',
    siteName: 'プログラミングスクール',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'プログラミングスクールのコース紹介',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'コース紹介 | プログラミングスクール',
    description:
      '小学生向けプログラミングスクールのコース紹介ページです。ゲーム開発、ロボット制作、Web開発など、お子様の興味や学年に合わせた最適なコースをご紹介します。',
    images: ['/images/og-image.jpg'],
  },
}

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
