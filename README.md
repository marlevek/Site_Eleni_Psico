# Eleni Silvestre — Site Institucional

Site institucional da psicóloga **Eleni Silvestre** (CRP 08/48276), especialista em Terapia Cognitiva Comportamental (TCC).

## Tecnologias

- HTML5 semântico
- CSS3 com variáveis CSS (sem frameworks)
- JavaScript vanilla (sem frameworks)
- Google Fonts: Playfair Display + Source Sans 3

## Como rodar localmente

Basta abrir o arquivo `index.html` diretamente no navegador, ou usar o Live Server no VS Code:

1. Instale a extensão **Live Server** no VS Code
2. Clique com o botão direito em `index.html`
3. Selecione **"Open with Live Server"**

## Estrutura de pastas

```
Site_Eleni/
├── index.html          ← página principal (SPA)
├── css/
│   └── styles.css      ← estilos organizados com CSS Variables
├── js/
│   └── main.js         ← menu mobile, scroll, FAQ accordion, animações
├── img/                ← coloque aqui as imagens do site
├── favicon.ico         ← ícone do site
├── robots.txt          ← configuração para mecanismos de busca
├── sitemap.xml         ← mapa do site para SEO
├── .gitignore
├── .env.example        ← modelo de variáveis de configuração
└── CNAME               ← domínio para GitHub Pages
```

## Como personalizar

### Trocar o número do WhatsApp

Pesquise por `5541999999999` no arquivo `index.html` e substitua pelo número real em formato internacional (55 + DDD + número, sem espaços ou símbolos).

### Trocar textos placeholder

Todos os textos provisórios estão marcados com comentários `<!-- TODO: ... -->` no `index.html`. Basta buscar por `TODO` no arquivo.

### Adicionar a foto profissional

1. Coloque a foto na pasta `img/` com o nome `eleni.webp` (recomendado: 600×700px, formato webp)
2. No `index.html`, substitua o bloco `<div class="foto-placeholder">` por:
   ```html
   <img src="img/eleni.webp" alt="Eleni Silvestre — Psicóloga Clínica" loading="lazy" width="600" height="700">
   ```

### Trocar o Instagram

Pesquise por `elenisilvestre.psi` no `index.html` e substitua pelo @ real.

### Trocar o endereço e horários

Procure pelos comentários `<!-- TODO: Substituir pelo endereço real -->` e `<!-- TODO: Substituir pelos horários reais -->` na seção de contato.

### Alterar as cores

Todas as cores ficam em `css/styles.css` dentro do bloco `:root { ... }` no início do arquivo.

## Créditos

Desenvolvido por [Codertec](https://codertec.com.br) — 2026
