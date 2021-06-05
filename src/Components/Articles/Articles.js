import React, {useContext, useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom';
import * as styles from './Articles.module.css'

function Articles({news}) {

    const createList = () => {
        let htmlList = []
        htmlList = news.map((article, index) => {
          return (
            <li key={index} id={index}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <div>
                  {article.content}
                  <NavLink to={"/read/" + index}  className={styles.link}>
                    <span>Read more...</span>
                  </NavLink>                  
              </div>
              <img src={article.urlToImage} alt="No image"/>
            </li>
          )
        })    
        return htmlList.length > 0 ? htmlList : ''    
    }

    const[list, setList] = useState('')

    useEffect(() => {
        if (news && news.length > 0) {
        setList(createList())
        }
    }, [news])  

    return (    
        <section className={styles.articles}>
            <div className="container">           
                <ul>
                    {list}
                </ul>               
            </div>            
        </section>    
      )
}

export default Articles;