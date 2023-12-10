import { FC } from 'react'

interface ISpriteIconProps {
    name: string,
    className?: string,
}

const SpriteIcon: FC<ISpriteIconProps> = ({ name, className, ...rest }) => {
    return (
        <svg className={`${className}`} {...rest}>
            <use xlinkHref={`#${name}`} />
        </svg>
    )
}

export default SpriteIcon
