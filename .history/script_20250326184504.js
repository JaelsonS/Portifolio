// Aguarda o carregamento completo do DOM antes de executar o JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // =============================================
    // Configurações iniciais
    // =============================================
    
    // Define o ano atual no footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // =============================================
    // Loader de entrada
    // =============================================
    
    // Esconde o loader após 1.5 segundos
    setTimeout(function() {
        document.querySelector('.loader').classList.add('fade-out');
    }, 1500);
    
    // Remove completamente o loader após a animação
    setTimeout(function() {
        document.querySelector('.loader').style.display = 'none';
    }, 2000);
    
    // =============================================
    // Menu de navegação responsivo
    // =============================================
    
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Alterna o menu mobile ao clicar no hamburger
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // Fecha o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navList.classList.contains('active')) {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
            }
            
            // Remove a classe active de todos os links
            navLinks.forEach(item => item.classList.remove('active'));
            
            // Adiciona a classe active apenas ao link clicado
            this.classList.add('active');
        });
    });
    
    // Adiciona efeito de scroll suave para os links do menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // =============================================
    // Efeito de mudança no header ao scrollar
    // =============================================
    
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // =============================================
    // Botão de voltar ao topo
    // =============================================
    
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // =============================================
    // Animação das barras de habilidades
    // =============================================
    
    const skills = document.querySelectorAll('.skill');
    
    function animateSkills() {
        skills.forEach(skill => {
            const level = skill.getAttribute('data-level');
            const progressBar = skill.querySelector('.skill-progress');
            
            // Garante que a animação só ocorra quando o elemento estiver visível
            if (isElementInViewport(skill)) {
                progressBar.style.width = level + '%';
            }
        });
    }
    
    // Verifica se o elemento está visível na viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Executa a animação quando a página carrega e quando o usuário scrolla
    window.addEventListener('load', animateSkills);
    window.addEventListener('scroll', animateSkills);
    
    // =============================================
    // Filtro de projetos
    // =============================================
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adiciona a classe active apenas ao botão clicado
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filtra os projetos
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // =============================================
    // Modal para visualização de projetos
    // =============================================
    
    // (Implementação opcional - pode ser adicionada posteriormente)
    
    // =============================================
    // Validação do formulário de contato
    // =============================================
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (name === '' || email === '' || subject === '' || message === '') {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Por favor, insira um email válido.');
                return;
            }
            
            // Simulação de envio (substituir por AJAX ou outra solução)
            alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
            this.reset();
        });
    }
    
    // Função para validar email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // =============================================
    // Player de vídeo
    // =============================================
    
    const videoWrapper = document.querySelector('.video-wrapper');
    const video = videoWrapper.querySelector('video');
    const playButton = videoWrapper.querySelector('.play-button');
    
    playButton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            this.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            video.pause();
            this.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
    
    video.addEventListener('play', function() {
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
    });
    
    video.addEventListener('pause', function() {
        playButton.innerHTML = '<i class="fas fa-play"></i>';
    });
    
    // =============================================
    // Efeitos de animação ao scroll
    // =============================================
    
    // Observador de interseção para animações
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Elementos que devem ser animados
    const animateElements = document.querySelectorAll('.hero-content, .hero-image, .about-text, .about-video, .skills-category, .project-card, .timeline-item');
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // =============================================
    // Simulação de download do CV
    // =============================================
    
    const downloadCvBtn = document.getElementById('downloadCv');
    
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Simulação: Download do CV iniciado. Em uma implementação real, isso baixaria seu arquivo PDF.');
        });
    }
    
    // =============================================
    // Visualização de todos os projetos
    // =============================================
    
    const viewAllProjectsBtn = document.getElementById('viewAllProjects');
    
    if (viewAllProjectsBtn) {
        viewAllProjectsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Simulação: Todos os projetos seriam exibidos. Atualmente você tem 3 projetos.');
        });
    }
});