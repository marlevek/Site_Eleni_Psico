/* ===================================================
   Eleni Silvestre — Psicóloga Clínica | TCC
   JavaScript principal — Interações e comportamentos
   Codertec — 2026
=================================================== */

'use strict';

/* ===================================================
   1. HEADER — Efeito de sombra ao scrollar
=================================================== */
(function initScrollHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  function atualizarHeader() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', atualizarHeader, { passive: true });
  atualizarHeader(); // estado inicial
})();


/* ===================================================
   2. MENU MOBILE — Hamburger
=================================================== */
(function initMenuMobile() {
  const hamburger = document.getElementById('hamburger');
  const nav       = document.getElementById('nav');
  const overlay   = document.getElementById('nav-overlay');

  if (!hamburger || !nav || !overlay) return;

  function abrirMenu() {
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Fechar menu de navegação');
    nav.classList.add('open');
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function fecharMenu() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Abrir menu de navegação');
    nav.classList.remove('open');
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Toggle ao clicar no hamburger
  hamburger.addEventListener('click', function () {
    const estaAberto = hamburger.getAttribute('aria-expanded') === 'true';
    estaAberto ? fecharMenu() : abrirMenu();
  });

  // Fechar ao clicar no overlay
  overlay.addEventListener('click', fecharMenu);

  // Fechar ao clicar em um link do menu
  nav.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', fecharMenu);
  });

  // Fechar com tecla Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
      fecharMenu();
      hamburger.focus(); // devolver foco ao botão
    }
  });
})();


/* ===================================================
   3. SCROLL SUAVE — Links âncora
=================================================== */
(function initScrollSuave() {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const alvo = document.querySelector(link.getAttribute('href'));
      if (!alvo) return;
      e.preventDefault();
      alvo.scrollIntoView({ behavior: 'smooth' });
    });
  });
})();


/* ===================================================
   4. MENU ATIVO — Destacar seção atual no scroll
=================================================== */
(function initNavAtivo() {
  const secoes = document.querySelectorAll('section[id]');
  const links  = document.querySelectorAll('.nav__link');

  if (!secoes.length || !links.length) return;

  const headerAltura = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--header-height') || '72',
    10
  );

  function atualizarNavAtivo() {
    let secaoAtual = '';

    secoes.forEach(function (secao) {
      const topo = secao.getBoundingClientRect().top;
      if (topo <= headerAltura + 60) {
        secaoAtual = secao.getAttribute('id');
      }
    });

    links.forEach(function (link) {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === secaoAtual);
    });
  }

  window.addEventListener('scroll', atualizarNavAtivo, { passive: true });
  atualizarNavAtivo();
})();


/* ===================================================
   5. FAQ — Accordion acessível
=================================================== */
(function initFAQ() {
  const itens = document.querySelectorAll('.faq__item');
  if (!itens.length) return;

  itens.forEach(function (item) {
    const botao    = item.querySelector('.faq__pergunta');
    const resposta = item.querySelector('.faq__resposta');

    if (!botao || !resposta) return;

    botao.addEventListener('click', function () {
      const estaAberto = botao.getAttribute('aria-expanded') === 'true';

      // Fechar todos os itens antes de abrir o selecionado
      itens.forEach(function (outroItem) {
        const outroBotao    = outroItem.querySelector('.faq__pergunta');
        const outraResposta = outroItem.querySelector('.faq__resposta');
        if (outroBotao && outraResposta) {
          outroBotao.setAttribute('aria-expanded', 'false');
          outraResposta.hidden = true;
        }
      });

      // Abrir ou manter fechado o item clicado
      if (!estaAberto) {
        botao.setAttribute('aria-expanded', 'true');
        resposta.hidden = false;
      }
    });
  });
})();


/* ===================================================
   6. REVEAL — Animação de fade-in ao scrollar
=================================================== */
(function initReveal() {
  const elementos = document.querySelectorAll('.reveal');
  if (!elementos.length) return;

  // Usar IntersectionObserver para performance
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
            observer.unobserve(entrada.target); // parar de observar após animar
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elementos.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: mostrar tudo imediatamente se IntersectionObserver não suportado
    elementos.forEach(function (el) {
      el.classList.add('visible');
    });
  }
})();


/* ===================================================
   7. WHATSAPP FLOAT — Ocultar ao chegar no footer
=================================================== */
(function initWhatsAppFloat() {
  const botaoFloat = document.querySelector('.whatsapp-float');
  const footer     = document.querySelector('.footer');

  if (!botaoFloat || !footer) return;

  function verificarPosicao() {
    const footerTopo = footer.getBoundingClientRect().top;
    const alturaJanela = window.innerHeight;

    if (footerTopo < alturaJanela) {
      botaoFloat.style.opacity = '0';
      botaoFloat.style.pointerEvents = 'none';
    } else {
      botaoFloat.style.opacity = '1';
      botaoFloat.style.pointerEvents = 'auto';
    }
  }

  window.addEventListener('scroll', verificarPosicao, { passive: true });
  verificarPosicao();
})();
