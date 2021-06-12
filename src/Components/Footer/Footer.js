import React from 'react';
import * as styles from './Footer.module.css'

function Footer() {

   

    return (    
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h3>E-mail: news_app@gmail.com</h3>
                </div>                
            </div>            
        </footer>    
      )

}

export default Footer;