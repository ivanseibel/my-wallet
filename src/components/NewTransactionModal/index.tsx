import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeByButton,
} from './styles'

const newTransactionSchema = z.object({
  description: z.string(),
  value: z.number().nonnegative(),
  category: z.string(),
  type: z.enum(['income', 'outcome']).optional(),
})

type NewTransactionInputs = z.infer<typeof newTransactionSchema>

export function NewTransactionModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionInputs>({
    resolver: zodResolver(newTransactionSchema),
  })

  async function handleCreateNewTransaction(data: NewTransactionInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
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
            placeholder="Value"
            required
            {...register('value', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Category"
            required
            {...register('category')}
          />

          <TransactionType>
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

          <button type="submit" disabled={isSubmitting}>
            Create
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
