import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { useForm, Controller } from 'react-hook-form'
import * as z from 'zod'

import { TransactionsContext } from '../../contexts/TransactionsContext'

import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeByButton,
} from './styles'
import { useContextSelector } from 'use-context-selector'

const newTransactionSchema = z.object({
  description: z.string(),
  amount: z.number().nonnegative(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionInputs = z.infer<typeof newTransactionSchema>

export function NewTransactionModal() {
  const createNewTransaction = useContextSelector(
    TransactionsContext,
    (context) => context.createNewTransaction,
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    control,
    reset,
  } = useForm<NewTransactionInputs>({
    resolver: zodResolver(newTransactionSchema),
    defaultValues: {
      type: 'outcome',
    },
  })

  async function handleCreateNewTransaction(data: NewTransactionInputs) {
    createNewTransaction(data)

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New transaction</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Description"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Amount"
            required
            step={0.01}
            {...register('amount', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Category"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <TransactionType
                onValueChange={field.onChange}
                value={field.value}
              >
                <TransactionTypeByButton
                  type="button"
                  variant="income"
                  value="income"
                >
                  <ArrowCircleUp size={24} />
                  Income
                </TransactionTypeByButton>
                <TransactionTypeByButton
                  type="button"
                  variant="outcome"
                  value="outcome"
                >
                  <ArrowCircleDown size={24} />
                  Outcome
                </TransactionTypeByButton>
              </TransactionType>
            )}
          />

          <button type="submit" disabled={isSubmitting}>
            Create
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
