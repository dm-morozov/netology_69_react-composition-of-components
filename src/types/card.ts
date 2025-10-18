import type { ReactNode } from 'react'

export interface CardProps {
  children: ReactNode
  imageUrl?: string
  imageAlt?: string
  width?: string
}
