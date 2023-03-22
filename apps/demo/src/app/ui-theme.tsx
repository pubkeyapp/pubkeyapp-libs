import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { ReactNode, useState } from 'react'

export function UiTheme({ children }: { children: ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark')
    setColorScheme(nextColorScheme)
  }

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
