import React from 'react';
import * as styles from './Header.module.css'

function Header() {

    let opt = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        // hour: 'numeric',
        // minute: 'numeric',
        // second: 'numeric',
    }

    let now = new Date().toLocaleDateString('en', opt);

    return (    
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.date}>
                        <h3>{now}</h3>            
                    </div>
                    <div className={styles.title}>
                        <h1>News <span>App</span></h1>            
                    </div>
                </div>                
            </div>            
        </header>    
      )

}

export default Header;