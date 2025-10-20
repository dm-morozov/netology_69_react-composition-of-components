import type { FC, ReactNode } from 'react'
import type { NewsItemProps } from '../types/news'
import NewsItem from './NewsItem'

/**
 * Компонент, отображающий список новостей.
 * @param {{ items: NewsItemProps[] }} - Объект с свойствами:
 *   items - Массив объектов, каждый из которых содержит свойства для компонента NewsItem.
 * @returns {ReactNode} React-компонент, отображающий список новостей.
 */
const NewsList: FC<{ items: NewsItemProps[] }> = ({
  items,
}: {
  items: NewsItemProps[]
}): ReactNode => (
  <ul className="news-list">
    {items.map((item, index) => (
      <li key={index}>
        <NewsItem {...item} />
      </li>
    ))}
  </ul>
)

export default NewsList
