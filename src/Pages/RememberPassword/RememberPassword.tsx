import {Info} from "../../Components/Info/Info"
import {Form} from "../../Components/Form/Form"
import * as S from "../styled"
import {CircleColor} from "../../Components/Circle/Circle"

export const RememberPassword: React.FC = () => {
    return (
        <S.StyledPage>
            <Info
                buttonLabel="Take me back!"
                buttonLink="/"
                infoText="No Worries!"
            />
            <Form
                color={CircleColor.Violet}
                title="Forgot Password?"
                subTitle="Please enter you’re email"
                type="RememberPassword"
            />
        </S.StyledPage>
    )
}
