const questionsData = {
    iniciante: {
        html: [
            {
                q: "O que significa HTML?",
                options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks Text Language"],
                correct: 0
            },
            {
                q: "Qual tag HTML cria um parágrafo?",
                options: ["<p>", "<paragraph>", "<text>", "<para>"],
                correct: 0
            },
            {
                q: "Qual tag HTML cria um título principal?",
                options: ["<title>", "<header>", "<h1>", "<heading>"],
                correct: 2
            },
            {
                q: "Como criar um link em HTML?",
                options: ["<link>", "<a>", "<url>", "<href>"],
                correct: 1
            },
            {
                q: "Qual tag HTML insere uma imagem?",
                options: ["<image>", "<img>", "<pic>", "<photo>"],
                correct: 1
            }
        ],
        css: [
            {
                q: "O que significa CSS?",
                options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"],
                correct: 1
            },
            {
                q: "Como mudar a cor do texto em CSS?",
                options: ["text-color", "font-color", "color", "text"],
                correct: 2
            },
            {
                q: "Qual propriedade define o tamanho da fonte?",
                options: ["text-size", "font-size", "size", "font-style"],
                correct: 1
            },
            {
                q: "Como mudar a cor de fundo em CSS?",
                options: ["bg-color", "background-color", "color-bg", "back-color"],
                correct: 1
            },
            {
                q: "O que faz a propriedade 'width'?",
                options: ["Altera a altura", "Define a largura", "Muda a cor", "Altera a posição"],
                correct: 1
            }
        ],
        javascript: [
            {
                q: "Como declarar uma variável em JavaScript?",
                options: ["var nome", "variable nome", "nome var", "set nome"],
                correct: 0
            },
            {
                q: "Qual símbolo inicia um comentário de linha única?",
                options: ["#", "//", "/*", "<!--"],
                correct: 1
            },
            {
                q: "Como exibir algo no console?",
                options: ["print()", "echo()", "console.log()", "display()"],
                correct: 2
            },
            {
                q: "Qual o operador de igualdade em JavaScript?",
                options: ["=", "==", "equals", "is"],
                correct: 1
            },
            {
                q: "Como criar uma função em JavaScript?",
                options: ["function nome()", "def nome()", "func nome()", "create nome()"],
                correct: 0
            }
        ]
    },
    facil: {
        html: [
            {
                q: "Qual tag HTML cria uma lista não ordenada?",
                options: ["<ol>", "<ul>", "<list>", "<li>"],
                correct: 1
            },
            {
                q: "Qual atributo define texto alternativo para imagens?",
                options: ["title", "alt", "text", "description"],
                correct: 1
            },
            {
                q: "Como criar um botão em HTML?",
                options: ["<btn>", "<input type='button'>", "<button>", "Ambas B e C"],
                correct: 3
            },
            {
                q: "Qual tag cria uma quebra de linha?",
                options: ["<break>", "<br>", "<lb>", "<newline>"],
                correct: 1
            },
            {
                q: "Onde ficam as meta tags em HTML?",
                options: ["<body>", "<head>", "<meta>", "<header>"],
                correct: 1
            }
        ],
        css: [
            {
                q: "Qual propriedade CSS controla o espaçamento interno?",
                options: ["margin", "padding", "spacing", "inner"],
                correct: 1
            },
            {
                q: "Como centralizar texto com CSS?",
                options: ["align: center", "text-align: center", "center: text", "text: center"],
                correct: 1
            },
            {
                q: "Qual propriedade CSS altera a fonte?",
                options: ["font-family", "font-type", "typeface", "text-font"],
                correct: 0
            },
            {
                q: "O que faz 'display: none'?",
                options: ["Deixa transparente", "Esconde o elemento", "Mostra o elemento", "Muda a cor"],
                correct: 1
            },
            {
                q: "Como aplicar CSS inline?",
                options: ["class='style'", "style='propriedade'", "css='propriedade'", "inline='propriedade'"],
                correct: 1
            }
        ],
        javascript: [
            {
                q: "Como selecionar um elemento por ID?",
                options: ["getElement()", "document.getElementById()", "selectId()", "findById()"],
                correct: 1
            },
            {
                q: "Qual método adiciona um item ao final de um array?",
                options: ["add()", "push()", "append()", "insert()"],
                correct: 1
            },
            {
                q: "Como verificar o tamanho de um array?",
                options: ["array.size", "array.length", "array.count", "array.size()"],
                correct: 1
            },
            {
                q: "Qual palavra-chave define uma constante?",
                options: ["var", "let", "const", "constant"],
                correct: 2
            },
            {
                q: "Como converter string para número?",
                options: ["parseInt()", "toNumber()", "convertInt()", "number()"],
                correct: 0
            }
        ]
    },
    medio: {
        html: [
            {
                q: "Qual é a estrutura correta do HTML5?",
                options: ["<html><body>", "<!DOCTYPE html><html><head><body>", "<document><html>", "<html><header><body>"],
                correct: 1
            },
            {
                q: "Qual atributo HTML5 torna um campo obrigatório?",
                options: ["required", "mandatory", "needed", "validate"],
                correct: 0
            },
            {
                q: "Qual tag HTML5 define conteúdo independente?",
                options: ["<section>", "<article>", "<div>", "<content>"],
                correct: 1
            },
            {
                q: "Como incorporar um vídeo em HTML5?",
                options: ["<video>", "<media>", "<movie>", "<embed>"],
                correct: 0
            },
            {
                q: "Qual atributo HTML5 especifica um placeholder?",
                options: ["hint", "placeholder", "default", "text"],
                correct: 1
            }
        ],
        css: [
            {
                q: "O que é 'box-sizing: border-box'?",
                options: ["Inclui padding/border no tamanho total", "Exclui padding/border", "Define borda dupla", "Remove margens"],
                correct: 0
            },
            {
                q: "Como criar um layout flexível com CSS?",
                options: ["display: flex", "layout: flex", "flex: true", "flexible: yes"],
                correct: 0
            },
            {
                q: "Qual propriedade CSS cria sombra em texto?",
                options: ["text-shadow", "shadow", "font-shadow", "text-effect"],
                correct: 0
            },
            {
                q: "O que faz 'position: relative'?",
                options: ["Posição absoluta", "Posição relativa ao normal", "Fixa o elemento", "Remove do fluxo"],
                correct: 1
            },
            {
                q: "Como selecionar o primeiro filho em CSS?",
                options: [":first", ":first-child", ":child(1)", ":nth(1)"],
                correct: 1
            }
        ],
        javascript: [
            {
                q: "O que é o DOM?",
                options: ["Data Object Model", "Document Object Model", "Display Object Manager", "Dynamic Object Method"],
                correct: 1
            },
            {
                q: "Qual a diferença entre '==' e '==='?",
                options: ["Não há diferença", "=== compara tipo e valor", "== é mais estrito", "=== é mais rápido"],
                correct: 1
            },
            {
                q: "O que são arrow functions?",
                options: ["Funções especiais", "Sintaxe curta para funções", "Funções assíncronas", "Métodos de array"],
                correct: 1
            },
            {
                q: "Como adicionar um evento de clique?",
                options: ["onClick()", "addEvent()", "addEventListener()", "bindClick()"],
                correct: 2
            },
            {
                q: "O que faz 'typeof'?",
                options: ["Muda o tipo", "Retorna o tipo de dado", "Compara tipos", "Define tipo"],
                correct: 1
            }
        ]
    },
    dificil: {
        html: [
            {
                q: "Qual a diferença entre <section> e <article>?",
                options: ["Não há diferença", "<article> é conteúdo independente", "<section> é mais específico", "<article> não pode ter <section>"],
                correct: 1
            },
            {
                q: "O que são data attributes em HTML5?",
                options: ["Atributos de banco de dados", "Atributos personalizados data-*", "Atributos de validação", "Atributos de metadados"],
                correct: 1
            },
            {
                q: "Qual API HTML5 permite arrastar elementos?",
                options: ["Touch API", "Drag and Drop API", "Move API", "Transfer API"],
                correct: 1
            },
            {
                q: "O que é o atributo 'defer' em scripts?",
                options: ["Carrega depois do HTML", "Carrega antes do HTML", "Não carrega o script", "Carrega múltiplas vezes"],
                correct: 0
            },
            {
                q: "Qual a diferença entre localStorage e sessionStorage?",
                options: ["localStorage expira na sessão", "sessionStorage é persistente", "localStorage persiste após fechar", "São idênticos"],
                correct: 2
            }
        ],
        css: [
            {
                q: "O que é 'specificity' em CSS?",
                options: ["Velocidade de carregamento", "Peso de seletores", "Ordem de importância", "Tamanho do arquivo"],
                correct: 1
            },
            {
                q: "Como funciona 'z-index'?",
                options: ["Controla opacidade", "Controla empilhamento", "Define profundidade 3D", "Altera ordem no DOM"],
                correct: 1
            },
            {
                q: "O que são CSS Custom Properties?",
                options: ["Propriedades customizadas do navegador", "Variáveis CSS (--var)", "Propriedades não oficiais", "Hacks de CSS"],
                correct: 1
            },
            {
                q: "O que faz 'transform: translateX()'?",
                options: ["Rotaciona no eixo X", "Move no eixo X", "Escala no eixo X", "Inclina no eixo X"],
                correct: 1
            },
            {
                q: "Como funciona 'flexbox' com 'flex-grow'?",
                options: ["Define tamanho mínimo", "Distribui espaço disponível", "Define tamanho máximo", "Altera direção"],
                correct: 1
            }
        ],
        javascript: [
            {
                q: "O que é 'closure' em JavaScript?",
                options: ["Fechamento de arquivo", "Função com acesso ao escopo externo", "Método de encerramento", "Tipo de loop"],
                correct: 1
            },
            {
                q: "Diferença entre 'null' e 'undefined'?",
                options: ["São idênticos", "null é atribuído, undefined é ausência", "undefined é erro", "null é string vazia"],
                correct: 1
            },
            {
                q: "O que é 'hoisting'?",
                options: ["Otimização de código", "Elevação de declarações", "Compressão de variáveis", "Cache de funções"],
                correct: 1
            },
            {
                q: "Como funciona 'this' em arrow functions?",
                options: ["Funciona normal", "Herda do escopo léxico", "Sempre é undefined", "Refere ao window"],
                correct: 1
            },
            {
                q: "O que são Promises?",
                options: ["Variáveis especiais", "Objetos para operações assíncronas", "Métodos de array", "Tipos de loops"],
                correct: 1
            }
        ]
    },
    expert: {
        html: [
            {
                q: "O que é Shadow DOM?",
                options: ["DOM escondido do CSS", "Árvore DOM encapsulada", "Backup do DOM", "DOM temporário"],
                correct: 1
            },
            {
                q: "Como funcionam Web Components?",
                options: ["Componentes React", "Elementos HTML customizados reutilizáveis", "Plugins do navegador", "Frameworks CSS"],
                correct: 1
            },
            {
                q: "O que é ARIA e sua importância?",
                options: ["Framework HTML", "Acessibilidade para leitores de tela", "API de animação", "Protocolo de rede"],
                correct: 1
            },
            {
                q: "Diferença entre async e defer em scripts?",
                options: ["async baixa paralelo e executa imediatamente", "defer é mais rápido", "async bloqueia o parser", "São idênticos"],
                correct: 0
            },
            {
                q: "O que é Content Security Policy (CSP)?",
                options: ["Política de cookies", "Segurança contra XSS/injection", "Criptografia de dados", "Autenticação de usuário"],
                correct: 1
            }
        ],
        css: [
            {
                q: "Como funciona o CSS Grid Layout?",
                options: ["Sistema de tabelas", "Sistema bidimensional de linhas/colunas", "Alternativa ao flexbox 1D", "Framework CSS"],
                correct: 1
            },
            {
                q: "O que são CSS containment e contain property?",
                options: ["Isolamento de estilos", "Otimização de renderização limitando escopo", "Contenção de erros", "Validação CSS"],
                correct: 1
            },
            {
                q: "Como funciona 'will-change' em CSS?",
                options: ["Detecta mudanças", "Otimiza animações futuras", "Valida propriedades", "Notifica alterações"],
                correct: 1
            },
            {
                q: "O que é BEM em CSS?",
                options: ["Framework", "Metodologia de nomenclatura Block__Element--Modifier", "Pré-processador", "Biblioteca"],
                correct: 1
            },
            {
                q: "Como funciona CSS cascade layers (@layer)?",
                options: ["Camadas visuais", "Controle de precedência em cascata", "Layers 3D", "Organização de arquivos"],
                correct: 1
            }
        ],
        javascript: [
            {
                q: "O que é Event Loop?",
                options: ["Loop infinito", "Mecanismo de concorrência assíncrona", "Tipo de forEach", "Sistema de eventos"],
                correct: 1
            },
            {
                q: "Diferença entre Call Stack e Task Queue?",
                options: ["São o mesmo", "Stack executa síncrono, Queue assíncrono", "Stack é mais rápido", "Queue é depreciado"],
                correct: 1
            },
            {
                q: "O que são WeakMap e WeakSet?",
                options: ["Versões fracas", "Coleções com referências fracas e GC", "Mapas menores", "Sets com menos recursos"],
                correct: 1
            },
            {
                q: "Como funciona 'async/await' internamente?",
                options: ["Magia do JavaScript", "Açúcar sintático sobre Promises", "Threads paralelas", "Novo motor JS"],
                correct: 1
            },
            {
                q: "O que é o 'Temporal Dead Zone'?",
                options: ["Erro de tempo", "Período antes da declaração let/const", "Zona de memória", "Bug do JavaScript"],
                correct: 1
            }
        ]
    }
};

