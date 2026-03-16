import { useState, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
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

  const { t } = useTranslation()
  const showStartMenu = !currentScene

  return (
    <>
      <AudioPlayer />
      {showStartMenu ? (
        <div className='relative h-dvh lg:w-3xl sm:w-full'>
          <StartMenu onStart={start} />
        </div>
      ) : (
        <div className='relative h-dvh lg:w-3xl sm:w-full'>
          <button className='absolute top-2 right-2 z-50 bg-white/70 rounded-xl px-1 py-1 font-bold' onDoubleClick={restart}>{t('menu')}</button>
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
