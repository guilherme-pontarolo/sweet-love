import endBg from '../assets/images/wallPapers/end.png'
import { useAudioPlayer } from '../contexts/AudioPlayerContext'
import { useTranslation } from 'react-i18next'

export function End() {
    const { playButtonEffect } = useAudioPlayer()
    const { t } = useTranslation()

    const restart = () => {
        playButtonEffect()

        localStorage.removeItem('currentScene')
        localStorage.removeItem('sceneHistory')
        window.location.reload()
    }
    return (
        <div className="w-full h-full bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: `url(${endBg})` }}>
            <div className='flex flex-col align-middle mt-5'>
                <div className="bg text-amber-50 text-4xl font-bold font-sans italic text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>❤️</div>
            </div>

            <button className='w-80 h-15 bg-rose-400 rounded-2xl font-bold text-2xl text-amber-50 mt-100' onClick={restart}>{t('backToMenu')}</button>
        </div>
    )
}