// ==================== VARIÁVEIS DO JOGO ====================
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let selectedDifficulty = null;
let currentQuestions = [];
let usedQuestions = [];
let questionsAnswered = 0;
let correctAnswers = 0;
let cameraY = 0;

const game = {
    score: 0,
    lives: 3,
    isPaused: false,
    isGameOver: false,
    started: false
};

const player = {
    x: 50,
    y: 400,
    w: 30,
    h: 40,
    vx: 0,
    vy: 0,
    speed: 5,
    jumpPower: 12,
    gravity: 0.6,
    onGround: false
};

const platforms = [
    {x: 0, y: 550, w: 800, h: 50},
    {x: 150, y: 450, w: 120, h: 20},
    {x: 350, y: 350, w: 120, h: 20},
    {x: 550, y: 250, w: 120, h: 20},
    {x: 300, y: 150, w: 150, h: 20},
    {x: 100, y: 100, w: 120, h: 20},
    {x: 500, y: 50, w: 120, h: 20},
    {x: 200, y: 0, w: 120, h: 20},
    {x: 350, y: -100, w: 120, h: 20},
    {x: 150, y: -200, w: 120, h: 20},
    {x: 500, y: -300, w: 120, h: 20},
    {x: 250, y: -400, w: 120, h: 20},
    {x: 400, y: -500, w: 120, h: 20}
];

