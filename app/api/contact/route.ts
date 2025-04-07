import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // 必須項目の検証
    if (!name || !email || !message) {
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

    // 管理者宛てのメール設定
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `[お問い合わせ] ${name}様からのお問い合わせ`,
      text: `
名前: ${name}
メールアドレス: ${email}

お問い合わせ内容:
${message}
      `,
      html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #4a5568;">新しいお問い合わせがありました</h2>
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <tr>
      <th style="text-align: left; padding: 8px; border-bottom: 1px solid #e2e8f0;">名前</th>
      <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${name}</td>
    </tr>
    <tr>
      <th style="text-align: left; padding: 8px; border-bottom: 1px solid #e2e8f0;">メールアドレス</th>
      <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color: #4299e1;">${email}</a></td>
    </tr>
  </table>
  <div style="background-color: #f7fafc; padding: 16px; border-radius: 4px; margin-bottom: 20px;">
    <h3 style="margin-top: 0; color: #4a5568;">お問い合わせ内容:</h3>
    <p style="white-space: pre-wrap;">${message}</p>
  </div>
</div>
      `,
    }

    // ユーザー宛ての自動返信メール設定
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '[TechKids] お問い合わせありがとうございます',
      text: `
${name}様

この度はTechKidsへのお問い合わせをいただき、誠にありがとうございます。
以下の内容でお問い合わせを受け付けました。

お問い合わせ内容:
${message}

内容を確認の上、担当者より折り返しご連絡させていただきます。
今しばらくお待ちくださいますようお願い申し上げます。

※このメールは自動送信されています。このメールに返信いただいても対応できない場合があります。

--
TechKids カスタマーサポート
電話: 03-1234-5678（平日10:00〜18:00）
メール: contact@techkids.jp
      `,
      html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #4a5568;">お問い合わせありがとうございます</h2>
  <p>${name}様</p>
  <p>この度はTechKidsへのお問い合わせをいただき、誠にありがとうございます。<br>以下の内容でお問い合わせを受け付けました。</p>
  
  <div style="background-color: #f7fafc; padding: 16px; border-radius: 4px; margin: 20px 0;">
    <h3 style="margin-top: 0; color: #4a5568;">お問い合わせ内容:</h3>
    <p style="white-space: pre-wrap;">${message}</p>
  </div>
  
  <p>内容を確認の上、担当者より折り返しご連絡させていただきます。<br>今しばらくお待ちくださいますようお願い申し上げます。</p>
  
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
    console.error('お問い合わせ処理エラー:', error)
    return NextResponse.json(
      { error: '処理中にエラーが発生しました' },
      { status: 500 }
    )
  }
} 