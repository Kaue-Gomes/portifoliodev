# 🚀 Portfólio Dev - Desenvolvedor Full Stack

Um portfólio moderno e elegante criado com as tecnologias mais recentes do mercado, demonstrando habilidades de desenvolvimento full stack com design atrativo e funcionalidades interativas.

## ✨ Características

- **Design Moderno**: Interface elegante com gradientes e animações suaves
- **Totalmente Responsivo**: Otimizado para todos os dispositivos
- **Modo Escuro/Claro**: Toggle automático com persistência local
- **Animações Fluidas**: Framer Motion para transições suaves
- **Performance Otimizada**: Next.js 14 com App Router
- **TypeScript**: Type safety completo
- **Tailwind CSS**: Estilização moderna e responsiva
- **Componentes Reutilizáveis**: Arquitetura modular e escalável

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 14** - Framework React com App Router
- **TypeScript** - Type safety e melhor DX
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações e transições
- **React Icons** - Biblioteca de ícones
- **Lucide React** - Ícones modernos

### Desenvolvimento
- **ESLint** - Linting de código
- **PostCSS** - Processamento CSS
- **Autoprefixer** - Prefixos CSS automáticos

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/portfolio-dev.git
cd portfolio-dev
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute em modo de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse o projeto**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
portfolio-dev/
├── app/                    # App Router (Next.js 14)
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── ui/               # Componentes base (Button, Card)
│   ├── sections/         # Seções da página
│   ├── Navigation.tsx    # Navegação
│   └── Footer.tsx        # Rodapé
├── lib/                  # Utilitários
│   └── utils.ts          # Funções auxiliares
├── public/               # Arquivos estáticos
└── package.json          # Dependências e scripts
```

## 🎨 Personalização

### Cores e Tema
As cores podem ser personalizadas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... outras variações
  },
  dark: {
    50: '#f8fafc',
    // ... outras variações
  }
}
```

### Conteúdo
Edite os componentes nas pastas `components/sections/` para personalizar:
- Informações pessoais
- Projetos
- Habilidades
- Experiência
- Contatos

### Configurações
- **Metadados**: Edite `app/layout.tsx` para SEO
- **Fontes**: Configure no `tailwind.config.js`
- **Animações**: Personalize no `globals.css`

## 📱 Seções do Portfólio

### 1. Hero (Início)
- Apresentação pessoal
- Call-to-action buttons
- Links para redes sociais

### 2. Sobre
- Informações pessoais
- Estatísticas de experiência
- Timeline de experiência profissional

### 3. Habilidades
- Tecnologias técnicas com níveis
- Habilidades interpessoais
- Categorização por área

### 4. Projetos
- Projetos em destaque
- Grid de todos os projetos
- Links para demos e código

### 5. Contato
- Formulário de contato
- Informações de contato
- Links para redes sociais

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Executa em modo desenvolvimento
npm run build    # Build para produção
npm run start    # Executa build de produção
npm run lint     # Executa ESLint
```

## 📦 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Outras Plataformas
- **Netlify**: Compatível com Next.js
- **Railway**: Deploy simples
- **AWS Amplify**: Para projetos empresariais

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Se você tiver alguma dúvida ou sugestão, entre em contato:

- **Email**: seu.email@exemplo.com
- **LinkedIn**: [Seu Perfil](https://linkedin.com/in/seu-perfil)
- **GitHub**: [@seu-usuario](https://github.com/seu-usuario)

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) - Framework incrível
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animações
- [Lucide](https://lucide.dev/) - Ícones modernos

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
