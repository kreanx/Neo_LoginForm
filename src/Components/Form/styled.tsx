import styled, {css} from "styled-components"
import {CircleColor} from "../Circle/Circle"

export const FormWrapper = styled.form`
    padding: 100px 40px 50px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-radius: 20px;
    background: linear-gradient(
            294deg,
            rgba(191, 191, 191, 0.06) 0%,
            rgba(0, 0, 0, 0) 100%
        ),
        rgba(0, 0, 0, 0.14);
    box-shadow: -8px 4px 5px 0px rgba(0, 0, 0, 0.24);
    backdrop-filter: blur(26.5px);
    min-width: 480px;
    border: 1px solid ${({theme}) => theme.colors.font};
`

export const MediumText = styled.p`
    ${({theme}) => {
        return css`
            font-size: calc(1.5rem + 1vh);
            font-weight: 600;
            color: ${theme.colors.font};
        `
    }}
`
export const SmallText = styled.p`
    ${({theme}) => {
        return css`
            font-size: calc(0.8rem + 1vh);
            font-weight: 500;
            color: ${theme.colors.font};
        `
    }}
`

export const StyledInput = styled.input<{isError?: boolean}>`
    ${({theme, isError}) => {
        const color = theme.colors.font

        return css`
            font-size: calc(1rem + 1vh);
            font-weight: 500;
            color: ${color};
            border: ${isError ? `1px solid red` : `1px solid ${color}`};
            border-radius: 12px;
            width: 100%;
            padding: 14px 16px;
            background-color: transparent;
        `
    }}
`

export const PasswordInputWrapper = styled.div`
    position: relative;

    & > button {
        background-color: transparent;
        height: 24px;
        border: none;
        cursor: pointer;
        position: absolute;
        right: 16px;
        top: 16px;
    }
`

export const SubmitButton = styled.button<{color?: CircleColor}>`
    width: 100%;
    padding: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.colors.font};
    font-weight: 600;
    font-size: calc(1rem + 1vh);
    border-radius: 12px;
    background: ${({color}) => {
        switch (color) {
            case CircleColor.Blue:
                return `linear-gradient(119deg, #628EFF 0%, #8740CD 53.13%, #580475 100%)`
            case CircleColor.Purple:
                return `linear-gradient(119deg, #2E4CEE 0%, #221EBF 53.13%, #040F75 100%)`
            case CircleColor.Violet:
                return `linear-gradient(119deg, #E948C5 0%, #CD407B 53.13%, #75042D 100%)`
        }
    }};
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    outline: none;
    border: 0;

    &:focus {
        outline: none;
        border: 0;
    }
    &:hover {
        filter: brightness(1.15);
    }
`

export const StyledSubmitButton = styled(SubmitButton)`
    margin-top: 25px;
`

export const FlexContainer = styled.div<{
    direction?: string
    justify?: string
    align?: string
    gap?: string
}>`
    display: flex;
    flex-direction: ${(props) => props.direction || "initial"};
    justify-content: ${(props) => props.justify || "initial"};
    align-items: ${(props) => props.align || "initial"};
    gap: ${(props) => props.gap || 0};
`

export const StyledButtonText = styled.button`
    border: none;
    background: none;
    outline: none;
    color: ${({theme}) => theme.colors.font};
    font-weight: 600;
    font-size: calc(1vw);
    cursor: pointer;
`

export const CheckboxWrapper = styled.div<{isChecked: boolean}>`
    cursor: pointer;
    display: flex;
    gap: 4px;
    user-select: none;
    align-items: center;
    cursor: pointer;
    width: fit-content;
    svg {
    }
    label {
        width: 18px;
        height: 18px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        ${({isChecked}) =>
            isChecked
                ? css`
                      border: none;

                      background: linear-gradient(
                          180deg,
                          rgb(121, 159, 255) 0%,
                          rgb(149, 76, 221) 70%,
                          rgb(111, 9, 144) 100%
                      );
                  `
                : css`
                      border: 1px solid;
                      border-radius: 4px;
                      border-color: rgb(135, 64, 205);
                      background: transparent;
                  `}
    }

    input {
        visibility: hidden;
        display: none;
    }

    p {
        font-size: calc(0.8rem);
        font-weight: 500;
        color: ${({theme}) => theme.colors.font};
    }
`

export const OrDivider = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 20px;
    align-items: center;
    margin-top: 45px;
    div:nth-child(1),
    div:nth-child(3) {
        width: 100%;
    }
`

export const DividerItem = styled.div`
    height: 1px;
    background: rgba(77, 77, 77, 1);
`

export const DividerText = styled.div`
    color: #4d4d4d;
    font-size: 16px;
    font-weight: 500;
`

export const StyledButtonMargin = styled(StyledButtonText)`
    margin-top: 45px;
`

export const StyledError = styled.p`
    color: red;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
`
