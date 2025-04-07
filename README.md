# TechKids - 小学生向けプログラミングスクール

子どもたちのプログラミング教育と創造性を育むためのプログラミングスクールのウェブサイトです（仮想サイト）。

## デプロイ先

アプリケーションは以下のURLでデプロイされています：
https://pc-school.vercel.app/

## 技術スタック

- **フロントエンド**: Next.js、React、TypeScript、Tailwind CSS
- **UIコンポーネント**: shadcn/ui、Headless UI
- **フォーム処理**: React Hook Form、Zod
- **バックエンド**: Next.js API Routes
- **メール送信**: Nodemailer
- **アイコン**: Lucide React、Heroicons
- **デプロイ**: Vercel

## 環境構築

1. リポジトリをクローン
```bash
git clone <repository-url>
cd プロジェクトディレクトリ
```

2. 依存関係をインストール
```bash
npm install
```

3. 環境変数の設定
   - `.env.example`を`.env`にリネーム（または新規作成）
   - 以下の環境変数を設定
```
EMAIL_USER=your-email
EMAIL_PASSWORD=your-email-password
ADMIN_EMAIL=your-admin-email
```

4. 開発サーバー起動
```bash
npm run dev
```

## 機能一覧

- レスポンシブなウェブデザイン
- 多言語対応（日本語・英語）
- お問い合わせフォーム（メール送信機能付き）
- 無料体験申し込みフォーム
- スクロールアニメーション
- コース診断ツール
- モーダルウィンドウ表示

## ページ構成

### 1. ホームページ (`/`)
- ビデオ背景付きのヒーローセクション
- スクールの特徴紹介
- 対象学年の説明
- 授業紹介セクション
- 無料体験申し込みCTA

### 2. コース紹介ページ (`/courses`)
- 各コースの詳細説明
- 料金プラン
- コースセレクター
- 特徴的な学習内容

### 3. カリキュラムページ (`/curriculum`)
- 段階的な学習ステップ
- 習得スキル一覧
- 学習フロー
- 達成目標

### 4. FAQ (`/faq`)
- よくある質問と回答
- アコーディオン形式の表示
- カテゴリー別質問

### 5. お問い合わせページ (`/contact`)
- 問い合わせフォーム
- メール送信機能
- 入力バリデーション

### 6. 無料体験申し込みページ (`/trial`)
- 詳細な申し込みフォーム
- 子ども情報入力
- 保護者情報入力
- 確認メール送信機能

## アプリケーション構造

```
プロジェクト/
├── app/
│   ├── api/             # API Routes
│   │   ├── contact/     # お問い合わせAPI
│   │   └── trial/       # 無料体験申し込みAPI
│   ├── contact/         # お問い合わせページ
│   ├── courses/         # コース紹介ページ
│   ├── curriculum/      # カリキュラムページ
│   ├── faq/             # FAQページ
│   ├── trial/           # 無料体験申し込みページ
│   ├── layout.tsx       # レイアウト
│   ├── page.tsx         # トップページ
│   └── globals.css      # グローバルスタイル
├── src/
│   ├── components/      # 共通コンポーネント
│   │   ├── layout/      # レイアウトコンポーネント（ヘッダー、フッターなど）
│   │   ├── ui/          # UIコンポーネント
│   │   ├── forms/       # フォームコンポーネント
│   │   └── ...
│   └── lib/            # ユーティリティ関数
│       ├── i18n.ts      # 多言語対応
│       ├── utils.ts     # ユーティリティ関数
│       └── ...
├── public/             # 静的ファイル
└── ...
```

## コマンド

- `npm run dev`: 開発サーバーの起動 (Turbopack使用)
- `npm run build`: プロダクションビルド
- `npm run start`: プロダクションサーバーの起動
- `npm run lint`: コードの静的解析

