import type { FC, ReactNode } from 'react'
import type { CurrencyRatesProps } from '../types/news'

/**
 * Отображает список курсов валют. Принимает массив курсов через props.
 * @returns {ReactNode} React-компонент, отображающий список курсов валют.
 */
const CurrencyRates: FC<CurrencyRatesProps> = (): ReactNode => {
  return <div>CurrentcyRates</div>
}

export default CurrencyRates
