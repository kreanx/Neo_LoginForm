import {Info} from "../../Components/Info/Info"
import {Form} from "../../Components/Form/Form"
import * as S from "../styled"
import { CircleColor } from "../../Components/Circle/Circle"

export const Login: React.FC = () => {
    return (
        <S.StyledPage>
            <Info
                buttonLabel="Skip the lag?"
                buttonLink="/"
                infoText="Welcome Back!"
            />
            <Form color={CircleColor.Blue} title="Login" subTitle="Glad you’re back!" type="Login" />
        </S.StyledPage>
    )
}
