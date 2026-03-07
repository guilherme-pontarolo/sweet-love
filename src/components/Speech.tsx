import { useAudioPlayer } from "../contexts/AudioPlayerContext"
import type { Choice, Scene } from "../engine/types"
import { ChoiceList } from "./ChoiceList"
import { Sprite } from "./Sprite"
import { memo, useCallback } from "react"

export interface SpeechProps {
  scene: Scene
  choose: (choice: Choice) => void
  backScene: () => void
  canBackScene: boolean
}

export const Speech = memo(function Speech(props: SpeechProps) {
  const { playBackButtonEffect } = useAudioPlayer()

  const handleBackClick = useCallback(() => {
    playBackButtonEffect()
    props.backScene()
  }, [playBackButtonEffect, props])

  function BackButton() {
    if (!props.canBackScene) {
      return <></>
    }

    return <button
      className="px-3 py-1 ml-12 mb-2 rounded-2xl h-8 bg-rose-400 text-white"
      onClick={handleBackClick}
    >
      Voltar
    </button>
  }

  return (
    <div className="absolute bottom-0 w-full bg-transparent">
      <div className="flex align-bottom justify-end">
        <div className="relative w-30 shrink-0 z-20">
          <div className="absolute -bottom-5 left-1">
            <div className="relative w-35 h-35 bg-rose-400 rounded-full">
              <div className="absolute top-0.5 w-35 h-35 bg-white rounded-full">
                <Sprite emotion={props.scene.womanMood || 'neutral'} sprite="woman" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <BackButton />
          <div className="bg-white/70 pl-10 z-10 border-t-2 border-rose-300">
            <ChoiceList scene={props.scene} choose={props.choose} />
          </div>
        </div>

      </div>
    </div>
  )
})