import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'

import { TransactionsContext } from '../../contexts/TransactionsContext'
import { valueFormatter } from '../../utils/formatter'

import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.amount
        acc.balance += transaction.amount
      } else {
        acc.outcome += transaction.amount
        acc.balance -= transaction.amount
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      balance: 0,
    },
  )

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Incomes</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{valueFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Outcomes</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{valueFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Balance</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{valueFormatter.format(summary.balance)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
