import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Artists from "../components/Stats/Artists";
const Main = () => {
    var Spotify = require("spotify-web-api-js");
    var spotifyApi = new Spotify();

    const [Stat, SetStat] = React.useState(0);
    const getTokensFromUrl = () => {
        
    if (!window.location.hash) {
          window.localStorage.removeItem('token');
          window.location.href = '/login'
    }
        return window.location.hash
          .substring(1)
          .split("&")
          .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
          }, {});
        };
    //extract token from url and store in local storage while clearing url
    if(!localStorage.getItem('token')){
        const token = getTokensFromUrl();
        localStorage.setItem('token', token.access_token);
        window.location.hash = "";
        localStorage.setItem('statistic', 'artists');
    }
    //redirect user if no token and get tokens from url
    if(!localStorage.getItem('token') && getTokensFromUrl() == null){
        window.location.href = "/";
    }
  //hide token from url
  if (localStorage.getItem('token')) {
    window.history.pushState({}, document.title, "/" + window.location.pathname.split('/')[1]);
  }


  //creating spotify api to pass to statistic components
  spotifyApi.setAccessToken(localStorage.getItem('token'));

  const handleStatChange = (event) => {
    SetStat(event.target.value);
  }
  


  return (
    
    <div className="bg-black">
        <Header Statistic={Stat} handleStatChange = {handleStatChange} spotifyApi = {spotifyApi} />
        <div>
        </div>
         <Artists Statistic = {Stat} spotifyApi = {spotifyApi}/> 
        <Footer/>
    </div>
  )
}

export default Main