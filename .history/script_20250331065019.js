document.addEventListener('DOMContentLoaded', function() {
    // ======================
    // Configurações iniciais
    // ======================
    
    // Atualiza o ano no footer
    document.getElementById('ano').textContent = new Date().getFullYear();
    
    // =================
    // Menu Mobile
    // =================
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('ativo');
        menuBtn.classList.toggle('ativo');
    });
    
    // Fecha o menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('ativo');
            menuBtn.classList.remove('ativo');
        });
    });
    
    // Efeito de scroll suave
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
    
    // Efeito de scroll na navbar
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'var(--cor-branco)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // =================
    // Projetos
    // =================
    const projetos = [
        {
            titulo: 'Calculadora',
            descricao: 'Esse projeto é uma calculadora que o usuário consegue realizar descontos e aplicar juros. Projeto em desenvolvimeto para praticar os conhecimentos adquiridos Que tecnologias usou?',
            tecnologias: ['HTML', 'CSS', 'JavaScript'],
            imagem: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            linkDemo: 'https://jaelsons.github.io/Calculadora1/',
            linkCodigo: 'https://github.com/JaelsonS/Calculadora1'
        },
        {
            titulo: 'Chuva de Meteoros',
            descricao: 'Projeto para treinar a lógica de algoritmo. Projeto em desenvolvimento',
            tecnologias: ['HTML', 'CSS', 'JavaScript'],
            imagem: 'https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            linkDemo: 'https://jaelsons.github.io/Chuva-de-meteoros/',
            linkCodigo: 'https://github.com/JaelsonS/Chuva-de-meteoros'
        },
        {
            titulo: 'PumPay',
            descricao: 'Projeto em desenvolvimento, ideia inicial de quem sabe um novo aplicativo.',
            tecnologias: ['HTML', 'CSS', 'JavaScript'],
            imagem: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            linkDemo: 'https://jaelsons.github.io/PumPay/',
            linkCodigo: 'https://github.com/JaelsonS/PumPay'
        },

        {
            titulo: 'Portfólio',
            descricao: 'Projeto em desenvolvimento, meu 1º portfólio.',
            tecnologias: ['HTML', 'CSS', 'JavaScript'],
            imagem: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            linkDemo: 'https://jaelsons.github.io/Portifolio/',
            linkCodigo: 'https://github.com/JaelsonS/Portifolio'
        },
        {
            titulo: 'ImobiliáriaSantos',
            descricao: 'Projeto desenvolvido numa aula da DevMedia.',
            tecnologias: ['HTML', 'CSS', 'JavaScript'],
            imagem: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            linkDemo: 'https://jaelsons.github.io/ImobiliariaSantos/',
            linkCodigo: 'https://github.com/JaelsonS/ImobiliariaSantos'  
    },
    {
        titulo: 'AutoAjudaVida',
        descricao: 'Projeto em desenvolvimento.',
        tecnologias: ['HTML', 'CSS', 'JavaScript'],
        imagem: 'https://images.pexels.com/photos/936046/pexels-photo-936046.jpeg',
        linkDemo: 'https://jaelsons.github.io/AutoAjuda/',
        linkCodigo: 'https://github.com/JaelsonS/AutoAjuda'
        
    }
    ];
    
    const projetosContainer = document.getElementById('projetos-container');
    
    projetos.forEach(projeto => {
        const projetoCard = document.createElement('div');
        projetoCard.className = 'projeto-card';
        projetoCard.innerHTML = `
            <img src="${projeto.imagem}" alt="${projeto.titulo}" class="projeto-imagem">
            <div class="projeto-info">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <div class="projeto-tecnologias">
                    ${projeto.tecnologias.map(tech => `<span class="tecnologia">${tech}</span>`).join('')}
                </div>
                <div class="projeto-links">
                    <a href="${projeto.linkDemo}" class="btn btn-demo" target="_blank">Ver Demo</a>
                    <a href="${projeto.linkCodigo}" class="btn" target="_blank">Código</a>
                </div>
            </div>
        `;
        projetosContainer.appendChild(projetoCard);
    });
    
    // =================
    // Quiz Interativo
    // =================
    const quizPerguntas = [
        {
            pergunta: "Qual área da tecnologia mais te interessa?",
            opcoes: [
                { texto: "Desenvolvimento Web", valor: "web" },
                { texto: "Aplicativos Mobile", valor: "mobile" },
                { texto: "Inteligência Artificial", valor: "ai" },
                { texto: "Ciência de Dados", valor: "dados" }
            ]
        },
        {
            pergunta: "Qual dessas linguagens você tem mais interesse em aprender?",
            opcoes: [
                { texto: "JavaScript/TypeScript", valor: "js" },
                { texto: "Python", valor: "python" },
                { texto: "Java/Kotlin", valor: "java" },
                { texto: "C#", valor: "csharp" }
            ]
        },
        {
            pergunta: "Como você descreveria seu estilo de aprendizado?",
            opcoes: [
                { texto: "Prático - Aprendo fazendo", valor: "pratico" },
                { texto: "Teórico - Gosto de entender os conceitos primeiro", valor: "teorico" },
                { texto: "Visual - Aprendo melhor com diagramas e vídeos", valor: "visual" },
                { texto: "Social - Aprendo melhor em grupo", valor: "social" }
            ]
        },
        {
            pergunta: "Qual desses projetos você gostaria de desenvolver?",
            opcoes: [
                { texto: "Um site ou aplicativo útil para a comunidade", valor: "comunidade" },
                { texto: "Uma ferramenta para aumentar produtividade", valor: "produtividade" },
                { texto: "Um jogo divertido", valor: "jogo" },
                { texto: "Uma solução para problemas complexos", valor: "solucao" }
            ]
        },
        {
            pergunta: "Qual é seu maior objetivo na área de tecnologia?",
            opcoes: [
                { texto: "Trabalhar em uma grande empresa", valor: "empresa" },
                { texto: "Empreender e criar meu próprio negócio", valor: "negocio" },
                { texto: "Contribuir para projetos open source", valor: "opensource" },
                { texto: "Resolver problemas reais das pessoas", valor: "problemas" }
            ]
        }
    ];
    
    const mensagensInspiradoras = [
        {
            titulo: "Continue assim!",
            mensagem: "Seu interesse por tecnologia e vontade de aprender são suas maiores forças. Continue estudando e praticando, e você alcançará grandes coisas!"
        },
        {
            titulo: "O caminho do sucesso",
            mensagem: "Cada linha de código que você escreve é um passo em direção ao seu objetivo de se tornar um engenheiro de software. Persistência é a chave!"
        },
        {
            titulo: "Grandes coisas pela frente",
            mensagem: "Com sua determinação e foco, tenho certeza que você criará projetos incríveis que farão a diferença na vida das pessoas."
        },
        {
            titulo: "O aprendizado nunca para",
            mensagem: "Na tecnologia, estamos sempre aprendendo. Sua mentalidade de crescimento vai te levar longe nessa jornada como desenvolvedor."
        }
    ];
    
    const quizContainer = document.querySelector('.quiz-container');
    const quizPerguntaElement = document.getElementById('quiz-pergunta');
    const quizOpcoesElement = document.getElementById('quiz-options');
    const quizProgressElement = document.getElementById('quiz-progress');
    const quizResultElement = document.getElementById('quiz-result');
    const quizMensagemFinalElement = document.getElementById('quiz-mensagem-final');
    const quizDescricaoFinalElement = document.getElementById('quiz-descricao-final');
    const quizReiniciarBtn = document.getElementById('quiz-reiniciar');
    
    let perguntaAtual = 0;
    let respostas = [];
    
    function mostrarPergunta() {
        if (perguntaAtual < quizPerguntas.length) {
            const pergunta = quizPerguntas[perguntaAtual];
            quizPerguntaElement.textContent = pergunta.pergunta;
            
            // Atualiza a barra de progresso
            const progresso = ((perguntaAtual + 1) / quizPerguntas.length) * 100;
            quizProgressElement.style.width = `${progresso}%`;
            
            // Limpa as opções anteriores
            quizOpcoesElement.innerHTML = '';
            
            // Adiciona as novas opções
            pergunta.opcoes.forEach(opcao => {
                const botaoOpcao = document.createElement('div');
                botaoOpcao.className = 'quiz-option';
                botaoOpcao.textContent = opcao.texto;
                botaoOpcao.addEventListener('click', () => selecionarResposta(opcao.valor));
                quizOpcoesElement.appendChild(botaoOpcao);
            });
            
            // Esconde o resultado
            quizResultElement.style.display = 'none';
        } else {
            mostrarResultado();
        }
    }
    
    function selecionarResposta(valor) {
        respostas.push(valor);
        perguntaAtual++;
        mostrarPergunta();
    }
    
    function mostrarResultado() {
        // Esconde a pergunta e opções
        quizPerguntaElement.style.display = 'none';
        quizOpcoesElement.style.display = 'none';
        
        // Mostra o resultado
        quizResultElement.style.display = 'block';
        
        // Seleciona uma mensagem inspiradora aleatória
        const mensagemAleatoria = mensagensInspiradoras[Math.floor(Math.random() * mensagensInspiradoras.length)];
        
        quizMensagemFinalElement.textContent = mensagemAleatoria.titulo;
        quizDescricaoFinalElement.textContent = mensagemAleatoria.mensagem;
    }
    
    function reiniciarQuiz() {
        perguntaAtual = 0;
        respostas = [];
        quizPerguntaElement.style.display = 'block';
        quizOpcoesElement.style.display = 'grid';
        quizResultElement.style.display = 'none';
        mostrarPergunta();
    }
    
    quizReiniciarBtn.addEventListener('click', reiniciarQuiz);
    
    // Inicia o quiz
    mostrarPergunta();
    
    // =================
    // Formulário de Contato
    // =================
    const formContato = document.querySelector('.contato-form');
    
    formContato.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulação de envio - na prática, você precisaria de um back-end
        const nome = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const mensagem = this.querySelector('textarea').value;
        
        console.log('Formulário enviado:', { nome, email, mensagem });
        
        // Feedback ao usuário
        alert(`Obrigado, ${nome}! Sua mensagem foi recebida. Entrarei em contato em breve pelo email ${email}.`);
        
        // Limpa o formulário
        this.reset();
    });
});