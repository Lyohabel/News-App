import React, {useState, useEffect} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from "./Components/Header/Header"
import Articles from "./Components/Articles/Articles"

import './App.css';

function App() {
  const[dataStatus, setDataStatus] = useState(false)  
  const[news, setNews] = useState([])
 

  const getData = () => {
    fetch('https://newsapi.org/v2/top-headlines?sources=cnn,bbc-news,associated-press,bloomberg,the-wall-street-journal&apiKey=c5c59399c298440c8978f43a60953157')
    .then((res) => {
      return res.text()
    })
    .then((data) => {      
      setNews(JSON.parse(data).articles)
      //setDataStatus(true)
    })    
  }

//   const getData = async () => {    
//     const response = await fetch('https://newsapi.org/v2/top-headlines?sources=cnn,bbc-news,associated-press,bloomberg,the-wall-street-journal&apiKey=c5c59399c298440c8978f43a60953157')
//     const resp = await response.json()
//     const articles = await resp.articles   
//     setNews(articles)    
// }

  useEffect(() => {
    if (dataStatus === false) getData()   
  }, [dataStatus])

  console.log(news[13])
  
  return (
    <BrowserRouter >
      <Header/>

      <Switch>
        <Route exact path='/'>
          <Articles news={news}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
