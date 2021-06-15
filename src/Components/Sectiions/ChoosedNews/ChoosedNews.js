import React, {useEffect, useState} from 'react'
import Masonry from 'react-masonry-css'
import * as styles from './ChoosedNews.module.css'

function ChoosedNews({choosedNews}) {

  const countRead = (event) => {
    const articleHref = event.target.closest('a').href
    if (!localStorage.getItem(articleHref)) {
      localStorage.setItem(articleHref, 1);
    } else {
      let count = localStorage.getItem(articleHref);
      count++;
      console.log(count);
      localStorage.setItem(articleHref, count);
    }    
  }

  const addImage = (article) => {
    if (article.urlToImage) {
      return (
        <img src={article.urlToImage} alt="#"/>
      )
    }
  }

  const mark = (event) => {
    const star = event.target
    if (star.style.color !== 'red') {   
     star.style.color = 'red'
    } else {
     star.style.color = 'rgb(12, 102, 102)'
    }
     }

  const createList = () => {
    let htmlList = []
    htmlList = choosedNews.map((article, index) => {
      return (
        <div className={styles.newsListItem} key={index} id={index}>
          <button onClick={(event) => {mark(event)}} className={styles.marker}>
            <span>&#10026;</span>
          </button>

          <h2>{article.title}</h2>

          <p>{article.description}</p>

          <div>
              {article.content}

              <a onClick={(event) => {countRead(event)}} target="blank" href={article.url}  className={styles.link}>
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

    const[cols, setCols] = useState(3)   
    
    useEffect(() => {
      if (window.innerWidth < 1153 & window.innerWidth > 768) {       
        setCols(2)
      }

      if (window.innerWidth < 769) {        
        setCols(1)
      }
  }, [window.innerWidth])
    

    return (    
        <section className={styles.articles}>
            <div className="container">           
                <div className={styles.newsList}>
                  <Masonry
                    breakpointCols={cols}
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