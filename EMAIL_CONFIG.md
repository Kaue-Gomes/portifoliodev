# Configuração do Envio de Emails

## Opção 1: Usando API Route (Recomendado)

### Passo 1: Configurar Variáveis de Ambiente

1. Crie um arquivo `.env.local` na raiz do projeto
2. Adicione as seguintes variáveis:

```env
EMAIL_USER=seu.email@gmail.com
EMAIL_PASS=sua_senha_de_app_aqui
```

### Passo 2: Configurar Gmail

1. **Ative a verificação em 2 etapas** na sua conta Google
2. Vá para: https://myaccount.google.com/apppasswords
3. Gere uma **senha de app** para "Mail"
4. Use essa senha no `EMAIL_PASS` (não sua senha normal)

### Passo 3: Testar

1. Execute: `npm run dev`
2. Vá para a seção de contato
3. Preencha e envie o formulário
4. Verifique se o email chegou

## Opção 2: Usando EmailJS (Alternativa)

Se preferir usar EmailJS:

1. Siga as instruções no arquivo `EMAILJS_SETUP.md`
2. Configure o arquivo `lib/emailjs.ts`
3. Modifique o `Contact.tsx` para usar EmailJS

## Solução de Problemas

### Erro: "Invalid login"
- Verifique se está usando a senha de app, não a senha normal
- Confirme se a verificação em 2 etapas está ativada

### Erro: "Connection timeout"
- Verifique sua conexão com a internet
- Tente usar outro provedor de email (Outlook, Yahoo)

### Emails não chegam
- Verifique a pasta de spam
- Confirme se o email de destino está correto
- Verifique os logs do console para erros

## Outros Provedores de Email

### Outlook/Hotmail
```typescript
const transporter = nodemailer.createTransporter({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})
```

### Yahoo
```typescript
const transporter = nodemailer.createTransporter({
  service: 'yahoo',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})
```

## Segurança

⚠️ **Importante**:
- Nunca commite o arquivo `.env.local`
- Use senhas de app, não senhas normais
- Considere usar serviços como SendGrid para produção
