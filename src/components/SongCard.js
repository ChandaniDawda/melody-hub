import { useRef } from "react";

function SongCard({ title, artist, album, image, preview }) {
  const audioRef = useRef(null);

  const playAudio = () =>{
    audioRef.current.play();
  };

  const pauseAudio = () =>{
    audioRef.current.pause();
  };

  return (
    <div className="song-card bg-stone-200 rounded-lg shadow-md p-4 w-64">
     
     <img src={image} 
          alt={title}
    className="rounded-md mb-3"
  />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{artist}</p>
      <p className="text-sm text-gray-800">{album}</p>

      <div className= "mt-3 flex gap">
         <button 
             onClick={playAudio}
             className="mt-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" >
             Play
         </button>
      
        <button
            onClick={pauseAudio} 
            className="mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" >
           Pause
        </button>
      </div>
      <audio ref={audioRef} src={preview} />  
    </div>
  );
}

export default SongCard;
