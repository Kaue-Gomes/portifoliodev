'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

type SubmitUiStatus = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitUi, setSubmitUi] = useState<SubmitUiStatus>('idle')

  useEffect(() => {
    if (submitUi !== 'sent') return
    const timer = setTimeout(() => setSubmitUi('idle'), 6000)
    return () => clearTimeout(timer)
  }, [submitUi])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitUi('sending')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitUi('sent')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitUi('error')
      }
    } catch {
      setSubmitUi('error')
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'kauegomessales189@gmail.com',
      href: 'mailto:kauegomessales189@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: 'Fortaleza, CE — Brasil',
      href: '#contact',
    },
  ]

  const sending = submitUi === 'sending'
  const disabledButton = sending || submitUi === 'sent'

  return (
    <section id="contact" className="section-padding bg-[color:var(--surface)] border-t border-mutedfg/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Vamos <span className="gradient-text">conversar</span>
          </h2>
          <p className="text-lg text-mutedfg mb-12">
            Envie uma mensagem — respondo por email em até um dia útil.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" className="p-8">
              <h3 className="font-display text-2xl font-bold mb-8 text-[color:var(--text)]">
                Mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-mutedfg mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      autoComplete="name"
                      maxLength={120}
                      className="w-full px-4 py-3 rounded-lg border border-mutedfg/25 bg-[color:var(--bg)] text-[color:var(--text)] placeholder:text-mutedfg/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-mutedfg mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      autoComplete="email"
                      maxLength={254}
                      className="w-full px-4 py-3 rounded-lg border border-mutedfg/25 bg-[color:var(--bg)] text-[color:var(--text)] placeholder:text-mutedfg/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
                      placeholder="voce@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-mutedfg mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    maxLength={180}
                    className="w-full px-4 py-3 rounded-lg border border-mutedfg/25 bg-[color:var(--bg)] text-[color:var(--text)] placeholder:text-mutedfg/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
                    placeholder="Sobre o que é a mensagem?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-mutedfg mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    maxLength={4000}
                    className="w-full px-4 py-3 rounded-lg border border-mutedfg/25 bg-[color:var(--bg)] text-[color:var(--text)] placeholder:text-mutedfg/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] resize-none"
                    placeholder="Detalhes do projeto ou pergunta..."
                  />
                </div>

                <Button type="submit" disabled={disabledButton} className="w-full" size="lg">
                  {submitUi === 'idle' && (
                    <>
                      Enviar mensagem
                      <Send size={20} className="ml-2" aria-hidden />
                    </>
                  )}
                  {submitUi === 'sending' && <>Enviando...</>}
                  {submitUi === 'sent' && <>✓ Mensagem enviada</>}
                  {submitUi === 'error' && <>Erro — tente novamente</>}
                </Button>

                {submitUi === 'error' ? (
                  <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                    Não foi possível enviar agora. Tente de novo ou use o email ao lado.
                  </p>
                ) : null}
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold mb-4 text-[color:var(--text)]">
                Contato direto
              </h3>
              <p className="text-mutedfg leading-relaxed">
                Prefiro primeiro contato por email para organizar contexto e responder com qualidade.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 rounded-xl border border-mutedfg/15 bg-[color:var(--bg)] p-4 hover:border-[color:var(--accent)] transition-colors"
                >
                  <div className="rounded-lg bg-[color:var(--surface)] p-3 border border-mutedfg/15">
                    <info.icon className="text-[color:var(--accent)]" size={22} aria-hidden />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[color:var(--text)]">{info.title}</h4>
                    <p className="text-mutedfg text-sm">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <Card variant="glass" className="p-6">
              <h4 className="font-display text-lg font-bold mb-4 text-[color:var(--text)]">
                Disponibilidade
              </h4>
              <div className="space-y-3 text-sm text-mutedfg">
                <div className="flex justify-between gap-4">
                  <span>Freelance:</span>
                  <span className="font-semibold text-[color:var(--accent)]">Disponível</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Full-time:</span>
                  <span className="font-semibold text-mutedfg">Indisponível</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Resposta:</span>
                  <span className="font-semibold text-[color:var(--accent)]">24h úteis</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
