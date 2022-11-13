import CenterSide from './Center Side/center_side'
import LeftSide from './Left Side/left_side'
import styles from '../../styles/AppMail.module.scss'

export default function MailApp() {
  return (
    <div className={styles.main}>
      <LeftSide />
      <CenterSide />
    </div>
  )
}