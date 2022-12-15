import { useContext } from 'react'
import { TransactionsContext } from '../../../contexts/TransactionsContext'
import { valueFormatter } from '../../../utils/formatter'

export function useSummary() {
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

  return {
    income: valueFormatter.format(summary.income),
    outcome: valueFormatter.format(summary.outcome),
    balance: valueFormatter.format(summary.balance),
  }
}
