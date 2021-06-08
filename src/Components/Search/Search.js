import React, {useState} from 'react';
import * as styles from './Search.module.css'

function Search({setFetchLink, setDataStatus}) {
   const[searchWord, setSearchWord] = useState('')

   const search = (event) => {
    if (event.key === 'Enter') {      
      const searchWord = event.target.value      
      setFetchLink(`https://newsapi.org/v2/everything?q=${searchWord}&apiKey=c5c59399c298440c8978f43a60953157`)
      setSearchWord(searchWord)
      showLink()
        }
    }
    
    const searchNews = () => {
        const link = document.querySelector('.Search_searchLink__JsK63')
        const back = document.querySelector('.Search_back__2UPc1')
        const search = document.querySelector('.searchInput')
        search.value = ''        
        link.style.visibility = 'hidden'
        back.style.visibility = 'visible'
        setDataStatus(false)
    }

    const showLink = () => {
        const link = document.querySelector('.Search_searchLink__JsK63')
        const back = document.querySelector('.Search_back__2UPc1')
        back.style.visibility = 'hidden'        
        link.style.visibility = 'inherit'        
    }

    const hideLink = () => {
        const link = document.querySelector('.Search_searchLink__JsK63')
        const back = document.querySelector('.Search_back__2UPc1')
        const search = document.querySelector('.searchInput')
        search.value = ''        
        link.style.visibility = 'hidden'
        back.style.visibility = 'visible'
    }

    const back = () => {
        setFetchLink('https://newsapi.org/v2/top-headlines?sources=cnn,bbc-news,associated-press,bloomberg,the-wall-street-journal&apiKey=c5c59399c298440c8978f43a60953157')
        const yes = document.querySelector('.Search_yes__3aq3p')
        yes.style.visibility = 'visible'
        
    }

    const yes = () => {        
        setDataStatus(false)
        const back = document.querySelector('.Search_back__2UPc1')
        const yes = document.querySelector('.Search_yes__3aq3p')
        back.style.visibility = 'hidden'
        yes.style.visibility = 'hidden'
    }

    const sliderNextPrev = (dir) => {
        const slider = document.querySelector('.news-list')       

        if (dir === 'next') {
        slider.appendChild(slider.firstElementChild);
        } else if (dir === 'prev') {
        slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
        } 
    }

    return (    
        <section className={styles.search}>
            <div className="container">
                <div className={styles.wrapper}>                    
                    <div className={styles.sliderButtons}>          
                        <button onClick={() => { sliderNextPrev('prev') }} className={styles.buttonSliderPrev}></button>

                        <div className={styles.searchArticle}>
                            <input className="searchInput" onKeyPress={search} name="search" placeholder="Enter ''oil'' or another #search_word to get news..." />

                            <div className={styles.searchLink}>
                                <div onClick={() => { searchNews() }} className={styles.searchNavLink}>
                                    Read about <span>#{searchWord}</span>
                                </div>
                                <button onClick={() => { hideLink() }}>+</button>                                
                            </div>
                            <div className={styles.backWrapper}>
                                <button className={styles.back} onClick={() => { back() }}>Back to top-news</button>
                                <button className={styles.yes} onClick={() => { yes() }}>Go back?</button>
                            </div>      
                        </div>

                        <button onClick={() => { sliderNextPrev('next') }} className={styles.buttonSliderNext}></button>                 
                    </div>                    
                </div>                
            </div>            
        </section>    
      )

}

export default Search;