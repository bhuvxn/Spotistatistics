import React from 'react'
const Artists = () => {
  var Spotify = require('spotify-web-api-js');
  var spotifyApi = new Spotify();
  if (localStorage.getItem('token')) {
    spotifyApi.setAccessToken(localStorage.getItem('token'));
  }
  const [artists, setArtists] = React.useState([]);
  spotifyApi.getMyTopArtists()
    .then(function (data) {
      console.log('Top Artists', data.items);
      setArtists(data.items);
    }, function (err) {
      console.error(err);
    });
    
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
    {artists.map((artist) => (
      <div key={artist.id} className="bg-white rounded-lg shadow p-4">
        <img
          src={artist.images[0].url}
          alt={artist.name}
          className="h-48 w-full object-cover rounded-lg mb-4"
        />
        <p className="text-lg font-medium">{artist.name}</p>
      </div>
    ))}
  </div>
  )
}

export default Artists