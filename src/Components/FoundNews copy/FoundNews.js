import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom';
import * as styles from './FoundNews.module.css'

function FoundNews() {

  const[fetchFoundLink, setFetchFoundLink] = useState('')
  const[foundDataStatus, setFoundDataStatus] = useState(false)  
  const[foundNews, setFoundNews] = useState([])

  const href = window.location.href.slice(32);
  setFetchFoundLink(href)

  const getFoundData = () => {
    fetch(fetchFoundLink)
    .then((res) => {
      return res.text()
    })
    .then((data) => {      
      setFoundNews(JSON.parse(data).articles)
      setFoundDataStatus(true)
    })    
  }

  useEffect(() => {
    if (foundDataStatus === false) getFoundData()   
  }, [foundDataStatus])

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
    htmlList = foundNews.map((article, index) => {
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
        if (foundNews && foundNews.length > 0) {
        setList(createList())
        }
    }, [foundNews])
    
    

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

export default FoundNews;