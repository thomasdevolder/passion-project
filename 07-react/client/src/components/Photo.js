import React from 'react'
import styles from './photographer.module.css'
import AnimatedPage from './AnimatedPage'
import { motion } from 'framer-motion'

const Photo = ({image, description, business, url, title}) => {
    return(
        <motion.div className={styles.anime}  ininital={{opacity: 0, x: 100}}
    animate={{opacity: 1, x: 0}}
    exit={{opacity: 0, x: -100}}
    duration={1} >
            
                <h3 className={styles.business}>{title}</h3>
                <div className={styles.info}>
                    <p className={styles.description}>{description}</p>
                    <img className={styles.img} src={image}></img>
                    <a className={styles.website} target="_blank" href={url}>
                        <p className={styles.websiteName}>{business}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="56.756" height="57.537" viewBox="0 0 56.756 57.537"><g transform="translate(0.708 1)"><path d="M11733.266,401h55.049v56.537" transform="translate(-11733.266 -401)" fill="none" stroke="#fff" stroke-width="2"/><path d="M11793.768,401l-55.049,55.048" transform="translate(-11738.719 -401)" fill="none" stroke="#fff" stroke-width="2"/></g></svg>
                    </a>
                </div>
           
        </motion.div>
    )
} 

export default Photo 