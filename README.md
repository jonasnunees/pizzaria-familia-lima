# 🍕 Pizzaria Família Lima

Um website moderno e responsivo para uma pizzaria artesanal, desenvolvido com HTML5, CSS3 e JavaScript com jQuery.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Sobre o Projeto

O site da Pizzaria Família Lima é uma landing page elegante e moderna que apresenta os principais produtos da pizzaria, com foco em destacar a tradição, qualidade e sabor das pizzas artesanais.

## ✨ Funcionalidades

- **Banner de Vídeo com Efeito Parallax**: Introdução impactante com vídeo em background e animações suaves
- **Menu de Navegação Responsivo**: Sistema de navegação adaptável com destaque automático da seção ativa
- **Seção de Apresentação (CTA)**: Hero section com design orgânico e chamadas para ação
- **Cardápio Interativo**: Exibição das pizzas favoritas com descrições detalhadas e avaliações
- **Sistema de Avaliações**: Depoimentos reais de clientes com integração ao Google Reviews
- **Animações com ScrollReveal**: Elementos aparecem suavemente conforme o usuário rola a página
- **Botão "Voltar ao Topo"**: Navegação facilitada que aparece ao atingir metade da página
- **Links Diretos**: Integração com WhatsApp e Instagram para contato rápido
- **Design Moderno**: Uso de variáveis CSS, gradientes, sombras e transições suaves

## 🎨 Paleta de Cores