let stars = [
    {x: 200, y: 400, collected: false},
    {x: 400, y: 300, collected: false},
    {x: 600, y: 200, collected: false},
    {x: 350, y: 100, collected: false},
    {x: 150, y: 50, collected: false},
    {x: 550, y: 0, collected: false},
    {x: 250, y: -50, collected: false},
    {x: 400, y: -150, collected: false},
    {x: 200, y: -250, collected: false},
    {x: 550, y: -350, collected: false},
    {x: 300, y: -450, collected: false},
    {x: 450, y: -550, collected: false}
];

const keys = {};

// ==================== EVENTOS ====================
document.addEventListener('keydown', (e) => {
    keys[e.code] = true;
    if (e.code === 'Space' && player.onGround && !game.isPaused && game.started) {
        player.vy = -player.jumpPower;
        player.onGround = false;
    }
});

document.addEventListener('keyup', (e) => {
    keys[e.code] = false;
});

// Seleção de dificuldade
document.querySelectorAll('.difficultyBtn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        selectedDifficulty = e.currentTarget.dataset.difficulty;
        startGame();
    });
});

document.getElementById('restartBtn').addEventListener('click', restartGame);

// ==================== FUNÇÕES DE DESENHO ====================
function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y + cameraY, w, h);
}

function drawPlayer() {
    drawRect(player.x, player.y, player.w, player.h, '#FF6B6B');
    ctx.fillStyle = 'white';
    ctx.fillRect(player.x + 8, player.y + 10 + cameraY, 5, 5);
    ctx.fillRect(player.x + 17, player.y + 10 + cameraY, 5, 5);
    ctx.fillStyle = 'black';
    ctx.fillRect(player.x + 10, player.y + 12 + cameraY, 2, 2);
    ctx.fillRect(player.x + 19, player.y + 12 + cameraY, 2, 2);
}

