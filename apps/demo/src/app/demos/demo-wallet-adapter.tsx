import { Group, Stack, Switch, Title } from '@mantine/core'
import {
  WalletConnectButton,
  WalletDisconnectButton,
  WalletModalButton,
  WalletModalProvider,
  WalletMultiButton,
} from '@pubkeyapp/wallet-adapter-mantine-ui'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { clusterApiUrl } from '@solana/web3.js'
import { useState } from 'react'

export function DemoWalletAdapter() {
  const [autoConnect, setAutoConnect] = useState(true)
  const endpoint = clusterApiUrl('devnet')
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect={autoConnect}>
        <WalletModalProvider radius="xl">
          <Stack>
            <Title>@pubkeyapp/wallet-adapter-mantine-ui</Title>
            <Switch
              label="Auto connect"
              checked={autoConnect}
              onChange={(event) => setAutoConnect(event.currentTarget.checked)}
            />
            <Group>
              <WalletConnectButton />
              <WalletDisconnectButton />
              <WalletModalButton />
              <WalletMultiButton />
            </Group>
            <Group>
              <WalletConnectButton size="md" radius="xl" variant="outline" />
              <WalletDisconnectButton size="md" radius="xl" variant="outline" />
              <WalletModalButton size="md" radius="xl" variant="outline" />
              <WalletMultiButton size="md" radius="xl" variant="outline" />
            </Group>
          </Stack>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
