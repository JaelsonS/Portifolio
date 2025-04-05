document.addEventListener('DOMContentLoaded', function() {
   
    document.getElementById('ano').textContent = new Date().getFullYear();
    
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('ativo');
        menuBtn.classList.toggle('ativo');
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('ativo');
            menuBtn.classList.remove('ativo');
        });
    });
    
    const moodButtons = document.querySelectorAll('.mood-btn');  // Obtém todos os botões de humor.
    const moodResponse = document.getElementById('moodResponse');  // Obtém o elemento para exibir a resposta ao humor.
    
    if (moodButtons.length && moodResponse) {  // Verifica se os botões e o elemento de resposta existem.
        moodButtons.forEach(button => {  // Para cada botão de humor, adiciona um evento de clique.
            button.addEventListener('click', function() {  // Adiciona evento de clique a cada botão.
                const mood = this.getAttribute('data-mood');  // Obtém o valor do atributo 'data-mood' (humor).
                let response = '';  // Inicializa uma variável para armazenar a resposta.
                
                switch(mood) {  // Avalia o valor do humor e define a resposta.
                    case 'happy':
                        response = 'Que ótimo que você está feliz hoje! Aproveite esse momento e espalhe essa alegria para as pessoas ao seu redor. A felicidade é contagiante!';
                        break;
                    case 'neutral':
                        response = 'Estar se sentindo normal é completamente okay. Às vezes, é nos momentos de calma que encontramos nossa verdadeira força. Que tal assistir a um dos nossos vídeos motivacionais para dar um up no seu dia?';
                        break;
                    case 'sad':
                        response = 'Sinto muito que você esteja se sentindo assim. Lembre-se que todos os sentimentos são válidos e passageiros. Você é mais forte do que imagina e dias melhores virão. Confira nossa seção de frases motivacionais para encontrar um pouco de inspiração.';
                        break;
                    case 'angry':
                        response = 'A raiva pode ser uma emoção difícil de lidar. Respire fundo, conte até dez e tente encontrar um momento de calma. Você tem todo o direito de sentir o que sente, mas não deixe que isso controle você.';
                        break;
                    case 'motivated':
                        response = 'Isso aí! Com essa motivação você pode conquistar o mundo! Aproveite essa energia para trabalhar em seus objetivos e sonhos. Nada pode parar você agora!';
                        break;
                    default:
                        response = 'Obrigado por compartilhar como você está se sentindo. Esperamos que nosso conteúdo possa ajudar a melhorar ainda mais o seu dia!';
                }
                
                moodResponse.innerHTML = response;  // Atualiza a resposta exibida.
                moodResponse.classList.remove('fade-in');  // Remove a animação de fade-in existente.
                void moodResponse.offsetWidth;  // Força um reflow para reiniciar a animação.
                moodResponse.classList.add('fade-in');  // Adiciona a animação de fade-in à resposta.
            });
        });
    }
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
            imagem: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixliformatw=500&q=80',
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
        
    },
    {
        titulo: 'Future',
        descricao: 'Projeto em desenvolvimento.',
        tecnologias: ['HTML', 'CSS', 'JavaScript'],
        imagem: 'https://img.freepik.com/fotos-gratis/jovem-medico-bonito-em-uma-tunica-medica-com-estetoscopio_1303-17818.jpg?uid=R188991667&ga=GA1.1.561515967.1740640690&semt=ais_hybrid&w=740',
        linkDemo: 'https://jaelsons.github.io/FutureLab/',
        linkCodigo: 'https://github.com/JaelsonS/FutureLab'
        
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
            const progresso = ((perguntaAtual + 1) / quizPerguntas.length) * 100;
            quizProgressElement.style.width = `${progresso}%`;
            quizOpcoesElement.innerHTML = '';
            pergunta.opcoes.forEach(opcao => {
                const botaoOpcao = document.createElement('div');
                botaoOpcao.className = 'quiz-option';
                botaoOpcao.textContent = opcao.texto;
                botaoOpcao.addEventListener('click', () => selecionarResposta(opcao.valor));
                quizOpcoesElement.appendChild(botaoOpcao);
            });
            
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
        quizPerguntaElement.style.display = 'none';
        quizOpcoesElement.style.display = 'none';   
        quizResultElement.style.display = 'block';  
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
    mostrarPergunta();
    const formContato = document.querySelector('.contato-form');
    formContato.addEventListener('submit', function(e) {
        e.preventDefault();
        const nome = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const mensagem = this.querySelector('textarea').value;
        console.log('Formulário enviado:', { nome, email, mensagem });
        alert(`Obrigado, ${nome}! Sua mensagem foi recebida. Entrarei em contato em breve pelo email ${email}.`);
        this.reset();
    });
});