function drawPlatforms() {
    platforms.forEach(p => {
        drawRect(p.x, p.y, p.w, p.h, '#8B4513');
        drawRect(p.x, p.y, p.w, 5, '#A0522D');
    });
}

function drawStar(x, y) {
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
        const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
        const px = x + Math.cos(angle) * 15;
        const py = y + Math.sin(angle) * 15 + cameraY;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#FFA500';
    ctx.lineWidth = 2;
    ctx.stroke();
}

function drawStars() {
    stars.forEach(star => {
        if (!star.collected) {
            drawStar(star.x, star.y);
        }
    });
}

function draw() {
    ctx.fillStyle = '#87ceeb';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.beginPath();
    ctx.arc(100, 80, 30, 0, Math.PI * 2);
    ctx.arc(130, 80, 25, 0, Math.PI * 2);
    ctx.arc(150, 80, 30, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(600, 120, 35, 0, Math.PI * 2);
    ctx.arc(640, 120, 30, 0, Math.PI * 2);
    ctx.arc(670, 120, 35, 0, Math.PI * 2);
    ctx.fill();

    drawPlatforms();
    drawStars();
    drawPlayer();
}

// ==================== LÓGICA DO JOGO ====================
function checkCollision(rect1, rect2) {
    return rect1.x < rect2.x + rect2.w &&
           rect1.x + rect1.w > rect2.x &&
           rect1.y < rect2.y + rect2.h &&
           rect1.y + rect1.h > rect2.y;
}

function update() {
    if (game.isPaused || game.isGameOver || !game.started) return;

    player.vx = 0;
    if (keys['ArrowLeft']) player.vx = -player.speed;
    if (keys['ArrowRight']) player.vx = player.speed;

    player.x += player.vx;

    if (player.x < 0) player.x = 0;
    if (player.x + player.w > canvas.width) player.x = canvas.width - player.w;

    player.vy += player.gravity;
    player.y += player.vy;

    // Atualizar a câmera para seguir o jogador
    const targetCameraY = Math.min(0, -(player.y - canvas.height / 3));
    cameraY += (targetCameraY - cameraY) * 0.1; // Suavização

    player.onGround = false;
    platforms.forEach(p => {
        if (checkCollision(player, p)) {
            if (player.vy > 0 && player.y + player.h - player.vy <= p.y) {
                player.y = p.y - player.h;
                player.vy = 0;
                player.onGround = true;
            }
        }
    });

    stars.forEach(star => {
        if (!star.collected) {
            const dist = Math.hypot(player.x + player.w/2 - star.x, player.y + player.h/2 - star.y);
            if (dist < 30) {
                star.collected = true;
                showQuestion();
            }
        }
    });

    if (player.y > canvas.height) {
        gameOver();
    }
}

// ==================== SISTEMA DE PERGUNTAS ====================
function startGame() {
    const difficulty = questionsData[selectedDifficulty];
    currentQuestions = [...difficulty.html, ...difficulty.css, ...difficulty.javascript];
    
    document.getElementById('difficultySelect').classList.add('hidden');
    game.started = true;
}

function showQuestion() {
    if (usedQuestions.length === currentQuestions.length) {
        usedQuestions = [];
    }

    let availableQuestions = currentQuestions.filter((_, i) => !usedQuestions.includes(i));
    let randomIndex = Math.floor(Math.random() * availableQuestions.length);
    let questionIndex = currentQuestions.indexOf(availableQuestions[randomIndex]);
    usedQuestions.push(questionIndex);

    const question = currentQuestions[questionIndex];
    
    // Determinar categoria da pergunta
    let category = 'javascript';
    for (let diff in questionsData) {
        if (questionsData[diff].html.includes(question)) category = 'html';
        else if (questionsData[diff].css.includes(question)) category = 'css';
    }
    
    // Badges
    const diffBadge = document.getElementById('difficultyBadge');
    diffBadge.textContent = selectedDifficulty.toUpperCase();
    diffBadge.className = selectedDifficulty;
    
    const catBadge = document.getElementById('categoryBadge');
    catBadge.textContent = category.toUpperCase();
    catBadge.className = category;
    
    game.isPaused = true;
    document.getElementById('questionText').textContent = question.q;
    
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    
    question.options.forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = opt;
        div.onclick = () => checkAnswer(i, question.correct, div);
        container.appendChild(div);
    });
    
    document.getElementById('questionModal').classList.add('active');
}

