import wallPaper0 from '../assets/images/wallPapers/wallPaper0.png'

import type { Scene } from "../engine/types"

export const chapter1: Scene[] = [
  {
    id: "start",
    manMood: "neutral",
    womanMood: "neutral",
    backgroundImage: wallPaper0,
    dialogue: "Oi 💕 Estava esperando por você, meu amor!",
    choices: [
      {
        text: "Mas o que...? 😳",
        nextScene: "1",
        effects: (state) => ({
          ...state,
          flags: {
            ...state.flags,
            romance: Number(state.flags.romance ?? 0) + 1
          }
        })
      },
      {
        text: "Você e eu... amor doce...",
        nextScene: "2"
      }
    ]
  },
  {
    id: "1",
    womanMood: "surprised",
    manMood: "happy",
    backgroundImage: wallPaper0,
    dialogue: "Você parece surpresa.. não posso te culpar, não é algo que acontece com frequência né? haha",
    choices: [
      {
        text: "Realmente.. o que você está aprontando?",
        nextScene: "3"
      },
      {
        text: "Não mesmo. Você está bem?",
        nextScene: "4"
      }
    ]
  },
  {
    id: "2",
    womanMood: "surprised",
    manMood: "happy",
    backgroundImage: wallPaper0,
    dialogue: "Me pegou haha achei que essa música no fundo ficaria muito legal. O que você achou?",
    choices: [
      {
        text: "Estou realmente surpresa",
        nextScene: "5"
      },
      {
        text: "Eu amei 💕",
        nextScene: "5"
      },
    ]
  },
  {
    id: "3",
    womanMood: "neutral",
    manMood: "neutral",
    backgroundImage: wallPaper0,
    dialogue: "Eu preparei algumas coisinhas para ti. Eu havia planejado fazer isso no Valentine's Day, mas acabei me atrasando um pouquinho. O dia das mulheres veio a calhar, ainda mais que você é uma mulher incrível.",
    choices: [
      {
        text: "Próximo",
        nextScene: "6"
      },
    ]
  },
  {
    id: "4",
    womanMood: "concerned",
    manMood: "neutral",
    backgroundImage: wallPaper0,
    dialogue: "Ha ha.. bocó. Enfim, seguindo...",
    choices: [
      {
        text: "Próximo",
        nextScene: "6"
      },
    ]
  },
  {
    id: "5",
    womanMood: "very-happy",
    manMood: "very-happy",
    backgroundImage: wallPaper0,
    dialogue: "Fico feliz ❤️ você é o amor da minha vida, e queria te lembrar disso. Eu planejei fazer isso no Valentine's Day, mas as coisas não saíram exatamente como planejado. Como você é uma mulher maravilhosa, fico feliz em ser no dia da mulher.",
    choices: [
      {
        text: "Próximo",
        nextScene: "6"
      },
    ]
  },
  {
    id: "6",
    womanMood: "surprised",
    manMood: "happy",
    backgroundImage: wallPaper0,
    dialogue: "Sabe, eu já disse o quanto gosto da cor dos seus ollhos? O castanho esverdeado deles são duas joias maravilhosas.",
    choices: [
      {
        text: "Você está me deixando envergonhada 😳",
        nextScene: "7"
      },
      {
        text: "Meus olhos são verdes 👀",
        nextScene: "8"
      },
    ]
  },
  {
    id: "7",
    womanMood: "embarrassed",
    manMood: "very-happy",
    backgroundImage: wallPaper0,
    dialogue: "Haha.. mas eu ainda nem comecei...",
    choices: [
      {
        text: "Próximo",
        nextScene: "9"
      },
    ]
  },
  {
    id: "8",
    womanMood: "neutral",
    manMood: "neutral",
    backgroundImage: wallPaper0,
    dialogue: "Castanho esverdeado, meu bem. É claro, você sabe o quão raros eles são, e eu amo ficar contemplando eles.",
    choices: [
      {
        text: "Próximo",
        nextScene: "9"
      },
    ]
  },
  {
    id: "9",
    womanMood: "neutral",
    manMood: "neutral",
    backgroundImage: wallPaper0,
    dialogue: "Antes de qualquer coisa, queria te lembrar do quanto eu te amo e que...",
    choices: [
      {
        text: "Próximo",
        nextScene: "10"
      },
    ]
  },
  {
    id: "10",
    womanMood: "surprised",
    manMood: "loving",
    backgroundImage: wallPaper0,
    dialogue: "Você é uma mulher maravilhosa. Vou tentar resumir: linda, maravilhosa, Deusa da minha vida, transcendente, hipnotizante, gostosa, cheirosa, cremosa...",
    choices: [
      {
        text: "Aiin amor... já deu kkk 😅",
        nextScene: "11"
      },
      {
        text: "Que exagero homem",
        nextScene: "11"
      },
    ]
  },
  {
    id: "11",
    womanMood: "happy",
    manMood: "sad",
    backgroundImage: wallPaper0,
    dialogue: "Aaah, mas eu quero falar com todas as palavras possíveis, o quanto eu amo e admiro você.",
    choices: [
      {
        text: "Próximo",
        nextScene: "12"
      },
    ]
  },
  {
    id: "12",
    womanMood: "loving",
    manMood: "loving",
    backgroundImage: wallPaper0,
    dialogue: "Sabe, eu mal posso esperar pelo dia em que deixarei de te chamar de noiva, e te chamarei de minha mulher 🩵",
    choices: [
      {
        text: "Eu sou dona de mim",
        nextScene: "13"
      },
      {
        text: "Bobo... 💕",
        nextScene: "14"
      },
    ]
  },
  {
    id: "13",
    womanMood: "angry",
    manMood: "neutral",
    backgroundImage: wallPaper0,
    dialogue: "Mas é claro. Eu sei disso melhor que ninguém.",
    choices: [
      {
        text: "Próximo",
        nextScene: "15"
      },
    ]
  },
  {
    id: "14",
    womanMood: "very-happy",
    manMood: "loving",
    backgroundImage: wallPaper0,
    dialogue: "Você me deixa assim. Sei que, conforme o tempo passa, a confiança um no outro aumenta mais e mais. Também sei que muitas vezes a rotina acaba tornando as coisas um pouco... monótonas",
    choices: [
      {
        text: "Próximo",
        nextScene: "16"
      },
    ]
  },
  {
    id: "15",
    womanMood: "neutral",
    manMood: "happy",
    backgroundImage: wallPaper0,
    dialogue: "Eu quero ser seu parceiro incondicional, e estarei SEMPRE aqui para você 🩵",
    choices: [
      {
        text: "Próximo",
        nextScene: "17"
      },
    ]
  },
  {
    id: "16",
    womanMood: "neutral",
    manMood: "neutral",
    backgroundImage: wallPaper0,
    dialogue: "Por isso eu quero te lembrar o quanto você é especial, e o quanto nossa vida é maravilhosa.",
    choices: [
      {
        text: "Próximo",
        nextScene: "17"
      },
    ]
  },
  {
    id: "17",
    womanMood: "concerned",
    manMood: "neutral",
    backgroundImage: wallPaper0,
    dialogue: "Enfim, estou me prolongando aqui",
    choices: [
      {
        text: "Próximo",
        nextScene: "18"
      },
    ]
  },
  {
    id: "18",
    womanMood: "surprised",
    manMood: "happy",
    backgroundImage: wallPaper0,
    dialogue: "Você poderia dar um pulinho no quarto? Eu tenho um presente para você.",
    choices: [
      {
        text: "Próximo",
        nextScene: "19"
      },
    ]
  },
]
