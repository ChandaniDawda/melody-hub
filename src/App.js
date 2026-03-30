import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SongCard from "./components/SongCard";

function App() {

  const [songs, setSongs] = useState([]);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentAudio, setCurrentAudio] = useState(null);
  const [artists, setArtists] = useState([]);

 useEffect(() => {
  fetch("https://itunes.apple.com/search?term=top songs&limit=20")
    .then((res) => res.json())
    .then((data) => {
      setSongs(data.results);
    })
    .catch((err) => console.log("Error:", err));
}, [query]);

 useEffect(() => {
  fetch("https://itunes.apple.com/search?term=artists&entity=musicArtist&limit=10")
    .then((res) => res.json())
    .then((data) => {
      setArtists(data.results);
    }).catch((err) => console.log("Error:", err));
}, [query]);  

  return (
    <div className=" app bg-black min-h-screen text-white">

      <Navbar onSearch={setQuery} /> <div className="p-4 flex gap-2">
      <input
        type="text"
        placeholder="Search songs..."
        className="text-gray-700 border p-2 rounded w-80"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

       
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => {
        if (searchTerm.trim() !== "") {
        setQuery(searchTerm);
          }
        }}>
        Search
      </button>
    </div>

       <div className="px-6 py-8">
       <h1 className="text-3xl font-bold">
          Welcome to Melody Hub 🎵
       </h1>
       <p className="text-gray-400 mt-2">
             Search and play your favorite songs anytime
       </p>
      </div>


       <h2 className="text-xl font-semibold px-6">Trending Songs</h2>

      <div className="flex flex-wrap gap-6 p-6">
        {songs?.map((song, index) => (
          <SongCard 
            key={index}
            title={song.trackName}
            artist={song.artistName}
            album={song.collectionName}
            image={song.artworkUrl100}
            preview={song.previewUrl} 
            currentAudio={currentAudio}
            setCurrentAudio={setCurrentAudio}
          />
        ))}
        {/* ✅ NEW: Trending Artists Section */}
        
<h2 className="text-xl font-semibold px-6 mt-10">
  Trending Artists 🎤
</h2>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-6">

  {artists.map((artist, index) => (
    
    <div 
      key={index}
      className="bg-zinc-900 p-4 rounded-xl text-center hover:scale-105 transition"
    >
      {/* ✅ Artist Image (placeholder since API doesn’t give image) */}
      <div className="w-20 h-20 mx-auto bg-gray-700 rounded-full flex items-center justify-center text-xl">
        🎤
      </div>

      {/* ✅ Artist Name */}
      <h3 className="mt-3 font-semibold">
        {artist.artistName}
      </h3>
    </div>

  ))}

</div>

      </div>

    </div>
  );
}

export default App;