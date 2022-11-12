import styles from "../../styles/BoxFolder.module.scss"
import scrollStyles from "../../styles/Scroll.module.scss"
import { boxData } from "./box_data"

export default function BoxFolder(props) {
    const dataFolder = boxData.dataFolder
    const listFolder = dataFolder.map((data) =>
        <div className={styles.folder}>
            <div className={styles.icon_folder}>
                <svg width="24" height="24" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.74316 15.1455C3.74316 15.8747 3.93229 16.4261 4.31055 16.7998C4.6888 17.1781 5.24707 17.3672 5.98535 17.3672H17.3398C17.9915 17.3672 18.4997 17.1781 18.8643 16.7998C19.2288 16.4261 19.4111 15.8747 19.4111 15.1455V9.7041H3.74316V15.1455ZM3.74316 8.71973H19.4111V8.11816C19.4111 7.389 19.2197 6.83529 18.8369 6.45703C18.4587 6.07878 17.9027 5.88965 17.1689 5.88965H10.8115C10.5654 5.88965 10.3581 5.85775 10.1895 5.79395C10.0208 5.73014 9.84082 5.62305 9.64941 5.47266L9.25977 5.15137C9.10026 5.01921 8.94759 4.91667 8.80176 4.84375C8.65592 4.76628 8.49642 4.71159 8.32324 4.67969C8.15007 4.64779 7.94499 4.63184 7.70801 4.63184H5.77344C5.13542 4.63184 4.63639 4.81641 4.27637 5.18555C3.9209 5.55013 3.74316 6.09245 3.74316 6.8125V8.71973Z" fill={data.Color} fill-opacity="0.7"></path>
                </svg>
            </div>
            <p className={styles.folder_name}>{data.Name}</p>
            <p className={styles.folder_items}>{data.Items}</p>
        </div>
    )

    return (
        <div className={styles.main_folder}>
            <div className={styles.folder_header}>
                <p className={styles.title}>Folder</p>
                <div className={styles.icon_add}>
                    <img src="./semantic-ui/assets/images/plus_icon.svg" alt="" />
                </div>
            </div>
            <div className={`${styles.folder_list} ${scrollStyles.style_1}`}>
                {listFolder}
            </div>
        </div>
    )
}