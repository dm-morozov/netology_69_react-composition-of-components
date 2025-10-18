import type { FC } from 'react'
import type { CardProps } from '../../types/card'

const Card: FC<CardProps> = (props) => {
  return (
    <div className="card" style={{ width: props.width || '18rem' }}>
      {props.imageUrl && (
        <img
          src={props.imageUrl}
          className="card-img-top"
          alt={props.imageAlt || 'Card image'}
        />
      )}
      <div className="card-body">{props.children}</div>
    </div>
  )
}

export default Card