function checkAnswer(selected, correct, element) {
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.style.pointerEvents = 'none');
    
    questionsAnswered++;
    
    if (selected === correct) {
        element.classList.add('correct');
        correctAnswers++;
        
        // Pontuação baseada na dificuldade
        const points = {
            iniciante: 50,
            facil: 100,
            medio: 150,
            dificil: 200,
            expert: 300
        };
        game.score += points[selectedDifficulty];
        
        setTimeout(() => {
            closeQuestion();
        }, 1000);
    } else {
        element.classList.add('wrong');
        options[correct].classList.add('correct');
        game.lives--;
        if (game.lives <= 0) {
            setTimeout(() => {
                gameOver();
            }, 1500);
        } else {
            setTimeout(() => {
                closeQuestion();
            }, 1500);
        }
    }
    
    updateScore();
}

function closeQuestion() {
    document.getElementById('questionModal').classList.remove('active');
    game.isPaused = false;
}

function updateScore() {
    document.getElementById('score').textContent = `Pontos: ${game.score} | Vidas: ${game.lives}`;
}

function gameOver() {
    game.isGameOver = true;
    game.isPaused = true;
    
    const accuracy = questionsAnswered > 0 ? Math.round((correctAnswers / questionsAnswered) * 100) : 0;
    
    document.getElementById('finalScore').textContent = `Você fez ${game.score} pontos!`;
    document.getElementById('accuracyInfo').textContent = `Acertos: ${correctAnswers}/${questionsAnswered} (${accuracy}%)`;
    document.getElementById('gameOver').classList.add('active');
    document.getElementById('questionModal').classList.remove('active');
}

function restartGame() {
    game.score = 0;
    game.lives = 3;
    game.isPaused = false;
    game.isGameOver = false;
    game.started = false;
    usedQuestions = [];
    questionsAnswered = 0;
    correctAnswers = 0;
    selectedDifficulty = null;
    player.x = 50;
    player.y = 400;
    cameraY = 0;
    stars.forEach(s => s.collected = false);
    document.getElementById('gameOver').classList.remove('active');
    document.getElementById('difficultySelect').classList.remove('hidden');
    updateScore();
}

// ==================== LOOP DO JOGO ====================
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

updateScore();
gameLoop();