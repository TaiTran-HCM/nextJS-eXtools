import styles from "../../styles/BoxAccount.module.scss"

export default function BoxAccount(props) {
    return (
        <div className={styles.account}>
            <div className={styles.avatar}>
                <img src="./semantic-ui/assets/images/box_user_avatar.svg" alt="" />
            </div>
            <div class="user name email">
                <div class="user-name">Taif Tranf</div>
                <div class="user-email">tai.tran@weai.vn</div>
            </div>
            <div className={styles.icon_switch_account}>
                <img src="./semantic-ui/assets/images/switch_account.svg" alt="" />
            </div>
        </div >
    )
}