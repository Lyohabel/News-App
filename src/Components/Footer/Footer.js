import React from 'react';
import * as styles from './Footer.module.css'

function Footer() {

    const countVisitors = function() { // eslint-disable-line
        let count = +localStorage.getItem('countVisitors');
    
        if (!count) {
            localStorage.setItem('countVisitors', 0);
            count = 0;
        }
    
        let userStamp = localStorage.getItem('userStamp');
    
        if (!userStamp) {
            localStorage.setItem('userStamp', Date.now());
    
            count++;
            localStorage.setItem('countVisitors', count);
        }
    }();

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