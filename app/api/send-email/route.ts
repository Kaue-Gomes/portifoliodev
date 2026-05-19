import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'
import { escapeHtml } from '@/lib/escape-html'

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  subject: z.string().trim().min(1).max(180),
  message: z.string().trim().min(1).max(4000),
})

export async function POST(request: NextRequest) {
  try {
    const json = await request.json()
    const parsed = contactSchema.safeParse(json)

    if (!parsed.success) {
      return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 })
    }

    const { name, email, subject, message } = parsed.data

    const emailUser = process.env.EMAIL_USER
    const emailPass = process.env.EMAIL_PASS

    if (!emailUser || !emailPass) {
      return NextResponse.json(
        { error: 'Serviço de email não configurado.' },
        { status: 503 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    })

    await transporter.verify()

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeSubject = escapeHtml(subject)
    const safeBody = escapeHtml(message).replace(/\r?\n/g, '<br />')

    const mailOptions = {
      from: emailUser,
      to: emailUser,
      replyTo: email,
      subject: `[Portfólio] ${subject.replace(/[\r\n]/g, ' ')}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
            Nova mensagem do portfólio
          </h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #6366f1; margin-top: 0;">Remetente</h3>
            <p><strong>Nome:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Assunto:</strong> ${safeSubject}</p>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Mensagem</h3>
            <p style="line-height: 1.6; color: #555;">${safeBody}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 12px; color: #6c757d;">
            <p>Enviado pelo formulário do portfólio.</p>
            <p>${escapeHtml(new Date().toLocaleString('pt-BR'))}</p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Email enviado com sucesso!' }, { status: 200 })
  } catch (error) {
    console.error('Erro ao enviar email pelo formulário de contato:', error)
    return NextResponse.json({ error: 'Não foi possível enviar agora.' }, { status: 500 })
  }
}
