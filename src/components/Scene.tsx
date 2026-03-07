import type { Scene as SceneType } from "../engine/types"
import { useStory } from "../hooks/useStory"
import { End } from "./End"
import { Speech } from "./Speech"
import { Sprite } from "./Sprite"
import { memo } from "react"

export interface SceneProps {
    scenes: SceneType[]
}

export const Scene = memo(function Scene(props: SceneProps) {
    const { currentScene, choose, backScene, canBackScene } = useStory(props.scenes)

    if (currentScene.id == 'end') {
        return <End />
    }

    return (
        <div className="w-full h-full bg-cover bg-center pt-4" style={{ backgroundImage: `url(${currentScene.backgroundImage})` }}>
            <p className="opacity-75 bg-white p-4 rounded-2xl mx-4">{currentScene.dialogue}</p>
            <div className="rounded-full bg-white/50 w-70 h-70 mt-8 ml-auto mb-4 mr-4">
                <Sprite emotion={currentScene.manMood || 'neutral'} sprite="man" />
            </div>
            <Speech scene={currentScene} choose={choose} backScene={backScene} canBackScene={canBackScene()} />
        </div>
    )
})