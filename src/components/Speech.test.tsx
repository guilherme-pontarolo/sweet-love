import { render, screen, fireEvent } from '@testing-library/react'
import { Speech } from '../components/Speech'
import { describe, expect, it, vi } from 'vitest'
import type { Scene } from '../engine/types'

// Mock the contexts and components
vi.mock('../contexts/AudioPlayerContext', () => ({
    useAudioPlayer: () => ({
        playBackButtonEffect: vi.fn(),
    }),
}))

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}))

vi.mock('./ChoiceList', () => ({
    ChoiceList: ({ scene, choose }: { scene: Scene; choose: (choice: any) => void }) => (
        <div data-testid="choice-list">
            {scene.choices.map((choice, index) => (
                <button key={index} onClick={() => choose(choice)}>
                    {choice.text}
                </button>
            ))}
        </div>
    ),
}))

vi.mock('./Sprite', () => ({
    Sprite: () => <div data-testid="sprite" />,
}))

describe('Speech', () => {
    const mockScene: Scene = {
        id: 'test',
        dialogue: 'test dialogue',
        choices: [
            { text: 'choice1', nextScene: 'next1' },
            { text: 'choice2', nextScene: 'next2' },
        ],
        manMood: 'happy',
        womanMood: 'neutral',
        backgroundImage: 'test.png',
    }

    it('renders the back button when canBackScene is true', () => {
        const mockChoose = vi.fn()
        const mockBackScene = vi.fn()

        render(
            <Speech
                scene={mockScene}
                choose={mockChoose}
                backScene={mockBackScene}
                canBackScene={true}
            />
        )

        const backButton = screen.getByRole('button', { name: /back/i })
        expect(backButton).toBeInTheDocument()
    })

    it('does not render the back button when canBackScene is false', () => {
        const mockChoose = vi.fn()
        const mockBackScene = vi.fn()

        render(
            <Speech
                scene={mockScene}
                choose={mockChoose}
                backScene={mockBackScene}
                canBackScene={false}
            />
        )

        const backButton = screen.queryByRole('button', { name: /back/i })
        expect(backButton).not.toBeInTheDocument()
    })

    it('calls backScene when back button is clicked', () => {
        const mockChoose = vi.fn()
        const mockBackScene = vi.fn()

        render(
            <Speech
                scene={mockScene}
                choose={mockChoose}
                backScene={mockBackScene}
                canBackScene={true}
            />
        )

        const backButton = screen.getByRole('button', { name: /back/i })
        fireEvent.click(backButton)

        expect(mockBackScene).toHaveBeenCalledTimes(1)
    })

    it('renders ChoiceList with scene', () => {
        const mockChoose = vi.fn()
        const mockBackScene = vi.fn()

        render(
            <Speech
                scene={mockScene}
                choose={mockChoose}
                backScene={mockBackScene}
                canBackScene={false}
            />
        )

        expect(screen.getByTestId('choice-list')).toBeInTheDocument()
    })
})