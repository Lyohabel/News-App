import React from 'react';
import * as styles from './Settings.module.css'

function Settings({setTopDataStatus, setTopFetchLink}) {

    const chooseCountry = (event) => {
        const country = event.target.value      
      setTopFetchLink(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=c5c59399c298440c8978f43a60953157`)
             
        if (event.key === 'Enter') {
            setTopDataStatus(false)
            event.target.value = ''
        }
    }

    const choosePublisher = (event) => {
        const publishers = event.target.value      
      setTopFetchLink(`https://newsapi.org/v2/top-headlines?sources=${publishers}&apiKey=c5c59399c298440c8978f43a60953157`)
             
        if (event.key === 'Enter') {
            setTopDataStatus(false)
            event.target.value = ''
        }
    }

   

    return (    
        <section className={styles.settings}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.typeChoose}>
                        <h2>Choose country</h2>

                        <p className={styles.note}>You can choose one of the following country designations to set search of top news:<br/>
                        <span className={styles.keys}>ae ar  at  au  be  bg  br  ca  ch  cn  co  cu  cz  de  eg  fr  gb  gr  hk  hu  id  ie  il  in  it  jp  kr  lt  lv  ma  mx  my  ng  nl  no  nz  ph  pl  pt  ro  rs  ru  sa  se  sg  si  sk  th  tr  tw  ua  us  ve  za</span>
                        </p>

                        <input className="settingInput" onKeyPress={chooseCountry} name="search" placeholder="Enter ''us'' or another country designation to set top news..." />
                    </div>

                    <h3 className={styles.warning}>Warning! You can choose either COUNTRY or PUBLISHERS!</h3>

                    <div className={styles.typeChoose}>
                        <h2>Choose news publishers</h2>

                        <p className={styles.note}>You can choose one or more of the following publishers to set search of top news:<br/>
                        <span className={styles.keys}>abc-news  al-jazeera-english  associated-press  bbc-news  bbc-sport  bild  bloomberg  business-insider  cnn  crypto-coins-news  die-zeit  fox-news  google-news  hacker-news  independent  le-monde  lenta  national-geographic  news24  new-scientist  newsweek  nhl-news  rbc  reuters  spiegel-online  the-jerusalem-post  the-wall-street-journal  the-washington-post  time  usa-today</span>
                        Separate words with a comma without(!) a space, for example: le-monde,cnn,rbc</p>
                        
                        <input className="settingInput" onKeyPress={choosePublisher} name="search" placeholder="Enter ''bbc-news,reuters'' or another publishers to set top news..." />
                    </div> 
                </div>                
            </div>            
        </section>    
      )
}

export default Settings;

