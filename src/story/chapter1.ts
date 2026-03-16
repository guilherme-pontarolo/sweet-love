import wallPaper0 from '../assets/images/wallPapers/wallPaper0.png'

import type { Scene } from "../engine/types"

export const chapter1: Scene[] = [
  {
    id: "start",
    manMood: "neutral",
    womanMood: "neutral",
    backgroundImage: wallPaper0,
    dialogue: "chapter1__start",
    choices: [
      {
        text: "chapter1_start_option1",
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
        text: "chapter1_start_option2",
        nextScene: "2"
      }
    ]
  },
  {
    id: "1",
    womanMood: "surprised",
    manMood: "happy",
    backgroundImage: wallPaper0,
    dialogue: "chapter1__1",
    choices: [
      {
        text: "chapter1_1_option1",
        nextScene: "3"
      },
      {
        text: "chapter1_1_option2",
        nextScene: "4"
      }
    ]
  },
  {
    id: "2",
    womanMood: "surprised",
    manMood: "happy",
    backgroundImage: wallPaper0,
    dialogue: "chapter1__2",
    choices: [
      {
        text: "chapter1_2_option1",
        nextScene: "5"
      },
      {
        text: "chapter1_2_option2",
        nextScene: "5"
      },
    ]
  },
  {
    id: "3",
    womanMood: "neutral",
    manMood: "neutral",
    backgroundImage: wallPaper0,
    dialogue: "chapter1__3",
    choices: [
      {
        text: "chapter1_3_option1",
        nextScene: "6"
      },
    ]
  },
  {
    id: "4",
    womanMood: "concerned",
    manMood: "neutral",
    backgroundImage: wallPaper0,
    dialogue: "chapter1__4",
    choices: [
      {
        text: "chapter1_4_option1",
        nextScene: "6"
      },
    ]
  },
  {
    id: "5",
    womanMood: "very-happy",
    manMood: "very-happy",
    backgroundImage: wallPaper0,
    dialogue: "chapter1__5",
    choices: [
      {
        text: "chapter1_5_option1",
        nextScene: "6"
      },
    ]
  },
  {
    id: "6",
    womanMood: "surprised",
    manMood: "happy",
    backgroundImage: wallPaper0,
    dialogue: "chapter1__6",
    choices: [
      {
        text: "chapter1_6_option1",
        nextScene: "7"
      },
      {
        text: "chapter1_6_option2",
        nextScene: "8"
      },
    ]
  },
  {
    id: "7",
    womanMood: "embarrassed",
    manMood: "very-happy",
    backgroundImage: wallPaper0,
    dialogue: "chapter1__7",
    choices: [
      {
        text: "chapter1_7_option1",
        nextScene: "9"
      },
    ]
  },
  {
    id: "8",
    womanMood: "neutral",
    manMood: "neutral",
    backgroundImage: wallPaper0,
    dialogue: "chapter1__8",
    choices: [
      {
        text: "chapter1_8_option1",
        nextScene: "9"
      },
    ]
  },
  {
    id: "9",
    womanMood: "neutral",
    manMood: "neutral",
    backgroundImage: wallPaper0,
    dialogue: "chapter1__9",
    choices: [
      {
        text: "chapter1_9_option1",
        nextScene: "10"
      },
    ]
  },
  {
    id: "10",
    womanMood: "surprised",
    manMood: "loving",
    backgroundImage: wallPaper0,
    dialogue: "chapter1__10",
    choices: [
      {
        text: "chapter1_10_option1",
        nextScene: "11"
      },
      {
        text: "chapter1_10_option2",
        nextScene: "11"
      },
    ]
  },
  {
    id: "11",
    womanMood: "happy",
    manMood: "sad",
    backgroundImage: wallPaper0,
    dialogue: "chapter1__11",
    choices: [
      {
        text: "chapter1_11_option1",
        nextScene: "12"
      },
    ]
  },
  {
    id: "12",
    womanMood: "loving",
    manMood: "loving",
    backgroundImage: wallPaper0,
    dialogue: "chapter1__12",
    choices: [
      {
        text: "chapter1_12_option1",
        nextScene: "13"
      },
      {
        text: "chapter1_12_option2",
        nextScene: "14"
      },
    ]
  },
  {
    id: "13",
    womanMood: "angry",
    manMood: "neutral",
    backgroundImage: wallPaper0,
    dialogue: "chapter1__13",
    choices: [
      {
        text: "chapter1_13_option1",
        nextScene: "15"
      },
    ]
  },
  {
    id: "14",
    womanMood: "very-happy",
    manMood: "loving",
    backgroundImage: wallPaper0,
    dialogue: "chapter1__14",
    choices: [
      {
        text: "chapter1_14_option1",
        nextScene: "16"
      },
    ]
  },
  {
    id: "15",
    womanMood: "neutral",
    manMood: "happy",
    backgroundImage: wallPaper0,
    dialogue: "chapter1__15",
    choices: [
      {
        text: "chapter1_15_option1",
        nextScene: "17"
      },
    ]
  },
  {
    id: "16",
    womanMood: "neutral",
    manMood: "neutral",
    backgroundImage: wallPaper0,
    dialogue: "chapter1__16",
    choices: [
      {
        text: "chapter1_16_option1",
        nextScene: "17"
      },
    ]
  },
  {
    id: "17",
    womanMood: "concerned",
    manMood: "neutral",
    backgroundImage: wallPaper0,
    dialogue: "chapter1__17",
    choices: [
      {
        text: "chapter1_17_option1",
        nextScene: "18"
      },
    ]
  },
  {
    id: "18",
    womanMood: "surprised",
    manMood: "happy",
    backgroundImage: wallPaper0,
    dialogue: "chapter1__18",
    choices: [
      {
        text: "chapter1_18_option1",
        nextScene: "19"
      },
    ]
  },
]
