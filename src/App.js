import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SongCard from "./components/SongCard";

function App() {

  const [songs, setSongs] = useState([]);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

 useEffect(() => {
  fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music`)
    .then((res) => res.json())
    .then((data) => {
      setSongs(data.results);
    })
    .catch((err) => console.log("Error:", err));
}, [query]);

  return (
    <div>
      <Navbar onSearch={setQuery} /> <div className="p-4 flex gap-2">
      <input
        type="text"
        placeholder="Search songs..."
        className="border p-2 rounded w-80"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
       onClick={() => {
  if (searchTerm.trim() !== "") {
    setQuery(searchTerm);
  }
}}
      >
        Search
      </button>
    </div>



      <div className="flex flex-wrap gap-6 p-6">
        {songs?.map((song, index) => (
          <SongCard 
            key={index}
            title={song.trackName}
            artist={song.artistName}
            album={song.collectionName}
            image={song.artworkUrl100}
            preview={song.previewUrl} 
          />
        ))}
      </div>

    </div>
  );
}

export default App;