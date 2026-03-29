function Navbar() {
  return (
    <div className="navbar bg-black text-white p-4 flex justify-between items-center shadow-lg ">
      <h2 className="text-xl font-bold tracking-wide cursor-pointer hover:text-gray-300">🎵 Melody Hub</h2>
        <div className="nav-links flex gap-6 items-center">
            <span className="cursor-pointer hover:text-gray-400">Home</span>
            <span className="cursor-pointer hover:text-gray-400">Playlist</span>
            <span className="cursor-pointer hover:text-gray-400">Search</span>
        </div>
    </div>
  );
}

export default Navbar;