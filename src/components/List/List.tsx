import type { FC } from 'react'
import type { ListProps } from '../../types/List'

const List: FC<ListProps> = (props) => {
  return <ul className="custom-list">{props.children}</ul>
}

export default List
