import type { FC, ReactNode } from 'react'
import type { NewsItemProps } from '../types/news'

/**
 * Отображает одну новость: иконка, текст-ссылка, время/источник.
 *
 * @param {NewsItemProps} props - Объект с свойствами:
 *   icon - Иконка новости
 *   text - Текст новости
 *   link - Ссылка на полную новость
 *   meta - Время/источник новости
 */
const NewsItem: FC<NewsItemProps> = (props: NewsItemProps): ReactNode => {
  console.log(props)
  return <div>NewsItem</div>
}

export default NewsItem
