import type { FC, ReactNode } from 'react'
interface CurrencyRatesProps {
  children: ReactNode
  // ...
}

/**
 * Отображает список курсов валют. Принимает массив курсов через props.
 * @returns {ReactNode} React-компонент, отображающий список курсов валют.
 */
const CurrencyRates: FC<CurrencyRatesProps> = (): ReactNode => {
  return <div>CurrentcyRates</div>
}

export default CurrencyRates
