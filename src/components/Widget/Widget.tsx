import type { FC } from 'react'
import type { WidgetProps } from '../../types/widget'
import styles from './Widget.module.css'

const Widget: FC<WidgetProps> = (props) => {
  return (
    <div className={`${styles.widget} ${styles.pt3}`}>
      <h5>{props.title}</h5>
      {props.children}
    </div>
  )
}

export default Widget
