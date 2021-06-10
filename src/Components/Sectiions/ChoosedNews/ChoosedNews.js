import React, {useEffect, useState} from 'react'
import Masonry from 'react-masonry-css'
import * as styles from './ChoosedNews.module.css'

function ChoosedNews({choosedNews}) {

  const addImage = (article) => {
    if (article.urlToImage) {
      return (
        <img src={article.urlToImage} alt="#"/>
      )
    }
  }

   const mark = (event) => {      
      console.log(event)
      }

  const createList = () => {
    let htmlList = []
    htmlList = choosedNews.map((article, index) => {
      return (
        <div className={styles.newsListItem} key={index} id={index}>
          <button onClick={() => {mark()}} className={styles.marker}><span>&#10026;</span></button>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <div>
              {article.content}
              <a target="blank" href={article.url}  className={styles.link}>
                <span>Read more...</span>
              </a>                  
          </div>
          {addImage(article)}
        </div>
      )
    })    
    return htmlList.length > 0 ? htmlList : ''    
  }

    const[list, setList] = useState('')

    useEffect(() => {
        if (choosedNews && choosedNews.length > 0) {
        setList(createList())
        }
    }, [choosedNews])
    
    

    return (    
        <section className={styles.articles}>
            <div className="container">           
                <div className={styles.newsList}>
                <Masonry
                  breakpointCols={3}
                  className={styles.myMasonryGrid}
                  columnClassName={styles.myMasonryGridColumn}>
                  {list}
                </Masonry>
                </div>               
            </div>            
        </section>    
      )
}

export default ChoosedNews;