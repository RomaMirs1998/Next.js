import React from "react"
import styles from "@/components/SectionCard.module.css"


type SectionCardProps = React.ReactNode

const SectionCard = (props:{children:SectionCardProps,title:string}):React.JSX.Element => {

    const {children,title} = props
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cardWrapper}>
               {children} 
            </div>
        </section>
    )
    
}

export default SectionCard