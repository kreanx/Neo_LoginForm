import styled from "styled-components"
import {Container} from "./Components/Container/Container"
import {Login} from "./Pages/Login/Login"
import {Route, Routes} from "react-router-dom"
import {Circle} from "./Components/Circle/Circle"

const AppWrapper = styled.div`
    background: #0f0f0f;
    min-height: 100vh;
    position: relative;
    z-index: 0;
    overflow: hidden;
`

const App: React.FC = () => {
    return (
        <AppWrapper>
            <Container>
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </Container>
            <Circle size={300} top={100} right={400} />
            <Circle size={300} bottom={40} right={20} />
        </AppWrapper>
    )
}

export default App
