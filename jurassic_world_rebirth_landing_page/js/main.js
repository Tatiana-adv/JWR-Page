document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Menu Hamburger para Mobile
    const menuToggle = document.querySelector('.header__menu-toggle');
    const navList = document.querySelector('.header__nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('header__nav-list--active');
            menuToggle.classList.toggle('is-active'); // Para animação do ícone
        });

        // Fechar menu ao clicar em um item (no mobile)
        navList.querySelectorAll('.header__nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navList.classList.contains('header__nav-list--active')) {
                    navList.classList.remove('header__nav-list--active');
                    menuToggle.classList.remove('is-active');
                }
            });
        });
    }

    // Animação para o menu hamburguer
    // Adicione no CSS:
    /*
    .header__nav-list--active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 80px; // Ajuste conforme a altura do seu header
        left: 0;
        width: 100%;
        background-color: var(--color-dark);
        padding: 20px 0;
        box-shadow: 0 5px 10px rgba(0,0,0,0.3);
        z-index: 999;
    }

    .header__nav-list--active .header__nav-item {
        margin: 10px 0;
    }

    .header__menu-toggle.is-active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    .header__menu-toggle.is-active span:nth-child(2) {
        opacity: 0;
    }
    .header__menu-toggle.is-active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    */

    // Exemplo de efeito de parallax suave no scroll (apenas para o hero)
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = -scrollPosition * 0.5 + 'px'; // Ajuste o 0.5 para mais ou menos efeito
        }
    });

});
