import styles from "../../../styles/RightSide.module.scss"
import scroll from '../../../styles/Scroll.module.scss'

export default function RightSide() {
    return (
        <div className={styles.right_side}>
            <div className={styles.right_side_header}>
                <div className={styles.right_side_header_list_item}>
                    <div class="eXtools_archive-letter">
                        <img src="./semantic-ui/assets/images/archive.svg" alt="" />
                    </div>
                    <div className={styles.right_side_header_group}>
                        <div class="eXtools_delete-letter">
                            <img src="./semantic-ui/assets/images/trash.svg" alt="" />
                        </div>
                        <div className={styles.stick}></div>
                        <div class="eXtools_unknow-item">
                            <img src="./semantic-ui/assets/images/archive-x.svg" alt="" />
                        </div>
                    </div>
                    <div className={styles.right_side_header_group}>
                        <div class="reply-letter">
                            <img src="./semantic-ui/assets/images/reply.svg" alt="" />
                        </div>
                        <div className={styles.stick}></div>
                        <div class="reply-all-letter">
                            <img src="./semantic-ui/assets/images/reply-all.svg" alt="" />
                        </div>
                        <div className={styles.stick}></div>
                        <div class="forwar-letter">
                            <img src="./semantic-ui/assets/images/forward.svg" alt="" />
                        </div>
                    </div>
                    <div className={styles.right_side_header_move_letter}>
                        <img src="./semantic-ui/assets/images/share.svg" alt="" />
                        <span className={styles.text}>Move to..</span>
                    </div>
                    <div class="eXtools_letter-tips">
                        <img src="./semantic-ui/assets/images/tips.svg" alt="" />
                    </div>
                    <div class="eXtools_letter-setting">
                        <img src="./semantic-ui/assets/images/setting.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className={`${scroll.style_1} ${styles.right_side_body}`}>
                <div className={styles.right_side_body_top}>
                    <div className={styles.avatar}>
                        <img src="./semantic-ui/assets/images/letter-avatar.svg" alt="" />
                    </div>
                    <div className={styles.right_side_body_top_text}>
                        <div className={styles.right_side_body_top_text_1}>
                            <p className={styles.right_side_body_top_name}>Tai Tran</p>
                            <p className={styles.right_side_body_top_time}>20 june 2022 : 9:10AM</p>
                        </div>
                        <div className={styles.right_side_body_top_text_2}>
                            <div className={styles.right_side_body_top_text_2_2}>
                                to: <span className={styles.text}>admin@eduplax.com</span>
                                <span> </span>
                                cc: <span className={styles.text}>tai.tran@weai.vn</span>
                            </div>
                            <div class="folder">
                                <svg width="24" height="24" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_222_471)">
                                        <path d="M3.74316 15.1455C3.74316 15.8747 3.93229 16.4261 4.31055 16.7998C4.6888 17.1781 5.24707 17.3672 5.98535 17.3672H17.3398C17.9915 17.3672 18.4997 17.1781 18.8643 16.7998C19.2288 16.4261 19.4111 15.8747 19.4111 15.1455V9.7041H3.74316V15.1455ZM3.74316 8.71973H19.4111V8.11816C19.4111 7.389 19.2197 6.83529 18.8369 6.45703C18.4587 6.07878 17.9027 5.88965 17.1689 5.88965H10.8115C10.5654 5.88965 10.3581 5.85775 10.1895 5.79395C10.0208 5.73014 9.84082 5.62305 9.64941 5.47266L9.25977 5.15137C9.10026 5.01921 8.94759 4.91667 8.80176 4.84375C8.65592 4.76628 8.49642 4.71159 8.32324 4.67969C8.15007 4.64779 7.94499 4.63184 7.70801 4.63184H5.77344C5.13542 4.63184 4.63639 4.81641 4.27637 5.18555C3.9209 5.55013 3.74316 6.09245 3.74316 6.8125V8.71973Z" fill="#8206E3" fill-opacity="0.7" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_222_471">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.right_side_body_letter} ${scroll.style_1}`}>
                    <p className={styles.title}>UI project : Client Dashboard</p>
                    <p className={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Convallis tellus id interdum velit laoreet. Enim eu turpis egestas
                        pretium.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Convallis tellus id interdum velit laoreet. Enim eu turpis egestas
                        pretium
                    </p>
                    <p className={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Convallis tellus id interdum velit laoreet. Enim eu turpis egestas
                        pretium.
                        Lorem ipsum dolor sit amet, consectetur.
                    </p>
                    <img className={styles.image} src="./semantic-ui/assets/images/image_letter.svg" />
                    <p className={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Convallis tellus id interdum velit laoreet. Enim eu turpis egestas
                        pretium.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Convallis tellus id interdum velit laoreet. Enim eu turpis egestas
                        pretium
                    </p>
                </div>
            </div>
        </div>
    )
}