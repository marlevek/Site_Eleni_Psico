# Prompt para Claude Code — Site Institucional Psicóloga Eleni Silvestre

---

## 📋 Contexto do Projeto

Criar um **site institucional** para a psicóloga **Eleni Silvestre** dentro da pasta atual, `Site_Eleni` que já existe no meu PC. O site deve ser uma **Single Page Application (SPA)** estática, profissional, com foco em SEO, performance e conversão (agendamento via WhatsApp).

---

## 👩‍⚕️ Dados da Profissional

- **Nome:** Eleni Silvestre
- **CRP:** 08/48276
- **Profissão:** Psicóloga Clínica
- **Especialidade:** Terapia Cognitiva Comportamental (TCC)
- **Público-alvo:** Adultos e adolescentes que buscam atendimento psicológico

---

## 🎨 Paleta de Cores (tons neutros acolhedores — versão CLAREADA)

Usar estas cores como base do design. A paleta é neutra, quente e acolhedora, ideal para saúde mental:

```css
:root {
  /* Paleta principal — tons clareados */
  --color-cream:       #EDE6DC;  /* fundo principal — bege bem claro */
  --color-sand:        #D9CBBB;  /* fundo secundário / cards */
  --color-warm-taupe:  #B8A693;  /* elementos de apoio / bordas suaves */
  --color-mocha:       #9C8B78;  /* textos secundários / ícones */
  --color-brown:       #7A6B5A;  /* títulos e textos principais */
  --color-dark-brown:  #5C4A36;  /* acentos fortes / CTAs / hover */

  /* Auxiliares */
  --color-white:       #FAF8F5;  /* branco quente */
  --color-overlay:     rgba(92, 74, 54, 0.08); /* sobreposições leves */
}
```

---

## 🏗️ Estrutura do Projeto

```
Site_Eleni/
├── index.html          ← página principal (SPA)
├── css/
│   └── styles.css      ← estilos organizados
├── js/
│   └── main.js         ← interações, menu mobile, scroll suave
├── img/                ← pasta para imagens (logo, fotos, ícones)
│   └── .gitkeep
├── favicon.ico         ← placeholder
├── robots.txt          ← configuração para crawlers
├── sitemap.xml         ← mapa do site para SEO
├── .gitignore          ← ignorar node_modules, .env, .DS_Store
├── .env.example        ← chaves de configuração sem valores
├── README.md           ← documentação do projeto
└── CNAME               ← placeholder para domínio futuro
```

---

## 📄 Seções do index.html (Single Page — scroll suave)

### 1. **Header / Navegação**
- Logo/nome "Eleni Silvestre" à esquerda
- Menu horizontal: Início | Sobre | Especialidades | Como Funciona | Contato
- Menu hamburger responsivo no mobile
- Header fixo no topo com efeito de sombra ao scrollar
- Botão CTA "Agende sua Consulta" no canto direito do header

### 2. **Hero Section**
- Título principal: "Psicóloga Clínica — Terapia Cognitiva Comportamental"
- Subtítulo acolhedor: "Um espaço seguro para cuidar da sua saúde mental"
- Nome "Eleni Silvestre — CRP 08/48276"
- Botão CTA grande: "Agende sua Consulta" (link para WhatsApp)
- Fundo com cor suave da paleta e elementos decorativos sutis (formas orgânicas em SVG)

### 3. **Sobre Mim**
- Espaço para foto profissional (placeholder com ícone elegante)
- Texto de apresentação (lorem ipsum por enquanto, fácil de editar)
- CRP em destaque
- Tom acolhedor e profissional

### 4. **Especialidades / Áreas de Atuação**
- Cards ou grid com ícones representativos:
  - Ansiedade e Estresse
  - Depressão
  - Autoestima e Autoconhecimento
  - Relacionamentos
  - Luto e Perdas
  - Desenvolvimento Pessoal
- Cada card com ícone SVG, título e breve descrição

### 5. **Como Funciona**
- Timeline ou steps visuais:
  1. Entre em contato pelo WhatsApp
  2. Agende seu horário
  3. Primeira sessão (acolhimento)
  4. Início do processo terapêutico
- Design limpo com ícones numerados

### 6. **Depoimentos** (opcional — preparar estrutura)  - NÃO COLOCAR ESSE, POIS AINDA NÃO TEM 
- Carousel simples com cards de depoimentos
- Textos placeholder para preenchimento futuro
- Apenas iniciais do nome (ex: "M.S.") para ética profissional

### 7. **FAQ — Perguntas Frequentes**
- Accordion (expand/collapse) com perguntas comuns:
  - "Como funciona a primeira sessão?"
  - "Quanto tempo dura cada sessão?"
  - "Atende por convênio?"
  - "Atende online?"
  - "Qual o valor da consulta?"
- Respostas placeholder editáveis

### 8. **Contato / CTA Final**
- Título: "Dê o primeiro passo"
- Botão grande para WhatsApp com ícone
- Endereço do consultório (placeholder)
- Horário de atendimento (placeholder)
- Links para redes sociais (Instagram, etc.) com ícones

### 9. **Footer**
- Nome completo e CRP
- "© 2026 Eleni Silvestre — Todos os direitos reservados"
- Links do menu repetidos 
- Link instagra (por enquanto fictício)
- Texto legal: "Psicóloga inscrita no CRP 08/48276"

---

## 🔍 SEO — Obrigatório

