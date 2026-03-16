import { useState, useMemo, useCallback } from 'react'
import { Scene } from './components/Scene'
import { getSceneList } from './engine/storyEngine'
import { StartMenu } from './components/StartMenu'
import { AudioPlayer } from './components/AudioPlayer'
import { AudioContextProvider, useAudioPlayer } from './contexts/AudioPlayerContext'
import { BackMenuButton } from './components/BackMenuButton'

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

  const showStartMenu = !currentScene

  return (
    <>
      <AudioPlayer />
      {showStartMenu ? (
        <div className='relative h-dvh lg:w-3xl sm:w-full overflow-hidden'>
          <StartMenu onStart={start} />
        </div>
      ) : (
        <div className='relative h-dvh lg:w-3xl sm:w-full overflow-hidden'>
          <BackMenuButton onConfirm={restart} />
          <Scene scenes={scenes} />
        </div>
      )}
    </>
  )
}

function App() {
  return (
    <AudioContextProvider>
      <div className="md:flex md:justify-center">
        <AppContent />
      </div>
    </AudioContextProvider>
  )
}

export default App
