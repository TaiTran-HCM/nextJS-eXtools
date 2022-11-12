import Box from "./box"
import BoxFolder from "./box_folder"
import BoxAccount from "./box_account"
import { boxData } from "./box_data";
import styles from "../../styles/LeftSide.module.scss"

export default function LeftSide() {
    const jsonData = boxData.data
    const listBox = jsonData.map((itemBox) =>
        <Box status={itemBox.Status} name={itemBox.Name} />
    )
    return (
        <div className={styles.left_side}>
            <div className={styles.left_side_header}>{listBox}</div>
            <div className='eXtools_left_side_body'>
                <BoxFolder></BoxFolder>
            </div>
            <BoxAccount></BoxAccount>
        </div>
    )
}