import {useForm} from "react-hook-form"
import {useState} from "react"
import * as S from "./styled"
import {CheckMark} from "../../Assets/tsIcons/CheckMark"
import {ClosedEye} from "../../Assets/tsIcons/ClosedEye"
import {OpenedEye} from "../../Assets/tsIcons/OpenedEye"
import {Link} from "react-router-dom"
import {CircleColor} from "../Circle/Circle"
import {Register} from "../../Pages/Register/Register"

interface IForm {
    title: string
    type: "Login" | "Register" | "RememberPassword"
    subTitle?: string
    color: CircleColor
}

export const Form: React.FC<IForm> = ({title, type, subTitle, color}) => {
    const [isPasswordOpen, setIsPasswordOpen] = useState(false)
    const [isConfirmPasswordOpen, setIsConfirmPasswordOpen] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm()

    const onSubmit = () => {
        console.log("submited")
    }

    const typePaths = {
        Register: "/",
        Login: "/register",
        RememberPassword: "/register",
    }

    const Login = type === "Login"
    const Register = type === "Register"
    const Remember = type === "RememberPassword"

    return (
        <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <S.MediumText>{title}</S.MediumText>
            <S.SmallText>{subTitle}</S.SmallText>

            {Login && (
                <>
                    <S.StyledInput
                        {...register("username", {
                            required: {
                                value: true,
                                message: "Username is required",
                            },
                            minLength: {
                                value: 3,
                                message: "Minimum 3 characters",
                            },
                            maxLength: {
                                value: 10,
                                message: "Maximum 10 characters",
                            },
                        })}
                        isError={!!errors.username}
                        placeholder="Username"
                    />
                    {errors.username?.message && (
                        <S.StyledError>
                            {errors.username?.message.toString()}
                        </S.StyledError>
                    )}
                    <S.PasswordInputWrapper>
                        <S.StyledInput
                            style={{position: "relative"}}
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required",
                                },
                                minLength: {
                                    value: 3,
                                    message: "Minimum 3 characters",
                                },
                                maxLength: {
                                    value: 10,
                                    message: "Maximum 10 characters",
                                },
                            })}
                            placeholder="Password"
                            type={isPasswordOpen ? "text" : "password"}
                            isError={!!errors.password}
                        />
                        <button
                            type="button"
                            onClick={() => setIsPasswordOpen(!isPasswordOpen)}
                        >
                            {isPasswordOpen ? <ClosedEye /> : <OpenedEye />}
                        </button>
                        {errors.password?.message && (
                            <S.StyledError>
                                {errors.password?.message.toString()}
                            </S.StyledError>
                        )}
                    </S.PasswordInputWrapper>
                    <S.CheckboxWrapper
                        isChecked={isChecked}
                        onClick={() => setIsChecked((prev) => !prev)}
                    >
                        <input type="checkbox" name="remember" />
                        <label htmlFor="remember">
                            {isChecked ? <CheckMark /> : <span />}
                        </label>
                        <p>Remember me</p>
                    </S.CheckboxWrapper>
                </>
            )}
            {Register && (
                <>
                    <S.StyledInput
                        {...register("username", {
                            required: {
                                value: true,
                                message: "Username is required",
                            },
                            minLength: {
                                value: 3,
                                message: "Minimum 3 characters",
                            },
                            maxLength: {
                                value: 10,
                                message: "Maximum 10 characters",
                            },
                        })}
                        isError={!!errors.username}
                        placeholder="Username"
                    />
                    {errors.username?.message && (
                        <S.StyledError>
                            {errors.username?.message.toString()}
                        </S.StyledError>
                    )}
                    <S.StyledInput
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required",
                            },
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message:
                                    "Entered value does not match email format",
                            },
                        })}
                        isError={!!errors.email}
                        placeholder="Email"
                        type="email"
                    />
                    {errors.email?.message && (
                        <S.StyledError>
                            {errors.email?.message.toString()}
                        </S.StyledError>
                    )}
                    <S.PasswordInputWrapper>
                        <S.StyledInput
                            style={{position: "relative"}}
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required",
                                },
                                minLength: {
                                    value: 3,
                                    message: "Minimum 3 characters",
                                },
                                maxLength: {
                                    value: 10,
                                    message: "Maximum 10 characters",
                                },
                            })}
                            placeholder="Password"
                            type={isPasswordOpen ? "text" : "password"}
                            isError={!!errors.password}
                        />
                        <button
                            type="button"
                            onClick={() => setIsPasswordOpen(!isPasswordOpen)}
                        >
                            {isPasswordOpen ? <ClosedEye /> : <OpenedEye />}
                        </button>
                        {errors.password?.message && (
                            <S.StyledError>
                                {errors.password?.message.toString()}
                            </S.StyledError>
                        )}
                    </S.PasswordInputWrapper>
                    <S.PasswordInputWrapper>
                        <S.StyledInput
                            style={{position: "relative"}}
                            {...register("passwordConfirm", {
                                required: {
                                    value: true,
                                    message:
                                        "You need to confirm your password",
                                },
                            })}
                            placeholder="Confirm password"
                            type={isConfirmPasswordOpen ? "text" : "password"}
                            isError={!!errors.passwordConfirm}
                        />
                        <button
                            type="button"
                            onClick={() =>
                                setIsConfirmPasswordOpen(!isPasswordOpen)
                            }
                        >
                            {isConfirmPasswordOpen ? (
                                <ClosedEye />
                            ) : (
                                <OpenedEye />
                            )}
                        </button>
                        {errors.passwordConfirm?.message && (
                            <S.StyledError>
                                {errors.passwordConfirm?.message.toString()}
                            </S.StyledError>
                        )}
                    </S.PasswordInputWrapper>
                    <S.CheckboxWrapper
                        isChecked={isChecked}
                        onClick={() => setIsChecked((prev) => !prev)}
                    >
                        <input type="checkbox" name="remember" />
                        <label htmlFor="remember">
                            {isChecked ? <CheckMark /> : <span />}
                        </label>
                        <p>Remember me</p>
                    </S.CheckboxWrapper>
                </>
            )}
            {Remember && (
                <>
                    <S.StyledInput
                        {...register("confirmEmail", {
                            required: {
                                value: true,
                                message: "Email is required",
                            },
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message:
                                    "Entered value does not match email format",
                            },
                        })}
                        isError={!!errors.confirmEmail}
                        placeholder="Enter your email"
                    />
                    {errors.confirmEmail?.message && (
                        <S.StyledError>
                            {errors.confirmEmail?.message.toString()}
                        </S.StyledError>
                    )}
                </>
            )}

            <S.StyledSubmitButton color={color} type="submit">
                {Login ? "Login" : Register ? "Sign Up" : "Reset Password"}
            </S.StyledSubmitButton>
            <S.FlexContainer justify="center">
                {!Remember && (
                    <Link to={"/remember"}>
                        <S.StyledButtonText>
                            Forgot password ?
                        </S.StyledButtonText>
                    </Link>
                )}
            </S.FlexContainer>
            <S.OrDivider>
                <S.DividerItem></S.DividerItem>
                <S.DividerText>Or</S.DividerText>
                <S.DividerItem></S.DividerItem>
            </S.OrDivider>
            <S.FlexContainer justify="center">
                <Link to={typePaths[type]}>
                    <S.StyledButtonMargin>
                        {Register
                            ? "Already Registered? Login"
                            : "Don’t have an account ? Signup"}
                    </S.StyledButtonMargin>
                </Link>
            </S.FlexContainer>
        </S.FormWrapper>
    )
}
