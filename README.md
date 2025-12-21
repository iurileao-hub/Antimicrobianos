# Curso de Antimicrobianos para Residentes em Pediatria

> Referência baseada em evidências para uso racional de antimicrobianos em pediatria

**Acesse o site:** [atbpedhrt.vercel.app](https://atbpedhrt.vercel.app)

## 📚 Sobre o Projeto

Este é um site educacional desenvolvido para capacitar médicos residentes em Pediatria do **Hospital Regional de Taguatinga (HRT)** no uso racional e baseado em evidências de antimicrobianos na prática clínica pediátrica.

O curso é dividido em **4 módulos** que cobrem as principais classes de antibióticos:

1. **Penicilinas** - A fundação da antibioticoterapia
2. **Cefalosporinas** - Cobertura progressiva por gerações
3. **Oxacilina, Macrolídeos, Clindamicina e Rifampicina** - Arsenal contra estafilococos e atípicos
4. **Glicopeptídeos e Última Geração** - Reservas estratégicas para multiresistência

### Objetivos de Aprendizagem

- ✅ Selecionar o antimicrobiano adequado com base em perfil microbiológico e farmacocinético
- ✅ Ajustar doses e durações conforme idade, peso e função orgânica
- ✅ Reconhecer e manejar efeitos adversos
- ✅ Aplicar princípios de gerenciamento de antimicrobianos (*stewardship*)

## 🚀 Stack Técnico

- **Framework:** [Astro 5.16.6](https://astro.build) (Static Site Generation)
- **Linguagem:** TypeScript (strict mode)
- **Styling:** CSS Custom Properties (Vanilla CSS)
- **Content Management:** Markdown + Astro Content Collections
- **Deployment:** Vercel
- **Dependencies:** Minimal (only Astro core)

## 🛠️ Desenvolvimento

### Instalação & Setup

```bash
# Instalar dependências
npm install

# Iniciar dev server (localhost:3000)
npm run dev

# Build para produção
npm run build

# Preview da build local
npm run preview
```

### Estrutura do Projeto

```
src/
├── pages/                    # Rotas (file-based routing)
│   ├── index.astro          # Homepage
│   ├── guia-rapido.astro    # Guia de consulta rápida
│   ├── sobre.astro          # Sobre o curso
│   └── modulos/
│       ├── index.astro      # Listagem de módulos
│       └── [slug].astro     # Páginas dinâmicas dos módulos
├── components/
│   ├── PageHeader.astro     # Header reutilizável
│   ├── ModuleCard.astro     # Card de módulo
│   └── BaseLayout.astro     # Layout global
├── content/
│   └── modulos/             # Markdown dos módulos
├── layouts/
│   └── BaseLayout.astro     # Master layout
└── styles/
    └── vintage.css          # Sistema de design global
```

### Adicionar Novo Módulo

1. Criar arquivo `src/content/modulos/[nome-do-modulo].md`
2. Preencher frontmatter (veja exemplo abaixo)
3. Escrever conteúdo em Markdown
4. Página é gerada automaticamente

**Template de frontmatter:**

```yaml
---
title: "Nome do Módulo"
moduleNumber: 5
subtitle: "Descrição breve do módulo"
description: "Descrição longa para SEO"
drugs:
  - "Fármaco 1"
  - "Fármaco 2"
  - "Fármaco 3"
bacteriaImage: "/images/bacteria-mod5.png"
bacteriaAlt: "Descrição da ilustração"
slidesUrl: "/slides/modulo-5.pdf"  # Opcional
order: 5
draft: false
---

## Conteúdo em Markdown...
```

### Adicionar Slides de Apresentação

1. Colocar PDF em `public/slides/modulo-N-name.pdf`
2. Adicionar campo ao frontmatter: `slidesUrl: "/slides/modulo-N-name.pdf"`
3. Botão aparece automaticamente na página do módulo

## 🎨 Design & Estilo

O site utiliza uma **paleta vintage inspirada em pôsteres de cinema dos anos 1930-1950**.

### Cores Principais

- **Burgundy/Vermelho:** #8B1538 (acentos, títulos)
- **Cream/Bege:** #F5E6D3 (fundo principal)
- **Gold/Ouro:** #C9A227 (destaques, bordas)
- **Sepia:** #2A1810-#6B5344 (backgrounds, sombras)

### Tipografia

- **Titles:** Playfair Display (serifada, elegante)
- **Headlines:** Bebas Neue (sans-serif, condensada)
- **Body:** Source Serif 4 (serifada, legível)

Todas as fontes são carregadas do Google Fonts com `display=swap` para melhor performance.

## ♿ Acessibilidade

O site implementa as melhores práticas de acessibilidade WCAG AA:

- ✅ **Skip Link** - Tecla Tab leva ao conteúdo principal
- ✅ **ARIA Labels** - Navegação e landmarks semânticos
- ✅ **Focus Styling** - Outline ouro em elementos interativos
- ✅ **Alt Text** - Todas as imagens com descrições
- ✅ **Semantic HTML** - `<main>`, `<nav>`, `<article>` usados corretamente
- ✅ **Tables** - Com `scope="col"` para screen readers

## 🔒 Segurança

Segurança configurada em `vercel.json`:

- **Content-Security-Policy:** Restringe scripts, permite Google Fonts
- **X-Frame-Options:** Proteção contra click-jacking
- **X-Content-Type-Options:** Previne MIME sniffing
- **Permissions-Policy:** Desabilita geolocalização, microfone, câmera

## ⚡ Performance

- **Static Generation:** HTML pre-renderizado em build time
- **Zero JavaScript:** Site funciona totalmente sem JS no cliente
- **Image Optimization:** Width/height attributes, lazy loading
- **CSS Consolidado:** Sistema único em `vintage.css` (sem duplicação)
- **Caching Headers:** Assets imutáveis com cache de 1 ano

## 📝 Conteúdo

Cada módulo contém:

- **Introdução histórica** - Contexto da classe de fármacos
- **Farmacologia** - Mecanismo de ação, farmacocinética
- **Espectro de ação** - Bactérias sensíveis/resistentes
- **Indicações clínicas** - Quando usar em pediatria
- **Posologia** - Doses por idade/peso, ajustes especiais
- **Efeitos colaterais** - Reações adversas e monitorização
- **Referências** - Baseado em evidências científicas

## 🚢 Deploy

O site é deployado automaticamente no Vercel:

1. **Branch:** `main` triggers automatic deploy
2. **Build Command:** `npm run build`
3. **Output Directory:** `dist/`
4. **URL:** https://atbpedhrt.vercel.app

### Pré-deploy

```bash
# Verificar se tudo está ok
npm run build
npm run preview

# Commit e push
git add .
git commit -m "Your message"
git push origin main
```

## 📧 Contato

**Criado por:** Dr. Iúri Almeida - Pediatra Infectologista
**Email:** [iurileao@gmail.com](mailto:iurileao@gmail.com)

**Programa de Residência Médica em Pediatria**
Hospital Regional de Taguatinga (HRT)
Brasília, DF

## 📄 Licença

Material educacional. Desenvolvido para fins didáticos no programa de residência em pediatria.

---

**Última atualização:** Dezembro 2025 | **Versão:** 1.0
