import Box from "./box"
import { boxData } from "./box_data";
import styles from "../../styles/LeftSide.module.scss"

export default function LeftSide() {
    const jsonData = boxData.data
    const listBox = jsonData.map((itemBox) =>
        <Box status={itemBox.Status} name={itemBox.Name} />
    )
    console.log(listBox)
    
    return (
        <div className={styles.left_side}>
            <div>{listBox}</div>
        </div>
    )
}