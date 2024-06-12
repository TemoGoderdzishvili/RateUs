import styles from './SubmitBtn.module.css';
import Link from 'next/link';

export const Submit = () => {
    return(
        <Link href={'/thankyou'} className={styles.link}>
            <button className={styles.btn} id='btn'>SUBMIT</button>
        </Link>
    )
}