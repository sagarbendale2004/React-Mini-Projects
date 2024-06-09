function Navbar() {
  return (
    <div className="px-40 py-5 flex justify-between bg-slate-900 text-gray-400">
      <div>
        <h1 className="text-3xl font-mono">NetFlix</h1>
      </div>
      <ul className="flex gap-8 justify-center align-middle">
        <li className="font-mono text-2xl text-gray-400">Home</li>
        <li className="font-mono text-2xl text-gray-400">About</li>
        <li className="font-mono text-2xl text-gray-400">Services</li>
        <li className="font-mono text-2xl text-gray-400">Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
