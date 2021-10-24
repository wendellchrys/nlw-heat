import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
      title: string
      logo: string
      colors: {
        primary: string
        secondary: string
        tertiary: string
        quaternary: string
        quinary: string
        text: string
        text2: string

        black: string
        gray: string
        pink: string
        yellow: string
        white: string
    }
  }
}
