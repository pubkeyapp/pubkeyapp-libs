import { Card, Stack, Text, Title } from '@mantine/core'
import { PubKeyLogo } from '@pubkeyapp/logo'

export function DemoLogo() {
  const sizes = [16, 32, 64, 128]

  return (
    <Stack>
      <Title>@pubkeyapp/logo</Title>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Text weight={500}>default</Text>
        <Stack>
          {sizes.map((size) => (
            <PubKeyLogo key={size} size={size} />
          ))}
          {sizes.map((size) => (
            <PubKeyLogo key={size} size={size} type="mark" />
          ))}
        </Stack>
      </Card>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Text weight={500}>inverted</Text>
        <Stack>
          {sizes.map((size) => (
            <PubKeyLogo key={size} size={size} inverted />
          ))}

          {sizes.map((size) => (
            <PubKeyLogo key={size} size={size} inverted type="mark" />
          ))}
        </Stack>
      </Card>
    </Stack>
  )
}
