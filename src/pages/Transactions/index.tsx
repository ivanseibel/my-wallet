import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'

import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Software development</td>
              <td>
                <PriceHighlight variant="income">$1,000.00</PriceHighlight>
              </td>
              <td>Contract</td>
              <td>2022-12-02</td>
            </tr>
            <tr>
              <td width="50%">Tesco Supermarket</td>
              <td>
                <PriceHighlight variant="outcome">- $100.00</PriceHighlight>
              </td>
              <td>Grocery</td>
              <td>2022-12-03</td>
            </tr>
            <tr>
              <td width="50%">Rocketseat subscription</td>
              <td>
                <PriceHighlight variant="outcome">- $300.00</PriceHighlight>
              </td>
              <td>Subscription</td>
              <td>2022-12-07</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
