import styled from "styled-components"

const CircleWrapper = styled.div<ICircle>`
    width: ${({size}) => size + "px"};
    height: ${({size}) => size + "px"};
    border-radius: 50%;
    position: absolute;
    top: ${({top}) => top + "px" || "initial"};
    left: ${({left}) => left + "px" || "initial"};
    bottom: ${({bottom}) => bottom + "px" || "initial"};
    right: ${({right}) => right + "px" || "initial"};
    background: ${({color}) => {
        if (color === "purple") {
            return `linear-gradient(180deg, #530061 0%, #0D0A30 100%);`
        }
        if (color === "blue") {
            return `linear-gradient(180deg, #190061 0%, #0A1B30 100%);`
        }
        if (color === "violet") {
            return `linear-gradient(180deg, #61003A 0%, #2D0A30 100%);`
        }
    }};
    z-index: -1;
`

export enum CircleColor {
    Blue = "blue",
    Purple = "purple",
    Violet = "violet",
}
export interface ICircle {
    size: string | number
    top?: string | number
    left?: string | number
    bottom?: string | number
    right?: string | number
    color?: CircleColor
}

export const Circle: React.FC<ICircle> = ({
    size,
    top,
    bottom,
    right,
    left,
    color,
}) => {
    return (
        <CircleWrapper
            size={size}
            top={top}
            bottom={bottom}
            right={right}
            left={left}
            color={color}
        />
    )
}
