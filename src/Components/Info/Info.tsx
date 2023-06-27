import {Link} from "react-router-dom"
import styled, {css} from "styled-components"

const StyledInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const StyledText = styled.p`
    ${({theme}) => {
        const fontColor = theme.colors.font

        return css`
            color: ${fontColor};
            font-size: calc(3rem + 2vw);
            font-weight: 600;
        `
    }}
`

const StyledButton = styled.button`
    ${({theme}) => {
        const fontColor = theme.colors.font

        return css`
            border: 4px solid ${fontColor};
            padding: 14px 24px;
            color: ${fontColor};
            font-size: calc(1rem + 1vw);
            font-style: italic;
            font-weight: 600;
            width: fit-content;
            transition: all 0.2s ease-in-out;
            background-color: transparent;
            cursor: pointer;

            &:hover {
                filter: brightness(0.85);
            }
        `
    }}
`

interface IInfo {
    infoText: string
    buttonLabel: string
    buttonLink: string
}

export const Info: React.FC<IInfo> = ({infoText, buttonLabel, buttonLink}) => {
    return (
        <StyledInfoWrapper>
            <StyledText>{infoText}</StyledText>
            <Link to={buttonLink}>
                <StyledButton>{buttonLabel}</StyledButton>
            </Link>
        </StyledInfoWrapper>
    )
}
