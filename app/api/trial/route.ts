import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { childName, childGrade, parentName, email, phone } = body

    // 必須項目の検証
    if (!childName || !childGrade || !parentName || !email || !phone) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      )
    }

    // メール送信のためのトランスポーターを作成
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // 学年の表示名を取得
    const gradeLabels: Record<string, string> = {
      '1': '小学1年生',
      '2': '小学2年生',
      '3': '小学3年生',
      '4': '小学4年生',
      '5': '小学5年生',
      '6': '小学6年生',
    }
    const gradeLabel = gradeLabels[childGrade] || `${childGrade}年生`

    // 管理者宛てのメール設定
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `[体験申込] ${childName}様 (${gradeLabel}) の無料体験のお申し込み`,
      text: `
生徒様のお名前: ${childName}
学年: ${gradeLabel}
保護者様のお名前: ${parentName}
メールアドレス: ${email}
電話番号: ${phone}
      `,
      html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #4a5568;">新しい無料体験のお申し込みがありました</h2>
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <tr>
      <th style="text-align: left; padding: 8px; border-bottom: 1px solid #e2e8f0;">生徒様のお名前</th>
      <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${childName}</td>
    </tr>
    <tr>
      <th style="text-align: left; padding: 8px; border-bottom: 1px solid #e2e8f0;">学年</th>
      <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${gradeLabel}</td>
    </tr>
    <tr>
      <th style="text-align: left; padding: 8px; border-bottom: 1px solid #e2e8f0;">保護者様のお名前</th>
      <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${parentName}</td>
    </tr>
    <tr>
      <th style="text-align: left; padding: 8px; border-bottom: 1px solid #e2e8f0;">メールアドレス</th>
      <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color: #4299e1;">${email}</a></td>
    </tr>
    <tr>
      <th style="text-align: left; padding: 8px; border-bottom: 1px solid #e2e8f0;">電話番号</th>
      <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;"><a href="tel:${phone}" style="color: #4299e1;">${phone}</a></td>
    </tr>
  </table>
</div>
      `,
    }

    // ユーザー宛ての自動返信メール設定
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '[TechKids] 無料体験のお申し込みありがとうございます',
      text: `
${parentName}様

この度はTechKidsの無料体験にお申し込みいただき、誠にありがとうございます。
以下の内容でお申し込みを受け付けました。

生徒様のお名前: ${childName}
学年: ${gradeLabel}

担当者より、無料体験の日程調整のためにご連絡させていただきます。
今しばらくお待ちくださいますようお願い申し上げます。

※このメールは自動送信されています。このメールに返信いただいても対応できない場合があります。

--
TechKids カスタマーサポート
電話: 03-1234-5678（平日10:00〜18:00）
メール: contact@techkids.jp
      `,
      html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #4a5568;">無料体験のお申し込みありがとうございます</h2>
  <p>${parentName}様</p>
  <p>この度はTechKidsの無料体験にお申し込みいただき、誠にありがとうございます。<br>以下の内容でお申し込みを受け付けました。</p>
  
  <div style="background-color: #f7fafc; padding: 16px; border-radius: 4px; margin: 20px 0;">
    <table style="width: 100%;">
      <tr>
        <th style="text-align: left; padding: 8px;">生徒様のお名前</th>
        <td style="padding: 8px;">${childName}</td>
      </tr>
      <tr>
        <th style="text-align: left; padding: 8px;">学年</th>
        <td style="padding: 8px;">${gradeLabel}</td>
      </tr>
    </table>
  </div>
  
  <p>担当者より、無料体験の日程調整のためにご連絡させていただきます。<br>今しばらくお待ちくださいますようお願い申し上げます。</p>
  
  <p style="font-size: 0.9em; color: #718096; margin-top: 30px;">※このメールは自動送信されています。このメールに返信いただいても対応できない場合があります。</p>
  
  <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 0.9em; color: #4a5568;">
    <p style="margin: 0;">TechKids カスタマーサポート</p>
    <p style="margin: 0;">電話: 03-1234-5678（平日10:00〜18:00）</p>
    <p style="margin: 0;">メール: <a href="mailto:contact@techkids.jp" style="color: #4299e1;">contact@techkids.jp</a></p>
  </div>
</div>
      `,
    }

    // メール送信（管理者宛てと自動返信）
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('無料体験申込処理エラー:', error)
    return NextResponse.json(
      { error: '処理中にエラーが発生しました' },
      { status: 500 }
    )
  }
} 