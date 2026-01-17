# 🍕 Pizzaria Família Lima

Um website moderno e responsivo para uma pizzaria artesanal, desenvolvido com HTML5, CSS3 e JavaScript vanilla.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

## 📋 Sobre o Projeto

O site da Pizzaria Família Lima é uma landing page elegante que apresenta os principais produtos da pizzaria, com foco em destacar a qualidade artesanal das pizzas com massa fermentada naturalmente por 48 horas.

## ✨ Funcionalidades

- **Hero Section Atrativa**: Imagem de fundo impactante com gradiente e call-to-action
- **Menu Hamburguer Responsivo**: Navegação mobile-friendly sem uso de JavaScript
- **Carrossel de Produtos**: Exibição das pizzas favoritas com Swiper.js
- **Links Diretos**: Integração com WhatsApp para pedidos e Instagram para redes sociais
- **Design Moderno**: Uso de variáveis CSS, fontes Google e paleta de cores coesa

## 🎨 Paleta de Cores

```css
--cor-de-fundo: #EBECEE  /* Cinza claro */
--branco: #FFFFFF        /* Branco */
--vermelho: #e74c3c      /* Vermelho */
--amarelo: #f1c40f       /* Amarelo */
--azul: #2c3e50          /* Azul escuro */
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna com:
  - Custom Properties (variáveis CSS)
  - Flexbox para layouts
  - Gradientes e transições
  - Mobile-first approach
- **JavaScript**: Swiper.js para carrossel
- **Google Fonts**: Poppins e Carter One

## 📁 Estrutura de Arquivos

```
pizzaria-familia-lima/
│
├── css/
│   ├── reset.css         # Reset CSS (Meyer Reset)
│   ├── styles.css        # Estilos principais e importações
│   ├── header.css        # Estilos do cabeçalho
│   ├── capa.css          # Estilos da seção hero
│   ├── carrossel.css     # Estilos do carrossel de pizzas
│   └── footer.css        # Estilos do rodapé
│
├── img/
│   ├── Menu.svg          # Ícone do menu hamburguer
│   ├── pizza-logo.svg    # Logo da pizzaria
│   ├── pizza-1.svg       # Imagem pizza Calabresa
│   ├── pizza-2.svg       # Imagem pizza Portuguesa
│   ├── pizza-3.svg       # Imagem pizza Frango
│   └── logo-instagram.png # Logo Instagram
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

### Menu Hamburguer Puro CSS
Implementação criativa usando checkbox e seletor de irmão (`~`) sem JavaScript:
```css
.container__botao:checked~.lista-menu {
    display: block;
}
```

### Hero Section com Overlay
Uso de gradiente sobre imagem de fundo para melhor legibilidade:
```css
background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
            url('https://images.unsplash.com/...');
```

### Design System com CSS Variables
Centralização de valores para fácil manutenção e consistência visual.

## 📱 Seções do Site

1. **Header**: Logo, nome da pizzaria e menu de navegação
2. **Home (Hero)**: Apresentação principal com CTA
3. **Nossas Favoritas**: Carrossel com as pizzas mais populares
4. **Contato**: Informações de localização, WhatsApp e redes sociais

## 🍕 Cardápio em Destaque

- **Calabresa**: Linguiça calabresa, muçarela, cebola e azeitonas
- **Portuguesa**: Presunto, ovos, ervilhas, cebola e pimentão
- **Frango com Catupiry**: Frango desfiado com catupiry cremoso

## 📞 Contato

- **Localização**: Estrada de Sapiatiba - Sapeatiba Mirim
- **WhatsApp**: [(22) 99251-6785](https://wa.me/5522992516785)
- **Instagram**: [@pizzaria.familialima](https://www.instagram.com/pizzaria.familialima)

## 👨‍💻 Desenvolvedor

Desenvolvido por [Jonas Nunes](https://github.com/jonasnunees)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

⭐ Se você gostou deste projeto, considere dar uma estrela no repositório!
