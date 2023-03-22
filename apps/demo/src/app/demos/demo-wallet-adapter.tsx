import { Group, Stack, Title } from '@mantine/core'
import {
  WalletConnectButton,
  WalletDisconnectButton,
  WalletModalButton,
  WalletModalProvider,
  WalletMultiButton,
} from '@pubkeyapp/wallet-adapter-mantine-ui'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { clusterApiUrl } from '@solana/web3.js'

export function DemoWalletAdapter() {
  const endpoint = clusterApiUrl('devnet')
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider radius="xl">
          <Stack>
            <Title>@pubkeyapp/wallet-adapter-mantine-ui</Title>
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
