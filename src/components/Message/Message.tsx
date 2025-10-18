import type { FC } from 'react'
import type { MessageProps } from '../../types/message'

const Message: FC<MessageProps> = ({ type, text }) => {
  return <div className={`message message-${type}`}>{text}</div>
}

export default Message
