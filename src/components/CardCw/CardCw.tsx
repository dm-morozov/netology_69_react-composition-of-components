import type { FC } from 'react'

interface CardProps {
  children: React.ReactNode
  // можно добавить другие ожидаемые реквизиты
}

const Card: FC<CardProps> = (props) => {
  return <div className="card-container">{props.children}</div>
}

export default Card
