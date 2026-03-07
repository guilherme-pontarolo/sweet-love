import React, { createContext, useContext, useRef, useState, useEffect } from "react";

interface AudioContextProps {
    audioRef: React.RefObject<HTMLAudioElement | null>
    buttonPressRef: React.RefObject<HTMLAudioElement | null>
    backButtonPressRef: React.RefObject<HTMLAudioElement | null>
    isPlaying: boolean
    playAudio: () => void
    pauseAudio: () => void
    playButtonEffect: () => void
    playBackButtonEffect: () => void
}

const AudioContext = createContext<AudioContextProps>({} as AudioContextProps)

export function AudioContextProvider({ children }: { children: React.ReactNode }) {
    const audioRef = useRef<HTMLAudioElement>(null)
    const buttonPressRef = useRef<HTMLAudioElement>(null)
    const backButtonPressRef = useRef<HTMLAudioElement>(null)

    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        audioRef.current?.play()
        audioRef.current?.pause()

        if (audioRef.current) {
            audioRef.current.volume = 0.1
        }

    }, [audioRef])

    const play = () => {
        if (!audioRef.current || isPlaying) {
            return
        }

        audioRef.current.play()
        setIsPlaying(true)
    }

    const pause = () => {
        if (!audioRef.current || !isPlaying) {
            return
        }
        setIsPlaying(false)
        audioRef.current.pause()
    }

    const playButtonEffect = () => {
        if (!buttonPressRef.current) {
            return
        }
        buttonPressRef.current.currentTime = 0
        buttonPressRef.current.play()
    }

    const playBackButtonEffect = () => {
        if (!backButtonPressRef.current) {
            return
        }
        backButtonPressRef.current.currentTime = 0
        backButtonPressRef.current.play()
    }

    const value: AudioContextProps = {
        audioRef: audioRef,
        buttonPressRef: buttonPressRef,
        backButtonPressRef: backButtonPressRef,
        isPlaying: isPlaying,
        playAudio: play,
        pauseAudio: pause,
        playButtonEffect: playButtonEffect,
        playBackButtonEffect: playBackButtonEffect
    }
    return <AudioContext.Provider value={value}>
        {children}
    </AudioContext.Provider>
}

export function useAudioPlayer() {
    const audioPlayerContext = useContext(AudioContext)

    if (!audioPlayerContext) {
        throw new Error("Is not wrapped by AudioContextProvider")
    }

    return audioPlayerContext
}