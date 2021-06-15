import React from 'react'
import * as styles from './Settings.module.css'

function Settings({setTopDataStatus, topFetchLink, setTopFetchLink, country, setCountry, publishers, setPublishers, choosedPublishers, setChoosedPublishers, defaultPublishers}) {

    const countries = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za']

    const allPublishers = ['abc-news', 'al-jazeera-english', 'associated-press', 'bbc-news', 'bbc-sport', 'bild', 'bloomberg', 'business-insider', 'cnn', 'crypto-coins-news', 'die-zeit', 'fox-news', 'google-news', 'hacker-news', 'independent', 'le-monde', 'lenta', 'national-geographic', 'news24', 'new-scientist', 'newsweek', 'nhl-news', 'rbc', 'reuters', 'spiegel-online', 'the-jerusalem-post', 'the-wall-street-journal', 'the-washington-post', 'time', 'usa-today']

    const buttonDefaultColor = () => {
        const btnSaveSettings = document.querySelector('.Settings_save__3p-2M')
        btnSaveSettings.style.color = '#000'
    }    
    
    const chooseCountry = (event) => {
        const country = event.target.innerHTML;
        setCountry(country)
        setPublishers('')
        setChoosedPublishers('No publisers')

        setTopFetchLink(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=c5c59399c298440c8978f43a60953157`)

        buttonDefaultColor()        
    }

    const choosePublishers = (event) => {
        if (publishers === defaultPublishers || publishers === '') {
            const publisher = event.target.innerHTML
            setPublishers(publisher)
            setChoosedPublishers(publisher)
            setTopFetchLink(`https://newsapi.org/v2/top-headlines?sources=${publisher}&apiKey=c5c59399c298440c8978f43a60953157`)
            } else {
                const publisher = event.target.innerHTML;
                const morePublishers = publishers + ',' + publisher;
                setPublishers(morePublishers)
                setChoosedPublishers(morePublishers)
                setTopFetchLink(`https://newsapi.org/v2/top-headlines?sources=${morePublishers}&apiKey=c5c59399c298440c8978f43a60953157`)        
                }
        setCountry('no country')

        buttonDefaultColor()
    }

    const chooseDefault = () => {
        setPublishers(defaultPublishers)
        setChoosedPublishers('default publisers')

        setCountry('no country')       

        setTopFetchLink(`https://newsapi.org/v2/top-headlines?sources=${defaultPublishers}&apiKey=c5c59399c298440c8978f43a60953157`)
        
        buttonDefaultColor()
    } 

    const saveSettings= (event) => {
        
        setTopDataStatus(false)

        localStorage.setItem('topFetchLink', topFetchLink)

        event.target.style.color = 'rgb(150, 200, 168)'
    }    

    const creatCountries = () => {
        let countryList = []
        countryList = countries.map((country, index) => {
            return (
                <li className={styles.itemCountry} key={index}>
                    <button onClick= {(event) => chooseCountry(event)}  className={styles.btnCountry}>{country}</button>
                </li>                
            )
        })
        return countryList.length > 0 ? countryList : ''
    }

    const creatPublishers = () => {
        let publishersList = []
        publishersList = allPublishers.map((country, index) => {
            return (
                <li className={styles.itemPublisher} key={index}>
                    <button onClick= {(event) => choosePublishers(event)}  className={styles.btnPublisher}>{country}</button>
                </li>                
            )
        })
        return publishersList.length > 0 ? publishersList : ''
    }

    

    return (    
        <section className={styles.settings}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.typeChoose}>
                        <h2>Choose country <span className={styles.choosedCountry}>(choosed: <span className='country'>{country}</span>)</span></h2>

                        <p className={styles.note}>You can choose one of the following country designations to set search of top news:</p>

                        <ul className={styles.countryList}>
                            {creatCountries()}
                        </ul>                                                                 
                    </div>

                    <h3 className={styles.warning}>Warning! You can choose either COUNTRY or PUBLISHERS!</h3>                    

                    <div className={styles.typeChoose}>
                        <h2>Choose news publishers</h2>

                        <p className={styles.note}>You can choose one or more of the following publishers to set search of top news:</p>

                        <ul className={styles.publishersList}>
                            {creatPublishers()}
                        </ul>
                        
                        <p className={styles.choosedPublishers}>Choosed: <span className={styles.choosedPublishers}>{choosedPublishers}</span></p>

                        <p className={styles.inf}>DEFAULT SETTINGS:  <span>country</span> - no country,  <span>publishers</span> - cnn, bbc-news, associated-press, bloomberg, the-wall-street-journal.</p>
                    </div>

                    <div className={styles.saveAndDefault}>
                        <button onClick= {() => chooseDefault()} className={styles.chooseDefault}>Back to default settings</button>
                        <button onClick= {(event) => saveSettings(event)} className={styles.save}>Save settings</button>                         
                    </div>                    
                </div>                
            </div>            
        </section>    
      )
}

export default Settings;

