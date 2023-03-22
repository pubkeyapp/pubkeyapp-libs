import { Box, Container, Group, Title } from '@mantine/core'
import { Link, Route, Routes } from 'react-router-dom'
import { DemoLogo } from './demos/demo-logo'
import { UiTheme } from './ui-theme'

export function App() {
  return (
    <UiTheme>
      <Container>
        <Box>
          <Group>
            <Link to="/">Home</Link>
            <Link to="/logo">Logo</Link>
          </Group>
        </Box>
        <Routes>
          <Route path="/" element={<Title>Home</Title>} />
          <Route path="/logo" element={<DemoLogo />} />
        </Routes>
      </Container>
    </UiTheme>
  )
}
