import { useMemo, useState } from "react"
import type { Scene, Choice, GameState } from "../engine/types"
import { buildSceneMap } from "../engine/storyEngine"

export function useStory(scenes: Scene[]) {
  const [state, setState] = useState<GameState>({
    sceneHistory: JSON.parse(localStorage.getItem('sceneHistory') || '[]'),
    currentScene: localStorage.getItem('currentScene') || "start",
    flags: {}
  })

  const sceneMap = useMemo(() => buildSceneMap(scenes), [scenes])

  const currentScene = sceneMap[state.currentScene]

  function choose(choice: Choice) {
    if(!choice.nextScene) {
      return
    }
    setState(prev => {
      let nextState = prev

      if (choice.effects) {
        nextState = choice.effects(prev)
      }

      const newHistory = [...prev.sceneHistory, prev.currentScene]
      localStorage.setItem('currentScene', choice.nextScene)
      localStorage.setItem('sceneHistory', JSON.stringify(newHistory))

      return {
        ...nextState,
        previousScene: prev.currentScene,
        currentScene: choice.nextScene,
        sceneHistory: newHistory
      }
    })
  }

  function backScene() {
    if(state.sceneHistory.length === 0) {
      return
    }
    const sceneHistory = [...state.sceneHistory]
    const previousScene = sceneHistory.pop()

    if(!previousScene) {
      return
    }

    setState((prev) => ({
      ...prev,
      currentScene: previousScene,
      sceneHistory: sceneHistory,
      previousScene: null
    }))
  }

  function canBackScene() {
    return state.sceneHistory.length > 0
  }

  return {
    state,
    currentScene,
    choose,
    backScene,
    canBackScene
  } 
}
