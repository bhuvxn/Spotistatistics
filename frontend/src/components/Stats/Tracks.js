import React from 'react'

const Tracks = ({Statistic, spotifyApi}) => {

 
  //get user top tracks
  const [TopTracks, setTopTracks] = React.useState([]);
  if (localStorage.getItem('token') && TopTracks.length === 0) {
    spotifyApi.getMyTopTracks().then(
      function (data) {
        console.log("Top Tracks", data.items);
        setTopTracks(data.items);
      },
      function (err) {
        console.error(err);
      }
    )}
    if (Statistic !== "tracks") {
      return <div></div>;
    }

  return (
    <div className="bg-black">
      <div className="text-white text-4xl font-mono pt-3 text- text-center">
        {" "}
        Your Top Tracks
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {TopTracks.map((track) => (
          <div key={track.id} className="bg-white rounded-lg shadow p-4">
            <img

              src={track.album.images[0].url}
              alt={track.name}
              className="h-48 w-full object-cover rounded-lg mb-4"
            />
            <p className="text-lg font-medium">{track.name}</p>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default Tracks