import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeByButton,
} from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New transaction</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Description" required />
          <input type="number" placeholder="Value" required />
          <input type="text" placeholder="Category" required />

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

          <button type="submit">Create</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
