import { memo } from "react"
import neutralWomanImage from "../assets/images/character/woman/0.png"
import happyWomanImage from "../assets/images/character/woman/1.png"
import veryHappyWomanImage from "../assets/images/character/woman/2.png"
import embarrasedWomanImage from "../assets/images/character/woman/3.png"
import surprisedWomanImage from "../assets/images/character/woman/4.png"
import concernedWomanImage from "../assets/images/character/woman/5.png"
import sadWomanImage from "../assets/images/character/woman/6.png"
import angryWomanImage from "../assets/images/character/woman/7.png"
import lovingWomanImage from "../assets/images/character/woman/8.png"

import neutralManImage from "../assets/images/character/man/0.png"
import happyManImage from "../assets/images/character/man/3.png"
import veryHappyManImage from "../assets/images/character/man/2.png"
import embarrasedManImage from "../assets/images/character/man/3.png"
import surprisedManImage from "../assets/images/character/man/4.png"
import concernedManImage from "../assets/images/character/man/5.png"
import sadManImage from "../assets/images/character/man/6.png"
import angryManImage from "../assets/images/character/man/7.png"
import lovingManImage from "../assets/images/character/man/8.png"

import type { PossibleEmotions, PossibleSprites, SpriteMap } from "../engine/types";

type SpriteProps = {
    sprite: PossibleSprites
    emotion: PossibleEmotions
}

const spritesMap: SpriteMap = {
    woman: {
        neutral: neutralWomanImage,
        happy: happyWomanImage,
        'very-happy': veryHappyWomanImage,
        embarrassed: embarrasedWomanImage,
        surprised: surprisedWomanImage,
        concerned: concernedWomanImage,
        sad: sadWomanImage,
        angry: angryWomanImage,
        loving: lovingWomanImage
    },
    man: {
        neutral: neutralManImage,
        happy: happyManImage,
        'very-happy': veryHappyManImage,
        embarrassed: embarrasedManImage,
        surprised: surprisedManImage,
        concerned: concernedManImage,
        sad: sadManImage,
        angry: angryManImage,
        loving: lovingManImage
    }
}

export const Sprite = memo(function Sprite(props: SpriteProps) {
    const spriteData = spritesMap[props.sprite]
    if (!spriteData) {
        throw new Error(`Unknown sprite: ${props.sprite}`)
    }
    const emotionImage = spriteData[props.emotion]
    if (!emotionImage) {
        throw new Error(`Unknown emotion: ${props.emotion} for sprite: ${props.sprite}`)
    }
    return (
        <img src={emotionImage} className="w-full h-full object-cover rounded-full" />
    );
})
