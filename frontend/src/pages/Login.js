import React from 'react'
import Footer from '../components/Footer';

const Login = () => {
    const redirecturi = "http://localhost:3000";
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const clientId = "5791e72126494efa9ca3037e8cc03591";
  const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];
  const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirecturi}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

  //clear token
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
  }


  const getTokensFromUrl = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      }, {});

  };
 


  const handleLogin = () => {
    window.location.href = loginUrl;
    let _token = getTokensFromUrl();
    if (_token.access_token) {
      localStorage.setItem("token", _token.access_token);
      window.location.href = "/";
    
    }
  };
  return (
    <div>
    <div className="flex flex-col md:flex-row h-screen">
        
      <div className="bg-black flex-1 p-16 flex items-center justify-center md:justify-end">

      <div className="absolute top-1 left-5 p-4 middle-1">
        <div className="text-white text-4xl px-10 font-mono pt-5 text-center">SpotiStatistics</div>
      </div>
        <button className="bg-green-500 rounded-full px-40 py-6 font-medium shadow-md hover:shadow-lg hover:bg-green-600" onClick = {handleLogin}>
          Log in with Spotify
        </button>
      </div>
      <div className="bg-gray-200 flex-1 p-16 flex items-center justify-center">
        <img src ="https://i.scdn.co/image/ab6761610000e5eb39e849fc23f75680e023e004" alt=""></img>
      </div>
    </div>
    <Footer/>
    </div>

  )
}

export default Login