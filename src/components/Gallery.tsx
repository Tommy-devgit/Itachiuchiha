import { useState } from "react";

type GalleryImage = {
  img: string;
  caption: string;
};

function Gallery({ images }: { images: GalleryImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-20 flex flex-col items-center gap-8 px-6 bg-black">
      <h2 className="text-3xl font-bold text-red-600">Gallery</h2>
      <p className="max-w-3xl text-center text-gray-300">
        A glimpse into the life of <span className="text-red-500 font-semibold">Itachi Uchiha</span>. 
        Click an image to enlarge.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {images.map((item, i) => (
          <div
            key={i}
            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => setSelectedIndex(i)}
          >
            <img
              src={item.img}
              alt={`Itachi scene ${i + 1}`}
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center p-4">
              <p className="text-sm text-gray-200 text-center">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative max-w-3xl w-full flex flex-col items-center">
            <img
              src={images[selectedIndex].img}
              alt="Selected Itachi"
              className="w-full rounded-lg shadow-2xl"
            />
            <p className="text-gray-300 text-center mt-4">{images[selectedIndex].caption}</p>

            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-600"
              onClick={() => setSelectedIndex(null)}
            >
              ✕
            </button>

            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl font-bold hover:text-red-600"
              onClick={prevImage}
            >
              ‹
            </button>

            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl font-bold hover:text-red-600"
              onClick={nextImage}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
