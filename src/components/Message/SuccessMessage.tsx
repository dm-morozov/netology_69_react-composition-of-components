import type { FC } from 'react'
import type { MessageProps } from '../../types/message'
import Message from './Message'

const SuccessMessage: FC<MessageProps> = (props) => {
  return <Message {...props} type="success" />
}

export default SuccessMessage
