import React, {useState} from 'react';
import * as styles from './Search.module.css'

function Search({fetchLink, dataStatus, setFetchLink, setDataStatus}) {

    const[searchLink, setSearchLink] = useState('https://newsapi.org/v2/top-headlines?sources=cnn,bbc-news,associated-press,bloomberg,the-wall-street-journal&apiKey=c5c59399c298440c8978f43a60953157')
    
    const getNewData = async () => {    
        const changeLink = await setFetchLink(searchLink)
        //setDataStatus(false)  
    }    

   const search = (event) => {
    if (event.key === 'Enter') {      
      const searchWord = event.target.value
      setSearchLink(`https://newsapi.org/v2/everything?q=${searchWord}&apiKey=c5c59399c298440c8978f43a60953157`)
      getNewData()
      console.log(fetchLink)
      console.log(dataStatus)
      setDataStatus(false) 
        }
    }

    console.log(fetchLink)
    console.log(dataStatus)

    

    const sliderNextPrev = (dir) => {
        const slider = document.querySelector('.news-list')       

        if (dir === 'next') {
        slider.appendChild(slider.firstElementChild);
        } else if (dir === 'prev') {
        slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
        } 
    }

    //console.log(document.querySelector('.news-list'))

    return (    
        <section className={styles.search}>
            <div className="container">
                <div className={styles.wrapper}>                    
                    <div className={styles.sliderButtons}>          
                        <button onClick={() => { sliderNextPrev('prev') }} className={styles.buttonSliderPrev}></button>

                        <div className={styles.searchArticle}>
                            <input onKeyPress={search} name="search" placeholder="Enter ''bitcoin'' or another word to search news..." />
                            <ul className={styles.searchLinks}>
                                {}
                            </ul>       
                        </div>

                        <button onClick={() => { sliderNextPrev('next') }} className={styles.buttonSliderNext}></button>                 
                    </div>                    
                </div>                
            </div>            
        </section>    
      )

}

export default Search;