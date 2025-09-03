function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold text-red-600">Itachi Uchiha</h2>
          <p className="text-sm">A tragic hero who lived in the shadows to protect the light.</p>
        </div>

        {/* Middle */}
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-red-600">About</a>
          <a href="#powers" className="hover:text-red-600">Powers</a>
          <a href="#timeline" className="hover:text-red-600">Timeline</a>
          <a href="#gallery" className="hover:text-red-600">Gallery</a>
          <a href="#quotes" className="hover:text-red-600">Quotes</a>
        </div>

        {/* Right Side */}
        <div className="text-center md:text-right text-sm">
          <p>&copy; {new Date().getFullYear()} | Dedicated to <span className="text-red-600">Blen</span> from Tommy</p>
          <p className="italic text-xs">“Even the strongest opponents always have a weakness.”</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
