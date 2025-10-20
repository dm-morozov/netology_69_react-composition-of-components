import type { FC, ReactNode } from 'react'
import type { WidgetContainarProps } from '../types/widget'

/**
 * Универсальная обертка для виджета.
 * Принимает заголовок (title) и содержимое (children)
 *
 * @param {string} title - Заголовок виджета
 * @param {ReactNode} children - Содержимое виджета
 * @returns {ReactNode} React-компонент, отображающий заголовок и содержимое виджета
 */
const WidgetContainar: FC<WidgetContainarProps> = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}): ReactNode => {
  return (
    <div className="widget-containar">
      <h3>{title}</h3>
      {children}
    </div>
  )
}

export default WidgetContainar
