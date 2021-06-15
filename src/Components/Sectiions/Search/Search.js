import React from 'react';
import * as styles from './Search.module.css'

function Search({setChoosedFetchLink, setChoosedDataStatus}) {   

   const search = (event) => {
    const searchWord = event.target.value      
      setChoosedFetchLink(`https://newsapi.org/v2/everything?q=${searchWord}&apiKey=c5c59399c298440c8978f43a60953157`)
            
    if (event.key === 'Enter') {
        setChoosedDataStatus(false)
        event.target.value = ''
        }
    }
    
    return (    
        <section className={styles.search}>
            <div className="container">                
                <div className={styles.searchArticle}>
                    <h2 className={styles.searchTitle}>News by #search_word</h2>

                    <input className="searchInput" onKeyPress={search} name="search" placeholder="Enter ''oil'' or another #search_word" />
                </div>
            </div>            
        </section>    
      )
}

export default Search;