### Meta tags no `<head>`:
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Eleni Silvestre — Psicóloga Clínica especialista em Terapia Cognitiva Comportamental (TCC). Atendimento presencial e online. CRP 08/48276.">
<meta name="keywords" content="psicóloga, psicóloga clínica, TCC, terapia cognitiva comportamental, psicologia, saúde mental, ansiedade, depressão, Curitiba, CRP 08/48276, Eleni Silvestre">
<meta name="author" content="Eleni Silvestre">
<meta name="robots" content="index, follow">
<meta name="language" content="pt-BR">

<!-- Open Graph (Facebook/WhatsApp) -->
<meta property="og:title" content="Eleni Silvestre — Psicóloga Clínica | TCC">
<meta property="og:description" content="Psicóloga Clínica especialista em Terapia Cognitiva Comportamental. Agende sua consulta.">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:image" content="img/og-image.jpg">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Eleni Silvestre — Psicóloga Clínica | TCC">
<meta name="twitter:description" content="Psicóloga Clínica especialista em Terapia Cognitiva Comportamental. Agende sua consulta.">
```

### Semântica HTML5:
- Usar tags semânticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- Hierarquia correta de headings: apenas um `<h1>`, demais `<h2>`, `<h3>`
- Atributos `alt` descritivos em todas as imagens
- Schema.org JSON-LD para dados estruturados de profissional de saúde

### Schema.org JSON-LD:
```json
{
  "@context": "https://schema.org",
  "@type": "Psychologist",
  "name": "Eleni Silvestre",
  "description": "Psicóloga Clínica especialista em Terapia Cognitiva Comportamental (TCC)",
  "credential": "CRP 08/48276",
  "medicalSpecialty": "Terapia Cognitiva Comportamental",
  "availableService": {
    "@type": "MedicalTherapy",
    "name": "Terapia Cognitiva Comportamental (TCC)"
  }
}
```

---

## ⚙️ Requisitos Técnicos

### Encoding e idioma:
- **SEMPRE** `<meta charset="UTF-8">` como primeira tag do `<head>`
- **SEMPRE** `<html lang="pt-BR">` no elemento raiz
- **TODOS** os arquivos salvos em UTF-8 (sem BOM)
- Acentuação correta em todo o conteúdo: "não", "ação", "sessão", "saúde"
- Comentários no código em pt-BR

### Performance:
- CSS minificável (bem organizado com variáveis)
- JavaScript vanilla (sem frameworks pesados — é um site institucional)
- Lazy loading em imagens: `loading="lazy"`
- Fontes do Google Fonts com `display=swap`
- Imagens em formatos modernos (webp quando possível)

### Responsividade:
- Mobile-first obrigatório
- Breakpoints: 480px, 768px, 1024px, 1200px
- Menu hamburger funcional no mobile
- Imagens e layout fluidos
- Testar que nenhum conteúdo quebra entre 320px e 1920px

### Acessibilidade (a11y):
- Contraste adequado entre texto e fundo (WCAG AA)
- Focus visible em elementos interativos
- `aria-labels` nos botões e links de ícone
- Skip navigation link
- Alt text em todas as imagens

### Tipografia:
- Google Fonts — sugestão: **Playfair Display** (títulos) + **Lato** ou **Source Sans 3** (corpo)
- Ou outra combinação elegante que combine com a paleta quente
- Tamanho base: 16px, line-height confortável (1.6+)

---

## 🔧 Git e GitHub

### Inicialização:
```bash
cd Site_Eleni
git init
git branch -M main
```

### .gitignore:
```
.env
.env.*
!.env.example
.DS_Store
Thumbs.db
node_modules/
*.log
```

### Primeiro commit:
```bash
git add .
git commit -m "feat: estrutura inicial do site institucional"
```

### README.md deve conter:
- Nome do projeto
- Descrição breve
- Tecnologias usadas (HTML5, CSS3, JavaScript vanilla)
- Como rodar localmente (abrir index.html ou usar Live Server)
- Estrutura de pastas
- Instruções para personalização (onde trocar textos, fotos, WhatsApp)
- Créditos

---

## 🎯 Design e UX — Diretrizes

- **Tom visual:** Acolhedor, profissional, clean, moderno
- **Evitar:** Cores frias, design genérico de template, excesso de informação
- **Priorizar:** Espaçamento generoso (breathing room), tipografia elegante, hierarquia visual clara
- **Formas:** Bordas arredondadas, elementos orgânicos/suaves (nada agressivo ou quadrado demais)
- **Animações:** Sutis — fade-in ao scroll, hover suave nos botões, transições de 0.3s
- **Imagens:** Usar placeholders elegantes com instruções claras de onde colocar as fotos reais
- **WhatsApp CTA:** Sempre visível — botão flutuante no canto inferior direito + botões nas seções

---

## ✅ Checklist Final

- [ ] Encoding UTF-8 em todos os arquivos
- [ ] `lang="pt-BR"` no HTML
- [ ] Acentuação 100% correta em todo conteúdo pt-BR
- [ ] Paleta de cores aplicada consistentemente via CSS variables
- [ ] Todas as seções implementadas e funcionais
- [ ] Menu mobile hamburger funcionando
- [ ] Scroll suave entre seções
- [ ] Botão WhatsApp flutuante
- [ ] SEO: meta tags, Open Graph, Schema.org JSON-LD
- [ ] robots.txt e sitemap.xml criados
- [ ] Responsivo de 320px a 1920px
- [ ] Acessibilidade básica (alt, aria, contraste, focus)
- [ ] Git inicializado com .gitignore e primeiro commit
- [ ] README.md completo
- [ ] Código comentado em pt-BR
- [ ] Textos placeholder claramente marcados para fácil substituição