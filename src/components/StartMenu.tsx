import startMenuBg from '../assets/images/wallPapers/startMenu.png'
import { useAudioPlayer } from '../contexts/AudioPlayerContext'
import { useTranslation } from 'react-i18next'
import { availableLanguages, setLanguage } from '../i18n'

interface StartMenuProps {
    onStart: () => void
}
export function StartMenu(props: StartMenuProps) {
    const { playButtonEffect } = useAudioPlayer()
    const { t, i18n } = useTranslation()

    const currentLang = i18n.resolvedLanguage ?? 'pt'

    const handleStart = () => {
        playButtonEffect()
        props.onStart()
    }

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang)
    }

    return (
        <div className="w-full h-full bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: `url(${startMenuBg})` }}>
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/80 rounded-xl px-3 py-2">
                <span className="text-sm font-semibold">{t('language')}:</span>
                <select
                    value={currentLang}
                    onChange={(event) => handleLanguageChange(event.target.value)}
                    className="rounded-lg border border-rose-200 bg-white px-2 py-1 text-sm"
                >
                    {availableLanguages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                            {t(lang.code === 'pt' ? 'portuguese' : 'english')}
                        </option>
                    ))}
                </select>
            </div>

            <button className='w-80 h-15 bg-rose-400 rounded-2xl font-bold text-2xl text-amber-50 mt-100' onClick={handleStart}>{t('start')}</button>
        </div>
    )
}