function Navbar() {
    return (
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Kalingu's Portfolio</h1>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  