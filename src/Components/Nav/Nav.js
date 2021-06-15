import React from 'react';
import {NavLink} from 'react-router-dom';
import * as styles from './Nav.module.css'

function Nav() {

    const showMenu = (event) => {
        const menu = document.querySelector('.Nav_menu__271Ed')        
        menu.style.display = 'flex'
        event.target.style.display = 'none'
    }

    const closeMenu = () => {
        const menu = document.querySelector('.Nav_menu__271Ed')
        const showMenu = document.querySelector('.Nav_showMenu__13urL')
        menu.style.display = 'none'
        showMenu.style.display = 'block'
    }

    return (    
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.wrapper}>
                    <button onClick= {(event) => showMenu(event)} className={styles.showMenu}>Menu</button>                    

                    <ul className={styles.menu}>
                        <li className={styles.menuItem}>
                            <button onClick= {() => closeMenu()} className={styles.closeMenu}>Close</button>
                        </li>
                        <li className={styles.menuItem}>
                            <NavLink className={styles.link} to="/">
                            Top news
                            </NavLink>
                        </li>

                        <li className={styles.menuItem}>
                            <NavLink className={styles.link} to="/choosed-news">
                            Choosed news
                            </NavLink>
                        </li>

                        <li className={styles.menuItem}>
                            <NavLink className={styles.link} to="/about">
                            About project
                            </NavLink>
                        </li>

                        <li className={styles.menuItem}>
                            <NavLink className={styles.link} to="/settings">
                            Settings
                            </NavLink>
                        </li>

                        <li className={styles.menuItem}>
                            <NavLink className={styles.link} to="/contacts">
                            Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>           
        </nav>   
      )
}

export default Nav;