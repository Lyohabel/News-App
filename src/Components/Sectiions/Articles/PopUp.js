import React, {useEffect, useState} from 'react'
import * as styles from './PopUp.module.css';

function PopUp({href, setHref, popUpStatus, setPopUpStatus}) {

    const[popUpImage, setpopUpImage] = useState('')

    const removePopUp = () => {
        //const popUpWrapper = document.querySelector('.PopUp_popUp__2u7fy')        
        //popUpWrapper.remove()
        //setPopUpStatus(false)
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
          //setPopUpStatus(true)                 
        } else {
            const popUpWrapper = document.querySelector('.PopUp_popUp__2u7fy')
            if (popUpWrapper) {
                popUpWrapper.remove()
                //setPopUpStatus(false)
            }
        } 
    }, [href])

    return (
        <div>{popUpImage}</div>        
    )
}

export default PopUp;