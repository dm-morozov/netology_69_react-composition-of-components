// Отображает список телепередач. Использует WidgetContainer и принимает массив передач через props

import type { FC, ReactNode } from 'react'

/**
 * Компонент, отображающий список телепередач.
 * @param {ReactNode} props - Объект с свойствами:
 *   items - Массив объектов, каждый из которых содержит свойства для компонента NewsItem.
 * @returns {ReactNode} React-компонент, отображающий список телепередач.
 */
const TVGuideWidget: FC<ReactNode> = (props: ReactNode): ReactNode => {
  console.log(props)
  return <div>TVGuideWidget</div>
}

export default TVGuideWidget
