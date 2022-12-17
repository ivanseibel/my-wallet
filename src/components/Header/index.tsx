import { HeaderContainer, HeaderContent } from './styles'

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

        <NewTransactionModal />
      </HeaderContent>
    </HeaderContainer>
  )
}
