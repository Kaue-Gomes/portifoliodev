import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validação básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    // Configuração de email
    const emailUser = process.env.EMAIL_USER || 'kauegomessales189@gmail.com'
    const emailPass = process.env.EMAIL_PASS || 'ataa erdy tnqy junc'
    
    console.log('EMAIL_USER:', emailUser ? 'Configurado' : 'Não configurado')
    console.log('EMAIL_PASS:', emailPass ? 'Configurado' : 'Não configurado')

    // Configuração do transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    })

    // Verificar conexão
    try {
      await transporter.verify()
      console.log('Conexão com o servidor de email verificada com sucesso')
    } catch (verifyError) {
      console.error('Erro ao verificar conexão com servidor de email:', verifyError)
      return NextResponse.json(
        { error: 'Erro de autenticação com o servidor de email. Verifique suas credenciais.' },
        { status: 500 }
      )
    }

    // Configuração do email
    const mailOptions = {
      from: emailUser,
      to: 'kauegomessales189@gmail.com',
      subject: `Nova mensagem do portfólio - ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nova Mensagem do Portfólio
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Informações do Remetente</h3>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Assunto:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Mensagem</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 12px; color: #6c757d;">
            <p>Esta mensagem foi enviada através do formulário de contato do seu portfólio.</p>
            <p>Data: ${new Date().toLocaleString('pt-BR')}</p>
          </div>
        </div>
      `,
    }

    // Enviar email
    const info = await transporter.sendMail(mailOptions)
    console.log('Email enviado com sucesso:', info.messageId)

    return NextResponse.json(
      { message: 'Email enviado com sucesso!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro detalhado ao enviar email:', error)
    
    // Retornar erro mais específico
    let errorMessage = 'Erro interno do servidor'
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        errorMessage = 'Credenciais de email inválidas'
      } else if (error.message.includes('Connection timeout')) {
        errorMessage = 'Timeout de conexão com servidor de email'
      } else {
        errorMessage = error.message
      }
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
