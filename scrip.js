const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você experimenta um assistente pessoal virtual baseado em IA que parece entender suas necessidades melhor do que você mesmo. Qual foi sua reação inicial?",
        alternativas: [
            {
                texto: "Fiquei intrigado(a)",
                afirmacao: "e gostaria de explorar mais sobre como ele pode me ajudar"
            },
            {
                texto: "Fiquei um pouco preocupado(a).",
                afirmaçao:"com a privacidade e segurança dos meus dados."
            }
        ]
    },
    {
        enunciado: "Você interage com um robô com inteligência artificial que possui uma personalidade e capacidade de aprender com suas interações. O que você acha sobre isso?.",
        alternativas: [
            {
                texto: "Fiquei fascinado(a) e curioso(a).",
                afirmacao: "estou ansioso para explorar mais sobre como o robô poderia se desenvolver."
            },
            {
                texto: "Não me importei muito.",
                afirmacao: "Achei interessante ter uma interação tão avançada com um robô."
            }
        ]
    },
    {
        enunciado: "Você descobre um novo sistema de IA que pode prever com precisão eventos futuros, como tendências de mercado e resultados esportivos. O que você faria?",
        alternativas: [
            {
                texto: "Acharia surpreendente!",
                afirmacao: "Fiquei interessado(a) em como isso poderia ser aplicado em diferentes áreas" },
            {
                texto: "Ficaria um pouco preocupado(a)",
                afirmacao: " pela questão de implicações éticas e morais de prever o futuro" 
              }

        ]
    },
    {
        enunciado: "Como você acha que a IA está impactando ou pode impactar nossa sociedade atualmente?",

        alternativas: [
            {
                texto: "positivamente",
                afirmacao: "A inteligência artificial está positivamente transformando setores como saúde e indústria ao aumentar eficiência operacional e possibilitar diagnósticos mais precisos."
            },
            {
                texto: "negativamente",
                afirmacao: "surgem preocupações significativas como o potencial aumento do desemprego tecnológico e questões éticas relacionadas à privacidade e ao uso de dados pessoais."
            }
        ]
    },
    {
        enunciado: "Como você acha que a educação deve se adaptar para preparar melhor as pessoas para viver e trabalhar em um mundo onde a IA é prevalente?",
        alternativas: [
            {
                texto: "incluir mais a IA no dia-a-dia dos estudantes",
                afirmacao: "A educação deve incluir mais cursos de IA nas escolas para garantir que os alunos compreendam os princípios básicos e as aplicações práticas dessa tecnologia emergente."
            },
            {
                texto: " Focar apenas em habilidades sociais e criativas dos estudantes",
                afirmacao: "é crucial que a educação continue focando no desenvolvimento de habilidades sociais e criativas, sem a interferência da IA" }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();