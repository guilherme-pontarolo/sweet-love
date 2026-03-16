import { render, screen } from '@testing-library/react'
import { AudioContextProvider, useAudioPlayer } from '../contexts/AudioPlayerContext'
import { describe, expect, it, vi } from 'vitest'

// Mock HTMLAudioElement
const mockAudioElement = {
    play: vi.fn(),
    pause: vi.fn(),
    volume: 1,
    currentTime: 0,
}

Object.defineProperty(window.HTMLMediaElement.prototype, 'play', {
    writable: true,
    value: vi.fn(),
})

Object.defineProperty(window.HTMLMediaElement.prototype, 'pause', {
    writable: true,
    value: vi.fn(),
})

// Component to test the hook
function TestComponent() {
    try {
        const { isPlaying, playAudio, pauseAudio, playButtonEffect } = useAudioPlayer()
        return (
            <div>
                <span data-testid="is-playing">{isPlaying.toString()}</span>
                <button onClick={playAudio} data-testid="play">Play</button>
                <button onClick={pauseAudio} data-testid="pause">Pause</button>
                <button onClick={playButtonEffect} data-testid="button-effect">Button Effect</button>
            </div>
        )
    } catch (error) {
        throw error
    }
}

describe('AudioPlayerContext', () => {
    it('provides audio player functions', () => {
        render(
            <AudioContextProvider>
                <TestComponent />
            </AudioContextProvider>
        )

        expect(screen.getByTestId('is-playing')).toHaveTextContent('false')
        expect(screen.getByTestId('play')).toBeInTheDocument()
        expect(screen.getByTestId('pause')).toBeInTheDocument()
        expect(screen.getByTestId('button-effect')).toBeInTheDocument()
    })
})