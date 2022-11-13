import boxStyles from '../../../styles/Box.module.scss'
import status from '../../status'

export default function Box(props) {
    let text = "Gmail"
    var boxStatus = boxStyles.box_default
    var boxLeft = <p className={boxStyles.items}>200</p>

    if (props.status !== status.box.DEFAULT && props.status !== undefined) {
        if (props.status == status.box.ACTIVE) {
            boxStatus = boxStyles.box_active
            boxLeft = (
                <div className={boxStyles.show_more}>
                    <svg width="24" height="24" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7998 14.8105C11.9183 14.8105 12.0299 14.7878 12.1348 14.7422C12.2396 14.6966 12.3353 14.6283 12.4219 14.5371L17.624 9.21191C17.779 9.05697 17.8564 8.8724 17.8564 8.6582C17.8564 8.50781 17.82 8.37109 17.7471 8.24805C17.6787 8.125 17.5853 8.0293 17.4668 7.96094C17.3483 7.88802 17.2139 7.85156 17.0635 7.85156C16.8447 7.85156 16.6533 7.93359 16.4893 8.09766L11.4717 13.2451H12.1348L7.11035 8.09766C6.94629 7.93359 6.75488 7.85156 6.53613 7.85156C6.38574 7.85156 6.2513 7.88802 6.13281 7.96094C6.01432 8.0293 5.91862 8.125 5.8457 8.24805C5.77734 8.37109 5.74316 8.50781 5.74316 8.6582C5.74316 8.76758 5.76139 8.87012 5.79785 8.96582C5.83887 9.05697 5.89811 9.139 5.97559 9.21191L11.1777 14.5371C11.3646 14.7194 11.5719 14.8105 11.7998 14.8105Z" fill="#F8FAFC"></path>
                    </svg>
                </div>
            )
        } else {
            boxStatus = boxStyles.box_select
        }
    }

    return (
        <div className={boxStatus}>
            <div className={boxStyles.box_items}>
                <div className={boxStyles.left_box}>
                    <div className="icon-gmail">
                        <svg width="24" height="24" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4268 12.7891C11.7048 12.7891 11.9919 12.641 12.2881 12.3447L18.2422 6.43164C17.9779 6.19466 17.5107 6.07617 16.8408 6.07617H5.81445C5.22656 6.07617 4.81413 6.18555 4.57715 6.4043L10.5654 12.3447C10.8571 12.641 11.1442 12.7891 11.4268 12.7891ZM3.92773 16.918L8.83594 12.0508L3.93457 7.21777C3.80697 7.43652 3.74316 7.79427 3.74316 8.29102V15.8516C3.74316 16.3483 3.80469 16.7038 3.92773 16.918ZM5.98535 18.0732H17.0117C17.6087 18.0732 18.0303 17.957 18.2764 17.7246L13.2793 12.7617L12.8555 13.1924C12.3906 13.639 11.9144 13.8623 11.4268 13.8623C10.9346 13.8623 10.4561 13.639 9.99121 13.1924L9.56738 12.7686L4.57715 17.7246C4.85514 17.957 5.32454 18.0732 5.98535 18.0732ZM18.9053 16.9111C19.0238 16.6924 19.083 16.3392 19.083 15.8516V8.29102C19.083 7.79883 19.0215 7.44564 18.8984 7.23145L14.0107 12.0508L18.9053 16.9111Z" fill="#F8FAFC"></path>
                        </svg>
                    </div>
                    <div className={boxStyles.text}>
                        {props.name}
                    </div>
                </div>
                {boxLeft}
            </div>
        </div>
    )
}