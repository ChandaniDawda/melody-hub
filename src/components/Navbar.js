function Navbar() {
  return (
    <div className="navbar bg-zinc-900 px-6 py-4 flex justify-between items-center shadow-md">
      <h2 className="text-xl font-bold text-green-500">🎵 Melody Hub</h2>
        <div className="nav-links flex gap-6 items-center">
            <button className="cursor-pointer hover:text-gray-400">Home</button>
            <button className="cursor-pointer hover:text-gray-400">Playlist</button>
            <button className="cursor-pointer hover:text-gray-600 rounded-md p-2 text-black bg-white">Login</button>
            <button className="cursor-pointer hover:text-gray-600 rounded-md p-2 text-black bg-white">Sign Up</button>
        </div>
    </div>
  );
}

export default Navbar;