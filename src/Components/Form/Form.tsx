import styled, {css} from "styled-components"
import {useState} from "react"
import {ClosedEye} from "../../Assets/tsIcons/ClosedEye"
import {OpenedEye} from "../../Assets/tsIcons/OpenedEye"
import {useForm} from "react-hook-form"
import {Link} from "react-router-dom"

const FormWrapper = styled.form`
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

const MediumText = styled.p`
    ${({theme}) => {
        return css`
            font-size: calc(1.5rem + 1vh);
            font-weight: 600;
            color: ${theme.colors.font};
        `
    }}
`
const SmallText = styled.p`
    ${({theme}) => {
        return css`
            font-size: calc(0.8rem + 1vh);
            font-weight: 500;
            color: ${theme.colors.font};
        `
    }}
`

const StyledInput = styled.input`
    ${({theme}) => {
        const color = theme.colors.font

        return css`
            font-size: calc(1rem + 1vh);
            font-weight: 500;
            color: ${theme.colors.font};
            color: ${color};
            border: 1px solid ${color};
            border-radius: 12px;
            width: 100%;
            padding: 14px 16px;
            background-color: transparent;
        `
    }}
`

const PasswordInput = styled(StyledInput)`
    border-color: red;
`

const PasswordInputWrapper = styled.div`
    position: relative;

    & > button {
        background-color: transparent;
        height: 24px;
        border: none;
        cursor: pointer;
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
    }
`

const SubmitButton = styled.button`
    width: 100%;
    padding: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.colors.font};
    font-weight: 600;
    font-size: calc(1rem + 1vh);
    border-radius: 12px;
    background: linear-gradient(
        119deg,
        #628eff 0%,
        #8740cd 53.13%,
        #580475 100%
    );
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

const FlexContainer = styled.div<{
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

const ForgotButton = styled.button`
    border: none;
    background: none;
    outline: none;
    color: ${({theme}) => theme.colors.font};
    font-weight: 600;
    font-size: calc(1vw);
    cursor: pointer;
`

const CheckboxWrapper = styled.div`
    cursor: pointer;
    display: flex;
    gap: 4px;
    user-select: none;

    p {
        font-size: calc(0.8rem);
        font-weight: 500;
        color: ${({theme}) => theme.colors.font};
    }
`

export const Form: React.FC = () => {
    const [isPasswordOpen, setIsPasswordOpen] = useState(false)
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm()

    console.log(watch("username"))

    return (
        <FormWrapper>
            <MediumText>Login</MediumText>
            <SmallText>Glad you’re back!</SmallText>
            <StyledInput
                {...register("username", {required: true})}
                placeholder="Username"
            />
            <PasswordInputWrapper>
                <PasswordInput
                    {...register("password", {required: true})}
                    placeholder="Password"
                />
                <button
                    type="button"
                    onClick={() => setIsPasswordOpen(!isPasswordOpen)}
                >
                    {isPasswordOpen ? <ClosedEye /> : <OpenedEye />}
                </button>
            </PasswordInputWrapper>
            <SubmitButton
                onClick={() => console.log("Отправлено")}
                type="submit"
            >
                Login
            </SubmitButton>
            <FlexContainer justify="center">
                <Link to="/">
                    <ForgotButton>Forgot password ?</ForgotButton>
                </Link>
            </FlexContainer>
        </FormWrapper>
    )
}
