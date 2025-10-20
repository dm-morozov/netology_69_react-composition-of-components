import type { ReactNode } from 'react'

export interface NewsItemProps {
  children: ReactNode
  icon: string
  text: string
  link: string
  meta: string
}

export interface CurrencyRatesProps {
  children: ReactNode
  // ...
}
