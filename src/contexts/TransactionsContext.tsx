import { createContext, ReactNode, useEffect, useState } from 'react'

import { api } from '../lib/axios'

interface Transaction {
  id: number
  description: string
  amount: number
  type: 'income' | 'outcome'
  category: string
  createdAt: string
}

interface CreateTransactionPayload {
  description: string
  amount: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createNewTransaction: (payload: CreateTransactionPayload) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const { data } = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(data)
  }

  async function createNewTransaction({
    description,
    amount,
    category,
    type,
  }: CreateTransactionPayload) {
    const response = await api.post('/transactions', {
      description,
      amount,
      category,
      type,
      createdAt: new Date(),
    })

    const { data } = response

    setTransactions((state) => [data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createNewTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
