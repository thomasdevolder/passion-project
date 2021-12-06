import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styles from './login.module.css'

const Login = () => {
    const history = useNavigate(); 

    const goHome = (e) => {
        e.preventDefault(); 
        
        history('/home/start'); 
    }

    return(
        <div className={styles.enter}>
            <h1 className={styles.enter_title}>17.12.2022</h1>
            <form action className={styles.enter_form} onSubmit={goHome}>
                <label className={styles.enter_label} htmlFor="name">Voornaam</label>
                <input className={styles.enter_input} id="name" name="name" type="text" placeholder="Thomas" />
                <label className={styles.enter_label} htmlFor="code">Persoonlijke code</label>
                <input className={styles.enter_input} id="code" name="code"  type="text" placeholder="XXXZXS" />
                <input type="submit" className={styles.enter_submit} defaultValue="Enter event" />
            </form>
        </div>
    )
}

export default Login; 
