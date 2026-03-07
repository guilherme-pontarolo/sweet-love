import { useAudioPlayer } from "../contexts/AudioPlayerContext";
import backgroundMusic from '../assets/audios/beneath-the-mask.mp3'
import buttonPressEffect from '../assets/audios/button-press.mp3'
import buttonPress2Effect from '../assets/audios/button-press2.mp3'

export function AudioPlayer() {
    const { audioRef, buttonPressRef, backButtonPressRef } = useAudioPlayer()

    return (
        <>
            <audio ref={audioRef} src={backgroundMusic} loop />
            <audio ref={buttonPressRef} src={buttonPressEffect} />
            <audio ref={backButtonPressRef} src={buttonPress2Effect} />
        </>
    )
}