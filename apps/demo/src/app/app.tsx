import { Box, Container, Group, Title } from '@mantine/core'
import { Link, Route, Routes } from 'react-router-dom'
import { DemoLogo } from './demos/demo-logo'
import { DemoWalletAdapter } from './demos/demo-wallet-adapter'
import { UiTheme } from './ui-theme'

export function App() {
  return (
    <UiTheme>
      <Container>
        <Box>
          <Group>
            <Link to="/">Home</Link>
            <Link to="/logo">Logo</Link>
            <Link to="/wallet-adapter">Wallet Adapter</Link>
          </Group>
        </Box>
        <Routes>
          <Route path="/" element={<Title>Home</Title>} />
          <Route path="/logo" element={<DemoLogo />} />
          <Route path="/wallet-adapter" element={<DemoWalletAdapter />} />
        </Routes>
      </Container>
    </UiTheme>
  )
}
