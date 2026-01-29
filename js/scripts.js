$(document).ready(function() {
    // Efeito parallax no vídeo banner (simplificado)
    let ticking = false;
    
    $(window).on('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrolled = $(window).scrollTop();
                const videoBanner = $('.video-banner');
                const videoBackground = $('.video-background');
                
                if (videoBanner.length && scrolled < $(window).height()) {
                    // Aplica o efeito parallax apenas quando o banner está visível
                    const offset = scrolled * 0.3;
                    videoBackground.css('transform', 'translate(-50%, -50%) translateY(' + offset + 'px)');
                }
                
                ticking = false;
            });
            
            ticking = true;
        }
    });

    $('.mobile__btn').on('click', function () {
        $('.mobile__menu').toggleClass('active');
        $('.mobile__btn').find('i').toggleClass('fa-bars fa-x');
    });

    // Fechar menu mobile ao clicar em qualquer link dentro do menu
    $('.mobile__menu a').on('click', function() {
        $('.mobile__menu').removeClass('active');
        $('.mobile__btn').find('i').removeClass('fa-x').addClass('fa-bars');
    });

    const sections = $('section');
    const navItems = $('.nav__list-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        let activeSectionIndex = 0;
        
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)')
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('.cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
        reset: true
    });

    ScrollReveal().reveal('.pizza', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
        reset: true
    });

    ScrollReveal().reveal('.avaliacoes__chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%',
        reset: true
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 2000,
        distance: '20%',
        reset: true
    });

    ScrollReveal().reveal('.footer__itens', {
        origin: 'bottom',
        duration: 1000,
        distance: '20%',
        reset: true
    });

    // Botão voltar ao topo
    const backToTopBtn = $('#backToTop');

    $(window).on('scroll', function() {
        const scrollHeight = $(document).height();
        const scrollPosition = $(window).scrollTop() + $(window).height();
        const halfPage = scrollHeight / 2;

        // Mostra o botão quando passar da metade da página
        if ($(window).scrollTop() > halfPage) {
            backToTopBtn.addClass('show');
        } else {
            backToTopBtn.removeClass('show');
        }
    });

    // Ao clicar no botão, volta ao topo suavemente
    backToTopBtn.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
});