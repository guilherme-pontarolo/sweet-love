import { useEffect, useState, useMemo, useCallback } from 'react'
import { Scene } from './components/Scene'
import { getSceneList } from './engine/storyEngine'
import { StartMenu } from './components/StartMenu'
import { AudioPlayer } from './components/AudioPlayer'
import { AudioContextProvider, useAudioPlayer } from './contexts/AudioPlayerContext'

function AppContent() {
  const scenes = useMemo(() => getSceneList(), [])
  const [currentScene, setCurrentScene] = useState<string | null>(localStorage.getItem('currentScene') || null)
  const { playAudio } = useAudioPlayer()

  const start = useCallback(() => {
    setCurrentScene('start')
    localStorage.setItem('currentScene', 'start')
    playAudio()
  }, [playAudio])

  const restart = useCallback(() => {
    localStorage.removeItem('currentScene')
    localStorage.removeItem('sceneHistory')
    window.location.reload()
  }, [])

  const GameContent = useCallback(() => {
    if (!currentScene) {
      return (
        <div className='relative h-dvh lg:w-3xl sm:w-full'>
          <StartMenu onStart={start} />
        </div>
      )
    }
    return (
      <div className='relative h-dvh lg:w-3xl sm:w-full'>
        <button className='absolute top-2 right-2 z-50 bg-white/70 rounded-xl px-1 py-1 font-bold' onDoubleClick={restart}>Menu</button>
        <Scene scenes={scenes} />
      </div>
    )
  }, [currentScene, start, restart, scenes])

  return (
    <>
      <AudioPlayer />
      <GameContent />
    </>
  )
}

function App() {
  return (
    <AudioContextProvider>
      <AppContent />
    </AudioContextProvider>
  )
}

export default App
