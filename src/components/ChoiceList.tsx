import { useAudioPlayer } from "../contexts/AudioPlayerContext"
import type { Choice, Scene } from "../engine/types"
import { memo, useCallback } from "react"
import { useTranslation } from 'react-i18next'

export interface OptionProps {
    scene: Scene
    choose: (choice: Choice) => void
}

export const ChoiceList = memo(function ChoiceList(props: OptionProps) {
    const { playButtonEffect } = useAudioPlayer()
    const { t } = useTranslation()

    function indexToLetter(index: number) {
        return String.fromCharCode(65 + index)
    }

    const handleClick = useCallback((choice: Choice) => {
        playButtonEffect()
        props.choose(choice)
    }, [playButtonEffect, props])

    return (
        <>
            {props.scene.choices.map((choice, i) => (
                <div key={`${props.scene.id}-${i}-${choice.nextScene}`} className="flex flex-row align-middle gap-1 py-1" onClick={() => handleClick(choice)}>
                    <h2 className="text-rose-400 font-bold">{indexToLetter(i)}.</h2>
                    <p>{t(choice.text)}</p>
                </div>

            ))}
        </>
    )
})