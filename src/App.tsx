import styled from "styled-components"
import {Container} from "./Components/Container/Container"
import {Login} from "./Pages/Login/Login"
import {Route, Routes, useLocation} from "react-router-dom"
import {Circle, CircleColor} from "./Components/Circle/Circle"
import {Register} from "./Pages/Register/Register"
import {RememberPassword} from "./Pages/RememberPassword/RememberPassword"
import { useEffect, useState } from "react"

const AppWrapper = styled.div`
    background: #0f0f0f;
    min-height: 100vh;
    position: relative;
    z-index: 0;
    overflow: hidden;
`

const App: React.FC = () => {
    const {pathname} = useLocation()
    const [color, setColor] = useState<CircleColor>(CircleColor.Blue)

    useEffect(() => {
        switch (pathname) {
            case "/":
                setColor(CircleColor.Purple)
                break
            case "/register":
                setColor(CircleColor.Blue)
                break
            case "/remember":
                setColor(CircleColor.Violet)
                break
            default:
                setColor(CircleColor.Blue)
                break
        }
    }, [pathname])

    return (
        <AppWrapper>
            <Container>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/remember" element={<RememberPassword />} />
                </Routes>
            </Container>
            <Circle size={300} top={100} right={400} color={color} />
            <Circle size={300} bottom={40} right={20} color={color} />
        </AppWrapper>
    )
}

export default App
