import React, {useEffect, useState} from 'react'
import * as styles from './PopUp.module.css';

function PopUp({href, setHref}) {

    const[popUpImage, setpopUpImage] = useState('')

    const removePopUp = () => {
        setHref('')
    }

    const showImage = (href) => {
        return (
            <div className={styles.popUp}>
                <div className={styles.popUpContent}>
                    <button className={styles.btnPopUp} onClick={() => {removePopUp()}}>Close X</button>
                    <img src={href} alt="#"></img>
                </div>
            </div>
        )
    }    
    
    useEffect(() => {      
        if (href !== '') {
          setpopUpImage(showImage(href))
          console.log('SSS')
        } else {            
            setpopUpImage('')            
        }
        
    }, [href]) // eslint-disable-line

    return (
        <div>{popUpImage}</div>        
    )
}

export default PopUp;