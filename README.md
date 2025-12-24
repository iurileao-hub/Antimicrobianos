# Curso de Antimicrobianos para Residentes em Pediatria

> Referência baseada em evidências para uso racional de antimicrobianos em pediatria

**Acesse o site:** [atbpedhrt.vercel.app](https://atbpedhrt.vercel.app)

## 📚 Sobre o Projeto

Este é um site educacional desenvolvido para capacitar médicos residentes em Pediatria do **Hospital Regional de Taguatinga (HRT)** no uso racional e baseado em evidências de antimicrobianos na prática clínica pediátrica.

O curso é dividido em **4 módulos completos** que cobrem as principais classes de antibióticos, cada um com slides de apresentação em PDF:

1. **Penicilinas** - A fundação da antibioticoterapia ([slides](https://atbpedhrt.vercel.app/slides/modulo-1-penicilinas.pdf))
2. **Cefalosporinas** - Cobertura progressiva por gerações ([slides](https://atbpedhrt.vercel.app/slides/modulo-2-cefalosporinas.pdf))
3. **Oxacilina, Macrolídeos, Clindamicina e Rifampicina** - Arsenal contra estafilococos e atípicos ([slides](https://atbpedhrt.vercel.app/slides/modulo-3-oxacilina-macrolideos.pdf))
4. **Glicopeptídeos e Última Geração** - Reservas estratégicas para multiresistência ([slides](https://atbpedhrt.vercel.app/slides/modulo-4-glicopeptideos-ultima-geracao.pdf))

### Recursos Adicionais

- **Guia de Consulta Rápida** - Tabelas de doses, regimes terapêuticos e alertas práticos para consulta durante plantões
- **Navegação por Seções** - TableOfContents interativo (desktop: sidebar; mobile: FAB flutuante)
- **Página 404 Customizada** - Estilo vintage "golden age of cinema"

### Objetivos de Aprendizagem

- ✅ Selecionar o antimicrobiano adequado com base em perfil microbiológico e farmacocinético
- ✅ Ajustar doses e durações conforme idade, peso e função orgânica
- ✅ Reconhecer e manejar efeitos adversos
- ✅ Aplicar princípios de gerenciamento de antimicrobianos (*stewardship*)
- ✅ Consultar rapidamente doses e regimes durante a prática clínica

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
├── pages/                          # Rotas (file-based routing)
│   ├── index.astro                # Homepage
│   ├── guia-rapido.astro          # Guia de consulta rápida
│   ├── sobre.astro                # Sobre o curso
│   ├── 404.astro                  # Página de erro customizada
│   └── modulos/
│       ├── index.astro            # Listagem de módulos
│       └── [slug].astro           # Páginas dinâmicas dos módulos
├── components/
│   ├── PageHeader.astro           # Header reutilizável (variants: simple/dramatic)
│   ├── ModuleCard.astro           # Card de módulo com link para slides
│   ├── TableOfContents.astro      # Navegação por seções (desktop: sidebar / mobile: FAB)
│   └── BaseLayout.astro           # Layout global
├── content/
│   ├── config.ts                  # Schemas Zod para Content Collections
│   ├── modulos/                   # Markdown dos 4 módulos completos
│   │   ├── penicilinas.md
│   │   ├── cefalosporinas.md
│   │   ├── antiestafilococcicas-macrolideos.md
│   │   └── glicopeptideos-ultima-geracao.md
│   └── guia-rapido/               # Conteúdo do guia de consulta rápida
│       └── index.md
├── layouts/
│   └── BaseLayout.astro           # Master layout
└── styles/
    └── vintage.css                # Sistema de design global (vintage cinema 1930-1950)
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

1. Colocar PDF em `public/slides/modulo-N-nome.pdf` (seguir padrão de nomenclatura)
2. Adicionar campo ao frontmatter: `slidesUrl: "/slides/modulo-N-nome.pdf"`
3. Botão "📥 Baixar Slides" aparece automaticamente na página do módulo

**Padrão de nomenclatura dos PDFs:**

- `modulo-1-penicilinas.pdf`
- `modulo-2-cefalosporinas.pdf`
- `modulo-3-oxacilina-macrolideos.pdf`
- `modulo-4-glicopeptideos-ultima-geracao.pdf`

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

### Módulos (4 completos)

Cada módulo contém:

- **Introdução histórica** - Contexto da classe de fármacos
- **Farmacologia** - Mecanismo de ação, farmacocinética
- **Espectro de ação** - Bactérias sensíveis/resistentes
- **Indicações clínicas** - Quando usar em pediatria
- **Posologia** - Doses por idade/peso, ajustes especiais
- **Efeitos colaterais** - Reações adversas e monitorização
- **Referências** - Baseado em evidências científicas
- **Slides PDF** - Apresentações para download

### Guia de Consulta Rápida

O Guia de Consulta Rápida oferece acesso imediato a:

- Tabelas de doses pediátricas por antimicrobiano
- Regimes terapêuticos para infecções comuns
- Ajustes para insuficiência renal/hepática
- Alertas de segurança e interações medicamentosas
- Navegação por seções com TableOfContents integrado

### Componentes Interativos

- **TableOfContents Desktop** - Sidebar fixa com scroll independente e highlight automático da seção ativa
- **TableOfContents Mobile** - FAB (Floating Action Button) com overlay e menu colapsável
- **ModuleCard** - Cards clicáveis com botão de download de slides quando disponível
- **404 Customizada** - Página de erro temática "bastidores do cinema"

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

## 📊 Status do Projeto

✅ **Projeto Concluído** - Todos os recursos implementados e funcionando

### Features Implementadas

- ✅ 4 módulos completos com conteúdo extenso
- ✅ Slides PDF para todos os módulos (padronizados)
- ✅ Guia de Consulta Rápida com Content Collection
- ✅ Navegação por seções (TableOfContents desktop + mobile)
- ✅ Página 404 customizada com estilo vintage
- ✅ Sistema de design consolidado (vintage.css)
- ✅ Acessibilidade WCAG AA
- ✅ Performance otimizada (static generation)
- ✅ Segurança (CSP, headers configurados)
- ✅ Deploy automatizado no Vercel

### Arquivos de Documentação

- [README.md](README.md) - Este arquivo (visão geral do projeto)
- [CLAUDE.md](CLAUDE.md) - Instruções detalhadas para Claude Code
- [public/slides/](public/slides/) - PDFs dos 4 módulos

## 📄 Licença

Material educacional. Desenvolvido para fins didáticos no programa de residência em pediatria.

---

**Última atualização:** Dezembro 2025 | **Versão:** 1.0.0 (Completo)
