'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Copy, Check, User, Lock, Eye, EyeOff } from 'lucide-react'
import Button from './Button'
import Card from './Card'

interface CredentialsModalProps {
  isOpen: boolean
  onClose: () => void
}

interface Credential {
  role: string
  email: string
  password: string
  description: string
}

export default function CredentialsModal({ isOpen, onClose }: CredentialsModalProps) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null)
  const [showPasswords, setShowPasswords] = useState<Record<string, boolean>>({})

  const credentials: Credential[] = [
    {
      role: 'User',
      email: 'laboratorio@codesky.local',
      password: 'CodeskyDemo2026!',
      description: 'Acesso completo ao sistema',
    },
  ]

  const copyToClipboard = async (text: string, item: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(item)
      setTimeout(() => setCopiedItem(null), 2000)
    } catch {
      /* noop — clipboard pode falhar em contextos não seguros */
    }
  }

  const togglePasswordVisibility = (role: string) => {
    setShowPasswords((prev) => ({ ...prev, [role]: !prev[role] }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="max-h-[90vh] w-full max-w-4xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Card variant="elevated" className="overflow-hidden p-0">
              <div className="flex items-start justify-between gap-4 bg-[color:var(--accent)] p-6 text-white">
                <div>
                  <h2 className="font-display text-2xl font-bold mb-2">Credenciais de demo</h2>
                  <p className="text-sm text-white/90">
                    MyGestor — é necessário digitar a senha manualmente no login.
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  type="button"
                  onClick={onClose}
                  className="text-white hover:bg-white/15 shrink-0 border border-white/25"
                  aria-label="Fechar"
                >
                  <X size={22} aria-hidden />
                </Button>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid gap-5">
                  {credentials.map((cred, index) => (
                    <motion.div
                      key={cred.role}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.06 }}
                      className="rounded-xl border border-mutedfg/15 bg-[color:var(--bg)] p-5"
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)] text-white">
                          <User size={20} aria-hidden />
                        </div>
                        <div>
                          <h3 className="font-display text-lg font-bold text-[color:var(--text)]">
                            {cred.role}
                          </h3>
                          <p className="text-sm text-mutedfg">{cred.description}</p>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <label className="text-xs font-medium uppercase tracking-wide text-mutedfg">
                            Email
                          </label>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 rounded-lg border border-mutedfg/20 bg-[color:var(--surface)] px-3 py-2 font-mono text-sm text-[color:var(--text)]">
                              {cred.email}
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              type="button"
                              onClick={() => copyToClipboard(cred.email, `${cred.role}-email`)}
                              aria-label="Copiar email"
                            >
                              {copiedItem === `${cred.role}-email` ? (
                                <Check size={16} className="text-green-600" aria-hidden />
                              ) : (
                                <Copy size={16} aria-hidden />
                              )}
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-medium uppercase tracking-wide text-mutedfg">
                            Senha
                          </label>
                          <div className="flex flex-wrap items-center gap-2">
                            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-mutedfg/20 bg-[color:var(--surface)] px-3 py-2 font-mono text-sm text-[color:var(--text)]">
                              <Lock size={14} className="text-mutedfg shrink-0" aria-hidden />
                              <span className="truncate">
                                {showPasswords[cred.role] ? cred.password : '••••••'}
                              </span>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              type="button"
                              onClick={() => togglePasswordVisibility(cred.role)}
                              aria-label={showPasswords[cred.role] ? 'Ocultar senha' : 'Mostrar senha'}
                            >
                              {showPasswords[cred.role] ? (
                                <EyeOff size={16} aria-hidden />
                              ) : (
                                <Eye size={16} aria-hidden />
                              )}
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              type="button"
                              onClick={() =>
                                copyToClipboard(cred.password, `${cred.role}-password`)
                              }
                              aria-label="Copiar senha"
                            >
                              {copiedItem === `${cred.role}-password` ? (
                                <Check size={16} className="text-green-600" aria-hidden />
                              ) : (
                                <Copy size={16} aria-hidden />
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="rounded-xl border border-mutedfg/15 bg-[color:var(--surface)] p-4 text-sm text-mutedfg">
                  <p className="font-semibold text-[color:var(--text)] mb-1">Somente demonstração</p>
                  <p>
                    Credenciais fictícias para testes do ambiente exposto. Em produção use políticas de
                    senha e MFA adequadas.
                  </p>
                </div>

                <div className="flex justify-end">
                  <Button type="button" onClick={onClose} size="lg" variant="primary">
                    Entendi
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
