import CenterSide from './Center Side/center_side'
import LeftSide from './Left Side/left_side'
import RightSide from './Right Side/right_side'
import styles from '../../styles/AppMail.module.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function MailApp() {
  const [data, setData] = useState(null)
  var render = null

  useEffect(() => {
    console.log("UseEffect")
    return () => {
      axios.get("https://extools-api.glitch.me/mock/getMail").then(
        (response) => {
          setData(response.data)
        }
      )
    };
  }, []);

  if (data === null) {
    render = (
      <div>Loading</div>
    )
  } else {
    render = (
    <div className={styles.main}>
      <LeftSide data={data.data.getMail}/>
      <CenterSide data={data.data.getMail}/>
      <RightSide data={data.data.getMail}/>
    </div>
    )
  }
  return render
}