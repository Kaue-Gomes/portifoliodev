import emailjs from '@emailjs/browser'

// Configurações do EmailJS
const EMAILJS_SERVICE_ID = 'service_xxxxxxx' // Substitua pelo seu Service ID
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx' // Substitua pelo seu Template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key_here' // Substitua pela sua Public Key

// Inicializar EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY)

export interface EmailData {
  name: string
  email: string
  subject: string
  message: string
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_email: 'kauegomessales189@gmail.com', // Seu email de destino
    }

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )

    if (response.status === 200) {
      console.log('Email enviado com sucesso!')
    } else {
      throw new Error('Falha ao enviar email')
    }
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    throw error
  }
}
