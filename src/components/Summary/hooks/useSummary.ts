import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../../contexts/TransactionsContext'
import { valueFormatter } from '../../../utils/formatter'

export function useSummary() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  )

  const summary = useMemo(() => {
    return transactions.reduce(
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
  }, [transactions])

  return {
    income: valueFormatter.format(summary.income),
    outcome: valueFormatter.format(summary.outcome),
    balance: valueFormatter.format(summary.balance),
  }
}
