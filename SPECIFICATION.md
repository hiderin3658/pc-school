# プログラミングスクールサイト 詳細仕様書

## 基本情報
- **対象年齢**：小学1年生～6年生
- **メインターゲット**：子供（利用者）＋保護者（意思決定者）
- **技術スタック**：Next.js(App Router), TypeScript, Tailwind CSS, shadcn/ui
- **対応端末**：PC/タブレット（70%）、スマートフォン（30%）

## ページ詳細仕様

### 1. トップページ (`/`)
```markdown
### 目的
- スクールの特徴を直感的に理解させる
- 無料体験への誘導を最大化

### 必須要素
- ヘロセクション（全画面ビデオ背景）
- 3つの特徴（アイコン＋簡潔な説明）
- 対象学年ビジュアルチャート
- 保護者向け説明動画（60秒）
- 無料体験申し込みCTA（固定ボタン）

### UI要件
- インタラクティブアニメーション：
  - コードが流れる背景エフェクト
  - ホバーで拡大するカード要素
- レスポンシブ対応：
  - タブレット：2カラムレイアウト
  - スマホ：1カラム＋ハンバーガーメニュー
```

### 2. コース紹介 (`/courses`)
```markdown
### コンテンツ構造
- 学年別カリキュラム表（比較表形式）
- 学習の流れ（タイムライン表示）
- 使用ツール一覧（ロゴグリッド）
- 保護者の声（カルーセルスライダー）

### インタラクティブ要素
- コース選択シミュレーター：
  ```typescript
  interface CourseSelector {
    grade: number;
    interest: 'game' | 'robot' | 'web';
    // 選択に応じて推奨コースを表示
  }
  ```
```

（中略：他のページの仕様を同様に記載）

## 共通コンポーネント仕様
```markdown
### ヘッダー
- ロゴ（アニメーション付き）
- グローバルナビゲーション
- 言語切り替え（日本語/英語）
- 緊急連絡バナー

### フッター
- SNSリンク（YouTube, LINE）
- 関連団体認証バッジ
- サイトマップ
- プライバシーポリシーリンク
```

## 技術要件
```markdown
### パフォーマンス
- Lighthouseスコア：90以上
- 初回読み込み：2秒以内
- 画像最適化：WebP形式自動変換

### セキュリティ
- HTTPS強制
- フォーム入力検証（クライアント/サーバーサイド）
- 個人情報暗号化（AES-256）

### SEO
- 構造化データマークアップ
- メタタグ自動生成
- サイトマップXML自動生成
```

## テスト計画
```markdown
1. ユーザビリティテスト（小学生対象）
2. クロスブラウザテスト（Chrome, Safari, Edge）
3. 負荷テスト（同時接続1000ユーザー）
4. アクセシビリティ検査（WCAG 2.1準拠）
```