```css
--background-body: #fff9ea        /* Creme claro */
--color-logo: #e9a209            /* Dourado */
--color-link: #1d1d1dad          /* Cinza escuro transparente */
--color-link-active: #ffe100     /* Amarelo brilhante */
--color-titulo: #1d1d1d          /* Preto suave */
--btn-background: #ffcb45        /* Amarelo dourado */
--color-pizza-descricao: #434343 /* Cinza médio */
--shadow: rgba(0, 0, 0, .1)      /* Sombra padrão */
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna com:
  - Custom Properties (variáveis CSS)
  - Flexbox para layouts responsivos
  - Keyframes para animações personalizadas
  - Transições e transformações suaves
  - Media queries para responsividade
- **JavaScript**: 
  - jQuery 3.7.1 para manipulação do DOM
  - ScrollReveal para animações ao rolar
- **Google Fonts**: Urbanist
- **Font Awesome 7.0.1**: Ícones vetoriais

## 📁 Estrutura de Arquivos

```
pizzaria-familia-lima/
│
├── css/
│   ├── reset.css         # Reset CSS (Meyer Reset)
│   ├── styles.css        # Estilos principais e importações
│   ├── cabecalho.css     # Estilos do cabeçalho e navegação
│   ├── inicio.css        # Estilos da seção hero/CTA
│   ├── menu.css          # Estilos da seção do cardápio
│   ├── avaliacoes.css    # Estilos da seção de avaliações
│   ├── footer.css        # Estilos do rodapé
│   ├── back-to-top.css   # Estilos do botão voltar ao topo
│   ├── video-banner.css  # Estilos do banner com vídeo
│   └── overflow-fix.css  # Correções de overflow horizontal
│
├── img/
│   ├── pizza-1.svg       # Imagem pizza Calabresa
│   ├── pizza-2.svg       # Imagem pizza Portuguesa
│   ├── pizza-3.svg       # Imagem pizza Frango com Catupiry
│   ├── pizza-4.svg       # Imagem pizza Camarão
│   ├── hero.svg          # Imagem da seção hero
│   ├── chef.svg          # Ilustração do chef
│   ├── wave.svg          # Elemento decorativo do footer
│   ├── avatar-1.jpeg     # Avatar depoimento 1
│   └── avatar-2.jpeg     # Avatar depoimento 2
│
├── js/
│   └── scripts.js        # Scripts principais do site
│
├── video/
│   └── banner-video.mp4  # Vídeo do banner inicial
│
├── index.html            # Página principal
├── LICENSE               # Licença MIT
└── README.md             # Documentação
```

## 🚀 Como Usar

1. **Clone o repositório**
```bash
git clone https://github.com/jonasnunees/pizzaria-familia-lima.git
```

2. **Acesse o diretório**
```bash
cd pizzaria-familia-lima
```

3. **Abra o arquivo HTML**
- Abra o arquivo `index.html` diretamente no navegador
- Ou use uma extensão como Live Server no VS Code

## 💡 Destaques Técnicos

### Banner de Vídeo com Parallax
Implementação moderna com vídeo HTML5 e efeito parallax suave:
```javascript
$(window).on('scroll', function() {
    const scrolled = $(window).scrollTop();
    const offset = scrolled * 0.3;
    videoBackground.css('transform', 'translate(-50%, -50%) translateY(' + offset + 'px)');
});
```

### Menu Responsivo com jQuery
Toggle intuitivo do menu mobile com ícone animado:
```javascript
$('.mobile__btn').on('click', function () {
    $('.mobile__menu').toggleClass('active');
    $('.mobile__btn').find('i').toggleClass('fa-bars fa-x');
});
```

### Navegação Ativa Dinâmica
Destaque automático da seção visualizada na navegação:
```javascript
sections.each(function(i) {
    const sectionTop = section.offset().top - 96;
    const sectionBottom = sectionTop + section.outerHeight();
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
    }
});
```

### Animações ScrollReveal
Elementos aparecem com animações suaves ao entrar na viewport:
```javascript
ScrollReveal().reveal('.cta', {
    origin: 'left',
    duration: 2000,
    distance: '20%',
    reset: true
});
```

### Botão Voltar ao Topo
Aparece automaticamente após rolar metade da página:
```javascript
if ($(window).scrollTop() > halfPage) {
    backToTopBtn.addClass('show');
}
```

### Design System com CSS Variables
Centralização de valores para fácil manutenção e consistência visual:
```css
:root {
    --fonte-principal: "Urbanist", sans-serif;
    --background-body: #fff9ea;
    --color-logo: #e9a209;
    /* ... */
}
```

## 📱 Seções do Site

1. **Video Banner**: Introdução impactante com vídeo, título e seta de navegação
2. **Início (Hero/CTA)**: Apresentação principal com botões de ação e redes sociais
3. **Cardápio**: Showcase das 4 pizzas favoritas com descrições e avaliações
4. **Avaliações**: Depoimentos de clientes reais com link para Google Reviews
5. **Footer**: Links para redes sociais e copyright

## 🍕 Cardápio em Destaque

- **Calabresa**: Linguiça calabresa, mussarela, cebola e azeitonas
- **Portuguesa**: Presunto, ovos, ervilhas, cebola e pimentão
- **Frango com Catupiry**: Frango desfiado com catupiry cremoso
- **Camarão**: Camarões frescos com queijo, alho e ervas finas

## 🎯 Recursos de UX/UI

- **Scroll Suave**: Navegação suave entre seções com `scroll-behavior: smooth`
- **Feedback Visual**: Sombra no header ao rolar, hover nos botões
- **Responsividade Completa**: Design adaptável para desktop, tablet e mobile
- **Performance Otimizada**: Uso de `requestAnimationFrame` para animações suaves
- **Acessibilidade**: Estrutura semântica HTML5 e contraste de cores adequado

## 📞 Contato

- **Localização**: Estrada de Sapiatiba - Sapeatiba Mirim
- **WhatsApp**: [(22) 99251-6785](https://wa.me/5522992516785)
- **Instagram**: [@pizzaria.familialima](https://www.instagram.com/pizzaria.familialima)

## 🔧 Requisitos

- Navegador moderno com suporte a HTML5 e CSS3
- JavaScript habilitado
- Conexão com internet para carregar:
  - Google Fonts (Urbanist)
  - Font Awesome 7.0.1
  - jQuery 3.7.1
  - ScrollReveal

## 📱 Breakpoints Responsivos

- **Desktop**: > 1170px (layout completo)
- **Tablet**: 442px - 1170px (ajustes de layout)
- **Mobile**: < 442px (layout vertical otimizado)

## 👨‍💻 Desenvolvedor

Desenvolvido por [Jonas Nunes](https://github.com/jonasnunees)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🚀 Melhorias Futuras

- [ ] Adicionar cardápio completo em página separada
- [ ] Implementar sistema de pedidos online
- [ ] Adicionar calculadora de entrega
- [ ] Criar área administrativa para gerenciar produtos
- [ ] Otimizar imagens e vídeo para melhor performance

---

⭐ Se você gostou deste projeto, considere dar uma estrela no repositório!
