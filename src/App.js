import React, {useState, useEffect} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from "./Components/Header/Header"
import Nav from "./Components/Nav/Nav"
import Search from "./Components/Sectiions/Search/Search"
import Slider from "./Components/Sectiions/Slider/Slider"
import Articles from "./Components/Sectiions/Articles/Articles"
import ChoosedNews from "./Components/Sectiions/ChoosedNews/ChoosedNews"
import About from "./Components/Sectiions/About/About"
import Settings from "./Components/Sectiions/Settings/Settings"
import Contacts from "./Components/Sectiions/Contacts/Contacts"
import Footer from "./Components/Footer/Footer"

import './App.css';

function App() {
  const[topFetchLink, setTopFetchLink] = useState('https://newsapi.org/v2/top-headlines?sources=cnn,bbc-news,associated-press,bloomberg,the-wall-street-journal&apiKey=c5c59399c298440c8978f43a60953157')
  const[topDataStatus, setTopDataStatus] = useState(false)  
  const[topNews, setTopNews] = useState([])

  const[choosedFetchLink, setChoosedFetchLink] = useState('https://newsapi.org/v2/everything?q=covid&apiKey=c5c59399c298440c8978f43a60953157')
  const[choosedDataStatus, setChoosedDataStatus] = useState(false)  
  const[choosedNews, setChoosedNews] = useState([]) 

  const getData = (link, set) => {
    fetch(link)
    .then((res) => {
      return res.text()
    })
    .then((data) => {
      set(data)
    })    
  }

  const setTop = (data) => {
    setTopNews(JSON.parse(data).articles)
    setTopDataStatus(true)
  }
  
  const setChoose = (data) => {
    setChoosedNews(JSON.parse(data).articles)
    setChoosedDataStatus(true)
  }

//   const getData = async () => {    
//     const response = await fetch('https://newsapi.org/v2/top-headlines?sources=cnn,bbc-news,associated-press,bloomberg,the-wall-street-journal&apiKey=c5c59399c298440c8978f43a60953157')
//     const resp = await response.json()
//     const articles = await resp.articles   
//     setNews(articles)    
// }

  useEffect(() => {
    if (topDataStatus === false) getData(topFetchLink, setTop)   
  }, [topDataStatus])

  useEffect(() => {
    if (choosedDataStatus === false) getData(choosedFetchLink, setChoose)   
  }, [choosedDataStatus])
  
  return (
    <BrowserRouter >
      <Header/>

      <Nav/>      

      <Switch>        
        <Route exact path='/'>
          <Slider topFetchLink={topFetchLink} topDataStatus={topDataStatus} setTopFetchLink={setTopFetchLink} setTopDataStatus={setTopDataStatus}/>
          <Articles topNews={topNews}/>
        </Route>

        <Route path='/choosed-news'>
          <Search choosedFetchLink={choosedFetchLink} choosedDataStatus={choosedDataStatus} setChoosedFetchLink={setChoosedFetchLink} setChoosedDataStatus={setChoosedDataStatus}/>
          <ChoosedNews choosedNews={choosedNews}/>
        </Route>

        <Route path='/about'>
          <About topNews={topNews}/>
        </Route>

        <Route path='/settings'>
          <Settings/>
        </Route>

        <Route path='/contacts'>
          <Contacts/>
        </Route>

      </Switch>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;


