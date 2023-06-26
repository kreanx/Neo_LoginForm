import styled from "styled-components"

const CircleWrapper = styled.div<ICircle>`
    width: ${({size}) => size + "px"};
    height: ${({size}) => size + "px"};
    border-radius: 50%;
    position: absolute;
    top: ${({top}) => top + "px" || "initial"};
    left: ${({left}) => left + "px" || "initial"};
    bottom: ${({bottom}) => bottom + "px" || "initial"};
    right: ${({ right }) => right + "px" || "initial"};
    background: linear-gradient(180deg, #530061 0%, #0D0A30 100%);
    z-index: -1;
`

export interface ICircle {
    size: string | number
    top?: string | number
    left?: string | number
    bottom?: string | number
    right?: string | number
}

export const Circle: React.FC<ICircle> = ({size, top, bottom, right, left}) => {
    console.log(size, top, bottom, right, left)

    return (
        <CircleWrapper
            size={size}
            top={top}
            bottom={bottom}
            right={right}
            left={left}
        />
    )
}
