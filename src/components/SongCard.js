import { useRef } from "react";

function SongCard({ title, artist, album, image, preview, currentAudio, setCurrentAudio  }) {
  
  const audioRef = useRef(null);

  const handlePlay = () => {

    // stop previous audio
    if (currentAudio && currentAudio !== audioRef.current) {
      currentAudio.pause();
    }

    // play current audio
    audioRef.current.play();

    // update current audio
    setCurrentAudio(audioRef.current);
  };

   const handlePause = () => {
    audioRef.current.pause();
  };
  
  return (
    <div className="song-card bg-stone-200 rounded-lg shadow-md p-4 w-64">
     
     <img src={image} 
          alt={title}
    className="w-full h-40 object-cover rounded-lg"
  />
      <h3 className="text-lg font-semibold mt-3 text-black">{title}</h3>
      <p className="text-gray-600">{artist}</p>
      <p className="text-sm text-gray-800">{album}</p>
      <audio controls className="mt-3 w-full">
        <source src={preview} type="audio/mpeg" />
      </audio>

      <div className= "mt-3 flex gap">
         <button 
             onClick={handlePlay}
             className="mt-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" >
             Play
         </button>
      
        <button
            onClick={handlePause} 
            className="mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" >
           Pause
        </button>
      </div>
      <audio ref={audioRef} src={preview} />  
    </div>
  );
}

export default SongCard;

