import { extendTheme } from "@chakra-ui/react"
import { theme as chakraTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const colors = {
    ...chakraTheme.colors,
    brand: {
        orangeBright: "hsl(26, 100%, 55%)",
        orangePale: "hsl(25, 100%, 94%)",
        veryDarkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)"
    }
}

const breakpoints = createBreakpoints({
    sm: '40em',
    md: '52em',
    lg:'64em',
    xl:'80em'
})

const overrides = {
    ...chakraTheme,
    colors,
    breakpoints
}



const customTheme = extendTheme(overrides)

export default customTheme
