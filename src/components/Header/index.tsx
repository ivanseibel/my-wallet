import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import logo from '../../assets/logo.png'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={logo} alt="" />
          <strong>myWallet</strong>
        </div>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New transaction</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
