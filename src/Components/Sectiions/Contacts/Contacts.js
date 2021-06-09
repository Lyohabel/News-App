import React from 'react';
import * as styles from './Contacts.module.css'

function Contacts() {

   

    return (    
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div>
                        <form method="POST" encType="multipart/form-data" className="form">

                            <fieldset>
                                <legend>General information</legend>
                                <div className="field">
                                    Name<br />
                                    <input required minLength="2" type="text" name="surtname" placeholder="Joseph" />
                                </div>
                                <div className="field">
                                    Surname<br />
                                    <input required minLength="2" type="text" name="firstname" placeholder="Biden" />
                                </div>                                
                                <div className="field">
                                Date of Birth<br />
                                    <input required type="date" name="birthtay" />
                                </div>
                            </fieldset>

                            <fieldset>
                                <legend>Contact information</legend>
                                <div className="field">
                                    Phone<br />
                                    <input required type="tel" name="phone" placeholder="+......" />
                                </div>
                                <div className="field">
                                    E-mail<br />
                                    <input type="email" name="email" placeholder="mail@gmail.com" />
                                </div>                                
                                <div className="field">
                                   City<br />
                                     <input required minLength="2" type="text" name="city" placeholder="New York" />    
                                </div>
                            </fieldset>

                            <fieldset className="height">
                                <legend>Message</legend>
                                <div className="field">
                                    Your message<br />
                                    <textarea name="message" placeholder="Enter text"></textarea>
                                </div>
                            </fieldset>

                            <button className="but" type="submit">Send</button>
                            <button className="but" type="reset">Clear</button>
                            <button className="but close" type="button">Close</button>
                        </form>
                    </div>
                </div>                
            </div>            
        </header>    
      )

}

export default Contacts;