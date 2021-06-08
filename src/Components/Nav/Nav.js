import React from 'react';
import {NavLink} from 'react-router-dom';
import * as styles from './Nav.module.css'

function Nav() {

   

    return (    
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.wrapper}>
                    <button className={styles.showMenu}>Menu</button>
                    <button className={styles.closeMenu}>Close</button>

                    <NavLink className={styles.link} to="/">
                        Top news
                    </NavLink>
                    <NavLink className={styles.link} to="/choosed-news">
                        Choosed news
                    </NavLink>
                    <NavLink className={styles.link} to="/about">
                        About project
                    </NavLink>
                    <NavLink className={styles.link} to="/settings">
                        Settings
                    </NavLink>
                    <NavLink className={styles.link} to="/contacts">
                        Contacts
                    </NavLink>
                </div>
            </div>           
        </nav>   
      )

}

export default Nav;