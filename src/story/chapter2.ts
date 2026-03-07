import wallPaper1 from '../assets/images/wallPapers/wallPaper1.png'
import end from '../assets/images/wallPapers/wallPaper1.png'

import type { Scene } from "../engine/types"

export const chapter2: Scene[] = [
  {
    id: "19",
    manMood: "happy",
    womanMood: "neutral",
    backgroundImage: wallPaper1,
    dialogue: "Antes de você abrir, gostaria de dizer que, além de saber que você queria isso, serve para um propósito muito além disso.",
    choices: [
      { text: "Como assim?", nextScene: "20" },
      { text: "Eu queria? Será que...", nextScene: "20" }
    ]
  },
  {
    id: "20",
    manMood: "happy",
    womanMood: "neutral",
    backgroundImage: wallPaper1,
    dialogue: "Calma haha você vai ver.",
    choices: [{ text: "Próximo", nextScene: "21" }]
  },
  {
    id: "21",
    manMood: "very-happy",
    womanMood: "neutral",
    backgroundImage: wallPaper1,
    dialogue: "Abre, por favor! Estou ansioso para ver o que vai achar",
    choices: [{ text: "[Após abrir]", nextScene: "22" }]
  },
  {
    id: "22",
    manMood: "happy",
    womanMood: "surprised",
    backgroundImage: wallPaper1,
    dialogue: "Nossos momentos mais importantes precisam de registro, não acha?",
    choices: [
      { text: "Nossa amor... eu amei 🥰", nextScene: "23" },
      { text: "Essa é a melhor forma de registrar ❤️", nextScene: "24" }
    ]
  },
  {
    id: "23",
    manMood: "loving",
    womanMood: "very-happy",
    backgroundImage: wallPaper1,
    dialogue: "Sabia que você ia gostar. Faz tanto tempo que você queria ela, né? Você fica tão linda feliz 🥰",
    choices: [{ text: "Próximo", nextScene: "25" }]
  },
  {
    id: "24",
    manMood: "loving",
    womanMood: "happy",
    backgroundImage: wallPaper1,
    dialogue: "Não é mesmo? O que acha de tirarmos a nossa primeira foto? Vamos começar a registrar nossas memórias 🥰",
    choices: [
      { text: "Agora? Bem, é que...", nextScene: "26" },
      { text: "Bora 🤗", nextScene: "27" }
    ]
  },
  {
    id: "25",
    manMood: "happy",
    womanMood: "happy",
    backgroundImage: wallPaper1,
    dialogue: "Vamos tirar nossa primeira foto?",
    choices: [
      { text: "Agora? Bem, é que...", nextScene: "26" },
      { text: "Bora 🤗", nextScene: "27" }
    ]
  },
  {
    id: "26",
    manMood: "loving",
    womanMood: "embarrassed",
    backgroundImage: wallPaper1,
    dialogue: "Não se preocupe, meu bem. Se ela não ficar boa, tiramos outra!",
    choices: [{ text: "[Tirar Foto]", nextScene: "27" }]
  },
  {
    id: "27",
    manMood: "happy",
    womanMood: "happy",
    backgroundImage: wallPaper1,
    dialogue: "O que você achou?",
    choices: [
      { text: "Ficou perfeita 😍", nextScene: "28" },
      { text: "Talvez tirar mais uma...", nextScene: "29" }
    ]
  },
  {
    id: "28",
    manMood: "loving",
    womanMood: "very-happy",
    backgroundImage: wallPaper1,
    dialogue: "Nossa primeira polaroid juntos ❤️ de muitas. Só fico imaginando você e a Dri se divertindo com ela, haha",
    choices: [{ text: "Próximo", nextScene: "30" }]
  },
  {
    id: "29",
    manMood: "happy",
    womanMood: "neutral",
    backgroundImage: wallPaper1,
    dialogue: "Vamos tirar outra, então. Não é muito fácil tirar selfie com ela, né?",
    choices: [{ text: "Próximo", nextScene: "30" }]
  },
  {
    id: "30",
    manMood: "happy",
    womanMood: "very-happy",
    backgroundImage: wallPaper1,
    dialogue: "Eu comprei ela a um tempo, e estava esperando o momento ideal para te dar.",
    choices: [
      { text: "Vi que você estava aprontando memsmo...", nextScene: "31" },
      { text: "Eu amei, amor. Então, o jantar especial de hoje...", nextScene: "31" }
    ]
  },
  {
    id: "31",
    manMood: "embarrassed",
    womanMood: "happy",
    backgroundImage: wallPaper1,
    dialogue: "Sim haha você me pegou. O jantar faz parte dessa surpresinha. Eu tinha planejado te levar comer fora, mas como somos bocós estamos com poucos recursos",
    choices: [
      { text: "O importante é a intenção 🤗", nextScene: "32" },
      { text: "Ah não se preocupe, tenho certeza de que vai ficar uma delícia ❤️", nextScene: "33" }
    ]
  },
  {
    id: "32",
    manMood: "loving",
    womanMood: "happy",
    backgroundImage: wallPaper1,
    dialogue: "Fico feliz que pense assim. Pode ter certeza que irei caprichar ❤️",
    choices: [{ text: "Próximo", nextScene: "34" }]
  },
  {
    id: "33",
    manMood: "embarrassed",
    womanMood: "very-happy",
    backgroundImage: wallPaper1,
    dialogue: "Owwwn, obrigado amor ❤️ eu vou me esforçar, também espero que fique bom.",
    choices: [{ text: "Próximo", nextScene: "34" }]
  },
  {
    id: "34",
    manMood: "neutral",
    womanMood: "neutral",
    backgroundImage: wallPaper1,
    dialogue: "Agora, preciso ir para a cozinha preparar nosso jantar especial. Até daqui a pouco, meu amor!",
    choices: [{ text: "[FIM]", nextScene: "end" }]
  },
  {
    id: "end",
    manMood: "neutral",
    womanMood: "neutral",
    backgroundImage: end,
    dialogue: "",
    choices: [],
  }
]