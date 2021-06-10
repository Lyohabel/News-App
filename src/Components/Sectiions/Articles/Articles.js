import React, {useEffect, useState} from 'react'
//import {NavLink} from 'react-router-dom';
import * as styles from './Articles.module.css'
import './Articles.module.css';

function Articles({topNews}) {

  const popUp = (event) => {
    event.preventDefault();
	  const href = event.target.src;     
    
    const popupWrap = document.createElement('div');
	  popupWrap.classList.add('popupWrap');

	  const popup = document.createElement('div');
	  popup.classList.add('popup');

	  const close = document.createElement('button');
	  close.innerHTML = '&#10006;';
	  close.classList.add('close');
    close.style.color = 'red';

	  popupWrap.appendChild(close);

	  const img = document.createElement('img');
    img.classList.add('popUpImg');
	  img.src = href;

	  popup.appendChild(img);

	  popupWrap.appendChild(popup);

    const sect = document.querySelector('.Articles_articles__2H5iy')
    const sectCont = sect.querySelector('.container')

	  sectCont.appendChild(popupWrap);

	  close.addEventListener('click', function() {
		  popupWrap.remove();
	  });
  }

  const addImage = (article) => {
    if (article.urlToImage) {
      return (
        <a onClick={(event) => {popUp(event)}} className={styles.popUp} data-image="popup" href={article.urlToImage} target="_blank">
          <img className={styles.image} src={article.urlToImage} alt="#"/>
        </a>
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
                <ul className="newsList">
                    {list}
                </ul>               
            </div>            
        </section>    
      )
}

export default Articles;