import React from "react";
import Header from "./Header";
const LoginScreen = () => {
  //add function for user redirect to home page after login
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
  
  const [loggedIn, setLoggedin] = React.useState(false);
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
      setLoggedin(true);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
    setLoggedin(false);
  };


  
  return (
    <div>
    <div className="bg-black text-green-500 min-h-screen flex items-center justify-center">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md text-md md:text-lg" onClick = {handleLogin}>
          Login with Spotify
        </button>
    </div>
    </div>
  );
};

export default LoginScreen;
