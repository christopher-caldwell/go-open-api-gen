import { FC, PropsWithChildren } from 'react'
import { Button, createTheme, MantineProvider, rem } from '@mantine/core'

const theme = createTheme({
  fontSizes: {
    xs: rem(10),
    sm: rem(12),
    md: rem(14),
    lg: rem(16),
    xl: rem(20),
  },
  components: {
    Button: Button.extend({
      defaultProps: {
        fz: 'md',
      },
    }),
  },
})

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>
}
