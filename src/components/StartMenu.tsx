import startMenuBg from '../assets/images/wallPapers/startMenu.png'
import { useAudioPlayer } from '../contexts/AudioPlayerContext'

interface StartMenuProps {
    onStart: () => void
}
export function StartMenu(props: StartMenuProps) {
    const { playButtonEffect } = useAudioPlayer()

    const handleStart = () => {
        playButtonEffect()
        props.onStart()
    }
    return (
        <div className="w-full h-full bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: `url(${startMenuBg})` }}>
            <button className='w-80 h-15 bg-rose-400 rounded-2xl font-bold text-2xl text-amber-50 mt-100' onClick={handleStart}>Iniciar</button>
        </div>
    )
}