import { Modal, ModalProps } from '@mantine/core'
import type { FC, ReactNode } from 'react'
import React, { useState } from 'react'
import { WalletModalContext } from './use-wallet-modal'
import { WalletModal } from './wallet-modal'

export interface WalletModalProviderProps extends Partial<ModalProps> {
  children: ReactNode
}

export const WalletModalProvider: FC<WalletModalProviderProps> = ({ children, ...props }) => {
  const [visible, setVisible] = useState(false)

  return (
    <WalletModalContext.Provider
      value={{
        visible,
        setVisible,
      }}
    >
      {children}
      <Modal opened={visible} onClose={() => setVisible(false)} centered {...props}>
        <WalletModal />
      </Modal>
    </WalletModalContext.Provider>
  )
}
