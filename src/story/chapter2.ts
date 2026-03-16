import wallPaper1 from '../assets/images/wallPapers/wallPaper1.png'
import end from '../assets/images/wallPapers/wallPaper1.png'

import type { Scene } from "../engine/types"

export const chapter2: Scene[] = [
  {
    id: "19",
    manMood: "happy",
    womanMood: "neutral",
    backgroundImage: wallPaper1,
    dialogue: "chapter2__19",
    choices: [
      { text: "chapter2_19_option1", nextScene: "20" },
      { text: "chapter2_19_option2", nextScene: "20" }
    ]
  },
  {
    id: "20",
    manMood: "happy",
    womanMood: "neutral",
    backgroundImage: wallPaper1,
    dialogue: "chapter2__20",   
    choices: [{ text: "chapter2_20_option1", nextScene: "21" }]
  },
  {
    id: "21",
    manMood: "very-happy",
    womanMood: "neutral",
    backgroundImage: wallPaper1,
    dialogue: "chapter2__21",
    choices: [{ text: "chapter2_21_option1", nextScene: "22" }]
  },
  {
    id: "22",
    manMood: "happy",
    womanMood: "surprised",
    backgroundImage: wallPaper1,
    dialogue: "chapter2__22",
    choices: [
      { text: "chapter2_22_option1", nextScene: "23" },
      { text: "chapter2_22_option2", nextScene: "24" }
    ]
  },
  {
    id: "23",
    manMood: "loving",
    womanMood: "very-happy",
    backgroundImage: wallPaper1,
    dialogue: "chapter2__23",
    choices: [{ text: "chapter2_23_option1", nextScene: "25" }]
  },
  {
    id: "24",
    manMood: "loving",
    womanMood: "happy",
    backgroundImage: wallPaper1,
    dialogue: "chapter2__24",
    choices: [
      { text: "chapter2_24_option1", nextScene: "26" },
      { text: "chapter2_24_option2", nextScene: "27" }
    ]
  },
  {
    id: "25",
    manMood: "happy",
    womanMood: "happy",
    backgroundImage: wallPaper1,
    dialogue: "chapter2__25",
    choices: [
      { text: "chapter2_25_option1", nextScene: "26" },
      { text: "chapter2_25_option2", nextScene: "27" }
    ]
  },
  {
    id: "26",
    manMood: "loving",
    womanMood: "embarrassed",
    backgroundImage: wallPaper1,
    dialogue: "chapter2__26",
    choices: [{ text: "chapter2_26_option1", nextScene: "27" }]
  },
  {
    id: "27",
    manMood: "happy",
    womanMood: "happy",
    backgroundImage: wallPaper1,
    dialogue: "chapter2__27",
    choices: [
      { text: "chapter2_27_option1", nextScene: "28" },
      { text: "chapter2_27_option2", nextScene: "29" }
    ]
  },
  {
    id: "28",
    manMood: "loving",
    womanMood: "very-happy",
    backgroundImage: wallPaper1,
    dialogue: "chapter2__28",
    choices: [{ text: "chapter2_28_option1", nextScene: "30" }]
  },
  {
    id: "29",
    manMood: "happy",
    womanMood: "neutral",
    backgroundImage: wallPaper1,
    dialogue: "chapter2__29",
    choices: [{ text: "chapter2_29_option1", nextScene: "30" }]
  },
  {
    id: "30",
    manMood: "happy",
    womanMood: "very-happy",
    backgroundImage: wallPaper1,
    dialogue: "chapter2__30",
    choices: [
      { text: "chapter2_30_option1", nextScene: "31" },
      { text: "chapter2_30_option2", nextScene: "31" }
    ]
  },
  {
    id: "31",
    manMood: "embarrassed",
    womanMood: "happy",
    backgroundImage: wallPaper1,
    dialogue: "chapter2__31",
    choices: [
      { text: "chapter2_31_option1", nextScene: "32" },
      { text: "chapter2_31_option2", nextScene: "33" }
    ]
  },
  {
    id: "32",
    manMood: "loving",
    womanMood: "happy",
    backgroundImage: wallPaper1,
    dialogue: "chapter2__32",
    choices: [{ text: "chapter2_32_option1", nextScene: "34" }]
  },
  {
    id: "33",
    manMood: "embarrassed",
    womanMood: "very-happy",
    backgroundImage: wallPaper1,
    dialogue: "chapter2__33",
    choices: [{ text: "chapter2_33_option1", nextScene: "34" }]
  },
  {
    id: "34",
    manMood: "neutral",
    womanMood: "neutral",
    backgroundImage: wallPaper1,
    dialogue: "chapter2__34",
    choices: [{ text: "chapter2_34_option1", nextScene: "end" }]
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