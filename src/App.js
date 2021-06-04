import React, {useState, useEffect} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from "./Components/Header/Header"

import './App.css';

function App() {
  const[dataStatus, setDataStatus] = useState(false)
  const[news, setNews] = useState([])
 

  const getData = () => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c5c59399c298440c8978f43a60953157')
    .then((res) => {
      return res.text()
    })
    .then((data) => {
      localStorage.setItem('data', data)
      const resp = JSON.parse(data)
      setNews(resp.articles)
      setDataStatus(true)
      console.log(news[0])    
    })           
  } 

  useEffect(() => {
    if (dataStatus === false) getData()   
  }, [dataStatus, news])

  return (
    <Header/>
  );
}

export default App;
