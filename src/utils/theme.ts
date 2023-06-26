export interface ITheme {
    colors: {
        primary: string
        secondary: string
        success: string
        danger: string

        bg: string
        font: string
    }

    media: {
        desktop: string
        smallDesktop: string
        tablet: string
        mobile: string
    }

    sizes: {
        header: {height: number}
        container: {width: number}
        footer: {height: number}
        modal: {width: number}
    }
}

export const theme: ITheme = {
    colors: {
        primary: "#7986cb",
        secondary: "#2b2b2b",
        success: "#4caf50",
        danger: "#f44336 ",

        bg: "#0F0F0F",
        font: "#FFFFFF",
    },

    media: {
        desktop: "(max-width: 1440px)",
        smallDesktop: "(max-width: 1024px)",
        tablet: "(max-width: 756px)",
        mobile: "(max-width: 420px)",
    },

    sizes: {
        header: {height: 56},
        container: {width: 1200},
        footer: {height: 128},
        modal: {width: 540},
    },
}
