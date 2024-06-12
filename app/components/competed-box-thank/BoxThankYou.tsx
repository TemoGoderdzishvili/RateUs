import styles from "../completed-box/CompletedBox.module.css"
import { TySVG } from "../SVG/thankyouSVG/TySVG"
export let selectedRate:number

export const BoxThank = () => {
    
    return (
        <div className={styles.box}>
            <div className={styles.content}>
                <TySVG />
                <div className={styles.youSelected}>You selected {selectedRate} out of 5</div>
            </div>
        </div>
    )
}