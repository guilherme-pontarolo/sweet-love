import { chapter1 } from "../story/chapter1"
import { chapter2 } from "../story/chapter2"
import type { Scene, SceneMap } from "./types"

export function buildSceneMap(scenes: Scene[]): SceneMap {
  return Object.fromEntries(scenes.map(scene => [scene.id, scene]))
}

export function getSceneList() {
  return [
    ...chapter1,
    ...chapter2
  ]
}