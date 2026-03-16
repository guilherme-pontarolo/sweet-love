import { render, screen, fireEvent } from '@testing-library/react'
import { StartMenu } from '../components/StartMenu'
import { describe, expect, it, vi } from 'vitest'

// Mock the contexts and hooks
vi.mock('../contexts/AudioPlayerContext', () => ({
    useAudioPlayer: () => ({
        playButtonEffect: vi.fn(),
    }),
}))

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
        i18n: {
            resolvedLanguage: 'pt',
        },
    }),
}))

vi.mock('../i18n', () => ({
    availableLanguages: [
        { code: 'pt', name: 'Portuguese' },
        { code: 'en', name: 'English' },
    ],
    setLanguage: vi.fn(),
}))

describe('StartMenu', () => {
    it('renders the start button', () => {
        const mockOnStart = vi.fn()
        render(<StartMenu onStart={mockOnStart} />)

        const startButton = screen.getByRole('button', { name: /start/i })
        expect(startButton).toBeInTheDocument()
    })

    it('calls onStart when start button is clicked', () => {
        const mockOnStart = vi.fn()
        render(<StartMenu onStart={mockOnStart} />)

        const startButton = screen.getByRole('button', { name: /start/i })
        fireEvent.click(startButton)

        expect(mockOnStart).toHaveBeenCalledTimes(1)
    })

    it('renders language selector', () => {
        const mockOnStart = vi.fn()
        render(<StartMenu onStart={mockOnStart} />)

        const select = screen.getByRole('combobox')
        expect(select).toBeInTheDocument()
        expect(select).toHaveValue('pt')
    })
})