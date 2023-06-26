import styled from "styled-components"

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 80px;
`

interface IContainer {
    children: React.ReactNode
}

export const Container: React.FC<IContainer> = ({children}) => {
    return <StyledContainer>{children}</StyledContainer>
}
