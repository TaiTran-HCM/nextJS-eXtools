import CenterHeader from "./center_header"
import CenterBody from "./center_body"
import styles from "../../../styles/CenterSide.module.scss"
import scroll from '../../../styles/Scroll.module.scss'

export default function CenterSide(props) {
    const read = props.data.results.filter(data => data.read_dot === 1).length
    const un_read = props.data.results.filter(data => data.read_dot === 0).length
    return (
        <div className={styles.center_side} >
            <CenterHeader read={read} un_read={un_read} />
            <CenterBody data={props.data.results} />
        </div>
    )
}