# Configuração do EmailJS para Envio de Emails

## Passo 1: Criar Conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crie uma conta gratuita
3. Faça login no dashboard

## Passo 2: Configurar Email Service

1. No dashboard, vá para **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta de email
5. Anote o **Service ID** gerado

## Passo 3: Criar Template de Email

1. Vá para **Email Templates**
2. Clique em **Create New Template**
3. Use este template:

```
Assunto: Nova mensagem do portfólio - {{subject}}

De: {{from_name}} ({{from_email}})

Assunto: {{subject}}

Mensagem:
{{message}}

---
Esta mensagem foi enviada através do formulário de contato do seu portfólio.
```

4. Anote o **Template ID** gerado

## Passo 4: Obter Public Key

1. Vá para **Account** > **General**
2. Copie sua **Public Key**

## Passo 5: Configurar o Código

1. Abra o arquivo `lib/emailjs.ts`
2. Substitua os valores:

```typescript
const EMAILJS_SERVICE_ID = 'seu_service_id_aqui'
const EMAILJS_TEMPLATE_ID = 'seu_template_id_aqui'
const EMAILJS_PUBLIC_KEY = 'sua_public_key_aqui'
```

## Passo 6: Testar

1. Execute o projeto: `npm run dev`
2. Vá para a seção de contato
3. Preencha o formulário e envie
4. Verifique se o email chegou na sua caixa de entrada

## Limites da Conta Gratuita

- 200 emails por mês
- 2 templates
- 1 serviço de email

## Alternativas

Se preferir uma solução mais robusta, considere:
- **Nodemailer** com API route do Next.js
- **SendGrid**
- **Mailgun**
- **Resend**

## Segurança

⚠️ **Importante**: Nunca exponha chaves privadas no frontend. O EmailJS é seguro para uso no cliente, mas para aplicações em produção, considere usar uma API route do Next.js.
