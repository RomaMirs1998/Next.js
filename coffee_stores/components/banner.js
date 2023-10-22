import styles from '../styles/Banner.module.css'

const Banner = (props) => {
    return <div className={styles.container}>
        <h1 className={styles.title}>Coffee <span className={styles.title2}>Expert</span></h1>
        <p className={styles.subTitle}>Discover your local coffee shops!</p>
        <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={props.handleOnClick} disabled={props.disb}>{props.buttonText}</button>
        </div>
    </div>
}

export default Banner