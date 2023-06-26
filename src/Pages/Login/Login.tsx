import styled from "styled-components"
import {Info} from "../../Components/Info/Info"
import {Form} from "../../Components/Form/Form"

const StyledLogin = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 90px;
`

export const Login: React.FC = () => {
    return (
        <StyledLogin>
            <Info
                buttonLabel="Skip the lag?"
                buttonLink="/"
                infoText="Welcome Back!"
            />
            <Form />
        </StyledLogin>
    )
}
