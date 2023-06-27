import ReactDOM from "react-dom/client"
import "./normalize.css"
import {BrowserRouter} from "react-router-dom"
import React from "react"
import App from "./App"
import {ThemeProvider} from "styled-components"
import { theme } from "./utils/theme"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
)
