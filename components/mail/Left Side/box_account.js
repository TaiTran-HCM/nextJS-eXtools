import styles from "../../../styles/BoxAccount.module.scss"

export default function BoxAccount(props) {
    return (
        <div className={styles.account}>
            <div className={styles.avatar}>
                <img src="./semantic-ui/assets/images/box_user_avatar.svg" alt="" />
            </div>
            <div className="user name email">
                <div className="user-name">Taif Tranf</div>
                <div className="user-email">tai.tran@weai.vn</div>
            </div>
            <div className={styles.icon_switch_account}>
                <img src="./semantic-ui/assets/images/switch_account.svg" alt="" />
            </div>
        </div >
    )
}