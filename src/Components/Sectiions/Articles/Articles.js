import React, {useEffect, useState} from 'react'
import * as styles from './Articles.module.css'
import './Articles.module.css';
import PopUp from './PopUp';


function Articles({topNews}) {    

  const[href, setHref] = useState('')

  const popUp = (event) => {
    event.preventDefault();    	        
    setHref(event.target.src);    
  }

  const addImage = (article) => {
    if (article.urlToImage) {
      return (
        <a onClick={(event) => {popUp(event)}} className={styles.popUp} data-image="popup" href={article.urlToImage} target="_blank" rel="noreferrer">
          <img className={styles.image} src={article.urlToImage} alt="#"/>
        </a>
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
    htmlList = topNews.map((article, index) => {
      return (
        <li key={index} id={index}>
          <button onClick={(event) => {mark(event)}} className={styles.marker}>
            <span>&#10026;</span>
          </button>

          <h2>{article.title}</h2>

          <p>{article.description}</p>

          <div>
              {article.content}
              
              <a target="blank" rel="noreferrer" href={article.url}  className={styles.link}>
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
                <ul className="newsList">
                    {list}
                </ul>

                <PopUp href={href} setHref={setHref}/>               
            </div>            
        </section>    
      )
}

export default Articles;