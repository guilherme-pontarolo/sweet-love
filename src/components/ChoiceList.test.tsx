import { render, screen, fireEvent } from '@testing-library/react'
import { ChoiceList } from '../components/ChoiceList'
import { describe, expect, it, vi } from 'vitest'
import type { Scene } from '../engine/types'

// Mock the contexts
vi.mock('../contexts/AudioPlayerContext', () => ({
    useAudioPlayer: () => ({
        playButtonEffect: vi.fn(),
    }),
}))

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => `translated-${key}`,
    }),
}))

describe('ChoiceList', () => {
    const mockScene: Scene = {
        id: 'test',
        dialogue: 'test dialogue',
        choices: [
            { text: 'choice1', nextScene: 'next1' },
            { text: 'choice2', nextScene: 'next2' },
        ],
        backgroundImage: ''
    }

    it('renders choices with letters', () => {
        const mockChoose = vi.fn()

        render(<ChoiceList scene={mockScene} choose={mockChoose} />)

        expect(screen.getByText('A.')).toBeInTheDocument()
        expect(screen.getByText('translated-choice1')).toBeInTheDocument()
        expect(screen.getByText('B.')).toBeInTheDocument()
        expect(screen.getByText('translated-choice2')).toBeInTheDocument()
    })

    it('calls choose when choice is clicked', () => {
        const mockChoose = vi.fn()

        render(<ChoiceList scene={mockScene} choose={mockChoose} />)

        const choiceElement = screen.getByText('translated-choice1').closest('div')
        fireEvent.click(choiceElement!)

        expect(mockChoose).toHaveBeenCalledWith(mockScene.choices[0])
    })
})