import { t } from "i18next"
import { useEffect, useState } from "react"

interface BackMenuButtonProps {
    onConfirm: () => void
}

export function BackMenuButton(props: BackMenuButtonProps) {
    const [confirm, setConfirm] = useState(false)


    useEffect(() => {
        const timeout = setTimeout(() => {
            setConfirm(false)
        }, 2000)

        return () => clearTimeout(timeout)
    }, [confirm])
    if (confirm) {
        return (
            <button className='absolute top-2 right-2 z-50 bg-red-600/70 rounded-xl px-1 py-1 font-bold' onClick={props.onConfirm}>{t('confirm')}</button>
        )
    }

    return (
        <button className='absolute top-2 right-2 z-50 bg-white/70 rounded-xl px-1 py-1 font-bold' onClick={() => setConfirm(true)}>{t('menu')}</button>
    )
}