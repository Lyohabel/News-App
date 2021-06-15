import React, {useEffect, useState, useContext} from 'react'
import * as styles from './Articles.module.css'
import './Articles.module.css';
import PopUp from './PopUp';
import Store from '../../../Context'


function Articles() {
  
  const data = useContext(Store)

  const[href, setHref] = useState('')

  const popUp = (event) => {
    event.preventDefault();    	        
    setHref(event.target.src);    
  }

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
    htmlList = data.topNews.map((article, index) => {
      return (
        <li key={index} id={index}>
          <button onClick={(event) => {mark(event)}} className={styles.marker}>
            <span>&#10026;</span>
          </button>

          <h2>{article.title}</h2>

          <p>{article.description}</p>

          <div>
              {article.content}
              
              <a onClick={(event) => {countRead(event)}} target="blank" rel="noreferrer" href={article.url}  className={styles.link}>
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
        if (data.topNews && data.topNews.length > 0) {
        setList(createList())
        }
    }, [data.topNews]) // eslint-disable-line

    return (    
        <section className={styles.articles}>
            <div className="container">
              <div className={styles.wrapper}>          
                <ul className="newsList">
                    {list}
                </ul>

                <PopUp href={href} setHref={setHref}/>
              </div>                               
            </div>            
        </section>    
      )
}

export default Articles;