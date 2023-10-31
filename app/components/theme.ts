// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"


export const fonts = {
  heading: 'Burbank Small Medium',
  body: 'Burbank Small Medium',
}

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  fonts,
})
