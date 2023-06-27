import {Info} from "../../Components/Info/Info"
import {Form} from "../../Components/Form/Form"
import * as S from "../styled"
import { CircleColor } from "../../Components/Circle/Circle"

export const Register: React.FC = () => {
    return (
        <S.StyledPage>
            <Info
                buttonLabel="Skip the lag?"
                buttonLink="/"
                infoText="Roll the Carpet!"
            />
            <Form color={CircleColor.Purple} title="Signup" subTitle="Just some details to get you in!" type="Register" />
        </S.StyledPage>
    )
}
