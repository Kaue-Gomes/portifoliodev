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

const CredentialsModal = ({ isOpen, onClose }: CredentialsModalProps) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null)
  const [showPasswords, setShowPasswords] = useState<{ [key: string]: boolean }>({})

  const credentials: Credential[] = [
    {
      role: 'Dono',
      email: 'admin@exemplo.com',
      password: '123',
      description: 'Acesso completo ao sistema com todas as permissões administrativas'
    },
    {
      role: 'Vendedor',
      email: 'joao.silva@exemplo.com',
      password: '123',
      description: 'Acesso para vendedores com permissões de vendas e clientes'
    },
    {
      role: 'Administrador',
      email: 'joao.silva@exemplo.com',
      password: '123',
      description: 'Acesso administrativo para gestão de usuários e configurações'
    }
  ]

  const copyToClipboard = async (text: string, item: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(item)
      setTimeout(() => setCopiedItem(null), 2000)
    } catch (err) {
      console.error('Erro ao copiar:', err)
    }
  }

  const togglePasswordVisibility = (role: string) => {
    setShowPasswords(prev => ({
      ...prev,
      [role]: !prev[role]
    }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Card variant="elevated" className="p-0 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-600 to-purple-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Credenciais de Acesso</h2>
                    <p className="text-primary-100">
                      Use estas credenciais para acessar o sistema de Gestão para Concessionárias
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="text-white hover:bg-white/20 p-2"
                  >
                    <X size={24} />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="grid gap-6">
                  {credentials.map((cred, index) => (
                    <motion.div
                      key={cred.role}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-dark-200 dark:border-dark-700 rounded-lg p-4 bg-gradient-to-r from-dark-50 to-white dark:from-dark-800 dark:to-dark-900"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center">
                          <User size={20} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-dark-900 dark:text-white">
                            {cred.role}
                          </h3>
                          <p className="text-sm text-dark-600 dark:text-dark-400">
                            {cred.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        {/* Email */}
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-dark-700 dark:text-dark-300">
                            Email
                          </label>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 p-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-lg font-mono text-sm">
                              {cred.email}
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => copyToClipboard(cred.email, `${cred.role}-email`)}
                              className="px-3"
                            >
                              {copiedItem === `${cred.role}-email` ? (
                                <Check size={16} className="text-green-600" />
                              ) : (
                                <Copy size={16} />
                              )}
                            </Button>
                          </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-dark-700 dark:text-dark-300">
                            Senha
                          </label>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 p-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-lg font-mono text-sm flex items-center gap-2">
                              <Lock size={14} className="text-dark-400" />
                              <span>
                                {showPasswords[cred.role] ? cred.password : '••••••'}
                              </span>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => togglePasswordVisibility(cred.role)}
                              className="px-3"
                            >
                              {showPasswords[cred.role] ? (
                                <EyeOff size={16} />
                              ) : (
                                <Eye size={16} />
                              )}
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => copyToClipboard(cred.password, `${cred.role}-password`)}
                              className="px-3"
                            >
                              {copiedItem === `${cred.role}-password` ? (
                                <Check size={16} className="text-green-600" />
                              ) : (
                                <Copy size={16} />
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-900 dark:text-primary-100 mb-1">
                        Informação Importante
                      </h4>
                      <p className="text-sm text-primary-700 dark:text-primary-300">
                        Estas são credenciais de demonstração. Use-as apenas para testar o sistema. 
                        Em um ambiente de produção, certifique-se de usar credenciais seguras e únicas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <Button onClick={onClose} size="lg">
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

export default CredentialsModal
