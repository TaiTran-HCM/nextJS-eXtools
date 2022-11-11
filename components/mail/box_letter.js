import styles from '../../styles/BoxLetter.module.scss'

export default function Box(props) {
    return (
        <div className={styles.letter_item_select}>
            <div className={styles.letter_head}>
                <div className={styles.letter_avatar}>
                    <img src="./semantic-ui/assets/images/letter-avatar.svg" alt="" />
                </div>
                <div className={styles.letter_box}>
                    <div className={styles.letter_box_header}>
                        <p className={styles.letter_box_username}>John Lennon</p>
                        <p className={styles.letter_box_sending_time}>20 JUNE</p>
                    </div>
                    <div className={styles.letter_box_body}>
                        <p className={styles.letter_box_title}>UI project : Client Dashboard</p>
                        <div className={styles.letter_box_status}>
                            <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4.5" r="4" fill="#006AD4"></circle>
                            </svg>
                        </div>
                    </div>
                    <div className={styles.letter_box_footer}>
                        <p className={styles.letter_box_description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit,
                            sed do eiusmod tempor incididunt ut labore ...
                        </p>
                        <div className={styles.letter_box_attach_files}>
                            <div className={styles.letter_box_file_default}>
                                <div className={styles.letter_box_file_icon}>
                                    <img src="./semantic-ui/assets/images/google-meet-file.svg" alt="" />
                                </div>
                                <p className={styles.letter_box_file_name}>meet.google</p>
                            </div>
                            <div className={styles.letter_box_file_collap}>
                                <p className={styles.letter_box_file_items}>+99</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}