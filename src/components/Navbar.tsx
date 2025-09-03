import logo from "../assets/images/features/mangekyo-sharingan-3840x2160-10721.png"

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950 shadow-2xl text-white z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex flex-row gap-3 items-center font-bold text-lg">
          <img src={logo} alt="Itachi Logo" id="logo" className="w-8 h-8" />
          <a href="#hero" className="hover:text-red-600">ITACHI UCHIHA</a>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><a href="#about" className="hover:text-red-600 transition">About</a></li>
          <li><a href="#powers" className="hover:text-red-600 transition">Powers</a></li>
          <li><a href="#timeline" className="hover:text-red-600 transition">Timeline</a></li>
          <li><a href="#gallery" className="hover:text-red-600 transition">Gallery</a></li>
          <li><a href="#quotes" className="hover:text-red-600 transition">Quotes</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
