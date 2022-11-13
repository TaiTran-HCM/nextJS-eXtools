import CenterHeader from "./center_header"
import CenterBody from "./center_body"
import styles from "../../../styles/CenterSide.module.scss"
import scroll from '../../../styles/Scroll.module.scss'

export default function CenterSide(props) {
    return (
        <div className={styles.center_side}>
            <CenterHeader />
            <CenterBody/>
        </div>
    )
}