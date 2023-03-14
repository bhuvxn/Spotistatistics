import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Artists from "../components/Stats/Artists";
const Main = () => {
       
    const getTokensFromUrl = () => {
        
        if (!window.location.hash) {
          return null;
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
    }
    //redirect user if no token and get tokens from url is null
    if(!localStorage.getItem('token') && getTokensFromUrl() == null){
        window.location.href = "/";
    }
  //hide token from url
  if (localStorage.getItem('token')) {
    window.history.pushState({}, document.title, "/" + window.location.pathname.split('/')[1]);
  }
  //redirect to login if no token
  //extract token from url 



  return (
    
    <div className="bg-black">
        <Header/>
        <div>
        </div>
        <Artists/>
        <Footer/>
    </div>
  )
}

export default Main