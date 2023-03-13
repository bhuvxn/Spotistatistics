import React from 'react'
const Artists = () => {
  var Spotify = require('spotify-web-api-js');
  var spotifyApi = new Spotify();
  spotifyApi.setAccessToken('5791e72126494efa9ca3037e8cc03591');
  if (localStorage.getItem('token')) {
    spotifyApi.setAccessToken(localStorage.getItem('token'));
  }
  spotifyApi.getMyTopArtists()
    .then(function (data) {
      console.log('Top Artists', data.items);
    }, function (err) {
      console.error(err);
    });
    
  return (
    <div>Artists</div>
  )
}

export default Artists