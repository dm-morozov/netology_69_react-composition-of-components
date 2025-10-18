import type { FC } from 'react'
import type { ListItemProps } from '../../types/List'

const ListItem: FC<ListItemProps> = (props) => {
  return <li>{props.children}</li>
}

export default ListItem
