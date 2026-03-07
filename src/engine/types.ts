export type SceneId = string

export interface GameState {
  currentScene: SceneId
  sceneHistory: SceneId[]
  flags: Record<string, boolean | number | string>
}

export interface Choice {
  text: string
  nextScene: SceneId
  condition?: (state: GameState) => boolean
  effects?: (state: GameState) => GameState
}

export interface Scene {
  id: SceneId
  dialogue: string
  backgroundImage: string
  manMood?: PossibleEmotions
  womanMood?: PossibleEmotions
  choices: Choice[]
}

export interface SceneMap {
    [key: SceneId]: Scene
}

export type PossibleSprites = 'man' | 'woman'
export type PossibleEmotions = 'neutral' | 'happy' | 'very-happy' | 'embarrassed' | 'surprised' | 'concerned' | 'sad' | 'angry' | 'loving'

export type SpriteMap = {

  [key in PossibleSprites]?: {
    [emotion in PossibleEmotions]?: string 
  }
}