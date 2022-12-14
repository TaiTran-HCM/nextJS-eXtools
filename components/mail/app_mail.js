import CenterSide from './Center Side/center_side'
import LeftSide from './Left Side/left_side'
import RightSide from './Right Side/right_side'
import styles from '../../styles/AppMail.module.scss'
import axios from 'axios'

export default function MailApp() {
  console.log("MailApp")

  axios.post("https://2dd3935d-f8e7-4957-a3d4-bee548ae6202.mock.pstmn.io/getMail", {
    "email_token": "test123"
  })
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className={styles.main}>
      <LeftSide />
      <CenterSide />
      <RightSide />
    </div>
  )
}