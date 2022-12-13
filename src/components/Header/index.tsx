import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import logo from '../../assets/logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={logo} alt="" />
          <strong>myWallet</strong>
        </div>

        <NewTransactionButton>New transaction</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
