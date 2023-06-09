import React from "react";
const Artists = ({Statistic, spotifyApi}) => {
  if (localStorage.getItem("token")) {
    window.history.pushState(
      {},
      document.title,
      "/" + window.location.pathname.split("/")[1]
    );
  }

  
  //state variables for data from api
  const [artists, setArtists] = React.useState([]);

  if (localStorage.getItem("token") && artists.length === 0) {
   spotifyApi.getMyTopArtists().then(
    function (data) {
      console.log("Top Artists", data.items);
      setArtists(data.items);
    },
    function (err) {
      console.error(err);
    }
  )}

  //if tracks is selected, return nothing
  if (Statistic === "tracks") {
    return <div></div>;
  }
  return (

    <div className="bg-black">
      <div className="text-white text-4xl font-mono pt-3 text- text-center">
        {" "}
        Your Top Artists
      </div>
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
    </div>
  );
};

export default Artists;
