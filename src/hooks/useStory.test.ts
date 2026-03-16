import { renderHook, act } from '@testing-library/react'
import { useStory } from '../hooks/useStory'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import type { Scene } from '../engine/types'

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

describe('useStory', () => {
  const mockScenes: Scene[] = [
    {
      id: 'start',
      dialogue: 'Start dialogue',
      choices: [{ text: 'choice1', nextScene: 'scene1' }],
      backgroundImage: ''
    },
    {
      id: 'scene1',
      dialogue: 'Scene1 dialogue',
      choices: [{ text: 'choice2', nextScene: 'scene2' }],
      backgroundImage: ''
    },
  ]

  beforeEach(() => {
    vi.clearAllMocks()
    localStorageMock.getItem.mockReturnValue(null)
  })

  it('initializes with default state', () => {
    const { result } = renderHook(() => useStory(mockScenes))

    expect(result.current.state.currentScene).toBe('start')
    expect(result.current.state.sceneHistory).toEqual([])
    expect(result.current.canBackScene()).toBe(false)
  })

  it('loads state from localStorage', () => {
    localStorageMock.getItem.mockImplementation((key: string) => {
      if (key === 'currentScene') return 'scene1'
      if (key === 'sceneHistory') return JSON.stringify(['start'])
      return null
    })

    const { result } = renderHook(() => useStory(mockScenes))

    expect(result.current.state.currentScene).toBe('scene1')
    expect(result.current.state.sceneHistory).toEqual(['start'])
  })

  it('chooses a choice and updates state', () => {
    const { result } = renderHook(() => useStory(mockScenes))

    act(() => {
      result.current.choose(mockScenes[0].choices[0])
    })

    expect(result.current.state.currentScene).toBe('scene1')
    expect(result.current.state.sceneHistory).toEqual(['start'])
    expect(localStorageMock.setItem).toHaveBeenCalledWith('currentScene', 'scene1')
    expect(localStorageMock.setItem).toHaveBeenCalledWith('sceneHistory', JSON.stringify(['start']))
  })

  it('backs to previous scene', () => {
    localStorageMock.getItem.mockImplementation((key: string) => {
      if (key === 'currentScene') return 'scene1'
      if (key === 'sceneHistory') return JSON.stringify(['start'])
      return null
    })

    const { result } = renderHook(() => useStory(mockScenes))

    act(() => {
      result.current.backScene()
    })

    expect(result.current.state.currentScene).toBe('start')
    expect(result.current.state.sceneHistory).toEqual([])
  })

  it('does not back if no history', () => {
    const { result } = renderHook(() => useStory(mockScenes))

    act(() => {
      result.current.backScene()
    })

    expect(result.current.state.currentScene).toBe('start')
  })
})