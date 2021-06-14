import React, {useState} from 'react'
import * as styles from './Settings.module.css'

function Settings({setTopDataStatus, setTopFetchLink}) {

    const countries = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za']

    const allPublishers = ['abc-news', 'al-jazeera-english', 'associated-press', 'bbc-news', 'bbc-sport', 'bild', 'bloomberg', 'business-insider', 'cnn', 'crypto-coins-news', 'die-zeit', 'fox-news', 'google-news', 'hacker-news', 'independent', 'le-monde', 'lenta', 'national-geographic', 'news24', 'new-scientist', 'newsweek', 'nhl-news', 'rbc', 'reuters', 'spiegel-online', 'the-jerusalem-post', 'the-wall-street-journal', 'the-washington-post', 'time', 'usa-today']

    const defaultPublishers = 'cnn,bbc-news,associated-press,bloomberg,the-wall-street-journal'

    const[country, setCountry] = useState(localStorage.getItem('country') || 'no country')

    const[publishers, setPublishers] = useState(localStorage.getItem('publishers') || defaultPublishers)

    const[choosedPublishers, setChoosedPublishers] = useState(localStorage.getItem('choosedPublishers') || `default publisers (${defaultPublishers})`)

    const btnCountryDefaultColor = () => {
        const btnSaveCountry = document.querySelector('.Settings_saveAndDefault__1SBCm button')
        btnSaveCountry.style.color = '#000'
    }

    const btnPublishersDefaultColor = () => {        
        const btnSavePublishers = document.querySelector('.Settings_saveAndDefault__1SBCm button')
        btnSavePublishers.style.color = '#000'
    }

    const buttonsDefaultColor = () => {
        btnCountryDefaultColor();
        btnPublishersDefaultColor();
    }
    
    const chooseCountry = (event) => {
        const country = event.target.innerHTML;
        setCountry(country)
        //localStorage.setItem('country', country)
        setPublishers('No publisers')
        setChoosedPublishers('No publisers')

        setTopFetchLink(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=c5c59399c298440c8978f43a60953157`)

        buttonsDefaultColor()
        
    }

    const saveCountry = (event) => {
        localStorage.setItem('country', country)
        localStorage.setItem('choosedPublishers', 'No publisers')
        
        setTopDataStatus(false)

        event.target.style.color = 'rgb(150, 200, 168)'
    }    

    const choosePublishers = (event) => {
        if (publishers !== 'No publisers' & publishers !== defaultPublishers) {
            const publisher = event.target.innerHTML;
            const morePublishers = publishers + ',' + publisher;
            setPublishers(morePublishers)
            setChoosedPublishers(morePublishers)
            //localStorage.setItem('publishers', publishers) 
        } else {
            const publisher = event.target.innerHTML
            setPublishers(publisher)
            setChoosedPublishers(publisher)
            //localStorage.setItem('publishers', publishers)
            }
                    
        setCountry('no country')
        //localStorage.setItem('country', 'no country') 

        setTopFetchLink(`https://newsapi.org/v2/top-headlines?sources=${publishers}&apiKey=c5c59399c298440c8978f43a60953157`)            
       
        //setTopDataStatus(false)
    }

    const savePublishers = () => {        
        localStorage.setItem('choosedPublishers', choosedPublishers)
        localStorage.setItem('publishers', publishers)
        localStorage.setItem('country', 'no country')

        setTopDataStatus(false)
    }

    const chooseDefault = () => {
        setPublishers(defaultPublishers)
        setChoosedPublishers(`default publisers (${defaultPublishers})`)

        setCountry('no country')
        localStorage.setItem('choosedPublishers', `default publisers (${defaultPublishers})`)
        localStorage.setItem('country', 'no country') 

        setTopFetchLink(`https://newsapi.org/v2/top-headlines?sources=${defaultPublishers}&apiKey=c5c59399c298440c8978f43a60953157`)

        setTopDataStatus(false)
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

                        <div className={styles.saveAndDefault}>
                            <button onClick= {(event) => saveCountry(event)} className={styles.save}>Save country</button>
                            <button onClick= {() => chooseDefault()} className={styles.chooseDefault}>Clear country<br/>(choose default publishers)</button> 
                        </div>                                                  
                    </div>

                    <h3 className={styles.warning}>Warning! You can choose either COUNTRY or PUBLISHERS!</h3>                    

                    <div className={styles.typeChoose}>
                        <h2>Choose news publishers</h2>

                        <p className={styles.note}>You can choose one or more of the following publishers to set search of top news:</p>

                        <ul className={styles.publishersList}>
                            {creatPublishers()}
                        </ul>
                        
                        <p className={styles.choosedPublishers}>Choosed: <span className={styles.choosedPublishers}>{choosedPublishers}</span></p>

                        <p className={styles.note}>If you want to delete choosed publishers, press any country designation.</p>
                    </div>

                    <div className={styles.saveAndDefault}>
                        <button onClick= {(event) => savePublishers(event)} className={styles.save}>Save publishers</button>
                        <button onClick= {() => chooseDefault()} className={styles.chooseDefault}>Choose default publishers</button> 
                    </div>                    
                </div>                
            </div>            
        </section>    
      )
}

export default Settings;

