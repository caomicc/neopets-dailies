// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"


export const fonts = {
  heading: `"cafeteria", sans-serif`,
  body: `"museo-sans-rounded", sans-serif`,
}

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  fonts,
})
