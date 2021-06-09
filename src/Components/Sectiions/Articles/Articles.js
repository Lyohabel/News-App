import React, {useEffect, useState} from 'react'
//import {NavLink} from 'react-router-dom';
import * as styles from './Articles.module.css'

function Articles({topNews}) {

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
    htmlList = topNews.map((article, index) => {
      return (
        <li key={index} id={index}>
          <button onClick={(event) => {mark(event)}} className={styles.marker}><span>&#10026;</span></button>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <div>
              {article.content}
              <a target="blank" href={article.url}  className={styles.link}>
                <span>Read more...</span>
              </a>                  
          </div>
          {addImage(article)}
        </li>
      )
    })    
    return htmlList.length > 0 ? htmlList : ''    
  }

    const[list, setList] = useState('')

    useEffect(() => {
        if (topNews && topNews.length > 0) {
        setList(createList())
        }
    }, [topNews])
    
    

    return (    
        <section className={styles.articles}>
            <div className="container">           
                <ul className="news-list">
                    {list}
                </ul>               
            </div>            
        </section>    
      )
}

export default Articles;