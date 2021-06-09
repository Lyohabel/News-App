import React, {useEffect, useState} from 'react'
//import {NavLink} from 'react-router-dom';
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
        <li key={index} id={index}>
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
        </li>
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
                <ul className="news-list">
                    {list}
                </ul>               
            </div>            
        </section>    
      )
}

export default ChoosedNews;