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
import Store from './Context'

import './App.css';

function App() {
  const[topFetchLink, setTopFetchLink] = useState('https://newsapi.org/v2/top-headlines?sources=cnn,bbc-news,associated-press,bloomberg,the-wall-street-journal&apiKey=c5c59399c298440c8978f43a60953157')
  const[topDataStatus, setTopDataStatus] = useState(false)  
  const[topNews, setTopNews] = useState([])

  const[choosedFetchLink, setChoosedFetchLink] = useState('https://newsapi.org/v2/everything?q=covid&apiKey=c5c59399c298440c8978f43a60953157')
  const[choosedDataStatus, setChoosedDataStatus] = useState(false)  
  const[choosedNews, setChoosedNews] = useState([])

  const[country, setCountry] = useState('no country')

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

  useEffect(() => {
    if (topDataStatus === false) getData(topFetchLink, setTop)   
  }, [topDataStatus, topFetchLink])

  useEffect(() => {
    if (choosedDataStatus === false) getData(choosedFetchLink, setChoose)   
  }, [choosedDataStatus, choosedFetchLink])  
  
  return (
    <BrowserRouter >
      <Store.Provider value={{topNews}}>
        <Header/>

        <Nav/>      

        <Switch>        
          <Route exact path='/'>
            <Slider topFetchLink={topFetchLink} topDataStatus={topDataStatus} setTopFetchLink={setTopFetchLink} setTopDataStatus={setTopDataStatus}/>
            <Articles/>
          </Route>

          <Route path='/choosed-news'>
            <Search choosedFetchLink={choosedFetchLink} choosedDataStatus={choosedDataStatus} setChoosedFetchLink={setChoosedFetchLink} setChoosedDataStatus={setChoosedDataStatus}/>
            <ChoosedNews choosedNews={choosedNews}/>
          </Route>

          <Route path='/about'>
            <About/>
          </Route>

          <Route path='/settings'>
            <Settings country={country} setCountry={setCountry} setTopDataStatus={setTopDataStatus} setTopFetchLink={setTopFetchLink}/>
          </Route>

          <Route path='/contacts'>
            <Contacts/>
          </Route>

        </Switch>

        <Footer/>
      </Store.Provider>
    </BrowserRouter>
  );
}

export default App;


