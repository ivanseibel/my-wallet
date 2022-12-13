import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Incomes</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>$1,000.00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Outcomes</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>$1,000.00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Summary</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>$1,000.00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
