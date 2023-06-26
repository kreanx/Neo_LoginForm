import "styled-components"
import {ITheme} from "./src/utils/theme"

declare module "styled-components" {
    export interface DefaultTheme extends ITheme {}
}
