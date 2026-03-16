import type { Scene as SceneType } from "../engine/types"
import { buildSceneMap, getSceneList } from '../engine/storyEngine'
import { describe, expect, it, vi } from 'vitest'

// Mock the chapters
vi.mock('../story/chapter1', () => ({
  chapter1: [
    { id: 'c1s1', dialogue: 'Chapter 1 Scene 1' },
    { id: 'c1s2', dialogue: 'Chapter 1 Scene 2' },
  ],
}))

vi.mock('../story/chapter2', () => ({
  chapter2: [
    { id: 'c2s1', dialogue: 'Chapter 2 Scene 1' },
  ],
}))

describe('storyEngine', () => {
  describe('buildSceneMap', () => {
    it('builds a scene map from scenes array', () => {
      const scenes: SceneType[] = [
        { id: 'scene1', dialogue: 'Dialogue 1', backgroundImage: '', choices: [] },
        { id: 'scene2', dialogue: 'Dialogue 2', backgroundImage: '', choices: [] },
      ]

      const sceneMap = buildSceneMap(scenes)

      expect(sceneMap).toEqual({
        scene1: { id: 'scene1', dialogue: 'Dialogue 1', backgroundImage: '', choices: [] },
        scene2: { id: 'scene2', dialogue: 'Dialogue 2', backgroundImage: '', choices: [] },
      })
    })
  })

  describe('getSceneList', () => {
    it('returns combined scenes from all chapters', () => {
      const scenes = getSceneList()

      expect(scenes).toHaveLength(3)
      expect(scenes[0].id).toBe('c1s1')
      expect(scenes[1].id).toBe('c1s2')
      expect(scenes[2].id).toBe('c2s1')
    })
  })
})